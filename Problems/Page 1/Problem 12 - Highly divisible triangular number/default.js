$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = HighlyDivisibleNumber();
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below

function HighlyDivisibleNumber(){
	var sum = 0;
	for(var i = 1; i > -1; i++){
		sum+=i;
		console.log(sum);
		if((findPrimeFactors(sum) > 500)){
			return sum;
		}
	}
}





function findPrimeFactors(x){
	var divisors = [];
	var totaldivisors = 1;
	for(var j = 0; j < 100; j++){
		divisors[j] = 0;
	}
	var y = Math.floor(Math.sqrt(x));
	while(x%2 ==0) {
		x = x/2;
		divisors[0] += 1;
	}
	for(var i = 3, k = 1; i < y;){
		if(x%i == 0){
			x = x/i;
			//divisors++;
			divisors[k]++;
		}
			else {
				i+=2;
				k++;
			}
		}
	for(var m = 0; m < divisors.length; m++){
		if(divisors[m]){
			totaldivisors = totaldivisors*(divisors[m]+1);
		}
	}
	return totaldivisors;
}

// The weird operations on the array are because of Javascript's weirdness.
// The algorithm still takes less than 5 seconds to complete, which, while
// far from ideal, serves my math purposes. I consider this a success.
