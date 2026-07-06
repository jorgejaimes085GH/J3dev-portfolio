interface PremiumHeroParticle {
  x: number;
  y: number;
  radius: number;
  velocityX: number;
  velocityY: number;
}

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

export class PremiumHeroCanvasAnimation {
  private readonly context: CanvasRenderingContext2D | null;
  private readonly reducedMotionMediaQuery: MediaQueryList | null;
  private animationFrameId: number | null = null;
  private particle: PremiumHeroParticle | null = null;
  private isRunning = false;

  private readonly handleResize = (): void => {
    this.resize();
  };

  private readonly handleReducedMotionChange = (): void => {
    if (this.prefersReducedMotion()) {
      this.stop();
      this.clear();
      return;
    }

    if (this.isRunning) {
      this.resize();
      this.queueFrame();
    }
  };

  constructor(private readonly canvas: HTMLCanvasElement) {
    this.context = canvas.getContext('2d');
    this.reducedMotionMediaQuery = this.createReducedMotionMediaQuery();
  }

  start(): void {
    if (this.isRunning || !this.context || this.prefersReducedMotion()) {
      return;
    }

    this.isRunning = true;
    this.resize();
    this.createParticle();
    window.addEventListener('resize', this.handleResize, { passive: true });
    this.reducedMotionMediaQuery?.addEventListener('change', this.handleReducedMotionChange);
    this.queueFrame();
  }

  stop(): void {
    if (this.animationFrameId !== null) {
      window.cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }

    window.removeEventListener('resize', this.handleResize);
    this.reducedMotionMediaQuery?.removeEventListener('change', this.handleReducedMotionChange);
    this.isRunning = false;
  }

  destroy(): void {
    this.stop();
    this.clear();
    this.particle = null;
  }

  private queueFrame(): void {
    if (!this.isRunning || this.prefersReducedMotion()) {
      return;
    }

    this.animationFrameId = window.requestAnimationFrame(() => this.animate());
  }

  private animate(): void {
    this.animationFrameId = null;

    if (!this.isRunning || !this.context || !this.particle || this.prefersReducedMotion()) {
      return;
    }

    this.updateParticle();
    this.drawParticle();
    this.queueFrame();
  }

  private resize(): void {
    const { width, height } = this.canvas.getBoundingClientRect();
    const pixelRatio = window.devicePixelRatio || 1;
    const canvasWidth = Math.max(1, Math.floor(width * pixelRatio));
    const canvasHeight = Math.max(1, Math.floor(height * pixelRatio));

    if (this.canvas.width !== canvasWidth || this.canvas.height !== canvasHeight) {
      this.canvas.width = canvasWidth;
      this.canvas.height = canvasHeight;
      this.context?.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      this.createParticle();
    }
  }

  private createParticle(): void {
    const bounds = this.getCanvasBounds();

    this.particle = {
      x: bounds.width * 0.72,
      y: bounds.height * 0.34,
      radius: 4.5,
      velocityX: Math.max(0.16, bounds.width * 0.00018),
      velocityY: Math.max(0.11, bounds.height * 0.00016),
    };
  }

  private updateParticle(): void {
    if (!this.particle) {
      return;
    }

    const bounds = this.getCanvasBounds();
    this.particle.x += this.particle.velocityX;
    this.particle.y += this.particle.velocityY;

    if (this.particle.x - this.particle.radius > bounds.width) {
      this.particle.x = -this.particle.radius;
    }

    if (this.particle.y - this.particle.radius > bounds.height) {
      this.particle.y = -this.particle.radius;
    }
  }

  private drawParticle(): void {
    if (!this.context || !this.particle) {
      return;
    }

    const bounds = this.getCanvasBounds();
    const glow = this.context.createRadialGradient(
      this.particle.x,
      this.particle.y,
      0,
      this.particle.x,
      this.particle.y,
      this.particle.radius * 5,
    );

    glow.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
    glow.addColorStop(0.2, 'rgba(125, 211, 252, 0.7)');
    glow.addColorStop(0.55, 'rgba(196, 167, 255, 0.24)');
    glow.addColorStop(1, 'rgba(196, 167, 255, 0)');

    this.context.clearRect(0, 0, bounds.width, bounds.height);
    this.context.beginPath();
    this.context.fillStyle = glow;
    this.context.arc(this.particle.x, this.particle.y, this.particle.radius * 5, 0, Math.PI * 2);
    this.context.fill();

    this.context.beginPath();
    this.context.fillStyle = 'rgba(255, 255, 255, 0.9)';
    this.context.arc(this.particle.x, this.particle.y, this.particle.radius, 0, Math.PI * 2);
    this.context.fill();
  }

  private clear(): void {
    const bounds = this.getCanvasBounds();
    this.context?.clearRect(0, 0, bounds.width, bounds.height);
  }

  private getCanvasBounds(): { width: number; height: number } {
    const { width, height } = this.canvas.getBoundingClientRect();

    return {
      width: Math.max(1, width),
      height: Math.max(1, height),
    };
  }

  private prefersReducedMotion(): boolean {
    return Boolean(this.reducedMotionMediaQuery?.matches);
  }

  private createReducedMotionMediaQuery(): MediaQueryList | null {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return null;
    }

    return window.matchMedia(REDUCED_MOTION_QUERY);
  }
}
