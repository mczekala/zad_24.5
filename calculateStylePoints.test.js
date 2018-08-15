const assert = require('assert');
const stylePoints = require('./calculateStylePoints');

describe('stylePoints', () => {
    it('should return value', () => {
        const actual = stylePoints([10, 12, 15, 1, 20]);

        const expected = 37;

        assert.equal(actual, expected);
    });
    it('should return same value', () => {
        const actual = stylePoints([10, 10, 10, 10, 10]);

        const expected = 30;

        assert.equal(actual, expected);
    });
    it('should return zero', () => {
        const actual = stylePoints([0, 0, 0, 0, 0]);

        const expected = 0;

        assert.equal(actual, expected);
    });
});