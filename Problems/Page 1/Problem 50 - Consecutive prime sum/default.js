$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = primePermutations();
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below

function primePermutations() {
	for(var k = 2, answer = 0, maxCounter = 0; k < 1000; k++){
	// 1000 is our max because the sum of the primes up to 1000 is 76127, while the result we get if we plug in k as two is 958...
	// that means the answer necessarily lies in that range as that range will contain the most consecutive primes
		if(chkPrime(k)){
			for(var i = k, sum = 0, counter = 0;; i++){
				if(chkPrime(i)){
					if(sum + i > 1000000) break;
					else{
						sum += i;
						counter++;
						if(chkPrime(sum) && sum > answer && counter > maxCounter) {
							answer = sum;
							maxCounter = counter;
						}
					}
				}
			}	
		}
	}
	return answer;
}

function chkPrime(x){
	for(var i = 2, s = Math.sqrt(x); i <= s; i++){
		if(x % i === 0) return false;
	}
	return x != 1;
	// dont need to check for one as we are only working with 4digit numbers
}
