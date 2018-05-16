$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = subStringDivision();
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below

function subStringDivision(){
	var sum = 0;
	var divisors = [11,13,17];
	// need to write more specific checkers for the other numbers as they can fit into numbers more than once
	// for example: 7 fits into 56 as 560 or 567
	for(var two = 12; two < 1000; two += 2){
		var temp = "";
		if( two < 99) temp += 0;
		temp += two;
		for(var three = contChk(temp, 3); three < 10; three += 3){
			var temp3 = temp;
			temp3 += three;
			for(var five = contChk(temp3, 5); five < 10; five += 5){
				var temp5 = temp3;
				temp5 += five;
				for(var seven = contChk(temp5, 7); seven < 10; seven += 7){
					var temp7 = temp5;
					temp7 += seven;
					for(var j = 0; j < divisors.length; j++){
						if(contChk(temp7, divisors[j]) === false ) break;
						else {
						temp7 += contChk(temp7, divisors[j]);
						}
					}
					if(new Set(temp7.split("")).size === 9) {
						for(var m = 0; m < 9; m++){
							if(temp7.indexOf(m) === -1) {
								sum += Number(m + temp7);
							}
						}
					}
				}
			}
		}
	}
	return sum;
}


function contChk(x, div){
	for(var i = 0; i < 10; i++){
		if(Number(x[x.length-2] + x[x.length-1] + i) % div === 0) return i;
	}
	return false;
}

// DEPRECATED CODE

/*function subStringDivision(){
	var sum = 0;
	var divisors = [2,3,5,7,11,13,17];
	var divisorAll = {};
	for(var i = 0; i < divisors.length; i++){
		divisorAll[divisors[i]] = [];
		for(var j = 0; j < 1000; j++){
			if(j % divisors[i] === 0 && j > 9) divisorAll[divisors[i]].push(j+"");
		}
	}
	console.log(divisorAll)
	for(var i = 0; i < divisors.length; i++){
		for(var j = 0; j < divisorAll[divisors[i]].length; j++){
			var temp = "";
			if(i === 0 && divisorAll[divisors[i]][j] < 2){
				temp += 0;

			}
			for(var k = 1; k < divisorAll[divisors[i]].length; k++){
				if(temp[temp.length] == divisorAll[divisors[j]][1] && temp[temp.length-1] == divisorAll[divisors[j]][0]){
					temp += divisorAll[divisors[j]][2];
					break;
				}
			}
			console.log(temp);
		}
	}
}*/