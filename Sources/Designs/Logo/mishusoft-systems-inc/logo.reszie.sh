find . -name 'logo.png' -print0 | xargs -0 -I {} convert {} -set filename:orig %t \( -resize 16x16 -write %\[filename:orig\]_16x16.png \) \( -resize 32x32 -write %\[filename:orig\]_32x32.png \) \( -resize 48x48 -write %\[filename:orig\]_48x48.png \) \( -resize 57x57 -write %\[filename:orig\]_57x57.png \) \( -resize 60x60 -write %\[filename:orig\]_60x60.png \) \( -resize 64x64 -write %\[filename:orig\]_64x64.png \) \( -resize 72x72 -write %\[filename:orig\]_72x72.png \) \( -resize 76x76 -write %\[filename:orig\]_76x76.png \) \( -resize 96x96 -write %\[filename:orig\]_96x96.png \) null:



