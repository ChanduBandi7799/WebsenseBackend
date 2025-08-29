# WebSense Backend

A comprehensive website performance analysis backend that integrates multiple testing tools:

- **Lighthouse**: Comprehensive performance, accessibility, best practices, SEO, and PWA analysis with loading sequence screenshots
- Core Web Vitals (CrUX) via Google API

## Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=3001
FRONTEND_URL=http://localhost:3000

# API Keys (required for Mobile-Friendly Test and CrUX)
GOOGLE_API_KEY=your_google_api_key

# Lighthouse Configuration
LIGHTHOUSE_TIMEOUT=60000
```

### 3. API Keys Setup

#### Google PageSpeed Insights API Key
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the PageSpeed Insights API
4. Create credentials (API Key)
5. Add the API key to your `.env` file

## Running the Application

### Development Mode
```bash
npm run start:dev
```

### Production Mode
```bash
npm run build
npm run start
```

## API Endpoints

### Lighthouse Analysis
```
POST /api/analyze/lighthouse
Body: { "url": "https://example.com" }
```

### Test Endpoints
```
GET /api/analyze/test-lighthouse
```

## Features

### Lighthouse Analysis
- Performance metrics (FCP, LCP, TTI, TBT, CLS)
- Accessibility scoring
- Best practices evaluation
- SEO optimization
- PWA assessment
- Resource analysis
- Performance suggestions
- **Loading sequence screenshots** - Visual loading progress over time

### PageSpeed Insights
- Google's official performance metrics
- Core Web Vitals
- Performance optimization suggestions
- Mobile and desktop analysis

## Data Structure

### Lighthouse Response with Screenshots
```json
{
  "url": "https://example.com",
  "score": 85,
  "categories": {
    "performance": 85,
    "accessibility": 92,
    "best-practices": 78,
    "seo": 95,
    "pwa": 45
  },
  "screenshots": [
    {
      "id": 0,
      "timestamp": 0,
      "data": "base64_encoded_image_data",
      "width": 1200,
      "height": 800,
      "description": "Screenshot at 0ms"
    },
    {
      "id": 1,
      "timestamp": 1000,
      "data": "base64_encoded_image_data",
      "width": 1200,
      "height": 800,
      "description": "Screenshot at 1000ms"
    }
  ],
  "firstContentfulPaint": "1.2s",
  "largestContentfulPaint": "2.1s",
  "timeToInteractive": "3.5s",
  "totalBlockingTime": "150ms",
  "cumulativeLayoutShift": "0.05"
}
```

## Troubleshooting

### Common Issues

1. **Lighthouse CLI not found**
   ```bash
   npm install -g lighthouse
   ```

2. **PSI API rate limit exceeded**
   - Check your API key quota
   - Wait before making more requests

3. **Screenshots not appearing**
   - Ensure Lighthouse is installed globally
   - Check that the website is accessible
   - Verify Chrome/Chromium is installed

4. **CORS issues**
   - Ensure frontend URL is correctly set in `.env`
   - Check that frontend is running on the specified port

### Performance Tips

- **Lighthouse**: Best for comprehensive analysis with visual loading sequence
- **PSI**: Best for Google's official metrics, has API limits

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details
