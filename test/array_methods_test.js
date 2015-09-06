'use strict';

var expect = require('chai').expect;
var Array = require(__dirname + '/../lib/array_methods'); /*jshint ignore:line */

describe('Array', function() {
	var arr = [];
	var array = [];

	beforeEach(function() {
		arr.length = 0;
		array.length = 0;
		arr.push(1, 2, 3, 4, 5);
		array.push(1, 2, 3, 4, 5);
	});

	describe('#Push', function() {
		it("should return length", function() {
			expect(arr.Push()).to.eql(array.push());
		});
		it("should take multiple arguments", function() {
			expect(arr.Push("six", "seven")).to.eql(array.push("six", "seven"));
		});
		it("should add to the end of the array", function() {
			arr.push("end");
			expect(arr[arr.length - 1]).to.eql("end");
		});
	});

	describe('#Pop', function() {
		it("should return the popped element", function() {
			expect(arr.Pop()).to.eql(array.pop());
		});
		it("should return undefined when passed an empty array", function() {
			expect([].Pop()).to.eql(undefined);
		});
		it("should take from the end of the array", function() {
			arr.Pop();
			expect(arr.toString()).to.eql("1,2,3,4");
		});
		it("should decrease the length of the array by 1", function() {
			arr.Pop();
			expect(arr.length).to.eql(4);
		});
	});

	describe('#Shift', function() {
		it("should return the removed element", function() {
			expect(arr.Shift()).to.eql(array.shift());
		});
		it("should return undefined when passed an empty array", function() {
			expect([].Shift()).to.eql(undefined);
		});
		it("should take from the start of the array", function() {
			arr.Shift();
			expect(arr.toString()).to.eql('2,3,4,5');
		});
		it("should decrease the length of the array", function() {
			arr.Shift();
			expect(arr.length).to.eql(4);
		});
		it("should work on an array of length 1", function() {
			expect([1].Shift()).to.eql(1);
		});
	});

	describe('#Unshift', function() {
		it("should return the length", function() {
			expect(arr.Unshift()).to.eql(array.unshift());
		});
		it("should take multiple arguments", function() {
			expect(arr.Unshift("six", "seven")).to.eql(array.unshift("six", "seven"));
		});
		it("should add to the front of the array (in correct order)", function() {
			arr.Unshift("front", "next");
			array.unshift("front", "next");
			expect(arr.toString()).to.eql(array.toString());
		});
	});
});