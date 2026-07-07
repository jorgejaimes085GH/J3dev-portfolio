export class PremiumHeroCanvasAnimation {
  private readonly context: CanvasRenderingContext2D | null;
  private isRunning = false;

  private readonly handleResize = (): void => {
    if (!this.isRunning || !this.resize()) {
      return;
    }

    this.drawStaticParticle();
  };

  constructor(private readonly canvas: HTMLCanvasElement) {
    this.context = canvas.getContext('2d');
  }

  start(): void {
    console.log('Canvas START');

    if (!this.context) {
      return;
    }

    if (!this.resize()) {
      this.clear();
      return;
    }

    if (!this.isRunning) {
      window.addEventListener('resize', this.handleResize, { passive: true });
    }

    this.isRunning = true;
    this.drawStaticParticle();
  }

  stop(): void {
    window.removeEventListener('resize', this.handleResize);
    this.isRunning = false;
    this.clear();
  }

  destroy(): void {
    this.stop();
  }

  private resize(): boolean {
    const canvasRect = this.canvas.getBoundingClientRect();
    const parentRect =
      canvasRect.width === 0 || canvasRect.height === 0
        ? this.canvas.parentElement?.getBoundingClientRect()
        : null;
    const resizeRect = parentRect ?? canvasRect;
    const canvasWidth = Math.floor(resizeRect.width);
    const canvasHeight = Math.floor(resizeRect.height);

    if (canvasWidth === 0 || canvasHeight === 0) {
      return false;
    }

    if (this.canvas.width !== canvasWidth || this.canvas.height !== canvasHeight) {
      this.canvas.width = canvasWidth;
      this.canvas.height = canvasHeight;
    }

    console.log(`Canvas Size: ${canvasWidth} x ${canvasHeight}`);

    return true;
  }

  private drawStaticParticle(): void {
    if (!this.context) {
      return;
    }

    const particleX = this.canvas.width * 0.5;
    const particleY = this.canvas.height * 0.5;
    const particleRadius = 18;
    const particleColor = 'cyan';

    this.clear();
    this.context.save();
    this.context.globalAlpha = 1;
    this.context.shadowBlur = 60;
    this.context.shadowColor = particleColor;
    this.context.fillStyle = particleColor;
    this.context.beginPath();
    this.context.arc(particleX, particleY, particleRadius, 0, Math.PI * 2);
    this.context.fill();
    this.context.restore();

    console.log('Canvas Static Particle Drawn');
  }

  private clear(): void {
    this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
