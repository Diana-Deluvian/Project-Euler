$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = CentralBinomCoeff(20);
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below
var counter = 0;
function findPath(x){
	var arr = new Array(x);
	for(var i = 0; i < x; i++){
		arr[i] = new Array(x);
		arr[i].fill(1, 0);
	}
	// each '1' in the above array represents a corner, so if we plug in x =3, we will have a 2x2 box grid
	console.log(arr);
	var counter = 0;
	// x-1 below because the number of number of boxes is number of corners - 1
	checkPaths(arr, 0, 0, x-1);
	return counter;
}


function checkPaths(arr, j, k, x){
	if(arr[j+1]){
		checkPaths(arr, j+1, k, x);
	}
	if(arr[k+1]){
		checkPaths(arr, j, k+1, x);
	}
	checkExit(j, k, x);
}

function checkExit(j, k, x){
	//console.log(j, k, x);
	if(j==x && k ==x-1){
		counter++;
	}
	if(j==x-1 && k == x){
		counter++;
	}
}

// after running this for a few small numbers, I realized there was a pattern(as expected)
//I checked and confirmed that this was part of the Central binomial coefficients
// Which leads me to the solution below

function CentralBinomCoeff(x){
	var total = 1;
	for(var i = 1; i <= x; i++){
		total *=(x+i);
		console.log(total);
		total /= i;
		console.log(total);
	}
	return total;
}