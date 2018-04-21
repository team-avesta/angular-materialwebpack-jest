#/bin/bash

#if current branch is staging then run unit tests before push
if test "$(git rev-parse --abbrev-ref HEAD)" != staging; then
  echo Current branch is not staging. Not running unit tests. >&2
  exit 0
else
  echo Running unit tests...
  npm test
  if [ $? -eq 0 ]; then
	exit 0
  else
	exit 1
  fi
fi