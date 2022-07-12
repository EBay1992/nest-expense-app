import { Exclude, Expose } from 'class-transformer';
import { ReportType } from 'src/data';


export class ResponseReportDto {
  id: string;
  source: string;
  amount: number;

  @Exclude()  //* delete this 'created_at' property and at expose part we will add a new property called 'createdAt'
  created_at: Date;

  @Exclude()
  updated_at: Date;
  type: ReportType;

  @Expose({name:'createdAt'})
  transformCreateAt(): Date { //change the created_at to createdAt
    return this.created_at;
  }

  constructor(partial: Partial<ResponseReportDto>) {
    Object.assign(this, partial);
  }
}