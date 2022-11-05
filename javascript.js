var player;
var enemy;
var enemy2;
var enemy3;
var enemy4;
var enemy5;
var enemy6;
var win;

function startGame() {
    myGameArea.start();
    player = new component(20, 20, "blue", 10, 120);
    enemy = new component(30, 30, "red", 200, 120);
    enemy2 = new component(30, 30, "red", 300, 100);
    enemy3 = new component(50, 50, "red", 500, 50); 
    enemy4 = new component(50, 50, "red", -800, 0); 
    enemy5 = new component(400, 100, "red", -900, 100); 
    enemy6 = new component(400, 100, "red", 1200, 100); 
    win = new component(50,50,"yellow",1800,0)
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 200;
        this.canvas.height = 200;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;   
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = (e.type == "keydown");            
        })
    }, 
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    },
    stop : function() {
        clearInterval(this.interval);
        
  
      }
    }
      function everyinterval(n) {
        if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
        return false;
      }


function component(width, height, color, x, y) {
    this.gamearea = myGameArea;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }    
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) ||
        (mytop > otherbottom) ||
        (myright < otherleft) ||
        (myleft > otherright)) {
          crash = false;
        }
        return crash;
      }
}

function updateGameArea() {
    
    if (player.crashWith(enemy)) {
        myGameArea.stop();
       
      } else {
        if (player.crashWith(enemy2)) {
            myGameArea.stop();
            
          } else {
            if (player.crashWith(enemy3)) {
                myGameArea.stop();
                
              } else {
                if (player.crashWith(enemy4)) {
                    myGameArea.stop();
                    
                  } else {
                    if (player.crashWith(enemy5)) {
                        myGameArea.stop();
                        
                      } else {
                        if (player.crashWith(enemy6)) {
                            myGameArea.stop();
                            
                          } else {
                            if (player.crashWith(win)) {
                                myGameArea.stop();
                                
                            
                              } else {
    myGameArea.clear();
    enemy.x += -1;
    enemy.y += -1;
    enemy2.x += -2;
    enemy3.x += -2;
    enemy4.x += 4;
    enemy5.x += 3;
    enemy6.x += -3;
    win.x += -3;
    enemy.update();
    enemy2.update();
    enemy3.update();
    enemy4.update();
    enemy5.update();
    enemy6.update();
    win.update();
    player.speedX = 0;
    player.speedY = 0;    
    if (myGameArea.keys && myGameArea.keys[37]) {player.speedX = -2; }
    if (myGameArea.keys && myGameArea.keys[39]) {player.speedX = 2; }
    if (myGameArea.keys && myGameArea.keys[38]) {player.speedY = -2; }
    if (myGameArea.keys && myGameArea.keys[40]) {player.speedY = 2; }
    player.newPos();    
    player.update();
}
}
}
}
}
}
}
}