import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsOptional,
} from 'class-validator';

export class UpdateReportDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  source: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  amount?: number;
}
