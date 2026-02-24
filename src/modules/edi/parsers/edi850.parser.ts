import { Injectable, Logger } from '@nestjs/common';

export interface ParsedEDI {
  header: {
    poNumber: string;
    poDate: string;
    controlNumber: string;
    currency: string;
    vendorId: string;         // CNPJ (14 dígitos)
    vendorInternalId: string; // Código interno (REF*VR)
    vendorName: string;
  };
  parties: {
    buyerId: string;          // CNPJ (14 dígitos)
    buyerName: string;
    shipToLocation: string;
    shipToAddress: string;
    shipToCity: string;
    shipToState: string;
    shipToZip: string;
    shipToCountry: string;
  };
  items: Array<{
    lineNumber: number;
    quantity: number;
    unitPrice: number;
    buyerPartNumber: string;
    vendorPartNumber: string;
    description: string;
    upc?: string;
    deliveryDate?: string;
    grossWeight?: number;
    netWeight?: number;
  }>;
  totals: {
    totalLineItems: number;
    totalQuantity: number;
  };
}

@Injectable()
export class EDI850Parser {
  private readonly logger = new Logger(EDI850Parser.name);

  parse(ediContent: string): ParsedEDI {
    const parsed: ParsedEDI = {
      header: {
        poNumber: '',
        poDate: '',
        controlNumber: '',
        currency: '',
        vendorId: '',
        vendorInternalId: '',
        vendorName: ''
      },
      parties: {
        buyerId: '',
        buyerName: '',
        shipToLocation: '',
        shipToAddress: '',
        shipToCity: '',
        shipToState: '',
        shipToZip: '',
        shipToCountry: ''
      },
      items: [],
      totals: {
        totalLineItems: 0,
        totalQuantity: 0
      }
    };

    // 1. LIMPEZA E PREPARAÇÃO
    const raw = ediContent.replace(/[\n\r]+/g, '');

    // -----------------------------------------------------------------
    // 2. HEADER E PARTIES
    // -----------------------------------------------------------------

    // === ISA Segment (Envelope de Intercâmbio) ===

    // ISA06: Sender ID (Buyer/Comprador) - Pula 5 campos, pega o 6º
    // Ajuste: .substring(0, 14) para garantir o CNPJ correto
    const isaBuyerMatch = raw.match(/ISA\x1e(?:[^\x1e]*\x1e){5}([^\x1e]+)/);
    if (isaBuyerMatch) {
      parsed.parties.buyerId = isaBuyerMatch[1].trim().substring(0, 14);
    }

    // ISA08: Receiver ID (Vendor/Fornecedor) - Pula 7 campos, pega o 8º
    // Ajuste: .substring(0, 14) para garantir o CNPJ correto
    const isaVendorMatch = raw.match(/ISA\x1e(?:[^\x1e]*\x1e){7}([^\x1e]+)/);
    if (isaVendorMatch) {
      parsed.header.vendorId = isaVendorMatch[1].trim().substring(0, 14);
    }

    // ISA13: Control Number - Pula 12 campos, pega o 13º
    const isaControlMatch = raw.match(/ISA\x1e(?:[^\x1e]*\x1e){12}([^\x1e]+)/);
    if (isaControlMatch) {
      parsed.header.controlNumber = isaControlMatch[1].trim();
    }

    // Header (BEG)
    const begMatch = raw.match(/BEG\x1e[^\x1e]*\x1e[^\x1e]*\x1e([^\x1e]+)\x1e[^\x1e]*\x1e(\d{8})/);
    if (begMatch) {
      parsed.header.poNumber = begMatch[1].trim();
      parsed.header.poDate = this.formatDate(begMatch[2].trim());
    }

    // Currency (CUR)
    const curMatch = raw.match(/CUR\x1e[^\x1e]+\x1e([A-Z]{3})/);
    if (curMatch) {
      parsed.header.currency = curMatch[1].trim();
    } else {
      parsed.header.currency = 'BRL';
    }

    // Vendor Internal ID (REF*VR)
    const vendorRefMatch = raw.match(/REF\x1eVR\x1e([^\x1e]+)/);
    if (vendorRefMatch) parsed.header.vendorInternalId = vendorRefMatch[1].trim();

    // Vendor Name
    if (raw.includes('ALFACOMEX')) {
      const n1VendorMatch = raw.match(/N1\x1e[^\x1e]*\x1e(ALFACOMEX[^\x1e]+)/);
      parsed.header.vendorName = n1VendorMatch
        ? n1VendorMatch[1].trim()
        : 'ALFACOMEX COM.LMP. E EXP. DE PROD.';
    }

    // Buyer Name
    const n1BuyerMatch = raw.match(/N1\x1e(?:DC|ST)\x1e(.*?)(?=(N2|N3|N4|PER|REF)\x1e|$)/);
    if (n1BuyerMatch) parsed.parties.buyerName = n1BuyerMatch[1].trim();

    // Endereço (N3)
    const n3Match = raw.match(/N3\x1e(.*?)(?=(N4|PER|REF|PO1)\x1e|$)/);
    if (n3Match) parsed.parties.shipToAddress = n3Match[1].trim();

    // === N4 (Cidade, Estado, Pais) ===
    const n4Match = raw.match(/N4\x1e(.*?)(?=(PER|REF|PO1|CTT|BEG)\x1e|$)/);

    if (n4Match) {
      const parts = n4Match[1].split('\x1e');
      if (parts.length > 0) parsed.parties.shipToCity = parts[0].trim().replace(/\uFFFD/g, '');
      if (parts.length > 2) parsed.parties.shipToZip = parts[2].trim();
      if (parts.length > 3) parsed.parties.shipToCountry = parts[3].trim();
      if (parts.length > 4) parsed.parties.shipToState = parts[4].trim();
      if (!parsed.parties.shipToState && parts.length > 5) parsed.parties.shipToState = parts[5].trim();
      parsed.parties.shipToLocation = parsed.parties.shipToCity;
    }

    // -----------------------------------------------------------------
    // 3. ITEMS
    // -----------------------------------------------------------------
    const itemBlocks = raw.split(/PO1\x1e/);
    itemBlocks.shift();

    for (const block of itemBlocks) {
      const elements = block.split('\x1e');
      const originalLineNum = parseInt(elements[0]);
      if (isNaN(originalLineNum)) continue;

      const quantity = parseFloat(elements[1]) || 0;
      const unitPrice = parseFloat(elements[3]) || 0;
      let buyerPart = '';
      let vendorPart = '';

      for (let i = 4; i < elements.length; i++) {
        if (elements[i] === 'BP') buyerPart = elements[i + 1];
        if (elements[i] === 'VP') vendorPart = elements[i + 1];
      }

      if (vendorPart) vendorPart = vendorPart.replace(/[A-Z]+$/, '').replace(/PO4$/, '').trim();

      // === PESOS (PO4) ===
      let grossWeight = 0;
      let netWeight = 0;
      const po4Matches = [...block.matchAll(/PO4\x1e(?:[^\x1e]*\x1e){4}([GN])\x1e([\d.]+)/g)];
      for (const match of po4Matches) {
        const type = match[1];
        const value = parseFloat(match[2]);
        if (!isNaN(value)) {
          if (type === 'G') grossWeight = value;
          if (type === 'N') netWeight = value;
        }
      }

      // === UPC e Data ===
      let upc = '';
      let deliveryDate = '';
      const numericMatches = block.match(/\d{8,14}/g) || [];
      for (const num of numericMatches) {
        if (num.length === 8 && num.startsWith('202')) {
          deliveryDate = this.formatDate(num);
        } else if ((num.length === 12 || num.length === 13) && num !== vendorPart && num !== buyerPart) {
          upc = num;
        }
      }

      // === Descrição ===
      let description = '';
      if (buyerPart) {
        const descRegex = new RegExp(`${escapeRegExp(buyerPart)}.*?\\x1e([A-Z0-9\\s\\-\\.\\/]{10,})`, 'i');
        const descMatch = block.match(descRegex);
        if (descMatch) description = descMatch[1].trim();
      }
      if (!description) {
        const pidMatch = block.match(/PID\x1e[^\x1e]*\x1e[^\x1e]*\x1e[^\x1e]*\x1e([^\x1e]+)/);
        if (pidMatch) description = pidMatch[1].trim();
      }
      if (!description) {
        const textSegments = block.split('\x1e').filter(s => s.length > 15 && /[A-Z]/.test(s) && /\s/.test(s));
        const candidate = textSegments.find(s => !s.includes('ALFACOMEX') && !s.includes('Apple'));
        if (candidate) description = candidate.trim();
      }

      parsed.items.push({
        lineNumber: parsed.items.length + 1,
        quantity,
        unitPrice,
        buyerPartNumber: buyerPart,
        vendorPartNumber: vendorPart,
        description,
        upc,
        deliveryDate,
        grossWeight: grossWeight || undefined,
        netWeight: netWeight || undefined
      });
    }

    parsed.totals.totalLineItems = parsed.items.length;
    parsed.totals.totalQuantity = parsed.items.reduce((acc, item) => acc + item.quantity, 0);

    return parsed;
  }

  private formatDate(dateStr: string): string {
    if (dateStr && dateStr.length === 8) {
      return `${dateStr.substring(0, 4)}-${dateStr.substring(4, 6)}-${dateStr.substring(6, 8)}`;
    }
    return dateStr;
  }
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}