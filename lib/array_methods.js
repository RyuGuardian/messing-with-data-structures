'use strict';

/*****************************************
Using capitalized method names because that's what the assignment
	description used, and I want to compare my implementations with
	the actual Array methods.
*****************************************/

Array.prototype.Push = function() {
	for(var i = 0; i < arguments.length; i++) {
		this[this.length] = arguments[i];
	}

	return this.length;
};

Array.prototype.Pop = function() {
	if(this.length) {
		var popped = this[this.length -1];
		this.length--;
		return popped;
	}
};

Array.prototype.Shift = function() {
	if(this.length) {
		var removed = this[0];
		
		for(var i = 0; i < this.length -1; i++) {
			this[i] = this[i + 1];
		}

		this.length--;
		return removed;
	}
};

Array.prototype.Unshift = function() {
	//immediately assign the new length of the array
	this.length = this.length + arguments.length; 

	//iterate through the array using the new length, starting at the end
	for(var i = this.length - 1; i >= 0; i--) {
		if(i < arguments.length) {
			//insert the arguments once we're close enough to the front of the array
			this[i] = arguments[i];
		}
		else {
			this[i] = this[i - arguments.length];
		}
	}

	return this.length;
};

module.exports = Array;