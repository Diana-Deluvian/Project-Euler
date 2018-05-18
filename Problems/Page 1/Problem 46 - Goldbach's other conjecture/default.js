$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = goldbachsOtherConjecture();
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below

function goldbachsOtherConjecture(){
	for(var i = 2, arr = [0, 2], j = 1, num = 1; i < 10000;i++){
		if(arr[arr.length -1] < i){
			j++;
			arr.push(2*Math.pow(j,2));
		}
		if(i % 2 != 0){
			for(var k = 0, num; k < arr.length; k++){
				num = i - arr[k];
				if(chkPrime(num)) break;
			}
		}
		if(num <= 0) return i;
	}
}

function chkPrime(x){
	for(var i = 2, s = Math.sqrt(x); i <= s; i++){
		if(x % i === 0) return false;
	}
	return x != 1;
}