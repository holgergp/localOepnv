var utility = require('../../util/utility');

describe("The Utility suite", function() {
  	it("converts a digit into zero padded string of length 2", function() {
		expect(utility.fillZeros(2)).toBe("02");
  	});
  
	it("converts nothing into zero padded string of length 2", function() {
    	expect(utility.fillZeros()).toBe("00");
  	});
  	
  	it("converts null into zero padded string of length 2", function() {
    	expect(utility.fillZeros(null)).toBe("00");
  	});
  	
  	it("converts a 2-digit number into a string", function() {
    	expect(utility.fillZeros(77)).toBe("77");
  	});
  	it("converts a 3-digit number into a string", function() {
    	expect(utility.fillZeros(777)).toBe("777");
  	});
});

