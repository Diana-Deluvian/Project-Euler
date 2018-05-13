$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = pandigitalProducts();
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below


function pandigitalProducts(){
    var arrofNums = [1];
    var highest = 0;
    for(var i = 2; i<6 ;i++){
        arrofNums.push(i);
        var max = Math.pow(10, 6-i);
        for(var j = max/10; j < max; j++){
            var num = "";
            for(var k = 0; k < i; k++){
                num += j*arrofNums[k];
            }
            if(num.length === 9 && num.indexOf("0") === -1){
                if(chkPalin(num)){
                    if(highest < Number(num)) highest = Number(num); 
                }
            }
        }
    }

    return highest;
}



function chkPalin(x){
    return 9 === new Set(x.split("")).size;
}