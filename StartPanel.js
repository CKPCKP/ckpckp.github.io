function st_start(){
  mp.level = 1;
  mp.ctx.clearRect(0,0, mp.canvas.width, mp.canvas.height);
  var gametitle = new Image();
  gametitle.src = "gametitle.png";
  gametitle.onload = function(){
    mp.ctx.drawImage(gametitle,0,0);
  }

  gamestarted = 0;
  gamecleared = 0;
  mp.canvas.addEventListener("click", mouseClick_start);
}

function mouseClick_start(event){
  if (gamestarted == 0){
    mp.ctx.clearRect(0, 0, mp.canvas.width, mp.canvas.height);
    mp.canvas.removeEventListener("click", mouseClick_start);
    gp_start();
  }
  gamestarted = 1;
}