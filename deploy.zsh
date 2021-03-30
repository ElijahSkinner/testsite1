#!/usr/bin/env zsh

#deploy.zsh

# by David Skinner
# on November 4, 2018
# for Davsk

# Copyright (c) 2018 Davsk. All Rights Reserved.

echo "\\033[0;32mDeploying updates to GitHub...\\033[0m"

# get updates
git pull --no-rebase

# Build the project.
hugo

# build msg
msg="rebuilding site $(date)"
if [ $# -eq 1 ]
  then msg="$1"
fi

# Go To Public folder
cd public || exit
  git add -A
  git commit -m "$msg"
  git push origin master
cd ..

# Save repo
git add -A
git commit -m "$msg"
git push origin master