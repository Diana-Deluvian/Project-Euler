$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = reciprocalCycles(1000);
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below

function reciprocalCycles(x){
var sequenceLength = 0;
// we check the unique number we get with every division since at one point they will start repeating
// the length of repetition can only be as long as there are unique combinations of numbers to divide, therefore we dont need to check the numbers once sequenceLength
// becomes larger than i
 
for (var i = 1000; i > 1; i--) {
    if (sequenceLength >= i) {
        break;
    }
 
    var foundRemainders = new Array(i);
    foundRemainders.fill(0);
    var value = 1;
    var position = 0;
 
    while (foundRemainders[value] == 0 && value != 0) {
        foundRemainders[value] = position;
        value *= 10;
        value %= i;
        position++;
    }
 
    if (position - foundRemainders[value] > sequenceLength) {
        sequenceLength = position - foundRemainders[value];
    }
    return i;
}
}