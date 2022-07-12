import { Injectable } from '@nestjs/common';
import { data, Report, ReportType } from './data';
import { v4 as uuid } from 'uuid';
import { UpdateReportDto } from './DTOs/updateReport.dto';
import { CreateReportDto } from './DTOs/createReport.dto';

@Injectable()
export class AppService {
  getAllIReports(type: string): Report[] {
    const reportType =
      type === ReportType.INCOME ? ReportType.INCOME : ReportType.EXPENSE;

    return data.filter((report) => report.type === reportType);
  }

  getReportById(id: string): Report | null {
    const filteredReports = data.find((report) => report.id === id);

    return filteredReports;
  }

  createReport(type: string, body: CreateReportDto): Report {
    const newReport = {
      id: uuid(),
      type: type === ReportType.INCOME ? ReportType.INCOME : ReportType.EXPENSE,
      source: body.source,
      amount: body.amount,
      created_at: new Date(),
      updated_at: new Date(),
    };

    data.push(newReport);

    return newReport;
  }

  updateReportById(id: string, body: UpdateReportDto): Report | null {
    const chosenReportId = data.findIndex((r) => r.id === id);

    if (chosenReportId !== -1) {
      const updatedReport = {
        ...data[chosenReportId],
        ...body,
        updated_at: new Date(),
      };

      data.splice(chosenReportId, 1, updatedReport);
      return updatedReport;
    } else {
      return;
    }
  }

  deleteReportById(id: string) {
    const foundReportIndex = data.findIndex((r) => r.id === id);

    if (foundReportIndex !== -1) {
      const report = data[foundReportIndex];
      data.splice(foundReportIndex, 1);

      return report;
    }

    return null;
  }
}
