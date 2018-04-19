$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = reciprocalCycles(1000);
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below

function reciprocalCycles(x){
	for(var i = 2; i < x; i++){
		console.log(1/i);
	}
}
	