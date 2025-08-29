@echo off
echo Setting up WebSense Backend environment...
echo.

echo Setting PSI_API_KEY...
set PSI_API_KEY=AIzaSyD16688gvT2z1PLldcS4LVKu2Bhfa234kE

echo Setting other environment variables...
set PORT=3001
set NODE_ENV=development
set FRONTEND_URL=http://localhost:3000

echo.
echo Environment variables set:
echo PSI_API_KEY=%PSI_API_KEY%
echo PORT=%PORT%
echo NODE_ENV=%NODE_ENV%
echo FRONTEND_URL=%FRONTEND_URL%
echo.

echo Installing dependencies...
npm install

echo.
echo Starting WebSense Backend...
echo Backend will be available at: http://localhost:3001
echo Frontend should be running at: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.

npm run start:dev
