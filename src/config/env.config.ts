import { plainToInstance } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, validateSync } from 'class-validator';

export class EnvironmentVariables {
  @IsString() @IsNotEmpty()
  INTEGRATION_SOURCE: string;

  @IsString() @IsNotEmpty()
  INTEGRATION_ORDER: string;

  @IsNumber() @IsNotEmpty()
  ORDER_PERCENTUAL_DISCOUNT: number;

  @IsNumber() @IsNotEmpty()
  ORDER_VALUE_FREIGHT_INVOICE: number;

  @IsNumber() @IsNotEmpty()
  ORDER_EXPENSES_VALUE: number;

  @IsNumber() @IsNotEmpty()
  ORDER_SALE_PERCENTAGE: number;

  @IsNumber() @IsNotEmpty()
  ORDER_SALE_CONDITION: number;

  @IsNumber() @IsNotEmpty()
  ORDER_LOAD_NUMBER: number;

  @IsString() @IsNotEmpty()
  ORDER_LOAD_TYPE: string;

  @IsString() @IsNotEmpty()
  ORDER_PACKAGING_TYPE: string;

  @IsString() @IsNotEmpty()
  ORDER_ORIGIN: string;

  @IsString() @IsNotEmpty()
  ORDER_IMPORT_RECONCILIATION: string;

  @IsString() @IsNotEmpty()
  ORDER_USE_TYPE_SALE_10_CFOP: string;

  @IsString() @IsNotEmpty()
  ORDER_POSITION: string;

  @IsString() @IsNotEmpty()
  ORDER_GROUPING: string;

  @IsNumber() @IsNotEmpty()
  RCA_ID: number;

  @IsNumber() @IsNotEmpty()
  SQUARE_COD: number;

  @IsNumber() @IsNotEmpty()
  PAYMENT_PLAN_COD: number;

  @IsString() @IsNotEmpty()
  PAYMENT_PLAN_STATUS: string;

  @IsNumber() @IsNotEmpty()
  ISSUER_REGISTRATION: number;

  @IsString() @IsNotEmpty()
  FINANCIAL_BRANCH: string;

  @IsNumber() @IsNotEmpty()
  SUPPLIER_CODE: number;

  @IsString() @IsNotEmpty()
  SUPPLIER_COD_COB: string;

  @IsString() @IsNotEmpty()
  PROVIDER_TYPE_RESALE: string;
}

export function validate(config: Record<string, unknown>) {
  const validated = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validated);

  if (errors.length > 0) {
    throw new Error(`❌ Variáveis de ambiente inválidas:\n${errors.toString()}`);
  }

  return validated;
}