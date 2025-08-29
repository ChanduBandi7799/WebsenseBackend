import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { WebsiteAnalysisService } from './website-analysis.service';

@Controller('analyze')
export class WebsiteAnalysisController {
  constructor(private readonly service: WebsiteAnalysisService) {}

  @Post('lighthouse')
  async analyzeLighthouse(@Body() data: { url: string }) {
    return this.service.runLighthouseAnalysis(data.url);
  }

  @Get('test-lighthouse')
  async testLighthouse() {
    // Test with a simple, reliable website
    return this.service.runLighthouseAnalysis('https://www.google.com');
  }

  @Get('test-website/:url')
  async testWebsite(@Param('url') url: string) {
    // Test if a website is accessible
    try {
      const https = require('https');
      const urlToTest = url.startsWith('http') ? url : `https://${url}`;
      
      return new Promise((resolve, reject) => {
        const req = https.get(urlToTest, (res) => {
          resolve({
            url: urlToTest,
            statusCode: res.statusCode,
            accessible: res.statusCode >= 200 && res.statusCode < 400,
            message: `Website responded with status code: ${res.statusCode}`
          });
        });
        
        req.on('error', (error) => {
          resolve({
            url: urlToTest,
            statusCode: null,
            accessible: false,
            message: `Website is not accessible: ${error.message}`
          });
        });
        
        req.setTimeout(10000, () => {
          req.destroy();
          resolve({
            url: urlToTest,
            statusCode: null,
            accessible: false,
            message: 'Website connection timed out after 10 seconds'
          });
        });
      });
    } catch (error) {
      return {
        url: url,
        statusCode: null,
        accessible: false,
        message: `Error testing website: ${error.message}`
      };
    }
  }

  @Post('tech-stack')
  async analyzeTechStack(@Body() data: { url: string }) {
    return this.service.analyzeTechStack(data.url);
  }

  @Get('test-tech-stack')
  async testTechStack() {
    // Test with a simple, reliable website
    return this.service.analyzeTechStack('https://www.google.com');
  }

  @Post('security-headers')
  async analyzeSecurityHeaders(@Body() data: { url: string }) {
    return this.service.analyzeSecurityHeaders(data.url);
  }

  @Get('test-security-headers')
  async testSecurityHeaders() {
    // Test with a simple, reliable website
    return this.service.analyzeSecurityHeaders('https://www.google.com');
  }

  @Post('mobile-friendly')
  async analyzeMobileFriendly(@Body() data: { url: string }) {
    return this.service.analyzeMobileFriendly(data.url);
  }

  @Get('test-mobile-friendly')
  async testMobileFriendly() {
    // Test with a simple, reliable website
    return this.service.analyzeMobileFriendly('https://www.google.com');
  }

  @Post('core-web-vitals')
  async analyzeCoreWebVitals(@Body() data: { url: string }) {
    return this.service.analyzeCoreWebVitals(data.url);
  }

  @Get('test-core-web-vitals')
  async testCoreWebVitals() {
    // Test with a simple, reliable website
    return this.service.analyzeCoreWebVitals('https://www.google.com');
  }
}