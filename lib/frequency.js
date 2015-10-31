'use strict';

var frequency = function(givenArr) {
	var mostCommon = '';
	var highCount = 0;
	var seen = {};
	var givenString = givenArr.join('');

	for(var i = 0; i < givenString.length; i++) {
		//if not seen yet, create key and give value of 1
		if(!seen[givenString[i].toUpperCase()]) {
			seen[givenString[i].toUpperCase()] = 1;

			//if highCount hasn't been increased yet, make it 1
			if(!highCount) {
				highCount = 1;	//I think this could be declared here...?
			}
		}
		//if seen increase letter count
		else {
			seen[givenString[i].toUpperCase()]++;
		}

		//compare letter's count to highest count:
		//if it matches highest count, add it to the string, otherwise...
		if(seen[givenString[i].toUpperCase()] === highCount) {
			mostCommon += givenString[i].toUpperCase();
		}
		//...if it exceeds highest count, it's the new winner, so it overwrites the string
			//and highCount is increased
		else if(seen[givenString[i].toUpperCase()] > highCount) {
			mostCommon = givenString[i].toUpperCase();
			highCount++;
		}
	}

	return mostCommon;
};

module.exports = frequency;