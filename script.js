// Canvas Settings
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

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
        this.fireInterval = 1500;
        this.fireCounter = 0;
    }

    drawFire() {
        ctx.save();

        ctx.beginPath();
        ctx.arc(this.x, this.y, 50, 0, 2* Math.PI);
        ctx.fillStyle = 'orangered';
        ctx.fill();
        ctx.closePath();

        ctx.restore();
    }

    getFireInterval() {
        return this.fireInterval;
    }

    getFireCounter() {
        return this.fireCounter;
    }

    increaseFireCounter() {
        this.fireCounter += 1
    }

    resetFireCounter() {
        this.fireCounter = 0;
    }

    releaseFire() {
        if (this.fireCounter !== this.fireInterval) {
            this.increaseFireCounter();
            return false;
        }
        
        this.resetFireCounter();
        return true;
    }

    update() {
        this.drawFire();
    }
}

class Beaver {
    constructor() {
        this.beaverHeight = 20;
        this.beaverWidth = 20;
        this.beaverX = (canvas.width/2-this.beaverWidth);
        this.beaverY = (canvas.height/2-this.beaverHeight);
        this.direction = 'left'
        this.beaverSpeed = 3;
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

    setBeaverRotation( rotation ) {
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

    getBeaverSpeed() {
        return this.beaverSpeed;
    }

    collision(object) {

        if (this.getX() <= object.getX() + this.beaverWidth &&
            this.getX() >= object.getX() - this.beaverWidth &&
            this.getY() <= object.getY() + this.beaverHeight &&
            this.getY() >= object.getY() - this.beaverHeight) {
                return true;
            }
        return false
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

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    setX(value) {
        this.x += value;
    }

    setY(value) {
        this.y += value;
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

class Background {
    constructor() {
        this.nestX = (canvas.width - 120);
        this.nestY = (canvas.height - 460);
    }

    drawRiver() {
        ctx.beginPath();
        ctx.rect(0, 200, canvas.width, 60)
        ctx.fillStyle = "rgb(153, 218, 240)";
        ctx.fill();
        ctx.closePath();
    }

    drawBackground() {
        ctx.beginPath();
        ctx.fillStyle = "rgb(162, 179, 159)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.closePath();
    }

    drawNest() {
        // Nest base
        ctx.beginPath();
        ctx.arc(this.nestX + 30, this.nestY + 30, 50, 0, 2 * Math.PI);
        ctx.fillStyle = "rgb(163, 149, 140)"
        ctx.fill();
        ctx.closePath();
    
        // Nest box
        ctx.beginPath();
        ctx.rect(this.nestX, this.nestY, 60, 60);
        ctx.fillStyle = "rgb(219, 175, 132)";
        ctx.fill();
        ctx.closePath();
    
        // Nest entrance
        ctx.beginPath();
        ctx.rect(this.nestX + 20, this.nestY + 40, 20, 20);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();
    
    }

    update() {
        this.drawBackground();
        this.drawNest();
        this.drawRiver();
    }
}

class Controls {
    constructor() {
        this.rightPressed = false;
        this.leftPressed = false;
        this.upPressed = false;
        this.downPressed = false;
    }

    getRightPressed() {
        return this.rightPressed;
    }

    getLeftPressed() {
        return this.leftPressed;
    }

    getUpPressed() {
        return this.upPressed;
    }

    getDownPressed() {
        return this.downPressed;
    }

    setRightPressed(boolean) {
        this.rightPressed = boolean;
    }

    setLeftPressed(boolean) {
        this.leftPressed = boolean;
    }

    setUpPressed(boolean) {
        this.upPressed = boolean;
    }

    setDownPressed(boolean) {
        this.downPressed = boolean;
    }

}

let babies = [];

for (let i = 0; i < 20; i++) {
    babies.push(new Baby(canvas.width - 10, 50));
}

let fires = [new Fire(50, canvas.height - 50)]
let background = new Background();
let score = new Score();
let beaver = new Beaver();
let control = new Controls();

function keyDownHandler(e) { 
    if(e.keyCode === 37) {
        control.setLeftPressed(true);
    } else if (e.keyCode === 38) {
        control.setUpPressed(true);
    } else if (e.keyCode === 39 ) {
        control.setRightPressed(true);
    } else if (e.keyCode === 40) {
        control.setDownPressed(true);
    }
} 

function keyUpHandler(e) {
    if(e.keyCode === 37) {
        control.setLeftPressed(false);
    } else if (e.keyCode === 38) {
        control.setUpPressed(false);
    } else if (e.keyCode === 39 ) {
        control.setRightPressed(false);
    } else if (e.keyCode === 40) {
        control.setDownPressed(false);
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    background.update();

    for (let j = 0; j < fires.length; j++) {
        fires[j].update();
    }
    
    beaver.update();

    for (let j = 0; j < babies.length; j++) {
        babies[j].update()
    }

    if (control.getRightPressed()) {
        beaver.setX(beaver.getBeaverSpeed());
        beaver.setBeaverRotation('right');
        if (beaver.getX() + beaver.getWidth() > canvas.width) {
            beaver.setX(-beaver.getWidth());
        }
        for (let i = 0; i < babies.length; i++) {
            if (beaver.getX() + 20 >= babies[i].getX() && beaver.collision(babies[i])) {
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
    else if (control.getLeftPressed()) {
        beaver.setBeaverRotation('left');
        beaver.setX(-beaver.getBeaverSpeed());
        if (beaver.getX() < 0) {
            beaver.setX(20);
        }
        for (let i = 0; i < babies.length; i++) {
            if (beaver.getX() - 20 <= babies[i].getX() && beaver.collision(babies[i])) {
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

    } else if (control.getUpPressed()) {
        beaver.setBeaverRotation('up');
        beaver.setY(-beaver.getBeaverSpeed());
        if (beaver.getY() < 0) {
            beaver.setY(20);
        }
        for (let i = 0; i < babies.length; i++) {
            if (beaver.getY() - 20 <= babies[i].getY() && beaver.collision(babies[i])) {
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
        
    } else if (control.getDownPressed()) {
        beaver.setBeaverRotation('down');
        beaver.setY(beaver.getBeaverSpeed());
        if (beaver.getY() + beaver.getHeight() > canvas.height) {
            beaver.setY(-20);
        }
        for (let i = 0; i < babies.length; i++) {
            if (beaver.getY() + 20 >= babies[i].getY() && beaver.collision(babies[i])) {
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

    if (fires[0].releaseFire()) { 
        fires.push(new Fire(Math.floor(Math.random() * (canvas.width - 50)), Math.floor(Math.random() * (canvas.height - 50))));
    }

    document.getElementById("counter").innerText = fires[0].getFireCounter();
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
}, 1000);

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

let interval = setInterval(draw, 10);