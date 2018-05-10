$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = doubleBasePalins(1000000);
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below


function doubleBasePalins(x){
    var sum = 0;
    for(var i = 1; i < x; i++){
        if(chkPalin(i)){
            if(convertToBaseTwo(i)) sum += i;
        }
    }
    return sum;
}

function chkPalin(x) {
    var y = x.toString().split("").reverse().join("");
    return y == x;
}

function convertToBaseTwo(x) {
    var y = x.toString(2);
    return chkPalin(y);
}