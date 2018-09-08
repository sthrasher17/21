var player = 0;
var comp = 0;
var total = 0;

alert("The game is simple. You add 1, 2 or 3 to the total, starting at 0. dont say 21, dingus.");

do{
	var player = 0;
	var comp = 0;
	var total = 0;
	var computerAddValue;

do{
	player = parseInt(prompt("Say 1, 2 or 3 to add to the total."));
	
	if(player > 0 && player < 4)
	{
	computerAddValue = 4 - player;
	
	total = total + player;
	alert(total);
	total = total + computerAddValue;
	alert("computer added "+ computerAddValue +". yeet. total is now " + total)
	}
	else
	{
		alert("Hey asshole, I said 1, 2 or 3!!!!")
	}
}
while(total < 20);
	
}
while(playAgain == "y");
