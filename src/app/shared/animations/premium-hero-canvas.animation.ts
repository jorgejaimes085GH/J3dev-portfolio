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

    this.context.fillStyle = 'red';
    this.context.fillRect(20, 20, 300, 300);

    this.context.beginPath();
    this.context.fillStyle = 'green';
    this.context.arc(200, 200, 30, 0, Math.PI * 2);
    this.context.fill();

    this.context.fillStyle = 'white';
    this.context.font = '40px Arial';
    this.context.fillText('CANVAS OK', 40, 360);

    console.log('Canvas Smoke Test Drawn');
  }

  private clear(): void {
    this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
