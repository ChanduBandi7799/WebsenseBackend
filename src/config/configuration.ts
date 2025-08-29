export default () => ({
  port: parseInt(process.env.PORT || '3001', 10),
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3000',
  environment: process.env.NODE_ENV || 'development',
  lighthouse: {
    timeout: parseInt(process.env.LIGHTHOUSE_TIMEOUT || '60000', 10),
    chromeFlags: process.env.LIGHTHOUSE_CHROME_FLAGS || '--headless --no-sandbox --disable-gpu --disable-dev-shm-usage'
  }
});
