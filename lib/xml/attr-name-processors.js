var ATTRIBUTE_MAPPINGS = {
    'class': 'className',
    'for': 'htmlFor'
};

module.exports = [
    require('../util/camel-case')(/[:-]/g),
    function (name) {
        if (name in ATTRIBUTE_MAPPINGS) {
            return ATTRIBUTE_MAPPINGS[name];
        }

        return name;
    }
];
