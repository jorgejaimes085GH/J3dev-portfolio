export class PremiumHeroCanvasAnimation {
  private readonly context: CanvasRenderingContext2D | null;
  private hasLoggedAnimationFrame = false;
  private isRunning = false;

  private readonly handleResize = (): void => {
    this.resize();
    this.drawSmokeTest();
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
    this.resize();
    window.addEventListener('resize', this.handleResize, { passive: true });
    this.animate();
  }

  stop(): void {
    window.removeEventListener('resize', this.handleResize);
    this.isRunning = false;
  }

  destroy(): void {
    this.stop();
    this.clear();
  }

  private animate(): void {
    if (!this.context) {
      return;
    }

    if (!this.hasLoggedAnimationFrame) {
      console.log('Animation Frame Running');
      this.hasLoggedAnimationFrame = true;
    }

    this.drawSmokeTest();
  }

  private resize(): void {
    const { width, height } = this.canvas.getBoundingClientRect();
    const canvasWidth = Math.floor(width);
    const canvasHeight = Math.floor(height);

    console.log(`Canvas Size:\n${canvasWidth} x ${canvasHeight}`);

    if (canvasWidth === 0 || canvasHeight === 0) {
      console.error(`Canvas size is invalid: ${canvasWidth} x ${canvasHeight}. Width and height must be greater than zero.`);
    }

    this.canvas.width = canvasWidth;
    this.canvas.height = canvasHeight;
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
