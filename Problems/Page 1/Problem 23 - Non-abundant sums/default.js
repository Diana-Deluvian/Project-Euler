$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = nonAbundantSums(28123);
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below

function nonAbundantSums(x){
	var sumofDivisors = [];
	var arrofAbundantDivisors = [];
	for(var i = 1; i < x; i++){
		console.log(findSumOfDivisors(i));
		sumofDivisors.push(findSumOfDivisors(i));
	}
	// returns an array of all the sums of the divisors of numbers up to x

	for(var j = 3; j < x; j++){
		if(j < sumofDivisors[j-1]){
			console.log(j, sumofDivisors[j]);
			arrofAbundantDivisors.push(j);
		}
	}
	//adds the abundant numbers to an array
	var arrOfSumsOfAbundantNumbers = [];
	for(var k = 0; k < arrofAbundantDivisors.length; k++){
		for(var l = 0; l < arrofAbundantDivisors.length; l++){
			arrOfSumsOfAbundantNumbers.push(arrofAbundantDivisors[l] + arrofAbundantDivisors[k]);
		}
	}
	var setofSumsofAbundantNumbers = new Set(arrOfSumsOfAbundantNumbers);
	// converts the array to a set, giving new functionality and removing duplicates
	var summation = 0;
	for(var m = 0; m < x; m++){
		if(!setofSumsofAbundantNumbers.has(m)){
			summation += m;
		}
	}
	return summation;
}

function findSumOfDivisors(x){
	var sum = 0;
	for(var i = 1; i <= Math.floor(x/2); i++){
		if(x % i == 0){
			sum+=i;
		}
	}
	return sum;
}

	