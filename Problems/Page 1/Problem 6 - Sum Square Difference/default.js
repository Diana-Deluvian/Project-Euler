$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = DifferenceofSum(101);
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below

function DifferenceofSum(x){
	var sumofall = SumAll(x);
	var sumofallSquared = 0;
	for(var i = 1; i < x; i++){
		sumofallSquared += Math.pow(i, 2);
	}
	console.log(sumofall, sumofallSquared)
	return (Math.pow(sumofall, 2) - sumofallSquared);
}

function SumAll(x){
	var sum = 0;
	for(var i = 0; i < x; i++){
		sum += i;
	}
	return sum;
}