$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = fifthPowers();
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below

function fifthPowers() {
    var fifthpowerarr = [];
    var num, temp;
    var sum = 0;
    for(var i = 0; i < 10; i++){
        fifthpowerarr.push(Math.pow(i, 5));
    }
    console.log(fifthpowerarr);
    var max = 6*fifthpowerarr[9];
    // as we need at least 7 digits to get millions, and the maximum output of 6 digits is less than that, the maximum number we can achieve is 6 9^5

    console.log(max);
    for(var i = 0; i < max; i++){
        temp = 0;
        num = "";
        num += i;
        num.split("");
        for(var j =0; j < num.length; j++){
            temp += fifthpowerarr[num[j]];
        }
        if(temp === i) sum+= i;

    }

    return sum-1;
    // 1 is not included as specified in the problem
}