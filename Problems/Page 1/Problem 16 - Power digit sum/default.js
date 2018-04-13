$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = powerDigitSum(1000);
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below

function powerDigitSum(x){
	var arrOfDigits = [1];
	//Initialize an array of 2 to the power of 0
	var currentDigit = 0;
	// the currently manipulated digit in the array
	var overflow = 0;
	// storage for if the current digit resulted in a carry over
	for(var i = 0; i < x; i++){
		var count = arrOfDigits.length;
		for(var j = 0; j < count; j++){
			currentDigit = arrOfDigits[j]*2 + overflow;
			overflow = 0;
			if(currentDigit > 9){
				arrOfDigits[j] = currentDigit%10;
				if(typeof arrOfDigits[j+1] != 'undefined'){
					overflow = 1;
				}
				else {
					arrOfDigits.push(1);
				}
				// the above check is used to add more digits to the array when appropriate
			}
			else {
				arrOfDigits[j] = currentDigit;
			}
		}
	}
	var totalsum = 0;
	for(i = 0; i < arrOfDigits.length; i++){
		totalsum +=arrOfDigits[i];
	}

	return totalsum;
}

/* the challenge of this problem was dealing with the very large integer that
would be the result of the Calculation. To go about this, I'd store every 
separate digit into an array, and work my way multiplying up to the power of 1000.

