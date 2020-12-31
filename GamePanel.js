gp = null;

function gp_start(){
  gp = new GamePanel();
  gamestarted = 1;
  gamecleared = 0;

  let timerID = setTimeout("gp.draw()", 100);

  mp.canvas.addEventListener("click", gp.mouseClick);
  return 0;
  /*
  document.getElementById("method").style.display = "none";
  document.getElementById("start").style.display = "none";
  document.getElementById("first").style.display = "none";
  document.getElementById("finish").style.display = "none";
  */
}
class GamePanel {
  constructor() {
    this.sizearray = [200,150,120];
    this.gaparray = [10,8,7];
    this.sz = this.sizearray[mp.level-1];
    this.gap = this.gaparray[mp.level-1];
    this.len = 2 + mp.level;
    this.i_st_array = [[
      [0,0,0],
      [0,1,0],
      [0,0,0]
    ],
    [
      [0,0,1,0],
      [1,0,0,0],
      [0,0,0,1],
      [0,1,0,0]
    ],
    [
      [0,1,0,0,0],
      [0,1,0,1,1],
      [0,0,0,0,0],
      [1,1,0,1,0],
      [0,0,0,1,0]
    ]];
    this.i_state = this.i_st_array[mp.level-1];

    this.img = new Array;
    this.img[0] = new Image();
    this.img[0].src = "white.png";
    this.img[1] = new Image();
    this.img[1].src = "black.png";
    return this;
  }

  draw() {
    mp.ctx.clearRect(0, 0, mp.canvas_width, mp.canvas_height);

    for (let i = 0; i < this.len; i++) {
      for (let j = 0; j < this.len; j++) {
        let color = gp.i_state[i][j];
        mp.ctx.drawImage(gp.img[color], gp.gap + j*(gp.gap+gp.sz), gp.gap + i*(gp.gap+gp.sz), gp.sz, gp.sz);
      }
    }
  }

  mouseClick(event) {
    if (gamecleared == 0){
      let x_base = mp.canvas.offsetLeft;
      let y_base = mp.canvas.offsetTop;
      let x = event.pageX - x_base;
      let y = event.pageY - y_base;

      let k1 = -1;
      let k2 = -1;
      for (let i = 0; i < gp.len; i++) {
        if (y >= gp.gap + i * (gp.gap + gp.sz) && y <= (i + 1) * (gp.gap + gp.sz)) {
          k1 = i;
          break;
        }
      }
      for (let i = 0; i < gp.len; i++) {
        if (x >= gp.gap + i * (gp.gap + gp.sz) && x <= (i + 1) * (gp.gap + gp.sz)) {
          k2 = i;
          break;
        }
      }
      let sw = false;
      if (k1 >= 0 && k2 >= 0) {
        sw = true;
        gp.i_state[k1][k2] = 1 - gp.i_state[k1][k2];
        if (k1 > 0 && k2 > 0) { //左上
          gp.i_state[k1 - 1][k2 - 1] = 1 - gp.i_state[k1 - 1][k2 - 1];
        }
        if (k1 > 0 && k2 < gp.len-1) { //左下
          gp.i_state[k1 - 1][k2 + 1] = 1 - gp.i_state[k1 - 1][k2 + 1];
        }
        if (k1 < gp.len-1 && k2 > 0) { //右上
          gp.i_state[k1 + 1][k2 - 1] = 1 - gp.i_state[k1 + 1][k2 - 1];
        }
        if (k1 < gp.len-1 && k2 < gp.len-1) { //右下
          gp.i_state[k1 + 1][k2 + 1] = 1 - gp.i_state[k1 + 1][k2 + 1];
        }
      }

      if (sw) {
        gp.draw();
        for (let i = 0; i < gp.len && sw == true; i++) {
          for (let j = 0; j < gp.len && sw == true; j++) {
            if (gp.i_state[i][j] != 1) {
              sw = false;
            }
          }
        }
        if (sw) {
          gamecleared = mp.level;
          let timerID = setTimeout("gcp_start()",200);
        }
      }
    }
  }
}


