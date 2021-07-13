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


class Score {
    constructor() {
        this.score = 0;
    }

    getScore() {
        return this.score;
    }

    adjustScore(points, mult) {
        this.score += (points * mult);
    }

    update(points, mult) {
        this.adjustScore(points, mult);
    }
}

class Hazard {
    constructor(dx, dy) {
        this.x = dx;
        this.y = dy;
        this.active = false;
    }

    activate() {
        this.active = true;
    }

    deactivate() {
        this.activate = false;
    }
}

class Fire extends Hazard {
    constructor(dx, dy) {
        super(dx, dy);
        this.width = 30;
        this.height = 30;
        this.cycle = true;
    }

    drawFire() {
        if (this.cycle === true) {
            ctx.save();

            ctx.beginPath();
            ctx.arc(this.x, this.y, 50, 0, 2* Math.PI);
            ctx.fillStyle = 'orangered';
            ctx.fill();
            ctx.closePath();

            ctx.restore();
        }
    }

    update() {
        this.drawFire();
    }
}

class Baby {
    constructor(dx, dy) {
        this.x = dx;
        this.y = dy;
        this.nextX = null;
        this.nextY = null;
        this.direction = 'left'
    }

    drawBaby() {
        if (this.direction === 'down') {
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

            ctx.restore();

        } else if (this.direction === 'up') {

            ctx.save();

            // Tail
            ctx.beginPath();
            ctx.fillStyle = "black";
            ctx.rect(this.x + 2, this.y + 12, 10, 10);
            ctx.fill();
            ctx.closePath();

            //Nose
            ctx.beginPath();
            ctx.fillStyle = "black";
            ctx.rect(this.x + 5, this.y - 4, 5, 5);
            ctx.fill();
            ctx.closePath();

            // Body
            ctx.beginPath();
            ctx.fillStyle = "brown";
            ctx.rect(this.x, this.y, 15, 15);
            ctx.fill();
            ctx.closePath();

            ctx.restore();

        } else if (this.direction === 'right') {
            ctx.save();

            // Tail
            ctx.beginPath();
            ctx.fillStyle = "black";
            ctx.rect(this.x -5, this.y +2, 10, 10);
            ctx.fill();
            ctx.closePath();

            //Nose
            ctx.beginPath();
            ctx.fillStyle = "black";
            ctx.rect(this.x + 13, this.y + 5, 5, 5);
            ctx.fill();
            ctx.closePath();

            // Body
            ctx.beginPath();
            ctx.fillStyle = "brown";
            ctx.rect(this.x, this.y, 15, 15);
            ctx.fill();
            ctx.closePath();

            ctx.restore();

        } else if (this.direction === 'left') {
            ctx.save();

            // Tail
            ctx.beginPath();
            ctx.fillStyle = "black";
            ctx.rect(this.x +10, this.y + 2, 10, 10);
            ctx.fill();
            ctx.closePath();

            //Nose
            ctx.beginPath();
            ctx.fillStyle = "black";
            ctx.rect(this.x -3, this.y + 5, 5, 5);
            ctx.fill();
            ctx.closePath();

            // Body
            ctx.beginPath();
            ctx.fillStyle = "brown";
            ctx.rect(this.x, this.y, 15, 15);
            ctx.fill();
            ctx.closePath();

            ctx.restore();
        }
    }

