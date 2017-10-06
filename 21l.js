var player = 0;
var comp = 0;
var total = 0;

alert("The game is simple. You add 1, 2 or 3 to the total, starting at 0. dont say 21, dingus.");

do{
	var player = 0;
	var comp = 0;
	var total = 0;

do{
	player = prompt("Say 1, 2 or 3 to add to the total.");
	if(player == 1){
		total = total+1;
		alert(total);
		total = total+3
		alert("computer added 3. yeet. total is now "+total)
	}
	else if(player == 2){
		total = total+2
		alert(total);
		total = total+2
		alert("computer added 3. yeet. total is now "+total)
	}
	else if(player == 3){
		total = total+3
		alert(total);
		total = total+1
		alert("computer added 3. yeet. total is now "+total)
	}
}
while(total < 20);
	
}
while(playAgain == "y");
