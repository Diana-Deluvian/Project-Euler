$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = SumofPrimes(2000000);
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below

function SumofPrimes(x){
	var sum = 2 + 3 + 5 + 7;

	for(var i = 5; i < x; i+=2){
		if(i % 5 != 0){
			if( i% 7 != 0){
				if(checkForPrime(i)){
					sum += i;
					console.log(sum);
				} 
			}
		}
		
	}
	return sum;
}

function checkForPrime(number){
	for(var i = Math.floor(number/2); i > 2; i--){
		if(number%i === 0 ) return false;
	}
	return true;
}

// Extrmely slow algorithm (relatively) that utilizes a pseudo - Sieve of Eratosthenes
// implementation. I need to learn more about math to improve it, save for the obvious.