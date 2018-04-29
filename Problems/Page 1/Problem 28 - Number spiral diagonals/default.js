$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = numberSpiralDiagonals(501);
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below

function numberSpiralDiagonals(x){
    var sum = 1, 
    base = 1;
    for(var i = 1; i < x; i++){
        for(var j = 1; j < 5; j++){
            base += 2*i;
            console.log(base);
            sum += base;
        }
    }
    return sum;
}