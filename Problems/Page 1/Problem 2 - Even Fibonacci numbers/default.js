$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = FibonacciNumbers(4000000);
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below

function FibonacciNumbers(upperborder){
	var prevnumber1 = 1;
	var prevnumber2 = 1;
	var next;
	var sum = 0;
	for(;prevnumber2 < upperborder;){
		next = prevnumber1 + prevnumber2;
		prevnumber1 = prevnumber2;
		prevnumber2 = next;
		if(next%2===0){
			console.log(next);
			sum += next;
		}
	}

	return sum;
}