$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = digitCancellingFractions();
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below


function digitCancellingFractions(){
    var answer = 0;
    var nums = ["1", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    var facts = [1,1];
    for(var i = 2; i < 10; i++){
        facts.push(facts[i-1]*i);
    }
    var checker;
    for(var j = 9; j < 3000000; j++){
        checker = j + "";
            //can never get a number with a 0 in it;
                var sum = 0;
                for(var k = 0; k < checker.length; k++){
                    sum += facts[Number(checker[k])];
                }
            if(j == sum){
                console.log(j);
                answer += j;
            }
    }
    return answer;

}

/*
    DEPRECATED CODE
    for(var i = 2; i < 4; i++){
        var k = -1;
        for(var j = 0; j < Math.pow(9, i); j++){
            if(j % Math.pow(9, i-1) == 0)k++;
            collection.push(collection[j%9] + collection[(j%9+k)%9]);
            nums.push("" + nums[j%9]+nums[(j%9+k)%9]);

            
             
        }
    }
    console.log(collection, nums);*/
/*    for(var i = 0; i < 9; i++){
        for(var j = 0; j < 9; j++){
            nums.push(nums[i] + nums[j]);
            collection.push(collection[i] + collection[j]);
        }
    }
    console.log(nums, collection);*/