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
    /*
    document.getElementById("method").style.display = "none";
    document.getElementById("start").style.display = "none";
    document.getElementById("clear").style.display = "none";
    document.getElementById("over").style.display = "none";
    document.getElementById("first").style.display = "none";
    document.getElementById("finish").style.display = "none";
    */
  }
}

