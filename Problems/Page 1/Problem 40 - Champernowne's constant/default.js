$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = ChampernownesConstant();
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below


function ChampernownesConstant(){
    var counter = 9;
    // the number of digits
    var j = 9;
    // the current number
    var k = 2;
    var product = 1;
    for(var i = 1; i < 7; i++){
        for(var m = 0; m < 9*Math.pow(10, i); m++){
            if(counter > Math.pow(10, k) && k < 7){
                product *= Number(((j-1)+"").split("").reverse()[counter-Math.pow(10, k)]);
                //take the number before the one that breached it
                //take reverse because we need to find out how 'deep' into the number we were
                k++;
            }
            j++;
            counter += i+1;
        }
    }
    return product;
}
