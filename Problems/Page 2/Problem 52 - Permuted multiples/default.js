$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = primeDigitReplacement();
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below

function primeDigitReplacement() {
	for(var i = 10;; i++){
		for(var j = 2; j < 7; j++){
			var a1 = (i + "").split("").sort();
			var a2 = (i*j + "").split("").sort();
			if(a1.length===a2.length && a1.every((v,i)=> v === a2[i])){
				if(j === 6) return i;
			}
			else break;
		}
	}
	console.log('here');
}