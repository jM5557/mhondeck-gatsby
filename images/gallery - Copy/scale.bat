@echo off
setlocal enabledelayedexpansion

REM Set the scaling factor
set SCALE_FACTOR=3

REM Loop through all PNG files in the current directory and subdirectories
for /r %%I in (*.png) do (
    REM Get the directory and file name without extension
    set "file_dir=%%~dpI"
    set "file_name=%%~nI"
    
    REM Define the output file path
    set "output_file=!file_dir!!file_name!_scaled.png"
    
    REM Use RIOT to scale down the image
    RIOT.exe -in "%%I" -out "!output_file!" -resize !SCALE_FACTOR!
)

echo All images have been scaled down by %SCALE_FACTOR%x.
pause
