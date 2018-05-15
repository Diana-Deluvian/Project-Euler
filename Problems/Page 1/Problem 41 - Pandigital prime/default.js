$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = pandigitalPrime();
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below


function pandigitalPrime(){
    var numstr;
    for(var i = 7654321; i > 0; i--){
        //start at 7 digits because any combination of digits from 1 to 9 and 1 to 8 is divisible by 3
        numstr = i + "";
        if(chkPalin(numstr, numstr.length)){
            if(chkPrime(i)) return i;
        }
    }
    return -1;
}






function chkPalin(x, i){
    var y = x.split("");
    return i === new Set(y).size && y.indexOf('0') === -1 && !(y.some(isBiggerThan));
}

function chkPrime(x){
    for(var i = 2, s = Math.sqrt(x); i <= s; i++){
        if(x%i === 0) return false;
    }
    return x != 1;
}

function isBiggerThan(element, index, array){
    return element > array.length;
}

// necessary because the unique digits might not be in order, this ensures that