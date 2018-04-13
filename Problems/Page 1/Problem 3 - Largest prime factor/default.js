$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = findLargestPrime(600851475143 );
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below

function checkForPrime(number){
	for(var i = Math.floor(number/2); i > 2; i--){
		if(number%i === 0 ) return false;
	}
	return true;
}

function findLargestPrime(number){

	var k = 0;
	for(var i = 2; i < number;i++){  // number is here is only to ensure we get enough cycles to the for loop
		 k = Math.floor(number/i)
			if(number % k === 0){
				console.log(k);
				if(checkForPrime(k)) return k;
		}
	}
	return 0;
	//shouldn't get to this return
}

// This problem actually made me think a lot about finding a more efficient solution.
// I believe this can be further approved by applying the same improvement to 
// the checkForPrime() function