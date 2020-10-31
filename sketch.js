var database;
var totalPlayers, gameState;
var logo;
var FirstScreen;
var player;
function preload(){
	logo = loadImage("Images/logoJetFighterGame.png");
}

function setup() {
	createCanvas(1300, 700);

  database = firebase.database();

  FirstScreen = new firstScreen();
  player = new Player();
  player.getCount();
	
}


function draw() {
  
  background(rgb(255,0,0));
  
  FirstScreen.display();
 
}



