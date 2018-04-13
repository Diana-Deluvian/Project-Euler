$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = Pythagorean();
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below

function Pythagorean(){
	var a, b, c;

	for(c=250; c < 500; c++){
		for(b=1; b<500; b++){
			for(a=1; a < 500; a++){
				if(a+b+c == 1000) {
					if((Math.pow(a, 2) + Math.pow(b, 2)) == Math.pow(c, 2)) {
						return a*b*c;
					}
				}
			}
		}
	}
}