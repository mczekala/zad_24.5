const assert = require('assert');
const totalPoints = require('./calculateTotalPoints');

describe('totalPoints', () => {
    it('should return value', () => {
        const actual = totalPoints(100, 100, 98, [10, 12, 15, 1, 20], 10, 10);

        const expected = 121;

        assert.equal(actual, expected);
    });
    it('should return value', () => {
        const actual = totalPoints(200, 200, 180, [1, 2, 3, 4, 5], 5, 8);

        const expected = 166;

        assert.equal(actual, expected);
    });
    it('should return value', () => {
        const actual = totalPoints(120, 150, 122, [10.5, 16.5, 12, 10, 2], 4, 5);

        const expected = 97.9;

        assert.equal(actual, expected);
    });

});