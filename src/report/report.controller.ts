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
import { ReportType } from 'src/data';
import { CreateReportDto } from 'src/DTOs/createReport.dto';
import { ResponseReportDto } from 'src/DTOS/responseReport.dto';
import { UpdateReportDto } from 'src/DTOs/updateReport.dto';
import { ReportService } from './report.service';
  
  
  @Controller('report/:type')
  export class ReportController {
    constructor(readonly AppService: ReportService) {}
  
    @Get()
    getAllIReports(
      @Param('type', new ParseEnumPipe(ReportType)) type: ReportType,
    ): ResponseReportDto[] {
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
    ): ResponseReportDto {
      return this.AppService.createReport(type, body);
    }
  
    @Put('/:id')
    updatePostById(
      @Param('id', ParseUUIDPipe) id: string,
      @Body() body: UpdateReportDto,
    ): ResponseReportDto | null {
      return this.AppService.updateReportById(id, body);
    }
  
    @Delete('/:id')
    deletePostById(@Param('id', ParseUUIDPipe) id): ResponseReportDto | null {
      return this.AppService.deleteReportById(id);
    }
  }
  