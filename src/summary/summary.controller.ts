import { Controller, Get } from '@nestjs/common';
import { SummaryService } from './summary.service';

@Controller('summary')
export class SummaryController {
    constructor(readonly summaryService: SummaryService) { }
    @Get()
    getSummary(): number {
        return this.summaryService.getSummary()
    }
}
