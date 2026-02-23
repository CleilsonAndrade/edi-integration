import { Injectable } from '@nestjs/common';

export interface ParsedEDI {
  header: {
    poNumber: string;
    poDate: string;
    controlNumber: string;
    currency: string;
    projectNumber?: string;
    serialNumber?: string;
    vendorId: string;
    vendorName: string;
  };
  parties: {
    buyerId: string;
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
    grossWeight?: number;
    netWeight?: number;
    deliveryDate?: string;
    plantCode?: string;
  }>;
  totals: {
    totalLineItems: number;
    totalQuantity: number;
  };
}

@Injectable()
export class EDI850Parser {
  parse(ediContent: string): ParsedEDI {
    const lines = ediContent.split('\n');
    const parsed: ParsedEDI = {
      header: {} as any,
      parties: {} as any,
      items: [],
      totals: {} as any
    };

    let currentItem: any = null;

    for (const line of lines) {
      const segment = line.substring(0, 3);

      switch (segment) {
        case 'ISA':
          parsed.header.controlNumber = line.substring(105, 114).trim();
          break;

        case 'BEG':
          const begData = line.substring(3);
          parsed.header.poNumber = begData.substring(7, 17).trim();
          parsed.header.poDate = begData.substring(22, 30).trim();
          break;

        case 'CUR':
          parsed.header.currency = line.substring(7, 11).trim();
          break;

        case 'REF':
          const refType = line.substring(3, 5);
          const refValue = line.substring(5).trim();

          if (refType === '6P') parsed.header.projectNumber = refValue;
          else if (refType === '8M') parsed.header.serialNumber = refValue;
          else if (refType === 'VR') {
            parsed.header.vendorId = refValue.substring(0, 9);
            parsed.header.vendorName = refValue.substring(9);
          }
          else if (refType === 'PE' && currentItem) currentItem.plantCode = refValue;
          break;

        case 'N1B':
          parsed.parties.buyerId = line.substring(5).trim();
          break;

        case 'N1S':
          parsed.parties.buyerName = line.substring(5).trim();
          break;

        case 'N2 ':
          parsed.parties.shipToLocation = line.substring(3).trim();
          break;

        case 'N3R':
          parsed.parties.shipToAddress = line.substring(3).trim();
          break;

        case 'N4J':
          const n4Data = line.substring(3);
          const parts = n4Data.split(/(\d{5}-\d{3})/);
          parsed.parties.shipToCity = parts[0]?.trim();
          parsed.parties.shipToZip = parts[1];
          const remaining = parts[2];
          parsed.parties.shipToCountry = remaining?.substring(0, 2);
          parsed.parties.shipToState = remaining?.substring(4, 6);
          break;

        case 'PO1':
          // Se já existir um item anterior sendo processado, salva ele na lista antes de começar o novo
          if (currentItem) parsed.items.push(currentItem);

          const po1Data = line.substring(3);

          // Parseia os dados brutos
          const lineNum = parseInt(po1Data.substring(0, 4)); // Ajuste conforme seu layout
          const qtyMatch = po1Data.match(/(\d+)EA/);
          const priceMatch = po1Data.match(/EA([\d.]+)BP/);
          const bpMatch = po1Data.match(/BP([A-Z0-9/]+)PD/);
          const descMatch = po1Data.match(/PD(.+?)VP/);
          const vpMatch = po1Data.match(/VP(\d+)/);

          currentItem = {
            lineNumber: isNaN(lineNum) ? 0 : lineNum, // Proteção extra caso o parse falhe
            quantity: qtyMatch ? parseInt(qtyMatch[1]) : 0,
            unitPrice: priceMatch ? parseFloat(priceMatch[1]) : 0,
            buyerPartNumber: bpMatch ? bpMatch[1] : '',

            // AQUI É O PULO DO GATO:
            // Se houver match, aplica o replace e o trim. Se não, retorna string vazia.
            description: descMatch ? descMatch[1].replace(/[\x00-\x1F\x7F]/g, "").trim() : '',

            vendorPartNumber: vpMatch ? vpMatch[1] : ''
          };
          break;

        case 'PO4':
          if (!currentItem) break;
          const po4Type = line.charAt(3);
          const weightMatch = line.match(/([\d.]+)LB/);

          if (po4Type === 'G' && weightMatch) {
            currentItem.grossWeight = parseFloat(weightMatch[1]);
          } else if (po4Type === 'N' && weightMatch) {
            currentItem.netWeight = parseFloat(weightMatch[1]);
          }
          break;

        case 'MAN':
          if (!currentItem) break;
          const upcMatch = line.match(/UP(\d+)/);
          if (upcMatch) currentItem.upc = upcMatch[1];
          break;

        case 'SCH':
          if (!currentItem) break;
          const dateMatch = line.match(/(\d{8})$/);
          if (dateMatch) currentItem.deliveryDate = dateMatch[1];
          break;

        case 'CTT':
          const cttData = line.substring(3);
          parsed.totals.totalLineItems = parseInt(cttData.substring(0, 1));
          parsed.totals.totalQuantity = parseInt(cttData.substring(1));
          break;
      }
    }

    if (currentItem) parsed.items.push(currentItem);

    return parsed;
  }

  parseDate(dateStr: string): Date {
    const year = parseInt(dateStr.substring(0, 4));
    const month = parseInt(dateStr.substring(4, 6)) - 1;
    const day = parseInt(dateStr.substring(6, 8));
    return new Date(year, month, day);
  }
}