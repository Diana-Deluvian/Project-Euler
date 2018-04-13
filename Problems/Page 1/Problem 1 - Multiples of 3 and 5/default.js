$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = Multiplesof3and5(1000);
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below

function Multiplesof3and5(x){
	var sum = 0;
	for(var i = 0; i < x; i++){
		if(i%3 ===0){
			sum +=i;
		}
		if(i%5 ===0){
			sum +=i;
		}
		if(i%3 ===0 && i%5 === 0){
			sum -=i;
		}
	}
	return sum;
}