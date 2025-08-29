import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { WebsiteAnalysisModule } from './website-analysis/website-analysis.module';

@Module({
  imports: [DashboardModule, WebsiteAnalysisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
