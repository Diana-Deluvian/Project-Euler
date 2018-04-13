$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = sumOfDigits(101);
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below

function sumOfDigits(x){
// the current assumption I am going with is that 10s do not influence the final result
// so for example, I do not need to multiply by 10 because the sum of the digits does not change
// I'll first see how many calculations this will eliminate before I conclude if it was a
// good enough approach.

// after a brief test, it will benefit the algorithm, but not enough to not necessieate other means

	var arrOfDigits = [1];
	var currentDigit=0;
	var o = 0;

	for(var i = 1; i < x; i++){
		var Overflow = new Array(200);
		Overflow.fill(0);
		var count = arrOfDigits.length;
		for(var j = 0; j < count; j++){
			currentDigit = arrOfDigits[j]*i;
			arrOfDigits[j] = currentDigit % 10;
			o = j;
			while(currentDigit > 9 ){
				currentDigit = Math.floor(currentDigit / 10);
				Overflow[o+1] += currentDigit%10;
				o++;
			}
		}
		for(var k = 0; k < 200; k++ ){

			if(typeof arrOfDigits[k] != 'undefined'){
				if(arrOfDigits[k] + Overflow[k] > 9){
					Overflow[k+1] += Math.floor((arrOfDigits[k] + Overflow[k])/10);
					arrOfDigits[k] = (arrOfDigits[k] + Overflow[k]) % 10;
					
				}
				else {
					arrOfDigits[k] = (arrOfDigits[k] + Overflow[k])
				}
			}
			else {
					arrOfDigits.push(Overflow[k]);
				}
		}
	}
	var sum = 0;
	arrOfDigits.forEach(((x) =>{
		sum+=x
		console.log(x);
	} ));
	console.log(arrOfDigits);
		return sum;
}

// There probably exists a much better way to write this, as this is pretty inefficient, but it does work properly
// and takes no longer than a second, thus i conclude this a success.