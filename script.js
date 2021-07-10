// Canvas Settings
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

// Background
function drawBackground() {
    ctx.beginPath();
    ctx.fillStyle = "rgb(162, 179, 159)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.closePath();
}

class Baby {
    constructor(dx, dy) {
        this.x = dx;
        this.y = dy;
        this.nextX = null;
        this.nextY = null;
    }

    drawBaby() {
        ctx.save();

        // Tail
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.rect(this.x + 2, this.y -5, 10, 10);
        ctx.fill();
        ctx.closePath();

        //Nose
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.rect(this.x + 5, this.y + 12, 5, 5);
        ctx.fill();
        ctx.closePath();

        // Body
        ctx.beginPath();
        ctx.fillStyle = "brown";
        ctx.rect(this.x, this.y, 15, 15);
        ctx.fill();
        ctx.closePath();

        ctx.restore()
    }

    wander() {
        console.log(this.x, this.y, this.nextX, this.nextY);

        if (this.nextX === null && this.nextY === null) {
            this.nextX = Math.floor(Math.random() * canvas.width - 15);
            this.nextY = Math.floor(Math.random() * canvas.height - 15);
        } else if (this.nextX != this.x && this.nextY != this.y) {
            if (this.nextX < this.x) {
                this.x -= .5;
            } else if (this.nextX > this.x) {
                this.x += .5;
            }
            if (this.nextY < this.y) {
                this.y -= .5;
            } else if (this. nextY < this.y) {
                this.y += .5;
            }
        } else if (this.nextX === this.x && this.nextY === this.y) {
            this.nextX = null;
            this.nextY = null;
        } else if (this.nextX == this.x) {
            if (this.nextY < this.y) {
                this.y -= .5;
            } else if (this.nextY > this.y) {
                this.y += .5;
            }
        } else if (this.nextY == this.y) {
            if (this.nextX < this.x) {
                this.x -= .5;
            } else if (this.nextX > this.x) {
                this.x += .5;
            }
        }
        
    }

    update() {
        this.drawBaby()
    }

}



// River
function drawRiver() {
    ctx.beginPath();
    ctx.rect(0, 200, canvas.width, 60)
    ctx.fillStyle = "rgb(153, 218, 240)";
    ctx.fill();
    ctx.closePath();
}

// Food wood pile
function drawFood() {
    ctx.beginPath();
    ctx.arc()
}


// Nest
let nestWidth = 60;
let nestHeight = 60;
let nestX = (canvas.width - nestWidth - 60);
let nestY = (canvas.height - nestHeight - 400);

function drawNest() {
    // Nest base
    ctx.beginPath();
    ctx.arc(nestX + 30, nestY + 30, 50, 0, 2 * Math.PI);
    ctx.fillStyle = "rgb(163, 149, 140)"
    ctx.fill();
    ctx.closePath();

    // Nest box
    ctx.beginPath();
    ctx.rect(nestX, nestY, nestWidth, nestHeight);
    ctx.fillStyle = "rgb(219, 175, 132)";
    ctx.fill();
    ctx.closePath();

    // Nest entrance
    ctx.beginPath();
    ctx.rect(nestX + 20, nestY + 40, 20, 20);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

}

// Beaver Settings/Movements
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;

let beaverHeight = 20;
let beaverWidth = 20;
let beaverX = (canvas.width/2-beaverWidth);
let beaverY = (canvas.height/2-beaverHeight);

function drawBeaverUp() {
    // Body
    ctx.beginPath();
    ctx.rect(beaverX, beaverY, beaverWidth, beaverHeight);
    ctx.fillStyle = "brown";
    ctx.fill();
    ctx.closePath();
    // Tail
    ctx.beginPath();
    ctx.rect(beaverX+3, beaverY+20, beaverWidth-6, beaverHeight-5);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
    // Head
    ctx.beginPath();
    ctx.rect(beaverX+3, beaverY-10, beaverWidth-6, beaverHeight-5);
    ctx.fillStyle = "brown";
    ctx.fill();
    ctx.closePath();
    // Nose
    ctx.beginPath();
    ctx.rect(beaverX+7, beaverY-12, beaverWidth-15, beaverHeight-15);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}

