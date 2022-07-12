import { Injectable } from '@nestjs/common';
import { data, Report, ReportType } from './data';
import { v4 as uuid } from 'uuid';
import { UpdateReportDto } from './DTOs/updateReport.dto';
import { CreateReportDto } from './DTOs/createReport.dto';
import { ResponseReportDto } from './DTOS/responseReport.dto';

@Injectable()
export class AppService {
  getAllIReports(type: string): ResponseReportDto[] {
    const reportType =
      type === ReportType.INCOME ? ReportType.INCOME : ReportType.EXPENSE;

    return data.filter((report) => report.type === reportType).map((report) => new ResponseReportDto(report));
  }

  getReportById(id: string): ResponseReportDto | null {
    const filteredReports = data.find((report) => report.id === id);

    return  new ResponseReportDto(filteredReports);
  }

  createReport(type: string, body: CreateReportDto): ResponseReportDto {
    const newReport = {
      id: uuid(),
      type: type === ReportType.INCOME ? ReportType.INCOME : ReportType.EXPENSE,
      source: body.source,
      amount: body.amount,
      created_at: new Date(),
      updated_at: new Date(),
    };

    data.push(newReport);

    return new ResponseReportDto(newReport);
  }

  updateReportById(id: string, body: UpdateReportDto): ResponseReportDto | null {
    const chosenReportId = data.findIndex((r) => r.id === id);

    if (chosenReportId !== -1) {
      const updatedReport = {
        ...data[chosenReportId],
        ...body,
        updated_at: new Date(),
      };

      data.splice(chosenReportId, 1, updatedReport);
      return new ResponseReportDto(updatedReport);
    } 

      return null;
  }

  deleteReportById(id: string): ResponseReportDto | null {
    const foundReportIndex = data.findIndex((r) => r.id === id);

    if (foundReportIndex !== -1) {
      const report = data[foundReportIndex];
      data.splice(foundReportIndex, 1);

      return new ResponseReportDto(report);
    }

    return null;
  }
}
