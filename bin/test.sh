#!/usr/bin/env bash

MOCHA="./node_modules/.bin/mocha"
DIR="./test/$1"

$MOCHA \
    --harmony \
    --harmony_shipping \
    --harmony_modules \
    --harmony_array_includes \
    --harmony_regexps \
    --harmony_proxies \
    --harmony_sloppy \
    --harmony_unicode_regexps \
    --harmony_reflect \
    --harmony_destructuring \
    --harmony_sharedarraybuffer \
    --harmony_atomics \
    --harmony_new_target \
    --harmony_tostring \
    --harmony_concat_spreadable \
    --harmony_rest_parameters \
    --harmony_spreadcalls \
    --harmony_spread_arrays \
    --harmony_arrow_functions \
    --harmony_computed_property_names \
    --harmony_unicode \
    --harmony_object \
    $(find $DIR -type f -name '*.js')
