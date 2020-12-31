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

  /*
  document.getElementById("method").style.display = "";
  document.getElementById("start").style.display = "";
  document.getElementById("clear").style.display = "none";
  document.getElementById("over").style.display = "none";
  document.getElementById("first").style.display = "none";
  document.getElementById("finish").style.display = "none";
  document.getElementById("start").innerHTML = "ゲーム開始";
  */
}
function mouseClick_start(event){
  if (gamestarted == 0){
    mp.ctx.clearRect(0, 0, mp.canvas.width, mp.canvas.height);
    gp_start();
  }
  gamestarted = 1;
}