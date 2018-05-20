$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = distinctPrimeFactors(1001);
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below
var max = 10000000000;
//as we only care for the last 10 digits, we dont need to calculate past that
function distinctPrimeFactors(x){
	for(var i = 1, answer = 0;i < x; i++){
		for(var j = 1, k = i; j < i; j++){
			k *= i;
			k = slicer(k);
		}
		answer += k;
		// as we are always only summing up to 10 digit numbers, we will never hit javascripts 'limit' of 15 digit numbers
		// and dont need to take time dealing with it
	}
	return slicer(answer);
}

// this function slices off any extra digits we won't need as we are only interested in the first 10
function slicer(x){
	if(x > max) return x % max;
	return x;
}

