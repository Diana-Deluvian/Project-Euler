$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = countSundays();
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below

function countSundays(){
	return Math.floor((12/7)*100);
}

// I might comeback to this problem at a later point, but I figured this was too hilarious to not keep for now
