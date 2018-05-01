$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = coinSums();
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below

function coinSums(){
    var max  = 200;
    var totalcombos = 0;
     
    for (var a = max; a >= 0; a -= 200) {
        for (var b = a; b >= 0; b -= 100) {
            for (var c = b; c >= 0; c -= 50) {
                for (var d = c; d >= 0; d -= 20) {
                    for (var e = d; e >= 0; e -= 10) {
                        for (var f = e; f >= 0; f -= 5) {
                            for (var g = f; g >= 0; g -= 2) {
                                totalcombos++;
                            }
                        }
                    }
                }
            }
        }
    }
    // the algorithm works as following: start with the max value, and slowly start taking out coins until you get to 0. we can always add up to 200 with 1s, that's why every
    // combination remains unique
    return totalcombos;
}
    // BELOW ARE EARLIER ATTEMPS AND OTHER DEPERCATED CODE

    // dont need to count 1 as we always use it to fill up to 200
    // it is trivial to see that the combinations of 1, 2 and 200 coins are 102
/*   var sum;
    var max;
    var coins = [5,10,20,50,100];
    var sum = 0;*/
/*    for (var i = 0; i < coins.length; i++){
        max = getMax(coins[i])
        for(var j = 1; j < max; j++){
            sum = j * coins[i];
            console.log(sum, totalcombos);
            while(sum < 201){
                sum += 2;
                totalcombos++;
            }
        }
    }
*/
/*for(var i = 0; i < 2; i++){
    for(var j = 0; j < 4; j++){
        for(var k = 0; k < 10; k++){
            for(var l = 0; l < 20; l++){
                for(var m = 0; m < 40; m++){
                    sum = getValue(coins, [m, l, k, j, i,]);
                        while(sum < 201){
                            sum += 2;
                            totalcombos++;
                        }
                    
                }
            }
        }
    }
}
*/

/*
function getValue(arrofCoins, coins){
    var sum = 0;
    for(var i = 0; i < arrofCoins.length; i++){
        sum += arrofCoins[i]*coins[i];
    }
    return sum;
}

function getMax(num){
    return 200 / num
}

*/