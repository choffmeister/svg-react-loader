var Rx     = require('rx');
var xml2js = require('xml2js');

module.exports = function xml (opts) {
    var options = require('./options')(opts);
    var parser  = new xml2js.Parser(options);

    return {
        parse: function (src) {
            return Rx.Observable.create(function (observer) {
                var disposed = false;
                var data;

                parser.parseString(src, function (error, result) {
                    if (disposed) {
                        return;
                    }

                    if (error) {
                        observer.onError(error);
                    }
                    else {
                        data = {};

                        data['#name']          = result['#name'];
                        data[options.attrkey]  = result[options.attrkey];
                        data[options.childkey] = result[options.childkey];

                        observer.onNext(data);
                        observer.onCompleted();
                    }
                });

                return Rx.Disposable.create(function () {
                    if (!disposed) {
                        disposed = true;
                    }
                });
            });
        }
    };
};
