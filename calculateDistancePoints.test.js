const assert = require('assert');
const distancePoints = require('./calculateDistancePoints');

describe('distancePoints', () => {
    it('should return mammoth', () => {
        const actual = distancePoints(120, 200, 120);

        const expected = 120;

        assert.equal(actual, expected);
    });
    it('should return large', () => {
        const actual = distancePoints(120, 150, 120);

        const expected = 60;

        assert.equal(actual, expected);
    });
    it('should return normal', () => {
        const actual = distancePoints(120, 100, 120);

        const expected = 60;

        assert.equal(actual, expected);
    });



    it('should return near kPoint', () => {
        const actual = distancePoints(100, 120, 80);

        const expected = 96;

        assert.equal(actual, expected);
    });
    it('should return middle kPoint', () => {
        const actual = distancePoints(100, 120, 150);

        const expected = -30;

        assert.equal(actual, expected);
    });
    it('should return far kPoint', () => {
        const actual = distancePoints(100, 120, 200);

        const expected = -120;

        assert.equal(actual, expected);
    });



    it('should return near jump', () => {
        const actual = distancePoints(100, 120, 120);

        const expected = 24;

        assert.equal(actual, expected);
    });
    it('should return middle jump', () => {
        const actual = distancePoints(150, 120, 120);

        const expected = 114;

        assert.equal(actual, expected);
    });
    it('should return far jump', () => {
        const actual = distancePoints(200, 120, 120);

        const expected = 204;

        assert.equal(actual, expected);
    });
});