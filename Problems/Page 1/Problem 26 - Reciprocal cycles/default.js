$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = reciprocalCycles(1000);
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below

function reciprocalCycles(x){
	var max=0;
	for(var i = 2; i < x; i++){
		var temp = 0;
		temp = findRepetition(Divide(i)).length;
		if(max < temp ){
			max = temp;
			console.log(i);
			console.log(Divide(i));
		}  
	}
}
	

function Divide(x){
	var result = [];
	var divisor = 1;
	var tempNum = 0;
	for(; result.length < 1000;){
		tempNum = Math.floor(divisor/x);
		if(tempNum){
			result.push(tempNum);
			divisor -= tempNum*x;
			if(!divisor) break;
			tempNum = 0;
		}
		else {
			divisor*=10;
		}
	}
	return result;

}

function findRepetition(x){
	if(x.length < 1000) return 0;
	var firstDigit = x[0];
	var cpy = x.slice(1);
	var loc, loc2;
	var arr1, arr2 = [];
	arr1 = findInstance(cpy, firstDigit);
	cpy = cpy.slice(arr1.length);
	arr2 = findInstance(cpy, firstDigit);
	if(checkArrs(arr1, arr2))
	return arr1;
return 0;
}

function findInstance(x, digit) {
	return x.slice(0, x.indexOf(digit) +1);
}

function checkArrs(arr1, arr2){
	if(arr1.length==arr2.length && arr1.every((v,i)=> v === arr2[i])) return 1;
	return 0;
}



/*	for(var i = x.length / 2; i < cpy.length;){
		loc = cpy.indexOf(firstDigit);
		cpy = cpy.slice(loc);
		arr1 = x.slice(0, loc+1);
		loc2 = cpy.indexOf(firstDigit);
		arr2 = x.slice(loc+1, loc2+1);
		console.log(cpy, arr1, arr2);
		if(arr1.length==arr2.length && arr1.every((v,i)=> v === arr2[i])) break;
	}
	return arr1;
}
*/

// Maybe a recursive function ?