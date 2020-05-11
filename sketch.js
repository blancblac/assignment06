
let statue, img, title;
let s, mouseX, mouseY, mouseZ;
let spotPos, spotDir, modelPos;
let mrot, srot;
let song;
let loading = true;

function preload() {
statue = loadModel("assets/Full_Body.obj");
s = loadModel("assets/1.obj");
img = loadImage('assets/coldplay02.png');
soundFormats('mp3', 'ogg');
title = loadImage('assets/disco.jpg');
song = loadSound('assets/stayin alive.mp3'); 
musik= song;
}

function setup() {
createCanvas(windowWidth, windowHeight, WEBGL);

//musik.play();
spotPos = new p5.Vector(200, 0, 200);
modelPos = new p5.Vector(0, 80, 0);
mode = 0;
mrot = 0, srot=0;
if (loading) {
  //background(255);
  push();
  frameRate(1);
  texture(title);
  plane(windowWidth, windowHeight, 200, 200);
// plane is drawn on xy plane
  pop();
  
} else {
  setTimeout (draw, 2000);

}
  
}
//function mousePressed
function draw() {
frameRate(60);
colorMode(RGB);
background(0);
lights(); 
//camera(0, 190, 80, 0, 0, 0, 0, 1, 0);
camera(0, 190, 80, 0, 0, 0, 0, 1, 0);
// setup lighting
srot += 0.01;
spotPos.x = 200*cos(srot);
spotPos.y = 200*sin(srot);
spotDir = p5.Vector.sub(modelPos, spotPos);
colorMode(HSB, 360, 100, 100);
//spotLight(10, 100, 100, spotPos, spotDir, radians(PI/2));
spotLight(10, 100, 100, spotPos, spotDir, radians(5), 1);
//spotLight(10, 100, 100, 200,0,0, 100,100,0, radians(10));
//directionalLight(0, 10, 100, 10, mouseY*2, 40);
pointLight(0, 10, 20, 60, -50, 10); 
// draw a grid on xy plane
colorMode(RGB); 
noStroke();
//rect(200,200,200,200);

//fill(255);
push();
//fill(255);
texture(img);
plane(400, 300, 200, 200);
// plane is drawn on xy plane
pop();
// draw statue

push();
translate(modelPos);
rotateX(PI / 2);
rotateY(PI);
scale(0.1);
specularMaterial(255,255,255);
//fill(255);
model(statue);
pop();
  
push();
translate(30,70,0);
rotateX(PI / 2);
rotateY(PI);
scale(0.1);
fill(220, 105, 107);
model(s);
pop();
  
push();
translate(-30,70,0);
pointLight(20,0,100,-50,60,-40);
rotateX(PI / 2);
rotateY(PI);
scale(0.1);
specularMaterial(61, 91, 163);
model(s);
pop();

push();
translate(-60,50,0);
ambientLight(0,30,10);
rotateX(PI/2);
rotateY(PI);
//rotateY(frameCount * 0.01);
scale(0.1);
specularMaterial(10,0, 120);
//fill(50);
model(s);
pop();
  
push();
translate(60,50,0);
rotateX(PI/2);
rotateY(PI);
scale(0.1);
//fill(231, 217, 154);
specularMaterial(231, 217, 154);
model(s);
pop();

push();
pointLight(100,100,10, 60,50,10);
stroke(10,0,100);
strokeWeight(0.5);
ambientLight(0,0,10);
//specularColor(2,79,11);
specularMaterial(20, random(0, 200), random(100, 255));
translate(0, 0, 60);
rotateZ(frameCount * 0.01);
//rotateX(frameCount * 0.01);
rotateX(PI/2);
//rotateY(frameCount * 0.01);
sphere(30);
pop();
}
//pointLight(255, 0, 0, mouseX, mouseY, 64);
//pointLight(0, 0, 255, mouseX*2, mouseY/2, 64);
//mrot += 0.02;