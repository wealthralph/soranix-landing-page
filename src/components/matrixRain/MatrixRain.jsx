import { useEffect, useRef } from "react";

class Symbol {
  constructor(x, y, fontSize, canvasHeight) {
    this.characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";
    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.canvasHeight = canvasHeight;
    this.text = "";
  }

  draw(context) {
    this.text = this.characters.charAt(
      Math.floor(Math.random() * this.characters.length)
    );
    context.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);

    if (this.y * this.fontSize > this.canvasHeight && Math.random() < 0.1) {
      this.y = 0;
    } else {
      this.y += 1;
    }
  }
}

class MatrixRain {
  constructor(canvas, canvasWidth, canvasHeight) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.fontSize = 12;
    this.columns = Math.floor(canvasWidth / this.fontSize);
    this.symbols = [];
    this.fps = 30;
    this.nextFrame = 1000 / this.fps;
    this.timer = 0;
    this.lastTime = 0;
    this.animationFrameId = null;

    this.#initialize();
  }

  #initialize() {
    for (let i = 0; i < this.columns; i++) {
      this.symbols.push(new Symbol(i, 0, this.fontSize, this.canvasHeight));
    }
  }

  animate(timeStamp) {
    const deltaTime = timeStamp - this.lastTime;
    this.lastTime = timeStamp;

    if (this.timer > this.nextFrame) {
      this.ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
      this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

      const gradient = this.ctx.createLinearGradient(
        0,
        0,
        this.canvasWidth,
        this.canvasHeight
      );
        
      gradient.addColorStop(0, "red");
      gradient.addColorStop(0.5, "purple");
      gradient.addColorStop(1, "blue");

      this.ctx.fillStyle = "gray";
      this.ctx.font = `${this.fontSize}px monospace`;
      this.ctx.textAlign = "center";

      this.symbols.forEach((symbol) => symbol.draw(this.ctx));
      this.timer = 0; 
    } else {
      this.timer += deltaTime;
    }

    this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
  }

  start() {
    this.stop();
    this.animate(0);
  }

  stop() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }
}

const MatrixRainCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const canvasWidth = canvas.parentElement.offsetWidth;
    const canvasHeight = canvas.parentElement.offsetHeight;

    canvas.width = canvasWidth - 10;
    canvas.height = canvasHeight;

    const matrixRain = new MatrixRain(canvas, canvasWidth, canvasHeight);
    matrixRain.start();

    return () => matrixRain.stop();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default MatrixRainCanvas;
