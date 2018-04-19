$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = highDigitFibonaciNumber(1000);
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below

function highDigitFibonaciNumber(x){
	var fib1 = [1]; 
	var fib2 = [1];
	var fib3 = [];
	for(var i = 0;; i++){
		fib3 = findSum(fib1, fib2);
		if(fib3.length === x ){
			console.log(fib3);
			break;
		}
		fib1 = fib2;
		fib2 = fib3;
	}
	fib3 = fib3.reverse().toString();
	for(var j = 0; j < fib3.length; j++){
		fib3 = fib3.replace(",", "");
	}
	console.log(fib3.length, fib3);
	return i+3;
	// +3 because I am setting up the first two members of the sequence
}


function findSum(fib1, fib2){
	var fib3 = [];
	var tempNumb, overflow = 0;
	for(var i = 0; i < fib1.length; i++){
		tempNumb = fib1[i] + fib2[i]+overflow;
		overflow = 0;
		if(tempNumb < 10){
			fib3.push(tempNumb);
		}
		else {
			tempNumb %=10;
			overflow = 1;
			fib3.push(tempNumb)
		}
	}
	if(fib1.length < fib2.length) {
		fib3.push(fib2[fib2.length-1] + overflow);
		overflow = 0;
	}
	if(overflow){
		fib3.push(1);
	}
	return fib3;
}