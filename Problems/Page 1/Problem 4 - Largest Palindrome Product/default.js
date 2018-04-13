$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = Palindrome(999);
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below

function Palindrome(maxMultiplyer){
	var numero = 0;
	var reverse = 0;
	var maxNumber = 0;
	for(var i = maxMultiplyer; i > 1; i--){
		for(var k = maxMultiplyer; k > 1; k--){
			numero = i*k;
			reverse = numero + "";
			reverse = reverse.split("").reverse().join("");
			if(reverse == numero) {
				if(maxNumber < numero) maxNumber = numero;
			}
		}
	}
	return maxNumber;
}