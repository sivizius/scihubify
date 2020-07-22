#!/usr/bin/env bash

rm $(find | grep -P "(\.xpi|\.crx|~)$" )
zip -r -FS ../scihubify.zip *
echo "do stuff, than type any character…"
read -n1 ans
git add .
git commit -m "$1"
git push
