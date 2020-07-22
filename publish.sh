#!/usr/bin/env bash

echo "Building SciHubify…"
mkdir --parents build/

echo "…Pack…"
cd source/
zip --recurse-paths --filesync ../build/scihubify.zip *
cd ..

echo "For Firefox upload $PWD/build/scihubify.zip to sign at"
echo "https://addons.mozilla.org/de/developers/addon/29113ce865b14bc3bf97/versions/submit/"
read -n 1 -p "Done? "

echo ""
echo "For Google Chrome, go to chrome://extensions/ in developer-mode and pack extension."
echo "Directory is $PWD/source/"
echo "Key is $HOME/Keys/private/scihubify.pem"
read -n 1 -p "Open Browser? (Y/n) " answer
case "$answer" in
  ""|"j"|"J"|"y")
    google-chrome-stable
  ;;
esac

echo ""
read -n 1 -p "Push Repository to Github? (Y/n)" answer
case "$answer" in
  ""|"j"|"J"|"y"|"Y")
    git add .
    read -p "Commit Message: " answer
    git commit -m "$answer"
    git push
  ;;
esac
