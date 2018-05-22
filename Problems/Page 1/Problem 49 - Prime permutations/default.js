$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = primePermutations();
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below

var permArr = [],
  usedChars = [],
  arr = [];

function primePermutations() {
	for(var i = 1000; i < 10000; i++){
		if(chkPrime(i)){
			permArr = [];
  			usedChars = [];
  			permute((i+"").split(""));
			if((i+"").split("").indexOf("0") === -1){
	  			for(var j = 0, arr=[]; j < permArr.length; j++){
	  				if(chkPrime(Number(permArr[j].join("")))){
	  					arr.push(permArr[j].join(""));
	  				}
	  			}
	  			arr.sort();
	  			for(var a = 0; a < arr.length; a++){
	  				var arrr = [];
		  			for(var k = a+ 1; k < arr.length; k++){
		  				var temp = Number(arr[k]) - Number(arr[a]);
		  				for(var m = k+1; m < arr.length; m++){
		  					if(Number(arr[m]) - Number(arr[k]) === temp) arrr.push(arr[a], arr[m], arr[k])
		  				} 
		  			}
		  			if(arrr.length > 0) {
		  				arrr.sort();
		  				var settt = new Set(arrr);
		  				if(!(settt.has("1487")) && settt.size > 1){
		  					console.log(settt);
		  					return Array.from(settt).join("");
		  				}
		  			}
		  		}
		  	}
		}
	}

}

function chkPrime(x){
	for(var i = 2, s = Math.sqrt(x); i <= s; i++){
		if(x % i === 0) return false;
	}
	return true;
	// dont need to check for one as we are only working with 4digit numbers
}


function permute(input) {
  var i, ch;
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    usedChars.push(ch);
    if (input.length == 0) {
      permArr.push(usedChars.slice());
    }
    permute(input);
    input.splice(i, 0, ch);
    usedChars.pop();
  }
  return permArr
};


// Really bad code, it works, but holy hell is it ugly
