// JavaScript Document
window.onload = initAll;
var usedNums = new Array(76);

function initAll() {
if(document.getElementById){
	document.getElementById("reload").onclick=newCard;
	getCard();

	}else{
	alert("sorry!");
	}
}
	
	
function getCard(){
	var newNum;
	var colPlace=new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4);
	for (var i=0; i<24; i++) {
	colNum=colPlace[i]*15+1;
	do{
	 newNum = getRandomNum() + colNum;
	}
	while(usedNums[newNum])
	usedNums[newNum]=true;
	document.getElementById("square" + i).innerHTML = newNum;	
	document.getElementById("square"+i).className="";
	document.getElementById("square" + i).onmousedown=toggleColor;
}
}
	
function newCard(){
	for(var i=1;i<usedNums.length;i++){
		usedNums[i]=false;
		}
		getCard();
		return false;
	}

function getRandomNum(){
	return Math.floor(Math.random() * 15);
	}
function toggleColor(evt){
	if (evt) {
	var thisSquare = evt.target;
	}
	else {
	var thisSquare = window.event.srcElement;
	}
	if (thisSquare.className == "") {
	thisSquare.className = "pickedBG";
	}
	else {
	thisSquare.className = "";
	}
	checkWin();
}

function checkWin() {
	var winningOption = -1;
	var setSquares = 0;
	var winners = new Array(31,992,15360,507904,541729,557328,1083458,2162820,4329736,8519745,8659472,16252928);
	
	for (var i=0; i<24; i++) {
		var currSquare = "square" + i;
		if (document.getElementById (currSquare).className != "") {
			document.getElementById (currSquare).className = "pickedBG";
			setSquares = setSquares | Math.pow(2,i);
		}
	}
	
	for (var i=0; i<winners.length; i++) {
		if ((winners[i] & setSquares) == winners[i]) {
			winningOption = i;
			}
		}
	if (winningOption > -1) {
		for (var i=0; i<24; i++) {
			if (winners[winningOption] & Math.pow(2,i)) {
			currSquare = "square" + i;
			if(winners[winningOption]){
				document.getElementById("free").className= "winningBG";
				}
			document.getElementById (currSquare).className = "winningBG";
			}
		}
		alert("congratulations!you are BinGo!!");
		newCard();
		
	}
	
	
}