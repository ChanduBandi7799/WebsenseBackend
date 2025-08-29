import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
  getInfo(): string {
    return 'Hello World!';
  }

  async getDashboardData() {
    return {
      totalAnalyses: 0,
      recentAnalyses: [],
      systemStatus: 'operational',
      lastUpdated: new Date().toISOString()
    };
  }
}
