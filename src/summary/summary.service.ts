import { Injectable } from '@nestjs/common';
import { ReportType } from 'src/data';
import { ReportService } from 'src/report/report.service';

@Injectable()
export class SummaryService {
constructor(readonly reportService: ReportService){}

getSummary(){
    const totalExpense = this.reportService.getAllIReports(ReportType.EXPENSE)?.reduce((acc, curr) => acc + curr.amount, 0);
    const totalIncome = this.reportService.getAllIReports(ReportType.INCOME)?.reduce((acc, curr) => acc + curr.amount, 0);

    return totalIncome - totalExpense
    }
}
