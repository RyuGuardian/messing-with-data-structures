'use strict';

var expect = require('chai').expect;
var frequency = require(__dirname + '/../lib/frequency');

describe('#frequency', function() {
	var arr = ("This is a string of words"
		+ "The quick brown fox jumps over the lazy dog")
		.split(" ");

	it("should return a string", function() {
		expect(typeof frequency(arr)).to.eql('string');
	});
	it("should return an empty string if given an empty array", function() {
		expect(frequency([])).to.eql('');
	});
	it("should return the most common letter (capitalized)", function() {
		expect(frequency(arr)).to.eql('O');
	});
	it("should return multiple most common letters in a tie", function() {
		expect(frequency(['bufalo', 'bufalo', 'bufalo', 'buf'])).to.eql('BUF');
	});
});