@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo ================================
echo  AI4EDA 本地服务器
echo ================================
echo.

REM 检查 Python 是否可用
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [错误] 未找到 Python，请先安装 Python 并添加到 PATH
    echo.
    pause
    exit /b 1
)

echo [√] Python 已安装
python --version
echo.

REM 检查端口 8000 是否被占用
netstat -ano | findstr :8000 >nul 2>&1
if %errorlevel% equ 0 (
    echo [警告] 端口 8000 已被占用，尝试使用端口 8001...
    set PORT=8001
) else (
    set PORT=8000
)

echo [√] 将在端口 %PORT% 启动服务器
echo.
echo 启动服务器窗口...
echo 关闭服务器窗口即可停止服务器
echo.

start "AI4EDA Server - Port %PORT%" cmd /k "python -m http.server %PORT% && echo. && echo 服务器已停止 && pause"

echo 等待 3 秒让服务器启动...
timeout /t 3 >nul

echo 打开浏览器...
start http://localhost:%PORT%/index.html

echo.
echo ================================
echo  服务器已启动！
echo ================================
echo.
echo  访问地址: http://localhost:%PORT%/index.html
echo  关闭服务器: 关闭弹出的命令行窗口
echo.
pause
