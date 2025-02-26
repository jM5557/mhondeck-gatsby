@echo off
setlocal enabledelayedexpansion

REM Loop through all image files in the current directory and subdirectories
for /r %%I in (*.png, *.jpg) do (
    REM Use ImageMagick to resize the image and compress it, then overwrite the original file
    magick "%%I" -resize 200 -quality 60 "%%I"
)

echo All images have been processed with ImageMagick.
pause
