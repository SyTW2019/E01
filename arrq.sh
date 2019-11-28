#!/usr/bin/env sh

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"


cd $DIR && npm run dev &
#cd $DIR/angular-src && ng serve &