function drawBeaverRight() {
    // Body
    ctx.beginPath();
    ctx.rect(beaverX, beaverY, beaverWidth, beaverHeight);
    ctx.fillStyle = "brown";
    ctx.fill();
    ctx.closePath();
    // Tail
    ctx.beginPath();
    ctx.rect(beaverX-13, beaverY+3, beaverWidth-6, beaverHeight-5);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
    // Head
    ctx.beginPath();
    ctx.rect(beaverX+18, beaverY+3, beaverWidth-6, beaverHeight-5);
    ctx.fillStyle = "brown";
    ctx.fill();
    ctx.closePath();
    // Nose
    ctx.beginPath();
    ctx.rect(beaverX+30, beaverY+7, beaverWidth-15, beaverHeight-15);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}

function drawBeaverDown() {
   // Body
   ctx.beginPath();
   ctx.rect(beaverX, beaverY, beaverWidth, beaverHeight);
   ctx.fillStyle = "brown";
   ctx.fill();
   ctx.closePath();
   // Tail
   ctx.beginPath();
   ctx.rect(beaverX+3, beaverY-15, beaverWidth-6, beaverHeight-5);
   ctx.fillStyle = "black";
   ctx.fill();
   ctx.closePath();
   // Head
   ctx.beginPath();
   ctx.rect(beaverX+3, beaverY+15, beaverWidth-6, beaverHeight-5);
   ctx.fillStyle = "brown";
   ctx.fill();
   ctx.closePath();
   // Nose
   ctx.beginPath();
   ctx.rect(beaverX+7, beaverY+28, beaverWidth-15, beaverHeight-15);
   ctx.fillStyle = "black";
   ctx.fill();
   ctx.closePath();
}

function drawBeaverLeft() {
    // Body
    ctx.beginPath();
    ctx.rect(beaverX, beaverY, beaverWidth, beaverHeight);
    ctx.fillStyle = "brown";
    ctx.fill();
    ctx.closePath();
    // Tail
    ctx.beginPath();
    ctx.rect(beaverX+20, beaverY+3, beaverWidth-6, beaverHeight-5);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
    // Head
    ctx.beginPath();
    ctx.rect(beaverX-10, beaverY+3, beaverWidth-6, beaverHeight-5);
    ctx.fillStyle = "brown";
    ctx.fill();
    ctx.closePath();
    // Nose
    ctx.beginPath();
    ctx.rect(beaverX-13, beaverY+8, beaverWidth-15, beaverHeight-15);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}


function keyDownHandler(e) {
    if(e.keyCode === 37) {
        leftPressed = true;
    } else if (e.keyCode === 38) {
        upPressed = true;
    } else if (e.keyCode === 39 ) {
        rightPressed = true;
    } else if (e.keyCode === 40) {
        downPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode === 37) {
        leftPressed = false;
    } else if (e.keyCode === 38) {
        upPressed = false;
    } else if (e.keyCode === 39 ) {
        rightPressed = false;
    } else if (e.keyCode === 40) {
        downPressed = false;
    }
}

let setBeaverRotation = drawBeaverLeft;

let babyOne = new Baby(canvas.width/2, canvas.height/2);
let babyTwo = new Baby(canvas.width/2 -30, canvas.height/2 + 30);
let babyThree = new Baby(canvas.width/2 - 30, canvas.height/2 - 30);
let babyFour = new Baby(canvas.width/2 + 30, canvas.height/2 + 30);
let babyFive = new Baby(canvas.width/2+ 60, canvas.height/2 - 60);
let babySix = new Baby(canvas.width/2, canvas.height/2);
let babySeven = new Baby(canvas.width/2 -30, canvas.height/2 + 30);
let babyEight = new Baby(canvas.width/2 - 30, canvas.height/2 - 30);
let babyNine = new Baby(canvas.width/2 + 30, canvas.height/2 + 30);
let babyTen = new Baby(canvas.width/2+ 60, canvas.height/2 - 60);

