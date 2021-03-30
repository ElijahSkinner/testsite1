#!/usr/bin/env zsh

#deploy.zsh

# by David Skinner
# on November 4, 2018
# for Davsk

# Copyright (c) 2018 Davsk. All Rights Reserved.

echo "\\033[0;32mDeploying updates to GitHub...\\033[0m"

echo "\\033[0;32mMerging updates to source...\\033[0m"
git pull --no-rebase

echo "\\033[0;32mBuild the project...\\033[0m"
hugo

msg="rebuilding site $(date)"
if [ $# -eq 1 ]
  then msg="$1"
fi

echo "\\033[0;32mDeploying $msg to public...\\033[0m"
cd public || exit
  git add -A
  git commit -m "$msg"
  git push origin master
cd ..

echo "\\033[0;32mDeploying $msg updates to source...\\033[0m"
git add -A
git commit -m "$msg"
git push origin master

echo "\\033[0;32mDeployed $msg updates to GitHub...\\033[0m"