export class PremiumHeroCanvasAnimation {
  private readonly context: CanvasRenderingContext2D | null;
  private isRunning = false;

  private readonly handleResize = (): void => {
    if (!this.isRunning || !this.resize()) {
      return;
    }

    this.drawSmokeTest();
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
    this.drawSmokeTest();
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
      console.warn('Canvas Size: 0 x 0 - smoke test skipped');
      return false;
    }

    if (this.canvas.width !== canvasWidth || this.canvas.height !== canvasHeight) {
      this.canvas.width = canvasWidth;
      this.canvas.height = canvasHeight;
    }

    console.log(`Canvas Size: ${canvasWidth} x ${canvasHeight}`);

    return true;
  }

  private drawSmokeTest(): void {
    if (!this.context) {
      return;
    }

    this.clear();

    const { width, height } = this.canvas;

    if (width === 0 || height === 0) {
      console.warn('Canvas Size: 0 x 0 - smoke test skipped');
      return;
    }

    this.context.fillStyle = 'rgba(255, 0, 0, 0.22)';
    this.context.fillRect(0, 0, width, height);

    const particles = [
      { x: width * 0.25, y: height * 0.3 },
      { x: width * 0.5, y: height * 0.5 },
      { x: width * 0.72, y: height * 0.35 },
      { x: width * 0.82, y: height * 0.68 },
      { x: width * 0.38, y: height * 0.72 },
    ];

    this.context.fillStyle = 'rgba(34, 211, 238, 1)';
    this.context.shadowColor = 'rgba(34, 211, 238, 0.95)';
    this.context.shadowBlur = 40;

    for (const particle of particles) {
      this.context.beginPath();
      this.context.arc(particle.x, particle.y, 14, 0, Math.PI * 2);
      this.context.fill();
    }

    this.context.shadowBlur = 0;
    this.context.shadowColor = 'transparent';
    this.context.fillStyle = 'white';
    this.context.font = '40px Arial';
    this.context.fillText('CANVAS OK', 40, height - 40);

    console.log('Canvas Five Static Particles Drawn');
  }

  private clear(): void {
    this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
