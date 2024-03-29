var s;
var scl = 20;
var food;
function setup() {
    createCanvas(1585,745);
    frameRate(10);
    pickLocation();
    s= new snake();
}
function draw(){
    background(30);
    s.death();
    s.update();
    s.show();
    if(s.eat(food)){
        pickLocation();
    }
    fill(255 , 0 ,50);
    rect(food.x, food.y, scl, scl)
}

function keyPressed() {
    if (keyCode === UP_ARROW){
        s.dir(0,-1);
    } else if (keyCode === DOWN_ARROW) {
        s.dir(0, 1);
    } else if (keyCode === LEFT_ARROW) {
        s.dir(-1,0);
    } else if (keyCode === RIGHT_ARROW) {
        s.dir(1, 0);
    }
}

function pickLocation(){
    var cols = floor(width / scl);
    var rows = floor(height / scl);
    food= createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}