    wander() {

        if (this.nextX === null && this.nextY === null) {
            this.nextX = Math.floor(Math.random() * canvas.width - 15);
            this.nextY = Math.floor(Math.random() * canvas.height - 15);


        } else if (this.nextX != this.x && this.nextY != this.y) {
            if (this.nextX < this.x) {
                this.x -= .5;
                this.direction = 'left';
            } else if (this.nextX > this.x) {
                this.x += .5;
                this.direction = 'right';
            }
            else if (this.nextY > this.y) {
                this.y -= .5;
                this.direction = 'up';
            } else if (this. nextY < this.y) {
                this.y += .5;
                this.direction = 'down';
            }
        } else if (this.nextX === this.x && this.nextY === this.y) {
            this.nextX = null;
            this.nextY = null;
        } else if (this.nextX == this.x && this.nextY != this.y) {
            if (this.nextY < this.y) {
                this.y -= .5;
                this.direction = 'up';
            } else if (this.nextY > this.y) {
                this.y += .5;
                this.direction = 'down'; 
            }
        } else if (this.nextY == this.y && this.nextX != this.x) {
            if (this.nextX < this.x) {
                this.x -= .5;
                this.direction = 'right';
            } else if (this.nextX > this.x) {
                this.x += .5;
                this.direction = 'left';
            }
        }
        
    }

