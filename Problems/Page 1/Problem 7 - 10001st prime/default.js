$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = findthisprime(10002);
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below

function checkForPrime(number){
	for(var i = Math.floor(number/2); i > 2; i--){
		if(number%i === 0 ) return false;
	}
	return true;
}

function findthisprime(number){
	var numberofPrimes = 3;
	for(var i = 5; numberofPrimes < number; i++){
		if(checkForPrime(i)){
			numberofPrimes++;
		}
	}
	console.log(i-1);
}
