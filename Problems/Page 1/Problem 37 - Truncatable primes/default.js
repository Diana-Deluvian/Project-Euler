$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = truncatablePrimes(11);
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below


function truncatablePrimes(x){
    var sum = 0, counter = 0;
    var even = function(x){
        return x % 2 == 0;
    }
    var fivediv = function(x){
        return x % 5 == 0;
    }
    var numbstring;
    for(let i = 10; counter < 11; i++){
        numbstring = (i+"").split("");
        if(!numbstring.some(even) || numbstring[0] === "2"){
            if(!numbstring.some(fivediv) || numbstring[0] === "5"){
                // no point in checking numbers that contain even numbers or 5, unless 2 or 5 are at the start
                if(chkPrime(i)){ 
                    for(var j = 0, s = numbstring.length-1, l = numbstring; j < s; j++){
                        l.shift();
                        if(!chkPrime((Number(l.join(""))))) break;
                    }
                    // a bit clunky, but we need to create another copy of the array, due to the way javascript works (it gave l the address in stead of a copy)
                    // could refactor but doesnt seem warranted
                    for(var k = 0, m = (i+"").split(""); k < s; k++){
                        m.pop();
                        if(!chkPrime(Number(m.join("")))) break;
                    }
                    if(j == s && k == s) {
                        sum += i;
                        counter++;
                    }
                }
            }
        }
    }
    return sum;
}
// as the algorithm works very quickly, I dont feel any refactoring or changes to the code are warranted

function chkPrime(x){
    for(var i = 2, s = Math.sqrt(x); i <= s; i++){
        if(x%i === 0) return false;
    }
    return x != 1;
}