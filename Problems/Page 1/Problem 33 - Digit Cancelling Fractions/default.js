$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = digitCancellingFractions();
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below

function digitCancellingFractions(){
    var answer = 1;
    for(var i = 1; i < 10; i++){
        var arr = [];
        var arrChk = [];
        for(var j = 1; j < 10; j++){
            arr.push(i*10 + j);
            arrChk.push(j);
        }
        for(var k = 1; k < 10; k++){
            arr.push(k*10 + i)
            arrChk.push(k);
        }
        for(var l = 0; l < arr.length; l++){
            for(var m = 0; m < arr.length; m++){
                if(arr[l]/arr[m] < 1 && arr[l]/arr[m] == arrChk[l]/arrChk[m]){
                    answer *= arrChk[l]/arrChk[m];
                }
            }
        }
    }
    return 1/answer;
}