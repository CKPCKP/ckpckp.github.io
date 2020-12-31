function gcp_start(){
  mp.ctx.clearRect(0, 0, mp.canvas.width, mp.canvas.height);
  if (mp.level < 3){
    mp.ctx.font = "40px 'Times New Roman'";
    mp.ctx.textBaseline = "middle";
    mp.ctx.textAlign = "center";
    mp.ctx.fillStyle = "rgb(0,0,0)";
    mp.ctx.fillText("Level " + mp.level, mp.canvas.width/2, mp.canvas.height/2-20);
    mp.ctx.fillText("Clear!", mp.canvas.width/2, mp.canvas.height/2+20);

    mp.ctx.beginPath();
  
    mp.ctx.rect(180,400,280,80);
    mp.ctx.fillStyle = "rgb(100,255,255)";
    mp.ctx.fill();

    mp.ctx.font = "bold 40px 'Times New Roman'";
    mp.ctx.textBaseline = "middle";
    mp.ctx.textAlign = "center";
    mp.ctx.fillStyle = "rgb(0,0,0)";
    mp.ctx.fillText("Next Level →", mp.canvas.width/2, mp.canvas.height-200);
  }
  else{
    mp.ctx.font = "80px 'Times New Roman'";
    mp.ctx.textBaseline = "middle";
    mp.ctx.textAlign = "center";
    mp.ctx.fillStyle = "rgb(0,0,0)";
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
    if (180 <= x <= 460 && 400 <= y <= 480) {
      mp.level++;
      mp.ctx.clearRect(0, 0, mp.canvas.width, mp.canvas.height);
      mp.canvas.removeEventListener("click",mouseClick_clear)
      gp_start();
    }
  }
  else{
    mp.ctx.clearRect(0,0, mp.canvas.width,mp.canvas.height);
    mp.ctx.font = "60px 'Times New Roman'";
    mp.ctx.textBaseline = "middle";
    mp.ctx.textAlign = "center";
    mp.ctx.fillStyle = "rgb(0,0,0)";
    mp.ctx.fillText("congrats", mp.canvas.width/2, mp.canvas.height/2);
  }
}