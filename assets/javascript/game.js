var crystalVals = [];
var goal;
var score=0;
var wins=0;
var losses=0;
function reset(){
	for(i=0;i<4;i++){
		crystalVals[i]=Math.ceil(Math.random()*12);
	}
	goal=19+Math.floor(Math.random()*102);
	$("#randomNumber").html("Goal: "+goal);
	score=0;
	$("#score").html("Total Score: " + score);
}
function update(crystalVal){
	score+=crystalVal;
	$("#score").html("Total Score: " + score);
	if(score===goal){
		alert("You win!")
		wins++;
		$("#wins").html("Wins: "+wins);
		reset();
	}
	if(score>goal){
		alert("You lose!");
		losses++;
		$("#losses").html("Losses: "+losses);
		reset();
	}
}
$("#green").on("click", function(){update(crystalVals[0]);});
$("#purple").on("click", function(){update(crystalVals[1]);});
$("#red").on("click", function(){update(crystalVals[2]);});
$("#yellow").on("click", function(){update(crystalVals[3]);});
reset();