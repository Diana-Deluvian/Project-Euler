$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = findSum(1000000);
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below

function findSum(x){
	var arrofChecked = new Array();
	var numbersinChecked = new Array();
	var Mnumber;
	var counter = 0;
	for(var i = 1; i < x; i++){
		Mnumber = i;
		while(Mnumber != 1) {
			if (Mnumber%2 == 0){
				Mnumber = Mnumber/2;
				counter++;
			}
			else{
				Mnumber = Mnumber*3 + 1;
				counter++
			}
		}

		arrofChecked.push(i);
		numbersinChecked.push(counter);
		counter = 0;
	}
	var locationofnumber = 0;
	var highestiterations = 0;
	for(var i = 0; i < x; i++){
		if(highestiterations < numbersinChecked[i]){
			locationofnumber = i;
			highestiterations = numbersinChecked[i];
		}
	}
	console.log(arrofChecked, numbersinChecked);
	return arrofChecked[locationofnumber];
}

// Brute force but as it only takes a few seconds to calculate, I do not
// consider it a failure.