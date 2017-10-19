//initialize variables
var count = 0; //where the game is
var steps = 0; // 1, 2 or 3
var games = []; //numbers counted
var player = ""; //person whose turn it is

do { // end at 21
	// call counting function for user
	player = "you";
	steps = prompt("Starting at "+count+"how many steps do you count (1-3")
	count = counting(player, count, steps);
	//call counting function for computer, at 2 steps each time
	player = "me";
	steps = 2; // temporary - computer always counts 2 steps
	count = counting(player,count,steps);
}
while(count<21);

alert("You Win!"); // temporary

//coutn and display function
function counting(player,current,steps){
	game=[];
	for (index=0;index<steps;index++) {
		games[index]=current+index+1;
	}
	alert(player+": "+games);
	current=parseInt(current)+parseInt(steps);
	return current;
}