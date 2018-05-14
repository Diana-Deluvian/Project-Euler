$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = integerRightTriangles();
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below


function integerRightTriangles(){
    var powers = [];
    for(var i = 0; i < 501; i++){
        powers.push(Math.pow(i, 2));
    }
    var numOfTriangles = new Array(1001);
    numOfTriangles.fill(0);
    var a, b, c;
    for(c = 5; c < 501; c++){
        for(b = c -1; b > 0; b--){
            for(a = b-1; a > 0; a--){
                if(powers[c] === (powers[b] + powers[a])){
                    if(c+b+a < 1001){
                    numOfTriangles[c+b+a]++;
                    break;
                    }
                }
            }
        }
    }
    return numOfTriangles.indexOf(Math.max(...numOfTriangles));
}