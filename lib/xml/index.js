var Rx     = require('rx');
var xml2js = require('xml2js');

module.exports = function xml (opts) {
    var options   = require('./options')(opts);
    var normalize = require('./normalize')(options.tagkey);
    var parser    = new xml2js.Parser(options);

    return {
        parse: function (src) {
            return Rx.Observable.create(function (observer) {
                var disposed = false;
                var data = null;

                if (!disposed && data) {
                    observer.onNext(data);
                    observer.onCompleted();
                }
                else {
                    parser.parseString(src, function (error, result) {
                        if (disposed) {
                            return;
                        }

                        if (error) {
                            observer.onError(error);
                        }
                        else {
                            data = normalize(result);
                            observer.onNext(data);
                            observer.onCompleted();
                        }
                    });
                }

                return Rx.Disposable.create(function () {
                    if (!disposed) {
                        disposed = true;
                    }
                });
            });
        }
    };
};
