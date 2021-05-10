var hr , HAngle;
var mn , MAngle;
var sd , SAngle;
function setup() {
  createCanvas(400,400);
  createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
}

function draw() {

  background(255,255,255); 
  translate(200,200);;
  rotate(-90);
 
   hr = hour();
   mn = minute();
   sd = second();

   SAngle =map(sd, 0,60,0,360);
   MAngle =map(mn, 0,60,0,360);
   HAngle =map(hr%12, 0,12,0,360);

   push();
   rotate(SAngle);
   stroke(255,0,0);
   strokeWeight(7);
   line(0,0,150,0);
   pop();

   push();
   rotate(MAngle);
   stroke(0,255,0);
   strokeWeight(7);
   line(0,0,100,0);
  pop();

  push();
   rotate(HAngle);
   stroke(0,0,255);
   strokeWeight(7);
   line(0,0,75,0);
   pop();

   noFill();
   stroke(255,0,0);
   strokeWeight(10);
   arc(0,0,300,300,0,SAngle);
   stroke(0,255,0);
   strokeWeight(5);
   arc(0,0,205,205,0,MAngle);
   stroke(0,0,255);
   strokeWeight(2.5);
   arc(0,0,160,160,0,HAngle);
   

}