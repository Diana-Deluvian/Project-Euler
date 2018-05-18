$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = pentagonNumbers();
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below

function pentagonNumbers(){
	// every hexagonal number is also a triangular number, so we dont need to check that
	// therefore we only need to find the next time pentagons and hexagons converge
	for(var i = 144;; i++){
		console.log(i);
		if(chkPentagon(calcHexagonal(i))) return calcHexagonal(i);
	}
}

function calcHexagonal(n){
	return n*(2*n-1);
}

function chkPentagon(x){
	return Number.isInteger(Math.sqrt(1+24*x)) && Math.sqrt(1+24*x) % 6 === 5;
}
