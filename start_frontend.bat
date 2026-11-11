@echo off
title AquaGuard AI - Frontend
cd /d "%~dp0frontend"
echo =========================================
echo  AquaGuard AI Frontend Starting...
echo  Dashboard: http://localhost:5173
echo  (Backend must be running on port 8000)
echo =========================================
npm run dev
pause