let babies = [babyOne, babyTwo, babyThree, babyFour, babyFive, babySix, babySeven, babyEight, babyNine, babyTen];

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    drawBackground();
    drawRiver();
    drawNest();
    setBeaverRotation();
    for (let j = 0; j < babies.length; j++) {
        babies[j].update()
    }

    if (rightPressed) {
        beaverX += 1;
        setBeaverRotation = drawBeaverRight;
        if (beaverX + beaverWidth > canvas.width) {
            beaverX = canvas.width - beaverWidth;
        }
        for (let i = 0; i < babies.length; i++) {
            if (beaverX + 10 >= babies[i].x && (beaverY <= babies[i].y + 10 && beaverY >= babies[i].y  - 10 && beaverX <= babies[i].x + 10 && beaverX >= babies[i].x  - 10)) {
                for (j = 0; j < babies.length; j++) {
                    if (babies[i] != babies[j] && (babies[i].x + 10 >= babies[j].x && (babies[i].y <= babies[j].y + 10 && babies[i].y >= babies[j].y  - 10))) {
                        babies[i].x += 1;
                        babies[j].x = babies[i].x + 40;
                    } else {
                        babies[i].x += 2;
                    }
                }
            }
        }
    }
    else if (leftPressed) {
        setBeaverRotation = drawBeaverLeft;
        beaverX -= 1;
        if (beaverX < 0) {
            beaverX = 0;
        }
        for (let i = 0; i < babies.length; i++) {
            if (beaverX - 10 <= babies[i].x && (beaverY <= babies[i].y + 10 && beaverY >= babies[i].y  - 10 && beaverX <= babies[i].x + 10 && beaverX >= babies[i].x  - 10)) {
                for (j = 0; j < babies.length; j++) {
                    if (babies[i] != babies[j] && (babies[i].x - 10 <= babies[j].x && ( babies[i].y <= babies[j].y + 10 && babies[i].y >= babies[j].y  - 10 && babies[i].x <= babies[j].x + 10 && babies[i].x >= babies[j].x - 10))) {
                        babies[i].x -= 1;
                        babies[j].x = babies[i].x - 40;
                    } else {
                        babies[i].x -= 2;
                    }
                }
            }
        }

    } else if (upPressed) {
        setBeaverRotation = drawBeaverUp;
        beaverY -= 1;
        if (beaverY < 0) {
            beaverY = 0;
        }
        for (let i = 0; i < babies.length; i++) {
            if (beaverY - 10 <= babies[i].y && (beaverY <= babies[i].y + 10 && beaverY >= babies[i].y  - 10 && beaverX <= babies[i].x + 10 && beaverX >= babies[i].x  - 10)) {
                for (j = 0; j < babies.length; j++) {
                    if (babies[i] != babies[j] && (babies[i].y - 10 <= babies[j].y && ( babies[i].y <= babies[j].y + 10 && babies[i].y >= babies[j].y - 10 && babies[i].x <= babies[j].x + 10 && babies[i].x >= babies[j].x - 10))) {
                        babies[i].y -= 1;
                        babies[j].y = babies[i].y - 40;
                    } else {
                        babies[i].y -= 2;
                    }
                }
            }
        }
        
    } else if (downPressed) {
        setBeaverRotation = drawBeaverDown;
        beaverY += 1;
        if (beaverY > canvas.height - beaverHeight) {
            beaverY = canvas.height - beaverHeight;
        }
        for (let i = 0; i < babies.length; i++) {
            if (beaverY + 10 >= babies[i].y && (beaverY <= babies[i].y + 10 && beaverY >= babies[i].y  - 10 && beaverX <= babies[i].x + 10 && beaverX >= babies[i].x  - 10)) {
                for (j = 0; j < babies.length; j++) {
                    if (babies[i] != babies[j] && (babies[i].x + 10 >= babies[j].x && (babies[i].y <= babies[j].y + 10 && babies[i].y >= babies[j].y  - 10 && babies[i].x <= babies[j].x + 10 && babies[i].x >= babies[j].x - 10))) {
                        babies[i].y += 1;
                        babies[j].y = babies[i].x + 40;
                    } else {
                        babies[i].y += 2;
                    }
                }
            }
        }
    }

    for (let k = 0; k < babies.length; k++) {
        babies[k].wander();
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

let interval = setInterval(draw, 5);