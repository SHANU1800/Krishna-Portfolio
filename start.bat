@echo off
setlocal
cd /d "%~dp0"

echo ==================================================
echo   Krishna Agarwal Portfolio - Local Dev Launcher
echo ==================================================
echo.

where node >nul 2>&1
if errorlevel 1 (
  echo [ERROR] Node.js is not installed or not on PATH.
  echo Please install Node.js from https://nodejs.org/ and try again.
  pause
  exit /b 1
)

where npm >nul 2>&1
if errorlevel 1 (
  echo [ERROR] npm is not available on PATH.
  pause
  exit /b 1
)

if not exist ".env" (
  if exist ".env.example" (
    copy /Y ".env.example" ".env" >nul
    echo [INFO] Created .env from .env.example ^(configure optional webhook/WhatsApp values there^).
  )
)

if not exist "node_modules" (
  echo [INFO] Installing dependencies...
  call npm install
  if errorlevel 1 (
    echo [ERROR] npm install failed.
    pause
    exit /b 1
  )
)

echo [INFO] Starting Vite development server and opening browser...
echo [INFO] Press Ctrl+C in this window to stop the server.
echo.
call npm run dev -- --open

if errorlevel 1 (
  echo.
  echo [ERROR] Development server exited with an error.
  pause
  exit /b 1
)

endlocal

