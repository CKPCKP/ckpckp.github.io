function gcp_start(){
  mp.ctx.clearRect(0, 0, mp.canvas.width, mp.canvas.height);
  if (mp.level < 3){
    mp.ctx.font = "80px 'Times New Roman'";
    mp.ctx.textBaseline = "middle";
    mp.ctx.textAlign = "center";
    mp.ctx.fillStyle = "rgb(0,0,0)";
    mp.ctx.fillText("Level " + mp.level, mp.canvas.width/2, mp.canvas.height/2-80);
    mp.ctx.fillText("Clear!", mp.canvas.width/2, mp.canvas.height/2);

    mp.ctx.beginPath();
  
    mp.ctx.rect(150,393,333,80);
    mp.ctx.fillStyle = "rgb(100,255,255)";
    mp.ctx.fill();

    mp.ctx.font = "bold 40px 'メイリオ'";
    mp.ctx.textBaseline = "middle";
    mp.ctx.textAlign = "center";
    mp.ctx.fillStyle = "rgb(0,0,0)";
    mp.ctx.fillText("次のレベルへ →", mp.canvas.width/2, mp.canvas.height-200);
  }
  else{
    mp.ctx.font = "80px 'Times New Roman'";
    mp.ctx.textBaseline = "middle";
    mp.ctx.textAlign = "center";
    mp.ctx.fillStyle = "rgb(255,0,0)";
    mp.ctx.fillText("ALL CLEAR!!", mp.canvas.width/2, mp.canvas.height/2);
  }
  mp.canvas.addEventListener("click", mouseClick_clear);
  return 0;
}
function mouseClick_clear(event){
  if (mp.level < 3){
    let x_base = mp.canvas.offsetLeft;
    let y_base = mp.canvas.offsetTop;
    let x = event.pageX - x_base;
    let y = event.pageY - y_base;
    if (150 <= x <= 483 && 393 <= y <= 473) {
      mp.level++;
      mp.ctx.clearRect(0, 0, mp.canvas.width, mp.canvas.height);
      mp.canvas.removeEventListener("click",mouseClick_clear)
      gp_start();
    }
  }
  else{
    mp.ctx.clearRect(0,0, mp.canvas.width,mp.canvas.height);
    mp.ctx.font = "60px 'メイリオ'";
    mp.ctx.textBaseline = "middle";
    mp.ctx.textAlign = "center";
    mp.ctx.fillStyle = "rgb(0,0,0)";
    mp.ctx.fillText("おめでとう！！！", mp.canvas.width/2, mp.canvas.height/2);
  }
}