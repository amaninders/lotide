const assert = require('chai').assert;
const without = require('../without');

describe('#without', () =>  {
	it('should match [2, 3]', () => {
		assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
	});
	
	it('should match ["1", "2"]', () => {
		assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])
	});
})