$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = distinctPowers(101);
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below

function distinctPowers(x){
    var sum = 0;
    var arr = [];
    for(var a = 2; a < x; a++){
        for(var b = 2; b < x; b++){
            sum++;
        }
    }
    // max unique numbers
    var powsof2 = [1,2,3,4,5,6] //[2,4,8,16,32,64];
    var powsof3 = [1,2,3,4] //[3,9,27,81];
    var powsof5 = [1,2] //[5,25];
    var powsof6 = [1,2] //[6,36];
    var powsof7 = [1,2] //[7,49];
    var powsof10 = [1,2] //[10, 100];

    // identify the numbers which can have repetitions (those of the same base below 100), substract them from the base (they are 18) and calculate the
    // uniques separately


    return 99*(99-18) + eliminatorOfRepetition(powsof2, x) + eliminatorOfRepetition(powsof3, x) + 4*(eliminatorOfRepetition(powsof5, x));

    // no difference between 5, 6, 7, 10
}

function eliminatorOfRepetition(arr, x){
    // this function simply breaks down the big numbers into powers of 2, and eliminates the repetition
    // for example 64 is 2 to the power of 6, so 64 to the power of 2 is the same as 2 to the power of 12
    // the below function uses a set (all values must be unique) to check all the unique ways we can get a power of 2 (or the number plugged in)
    
    var set = new Set();
    for(var i = 1; i <= arr.length; i++){
        for(var j = 2; j < x; j++){
            set.add(j*arr[i-1]);
        }
    }
    return set.size;
}

/*2,3,5,7,10 - 99
4,9,16,25,36,49 - 49
8,27 = 1/3 + 1/6 - 49
16, 81 = 1/ 4+ 1/6 + 1/12 
32 = 1/5 + 1/5 + 1/20 + 1/15
64 = 1/6 + 1/6 + 1/6 + 1/30 + 1/12
*/