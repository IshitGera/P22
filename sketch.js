var starImg,bgImg;
var star, starBody;
var fairy,fairyAnim;
var fairyImg;
//create variable for fairy sprite and fairyImg
var music;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyAnim = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	fairyImg = loadImage("images/fairy.png");
	//load animation for fairy here
	music = loadSound("sound/joyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	fairy = createSprite(130,500);
	fairy.addAnimation("running",fairyAnim);
	fairy.scale = 0.25;

	music.play();

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  if(star.y > 470 && starBody.position.y > 470){
	  Matter.Body.setStatic(starBody,true);
  }

  console.log(star.y);

  //write code to stop star in the hand of fairy

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
    if(keyCode === RIGHT_ARROW){
		fairy.x = fairy.x + 20;
	}
	if(keyCode === LEFT_ARROW){
		fairy.x = fairy.x - 20;
	}
	//writw code to move fairy left and right
	
}
