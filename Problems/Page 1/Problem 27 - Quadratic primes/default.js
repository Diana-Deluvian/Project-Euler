$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = quadraticPrimes(1000);
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below

function quadraticPrimes(x){
    var currendProduct, max = 0;
    for(var i = x*(-1); i < x; i++){
        for(var j = x*(-1); j < x; j++){
            for(var k = 0;;k++){
                currendProduct = k*k + j*k + i;
                if(currendProduct < 0) break;
                if(!isPrime(currendProduct)){
                    if(max < k || max == k) {
                        max = k;
                        console.log(i, j, currendProduct);
                    }
                    break;
                }
            }
        }
    }
    console.log(max + " is the maximum");
}

function isPrime(num) {
  var sqrtnum=Math.floor(Math.sqrt(num));
    var prime = num != 1;
    for(var i=2; i<sqrtnum+1; i++) {
        if(num % i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}
