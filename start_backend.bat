@echo off
title AquaGuard AI - Backend
cd /d "%~dp0backend"
echo =========================================
echo  AquaGuard AI Backend Starting...
echo  Real UCI Dataset: 527 records, 38 cols
echo  ML Models: Linear Regression + Random Forest + Isolation Forest
echo  API: http://127.0.0.1:8000
echo  Swagger: http://127.0.0.1:8000/docs
echo =========================================
python -m uvicorn app.main:app --host 127.0.0.1 --port 8000 --log-level info
pause

