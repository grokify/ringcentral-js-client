#!/usr/bin/env bash
. ./envsetup.sh
npm run generate
tsc
webpack
cp -r src/test/res/ build/src/test/res