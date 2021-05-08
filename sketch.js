var hr , mn , sc
var hrangle , mnangle , scangle

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES)
}

function draw() {
  background(0);  
  fill("white")
  textSize(20)
  text("hr:"+hr+"mn:"+mn+"sc:"+sc,400,200)
  text("current time:",400,150)
  // calculating time using pre-defined function
  hr=hour()
  sc=second()
  mn=minute()
  //translation and rotation
  translate(200,200)
  rotate(-90)
  //to create iterative rotation
  scangle=map(sc,0,60,0,360)
  mnangle=map(mn,0,60,0,360)
  hrangle=map(hr%12,0,12,0,360)
  //drawing seconds hand
  push()
  rotate(scangle)
  stroke("red")
  strokeWeight(7)
  line(0,0,100,0)
  pop()
  //drawing minute hand
  push()
  rotate(mnangle)
  stroke("green")
  strokeWeight(7)
  line(0,0,75,0)
  pop()
  //drawing hour hand
  push()
  rotate(hrangle)
  stroke("blue")
  strokeWeight(7)
  line(0,0,50,0)
  pop()
  //drawing the arcs
  strokeWeight(10)
  noFill()
  stroke("red")
  arc(0,0,300,300,0,scangle)
  stroke("green")
  arc(0,0,280,280,0,mnangle)
  stroke("blue")
  arc(0,0,260,260,0,hrangle)
  
}