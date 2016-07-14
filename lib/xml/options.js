var R = require('ramda');

var DEFAULTS = {
    explicitChildren:      true,
    preserveChildrenOrder: true,
    explicitRoot:          false,
    attrkey:               'props',
    childkey:              'children',
    tagkey:                'tagname',
    attrNameProcessors:    require('./attr-name-processors'),
    tagNameProcessors:     require('./tag-name-processors')
};

module.exports = function (opts) {
    if (opts) {
        if (opts.attrNameProcessors) {
            opts.attrNameProcessors =
                DEFAULTS.
                attrNameProcessors.
                slice().
                concat(opts.attrNameProcessors);
        }
        if (opts.tagNameProcessors) {
            opts.tagNameProcessors =
                DEFAULTS.
                tagNameProcessors.
                slice().
                concat(opts.tagNameProcessors);
        }
    }

    return R.merge(DEFAULTS, opts || {});
};

