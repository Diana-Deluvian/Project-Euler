$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = pentagonNumbers();
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below

function pentagonNumbers(){
	var currNumb = 0, chkNumb = 0;
	for(var i = 1;; i++){
		currNumb = calcPentagon(i);
		for(var j = 1; j < i; j++){
			chkNumb = calcPentagon(j);
			if(chkPentagon(currNumb + chkNumb) && chkPentagon(currNumb - chkNumb)) return currNumb - chkNumb;
			//this is the answer, but I could not think of a way to prove it is the smallest answer as otherwise the algorithm becomes too slow
		}
	}
}

function calcPentagon(n){
	return (n*(3*n-1)/2);
}

function chkPentagon(x){
	return Number.isInteger(Math.sqrt(1+24*x)) && Math.sqrt(1+24*x) % 6 === 5;
	// got this formula from DeeKaying @ LinkedIn, for a detailed explanation http://www.divye.in/2012/07/how-do-you-determine-if-number-n-is.html
}

/*calcPentagon+num+j*3+3 == calcPentagon(i+j+1) && calcPentagon-num-j*3 == calcPentagon(i-j-1)*/