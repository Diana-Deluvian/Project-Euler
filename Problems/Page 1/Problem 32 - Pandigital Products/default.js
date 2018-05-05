$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = pandigitalProducts();
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below

function pandigitalProducts(){
    // after a bit of thinking, the max number we need to check cannot be 10 000 or over, because that would require us to use more than 9 digits
    var max = 10000;
    var sum = 0;
    for(var i = 0; i < max; i++){
        if(findDivisors(i)) sum+=i;
    }
    return sum;
}
   

function stringer(arr){
    return arr.toString().replace(",", "").replace(",", "");
    // replace twice because we have two multipliers
}

function findDivisors(num){
    for(var i = 2; i < num/2; i++){
        if(num % i == 0 ){
            var arr = stringer([num, i, num/i]);
            if(checkPandigital(arr)){
                return true;
            }
        }
    }
    return false;
}


function checkPandigital(arr) {
    var x = stringer(arr);
    var check = new Set(x.split(""));
    //using a set beceause it automatically removes duplicates
    if(check.size == 9) {
        if(!check.has("0")){
            // check if we have 9 unique digits and 0 isn't one of them
            console.log(check);
            return true;
        }
        
    }
    return false;
}