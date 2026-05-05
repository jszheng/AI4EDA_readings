@echo off
chcp 65001 >nul

echo ========================================
echo  AI4EDA Local Server (Node.js)
echo ========================================
echo.

REM Try to find node.exe
set "NODE_PATH=%ProgramFiles%\nodejs\node.exe"
if not exist "%NODE_PATH%" set "NODE_PATH=%ProgramFiles(x86)%\nodejs\node.exe"
if not exist "%NODE_PATH%" set "NODE_PATH=%LOCALAPPDATA%\Programs\nodejs\node.exe"

if not exist "%NODE_PATH%" (
    echo [ERROR] Cannot find Node.js
    echo.
    echo Please install Node.js:
    echo   https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo [OK] Found Node.js
echo.

cd /d "%~dp0"

echo Starting server...
echo.
echo ======================================
echo  Server is running...
echo  Press Ctrl+C to stop
echo ======================================
echo.

start "AI4EDA Server" cmd /k ""%NODE_PATH%" server.js"

echo Waiting 3 seconds...
timeout /t 3 >nul

echo Opening browser...
start "" "http://localhost:8000/index.html"

echo.
echo ======================================
echo  Server started successfully!
echo ======================================
echo.
echo  URL: http://localhost:8000/index.html
echo  To stop: Close the black window
echo.
pause
