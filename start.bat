@echo off

echo =====================================================

echo           BUILDING THE LANDING PAGE

echo =====================================================

call npm run build



echo.

echo =====================================================

echo           STARTING THE SERVER

echo =====================================================

echo.

echo Your site will be available at the URL below.

echo Press Ctrl+C in this window to stop the server.

echo.

call serve -s build



pause