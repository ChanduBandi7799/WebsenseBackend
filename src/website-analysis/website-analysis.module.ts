import { Module } from '@nestjs/common';
import { WebsiteAnalysisController } from './website-analysis.controller';
import { WebsiteAnalysisService } from './website-analysis.service';

@Module({
  controllers: [WebsiteAnalysisController],
  providers: [WebsiteAnalysisService]
})
export class WebsiteAnalysisModule {}