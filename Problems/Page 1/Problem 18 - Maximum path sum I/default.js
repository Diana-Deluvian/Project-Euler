$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = largestPath();
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below

function largestPath(){
var arrayofTriangle = {
	0:  [75], 
	1:  [95, 64],
	2:	[17, 47, 82],
	3:	[18, 35, 87, 10],
	4:	[20, 04, 82, 47, 65],
	5:	[19, 01, 23, 75, 03, 34],
	6:	[88, 02, 77, 73, 07, 63, 67],
	7:	[99, 65, 04, 28, 06, 16, 70, 92],
	8:	[41, 41, 26, 56, 83, 40, 80, 70, 33],
	9:	[41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
	10:	[53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
	11:	[70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
	12:	[91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
	13:	[63, 66, 04, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
	14:	[04, 62, 98, 27, 23, 09, 70, 98, 73, 93, 38, 53, 60, 04, 23]
	}

	//the initial input, formatted

	for (var i = 0; i < 14; i++){
		while(arrayofTriangle[i].length < 15){
			arrayofTriangle[i].push(0);
		}
	}
	// making this an even matrix so we can find the answer in a bottom-up manner

	for(i = 13; i >= 0; i--){
		for(var j = 0; j < 14; j++){
			arrayofTriangle[i][j] += Math.max(arrayofTriangle[i+1][j], arrayofTriangle[i+1][j+1])
		}
	}
	return Math.max(...arrayofTriangle[0])
}
