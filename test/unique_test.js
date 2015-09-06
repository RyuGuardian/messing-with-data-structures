'use strict';

var expect = require('chai').expect;
var unique = require(__dirname + '/../lib/unique.js');

describe('#unique', function() {
	var arrWithDupes = [1, '1', 2, 2, 'string', 6, 7, 'string2', 'string2', true, true, Infinity, Infinity, {key: "value"}, {key: "value"}];
	var arrWithoutDupes = [1, 2, 3, 4, "4", 6, 7, "string", true, "true", Infinity, "Infinity", {key: "value"}];

	it("should return an array", function() {
		expect(Array.isArray(unique([]))).to.eql(true);
	});
	it("should return an array with unique items given one with duplicates", function() {
		expect((unique(arrWithDupes)).toString()).to.eql("1,1,2,string,6,7,string2,true,Infinity,[object Object],[object Object]");
	});
	it("should return an exact copy when given an array with unique items", function() {
		expect(unique(arrWithoutDupes).toString()).to.eql("1,2,3,4,4,6,7,string,true,true,Infinity,Infinity,[object Object]");
	});
});
