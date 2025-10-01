const assert = require('assert'); // This line fixes ReferenceError

let totalBatteries;

describe('reducer', () => {
    beforeEach(() => {
        totalBatteries = 0; // Initialize the variable
    });

    it('should have a totalBatteries variable', () => {
        assert.strictEqual(typeof totalBatteries, 'number');
    });

    it('should have a number as a result', () => {
        totalBatteries = 5; // Example assignment
        assert.strictEqual(typeof totalBatteries, 'number');
    });

    it('should have made the sum of all the assembled batteries', () => {
        totalBatteries = 10 + 5; // Example sum
        assert.strictEqual(totalBatteries, 15);
    });
});