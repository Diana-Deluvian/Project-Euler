$( "#runSolution" ).click(function() {
	// Set the below variable to the end result of your calculation
	var answerOfCalculation = SmallestMultiple();
  $('#answer').text(answerOfCalculation);
});

//write code for calculations below

function SmallestMultiple(){
	for(var i = 2520; i > 1; i+=20){
		if(i%19 == 0){
			if(i%18 == 0){
				if(i%17 == 0){
					if(i%16 == 0){
						if(i%15==0){
							if(i%14 == 0){
								if(i%13 == 0){
									if(i%12 == 0){
										if(i%11 == 0){
											return i;
										}
									}
								}
							}
						}
						
					}
				}
			}
		}
	}

}

//1,2,3,4,5,6,7,8,9,10,11,12,13,14,15