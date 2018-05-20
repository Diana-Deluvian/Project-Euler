$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = distinctPrimeFactors();
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below

function distinctPrimeFactors(){
	for(var i = 5;;i++){
		if(checker(i) && checker(i+1) && checker(i+2) && checker(i+3)) {
			var answer = new Set(findFactors(i).concat(findFactors(i+1,), findFactors(i+2), findFactors(i+3)));
			if(answer.size === 16) return i;
		}
	}
}

function findFactors(x){
	for(var i = 2, arr = []; x > 1; i++){
		var counter = 0;
		while(x % i === 0){
			x /= i;
			counter ++;
		}
		if(counter > 0) arr.push(Math.pow(i, counter));
	}
	return arr;
}

function checker(x){
	x = findFactors(x);
	if(x.length === 4) return true;
	return false;
}