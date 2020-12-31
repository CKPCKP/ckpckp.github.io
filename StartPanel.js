function st_start(){
  mp.level = 1;
  mp.ctx.clearRect(0,0, mp.canvas.width, mp.canvas.height);
  mp.ctx.font = "40px 'Times New Roman'";
  mp.ctx.textBaseline = "middle";
  mp.ctx.textAlign = "center";
  mp.ctx.fillStyle = "rgb(0, 0, 0)";
  mp.ctx.fillText("Puzzle", mp.canvas.width/2, mp.canvas.height/2-100);
  mp.ctx.fillText("GAME START", mp.canvas.width/2, mp.canvas.height/2+100);

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