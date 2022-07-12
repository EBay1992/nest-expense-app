import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ParseUUIDPipe,
  ParseEnumPipe,
} from '@nestjs/common';

import { Report, ReportType } from './data';
import { AppService } from './app.service';
import { CreateReportDto } from './DTOs/createReport.dto';
import { UpdateReportDto } from './DTOs/updateReport.dto';

@Controller('report/:type')
export class AppController {
  constructor(readonly AppService: AppService) {}

  @Get()
  getAllIReports(
    @Param('type', new ParseEnumPipe(ReportType)) type: ReportType,
  ): Report[] {
    return this.AppService.getAllIReports(type);
  }

  @Get('/:id')
  getReportById(@Param('id', ParseUUIDPipe) id: string): any {
    return this.AppService.getReportById(id);
  }

  @Post()
  createReport(
    @Param('type', new ParseEnumPipe(ReportType)) type: ReportType,
    @Body() body: CreateReportDto,
  ): Report {
    return this.AppService.createReport(type, body);
  }

  @Put('/:id')
  updatePostById(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: UpdateReportDto,
  ): Report | null {
    return this.AppService.updateReportById(id, body);
  }

  @Delete('/:id')
  deletePostById(@Param('id', ParseUUIDPipe) id): Report | null {
    return this.AppService.deleteReportById(id);
  }
}
