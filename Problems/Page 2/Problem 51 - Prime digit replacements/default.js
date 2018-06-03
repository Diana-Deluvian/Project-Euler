$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = primeDigitReplacement();
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below

function primeDigitReplacement() {
	var arrofones = [11, 111, 1111, 11111, 111111];
	var str = '012'
	// can never be just 1 digit because that always gets us numbers divisible by 3
	// can never be two digits because that always gives us at least 2 numbers divisble by 3
	// so it must be either 3, 6 and so on digits
	for(var i = 1001, j, lastChar, chars ; i < 1000000; i+=2){
		var j  = i + "";
		lastChar = j.slice(-1);
		chars = j.slice(0, -1);
		var a = chars.match(/[0]/g);
		var b = chars.match(/[1]/g);
		var c = chars.match(/[2]/g);
		var a1 = a !== null && a.length ===3;
		var b1 = b !== null && b.length ===3;
		var c1 = c !== null && c.length ===3;
		var num = a1 ? 0 : (b1 ? 1 : (c1 ? 2 : false));
		if(num && isPrime(i)){
			var regex = new RegExp(`[${num}]`, 'g');
			for(var k = 0, counter = 0, s; k < 10; k++){
				s = chars.replace(regex, k) + lastChar;
				if(isPrime(Number(s))){
					counter++;
				}
			}
			if(counter === 8) console.log(i);
		}

	}
}
	
// pretty frustrated with this problem, as the wording is misleading ***109 and ***857 are answers, and smaller than the actual answer
// imperfect algorithm as it missed the 111109 as prime


for(var i = 3; i < 100; i++){
    if(isPrime(i)){
      var counter = 0;
        for(var j = 1; j < 10; j++){

      }
  }
}


function isPrime(x){
    for(var i = 2, s = Math.sqrt(x); i <= s; i++){
      if(x%i === 0) return false;
  }
  return x != 1;
}