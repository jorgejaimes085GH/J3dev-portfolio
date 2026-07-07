export class PremiumHeroCanvasAnimation {
  private readonly context: CanvasRenderingContext2D | null;
  private isRunning = false;

  private readonly handleResize = (): void => {
    if (this.resize()) {
      this.drawSmokeTest();
    }
  };

  constructor(private readonly canvas: HTMLCanvasElement) {
    this.context = canvas.getContext('2d');
  }

  start(): void {
    console.log('Canvas START');

    if (!this.context) {
      console.error('Canvas 2D context is not available.');
      return;
    }

    if (this.isRunning) {
      return;
    }

    this.isRunning = true;
    window.addEventListener('resize', this.handleResize, { passive: true });

    if (this.resize()) {
      this.drawSmokeTest();
    }
  }

  stop(): void {
    window.removeEventListener('resize', this.handleResize);
    this.isRunning = false;
  }

  destroy(): void {
    this.stop();
    this.clear();
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

    console.log(`Canvas Size:\n${canvasWidth} x ${canvasHeight}`);

    if (canvasWidth === 0 || canvasHeight === 0) {
      console.warn(
        `Canvas size is invalid after parent fallback: ${canvasWidth} x ${canvasHeight}. Smoke test draw skipped.`,
      );
      return false;
    }

    this.canvas.width = canvasWidth;
    this.canvas.height = canvasHeight;

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
  }

  private clear(): void {
    this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
