
var r = [20, 122, 0, 256, 204];
var g = [193, 151, 255, 64, 20];
var b = [204, 153, 127, 87, 134];
var count = 0;

function setup() {
   var myCanvas = createCanvas(innerWidth, innerHeight);
    myCanvas.parent('myContainer');
}

function draw() {
    //textSize(32);
   // text(" PRESS ENTER TO BEGIN DRAWING AND TO CHANGE COLORS.PRESS SHIFT TO CLEAR CANVAS.", 10, 60);
    if(mouseIsPressed){
        noStroke();
        ellipse(mouseX, mouseY, 80, 80);
    }
}

function keyPressed(){
    if(keyCode == SHIFT){
       clear();
    }
    
     if(keyCode == ENTER){
            noStroke();
            fill(r[count], g[count], b[count]);
            ellipse(mouseX, mouseY, 80, 80);
            redraw();
        if(count < 5){
            count++;
        }
        
        else{
            count = 0;
        }
        
     }
}