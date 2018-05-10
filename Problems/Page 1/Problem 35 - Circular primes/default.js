$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = circularPrimes();
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below


function circularPrimes(){
    var sum = 13;
    var stringnumb, chk;
    var even = function(x){
    return x % 2 == 0;
}
    for(var i = 100; i < 1000000; i++){
        if(chkForPrime(i)){
            stringnumb = (i+"").split("");
            // no point in running the function for numbers that contain an even number
            if(!stringnumb.some(even)){
            for(var j = 0; j < stringnumb.length; j++){
                stringnumb.push(stringnumb[0]);
                stringnumb.shift();
                chk = stringnumb.join("");
                if(!chkForPrime(Number(chk))) break;
            }
            if(j == stringnumb.length) {
                sum++;
                console.log(i);
            }
        }
        }
    }
    return sum;
 }



function chkForPrime(x){
    for(let i = 2, s = Math.sqrt(x); i <= s; i++) {
        if(x % i === 0) return false; 
    }
    return x !== 1;
}
