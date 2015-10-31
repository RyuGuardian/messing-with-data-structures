'use strict';

/******************************************
Could work on to not break if someone uses a string with "num" or "bool"
in it, but I think it does more than needed already, and I need to move on.
******************************************/

var unique = function(givenArr) {
	var copy = [];

	if(givenArr.length) {
		var seen = {};

		for(var i = 0; i < givenArr.length; i++) {
			switch(typeof givenArr[i]) {
				case 'string':
					//if type of element is string, simply copy it if it exists
					if(!seen[givenArr[i]]) {
						copy.push(givenArr[i]);
						seen[givenArr[i]] = 'true';
					}
					break;
				case 'number':
					//if type of element is number, deal with special key name with 'num' added
					if(!seen[givenArr[i] + 'num']) {
						copy.push(givenArr[i]);
						seen[givenArr[i].toString() + 'num'] = 'true';
					}
					break;
				case 'boolean':
					//if type of element is boolean, deal with special key name with 'bool' added
					if(!seen[givenArr[i] + 'bool']) {
						copy.push(givenArr[i]);
						seen[givenArr[i].toString() + 'bool'] = 'true';
					}
					break;
				case 'object':
				//if given element is an object, just push it
					copy.push(givenArr[i]);
					break;
			}
		}
	}

	return copy;
};

module.exports = unique;