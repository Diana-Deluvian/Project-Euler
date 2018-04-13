$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = sumOfLetters(999);
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below

function sumOfLetters(x){

		// array of the number of leters in 'constructor' letters
	var Constructors = {
		0: 0,
		1: 3,
		2: 3,
		3: 5,
		4: 4,
		5: 4,
		6: 3,
		7: 5,
		8: 5,
		9: 4,
		11: 6,
		12: 6,
		13: 8,
		14: 8,
		15: 7,
		16: 7,
		17: 9,
		18: 8,
		19: 8,
		10: 3,
		20: 6,
		30: 6,
		40: 5,
		50: 5,
		60: 5,
		70: 7,
		80: 6,
		90: 6,
		100: 10
	}
	// value for hundred is 10 because of 'hundred' and 'and'

	var length = 0;
	

	for(var i = 0; i <= x; i++){

		length += lettersInNumbers(Constructors, i);
	}
	return length + 11;
	// 11 is for one thousand
}

function lettersInNumbers(Constructors, i){

	var hundreds, tenths, ones = 0;
	if(i > 99){
		hundreds = 10 + Constructors[Math.floor(i/100)];
	if(i % 100 == 0){
			hundreds -= 3;
		}
	}
	else hundreds = 0;
	if(i%100 > 19){
		tenths = Constructors[i%100 - i %10];
		ones = Constructors[i%10];
	}
	else {
		tenths = 0;
		ones = Constructors[i%20]
	}
	console.log(i, hundreds, tenths, ones);
	return hundreds + tenths + ones;
}
	
