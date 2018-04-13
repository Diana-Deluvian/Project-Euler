$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = AmicableNumbers(10000);
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below

function AmicableNumbers(x){
	var Sums = [];
	for(var i = 1; i < x; i++){
		Sums[i] = findSumOfDivisors(i);
	}
	// the above algorithm fills out an array with the sums of all numbers up to 10000
	var sum = 0;
	for(var i = 1; i < x; i++){
		if(Sums[Sums[i]] == i){
			// compares the sum of the 'summed' original number to the original number
			if(Sums[i] != i){
				//checks to confirm its a pair of numbers since some numbers are 'amicable' with themselves, for example 6
				sum += i;
			}
		}
	}
	console.log(Sums);
	return sum;
}

function findSumOfDivisors(i){
	var sum = 0;
	for(var j = Math.floor(i/2); j >= 1; j--){
		if(i%j === 0){
			sum+=j;
		}
	}
	return sum;
}


