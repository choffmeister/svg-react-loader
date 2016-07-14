/*globals describe, it*/
require('should');

describe('svg-react-loader/lib/xml', () => {
    const xml = require('../../../lib/xml')();
    const read = require('../../../lib/util/read-file');

    it('should parse xml correctly', (done) => {
        read('test/unit/xml/simple.svg').
            flatMap(xml.parse).
            subscribe(
                (result) => { console.log(JSON.stringify(result, null, 4)); },
                (error) => { throw error; },
                done
            );
    });
});
