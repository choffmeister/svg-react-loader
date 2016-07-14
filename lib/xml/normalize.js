var R        = require('ramda');
var traverse = require('traverse');

var NAME_KEY = '#name';

module.exports = R.curry(function normalize (tagname, tree) {
    return traverse.map(tree, function (value) {
        if (this.notLeaf && value.hasOwnProperty(NAME_KEY)) {
            Object.assign(value, R.objOf(tagname, value[NAME_KEY]));
            delete value[NAME_KEY];
        }
    });
});
