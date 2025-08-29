@echo off
echo Starting WebSense Backend...
echo.

echo Checking Node.js installation...
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo Checking npm installation...
npm --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: npm is not installed or not in PATH
    pause
    exit /b 1
)

echo Installing dependencies...
npm install

echo.
echo Starting development server...
echo Backend will be available at: http://localhost:3001
echo Frontend should be running at: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.

npm run start:dev