    interrupt() {
        this.nextX = null;
        this.nextY = null;
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

class Beaver {
    constructor() {
        this.beaverHeight = 20;
        this.beaverWidth = 20;
        this.beaverX = (canvas.width/2-this.beaverWidth);
        this.beaverY = (canvas.height/2-this.beaverHeight);
        this.direction = 'left'
    }

    drawBeaver() {
        if (this.direction === 'up') {
            // Body
            ctx.beginPath();
            ctx.rect(this.beaverX, this.beaverY, this.beaverWidth, this.beaverHeight);
            ctx.fillStyle = "brown";
            ctx.fill();
            ctx.closePath();
            // Tail
            ctx.beginPath();
            ctx.rect(this.beaverX+3, this.beaverY+20, this.beaverWidth-6, this.beaverHeight-5);
            ctx.fillStyle = "black";
            ctx.fill();
            ctx.closePath();
            // Head
            ctx.beginPath();
            ctx.rect(this.beaverX+3, this.beaverY-10, this.beaverWidth-6, this.beaverHeight-5);
            ctx.fillStyle = "brown";
            ctx.fill();
            ctx.closePath();
            // Nose
            ctx.beginPath();
            ctx.rect(this.beaverX+7, this.beaverY-12, this.beaverWidth-15, this.beaverHeight-15);
            ctx.fillStyle = "black";
            ctx.fill();
            ctx.closePath();
        } else if (this.direction === 'right') {
            // Body
            ctx.beginPath();
            ctx.rect(this.beaverX, this.beaverY, this.beaverWidth, this.beaverHeight);
            ctx.fillStyle = "brown";
            ctx.fill();
            ctx.closePath();
            // Tail
            ctx.beginPath();
            ctx.rect(this.beaverX-13, this.beaverY+3, this.beaverWidth-6, this.beaverHeight-5);
            ctx.fillStyle = "black";
            ctx.fill();
            ctx.closePath();
            // Head
            ctx.beginPath();
            ctx.rect(this.beaverX+18, this.beaverY+3, this.beaverWidth-6, this.beaverHeight-5);
            ctx.fillStyle = "brown";
            ctx.fill();
            ctx.closePath();
            // Nose
            ctx.beginPath();
            ctx.rect(this.beaverX+30, this.beaverY+7, this.beaverWidth-15, this.beaverHeight-15);
            ctx.fillStyle = "black";
            ctx.fill();
            ctx.closePath();
        } else if (this.direction === 'down') {
             // Body
            ctx.beginPath();
            ctx.rect(this.beaverX, this.beaverY, this.beaverWidth, this.beaverHeight);
            ctx.fillStyle = "brown";
            ctx.fill();
            ctx.closePath();
            // Tail
            ctx.beginPath();
            ctx.rect(this.beaverX+3, this.beaverY-15, this.beaverWidth-6, this.beaverHeight-5);
            ctx.fillStyle = "black";
            ctx.fill();
            ctx.closePath();
            // Head
            ctx.beginPath();
            ctx.rect(this.beaverX+3, this.beaverY+15, this.beaverWidth-6, this.beaverHeight-5);
            ctx.fillStyle = "brown";
            ctx.fill();
            ctx.closePath();
            // Nose
            ctx.beginPath();
            ctx.rect(this.beaverX+7, this.beaverY+28, this.beaverWidth-15, this.beaverHeight-15);
            ctx.fillStyle = "black";
            ctx.fill();
            ctx.closePath();
        } else if (this.direction === 'left') {
            // Body
            ctx.beginPath();
            ctx.rect(this.beaverX, this.beaverY, this.beaverWidth, this.beaverHeight);
            ctx.fillStyle = "brown";
            ctx.fill();
            ctx.closePath();
            // Tail
            ctx.beginPath();
            ctx.rect(this.beaverX+20, this.beaverY+3, this.beaverWidth-6, this.beaverHeight-5);
            ctx.fillStyle = "black";
            ctx.fill();
            ctx.closePath();
            // Head
            ctx.beginPath();
            ctx.rect(this.beaverX-10, this.beaverY+3, this.beaverWidth-6, this.beaverHeight-5);
            ctx.fillStyle = "brown";
            ctx.fill();
            ctx.closePath();
            // Nose
            ctx.beginPath();
            ctx.rect(this.beaverX-13, this.beaverY+8, this.beaverWidth-15, this.beaverHeight-15);
            ctx.fillStyle = "black";
            ctx.fill();
            ctx.closePath();
        }
    } 

    setBeaverRoatation( rotation ) {
        this.direction = rotation;
    }

    update() {
        this.drawBeaver();
    }

    setX( value ) {
        this.beaverX += value;
    }

    setY( value ) {
        this.beaverY += value;
    }

    getX( value ) {
        return this.beaverX;
    }

    getY( value) {
        return this.beaverY;
    }

    getWidth() {
        return this.beaverWidth;
    }

    getHeight() {
        return this.beaverHeight;
    }
}

// Beaver Settings/Movements
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;

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

let babies = [];

for (let i = 0; i < 20; i++) {
    babies.push(new Baby(canvas.width - 10, 50));
}

let fires = [new Fire(50, canvas.height - 50)]

let score = new Score();
let beaver = new Beaver();

let counter = 0;
let fireInterval = 1500;

function draw() {
    counter += 1;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    drawBackground();
    drawRiver();
    drawNest();
    for (let j = 0; j < fires.length; j++) {
        fires[j].update();
    }
    
    beaver.update();

    for (let j = 0; j < babies.length; j++) {
        babies[j].update()
    }

    if (rightPressed) {
        beaver.setX(2);
        beaver.setBeaverRoatation('right');
        if (beaver.getX() + beaver.getWidth() > canvas.width) {
            beaver.setX(canvas.width - beaver.getWidth());
        }
        for (let i = 0; i < babies.length; i++) {
            if (beaver.getX() + 20 >= babies[i].x && (beaver.getY() <= babies[i].y + 20 && beaver.getY() >= babies[i].y  - 20 && beaver.getX() <= babies[i].x + 20 && beaver.getX() >= babies[i].x  - 20)) {
                babies[i].interrupt();
                for (j = 0; j < babies.length; j++) {
                    if (babies[i] != babies[j] && (babies[i].x + 10 >= babies[j].x && (babies[i].y <= babies[j].y + 10 && babies[i].y >= babies[j].y  - 10))) {
                        babies[j].interrupt();
                        babies[i].x += 1;
                        babies[j].x = babies[i].x + 2;
                    } else {
                        babies[i].x += 1;
                    }
                }
            }
        }
    }
    else if (leftPressed) {
        beaver.setBeaverRoatation('left');
        beaver.setX(-2);
        if (beaver.getX() < 0) {
            beaver.setX(0);
        }
        for (let i = 0; i < babies.length; i++) {
            if (beaver.getX() - 20 <= babies[i].x && (beaver.getY() <= babies[i].y + 20 && beaver.getY() >= babies[i].y  - 20 && beaver.getX() <= babies[i].x + 20 && beaver.getX() >= babies[i].x  - 20)) {
                babies[i].interrupt();
                for (j = 0; j < babies.length; j++) {
                    if (babies[i] != babies[j] && (babies[i].x - 10 <= babies[j].x && ( babies[i].y <= babies[j].y + 10 && babies[i].y >= babies[j].y  - 10 && babies[i].x <= babies[j].x + 10 && babies[i].x >= babies[j].x - 10))) {
                        babies[j].interrupt();
                        babies[i].x -= 1;
                        babies[j].x = babies[i].x - 2;
                    } else {
                        babies[i].x -= 1;
                    }
                }
            }
        }

    } else if (upPressed) {
        beaver.setBeaverRoatation('up');
        beaver.setY(-2);
        if (beaver.getY() < 0) {
            beaver.setY(0);
        }
        for (let i = 0; i < babies.length; i++) {
            if (beaver.getY() - 20 <= babies[i].y && (beaver.getY() <= babies[i].y + 20 && beaver.getY() >= babies[i].y  - 20 && beaver.getX() <= babies[i].x + 20 && beaver.getX() >= babies[i].x  - 20)) {
                babies[i].interrupt();
                for (j = 0; j < babies.length; j++) {
                    if (babies[i] != babies[j] && (babies[i].y - 10 <= babies[j].y && ( babies[i].y <= babies[j].y + 10 && babies[i].y >= babies[j].y - 10 && babies[i].x <= babies[j].x + 10 && babies[i].x >= babies[j].x - 10))) {
                        babies[j].interrupt();
                        babies[i].y -= 1;
                        babies[j].y = babies[i].y - 2;
                    } else {
                        babies[i].y -= 1;
                    }
                }
            }
        }
        
    } else if (downPressed) {
        beaver.setBeaverRoatation('down');
        beaver.setY(2);
        if (beaver.getY() + beaver.getHeight() > canvas.height) {
            beaver.setY(canvas.height);
        }
        for (let i = 0; i < babies.length; i++) {
            if (beaver.getY() + 20 >= babies[i].y && (beaver.getY() <= babies[i].y + 20 && beaver.getY() >= babies[i].y  - 20 && beaver.getX() <= babies[i].x + 20 && beaver.getX() >= babies[i].x  - 20)) {
                babies[i].interrupt();
                for (j = 0; j < babies.length; j++) {
                    babies[j].interrupt();
                    if (babies[i] != babies[j] && (babies[i].x + 10 >= babies[j].x && (babies[i].y <= babies[j].y + 10 && babies[i].y >= babies[j].y  - 10 && babies[i].x <= babies[j].x + 10 && babies[i].x >= babies[j].x - 10))) {
                        babies[i].y += 1;
                        babies[j].y = babies[i].x + 2;
                    } else {
                        babies[i].y += 1;
                    }
                }
            }
        }
    }

    for (let k = 0; k < babies.length; k++) {
        for(f = 0; f < fires.length; f++) {
            if (babies[k].x <= fires[f].x + 50 && babies[k].x >= fires[f].x - 50 && babies[k].y <= fires[f].y + 50 && babies[k].y >= fires[f].y - 50) {
                babies = babies.filter(item => item !== babies[k])
                break;
            } else {
                babies[k].wander();
            }
        }
    }

    if (counter === fireInterval) {
        let newFire = new Fire(Math.floor(Math.random() * (canvas.width - 50)), Math.floor(Math.random() * (canvas.height - 50)));
        fires.push(newFire);
        fireInterval += 1500;
    }

    document.getElementById("counter").innerText = counter;
}


let scoreInterval = setInterval(() => {
    score.update(100, babies.length)
    document.getElementById("score").innerText = score.getScore();
    if (babies.length == 0) {
        if(!alert(`Game over! you scored ${score.getScore()}`)) {
            window.location.reload();
            clearInterval(scoreInterval);
            clearInterval(fireInterval);
        }
    } 
}, 1000)


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

let interval = setInterval(draw, 10);