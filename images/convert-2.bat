@echo off
setlocal enabledelayedexpansion

REM Loop through all image files in the current directory and subdirectories
for /r %%I in (*.png) do (
    REM Use ImageMagick to resize the image and overwrite the original file
    magick "%%I" -sampling-factor 4:2:0 -strip -quality 85 -interlace JPEG "%%I"
)

echo All images have been processed with ImageMagick.
pause
