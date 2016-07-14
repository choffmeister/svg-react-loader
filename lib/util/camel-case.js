var R = require('ramda');

var splitWord = R.curry(function (delim, word) { return word.split(delim); });

function toTitleCase (word) { return word[0].toUpperCase() + word.slice(1); }

var toCamelCase =
    R.curryN(
        2,
        R.pipe(
            splitWord,
            function (words) {
                return words[0].toLowerCase() + words.slice(1).map(toTitleCase);
            }
        )
);

module.exports = toCamelCase;
