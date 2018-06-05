$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = combinatoricSelections();
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below

function combinatoricSelections(){
	for(var c = 1, counter = 0; c < 101; c++){
		for(var k = 1; k < 101; k++){
			if(CalcComb(c, k) > 1000000) counter++;
		}
	}
	return counter;
}

function CalcComb(c, k){
	for(var i = c, product = 1; i > k; i--) product *= i;
	for(var j = 1, divisor = 1; j <= c-k; j++) divisor *= j;
	return product / divisor;
}