mp = null;

function mp_start(){
  let canvas = document.getElementById("canvas_e");
  let ctx = canvas.getContext("2d");

  mp = new MainPanel(canvas, ctx);
  st_start();
}

class MainPanel {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.level = 1;
    return this;
  }
  finish() {
    mp.ctx.clearRect(0, 0, mp.canvas.width, mp.canvas.height);
  }
}

