$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = LexicographPermutations(1000000);
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below

function LexicographPermutations(x){
	var arrOfNumbers = [1];
	for(var i = 1; i < 10; i++){
		arrOfNumbers.push(arrOfNumbers[i-1]*i);
	}
console.log(arrOfNumbers);
	var j = arrOfNumbers.length-1;
	var sum = 0;
	var finalNumber = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	var arrofDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	var k = 0;
	var finalNum = "";

	while(j > 0){
		if((sum + arrOfNumbers[j]) < 1000000){
			sum += arrOfNumbers[j];
			finalNumber[k]++;
		}
		else{
			j--;
			k++;
		}
	}
	console.log(finalNumber);
	for(var m = 0; m < finalNumber.length;m++){
		finalNum += arrofDigits[finalNumber[m]];
		arrofDigits.splice(finalNumber[m], 1);
	}
	return parseInt(finalNum);

	// original solution based off of the idea I can find the number by simple summation. We add all the values of different permutations together
	// until we reach one million, then we write them out according to their value, eliminating used digits. This has a very small downside in that
	// the permutaitons of 0 and 1 elements combined equal those of 2 elements (1, 1, and 2, respectively). This means that the final result needs to be
	// checked by a person. An upside of this is that it made the return of the proper answer, much, much easier to write programmatically :)
}
