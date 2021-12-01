#!/usr/bin/env sh

set -e

yarn build
cd docs/.vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/cbingb666/notes.git master:gh-pages