let h = 1;
let s = 1000;
let b = 1000;
let x;
let vhand;
let imgWidth = 40;
let imgHeight = 40;

function preload(){
}


function setup() {
  frameRate(30);
   createCanvas(windowWidth-100, windowHeight-100);
   imageMode(CENTER);
}

function draw() {

  background('#000033');
  for(let i=0;i<windowWidth-100;i+=50){
    for(let j=0;j<windowHeight-100;j+=50){
    strokeWeight(1);
    stroke('#000066');
    line(i,0,i,windowHeight-100);
    line(0,j,windowWidth-100,j);
    }
  }


}



function mousePressed(){
  console.log('clic');
  //image(vhand, mouseX,mouseY);
  explosion();
}

function windowResized() {
   resizeCanvas(windowWidth-100, windowHeight-100);
   console.log("largeur :" + windowWidth);
}

function explosion(){


}
