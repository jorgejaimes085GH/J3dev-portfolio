interface PremiumHeroParticle {
  x: number;
  y: number;
  radius: number;
  velocityX: number;
  velocityY: number;
}

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';
const DEBUG_PARTICLE_RADIUS = 18;
const DEBUG_PARTICLE_GLOW_RADIUS = 68;
const DEBUG_PARTICLE_SPEED = 2.25;
const DEBUG_PARTICLE_COLOR = 'rgba(34, 211, 238, 1)';
const DEBUG_PARTICLE_GLOW_COLOR = 'rgba(34, 211, 238, 0.72)';
const DEBUG_TEXT = 'Canvas OK';

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
    if (!this.context) {
      return;
    }

    if (this.prefersReducedMotion()) {
      this.clear();
      return;
    }

    if (this.isRunning) {
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
      this.clear();
      return;
    }

    this.updateParticle();
    this.drawFrame();
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
    }

    this.keepParticleInsideBounds();
  }

  private createParticle(): void {
    const bounds = this.getCanvasBounds();

    this.particle = {
      x: Math.max(DEBUG_PARTICLE_RADIUS, bounds.width * 0.25),
      y: Math.max(DEBUG_PARTICLE_RADIUS, bounds.height * 0.25),
      radius: DEBUG_PARTICLE_RADIUS,
      velocityX: DEBUG_PARTICLE_SPEED,
      velocityY: DEBUG_PARTICLE_SPEED,
    };
  }

  private updateParticle(): void {
    if (!this.particle) {
      return;
    }

    const bounds = this.getCanvasBounds();
    this.particle.x += this.particle.velocityX;
    this.particle.y += this.particle.velocityY;

    if (this.particle.x + this.particle.radius >= bounds.width) {
      this.particle.x = bounds.width - this.particle.radius;
      this.particle.velocityX = -Math.abs(this.particle.velocityX);
    } else if (this.particle.x - this.particle.radius <= 0) {
      this.particle.x = this.particle.radius;
      this.particle.velocityX = Math.abs(this.particle.velocityX);
    }

    if (this.particle.y + this.particle.radius >= bounds.height) {
      this.particle.y = bounds.height - this.particle.radius;
      this.particle.velocityY = -Math.abs(this.particle.velocityY);
    } else if (this.particle.y - this.particle.radius <= 0) {
      this.particle.y = this.particle.radius;
      this.particle.velocityY = Math.abs(this.particle.velocityY);
    }
  }

  private drawFrame(): void {
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
      DEBUG_PARTICLE_GLOW_RADIUS,
    );

    glow.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
    glow.addColorStop(0.24, DEBUG_PARTICLE_GLOW_COLOR);
    glow.addColorStop(1, 'rgba(34, 211, 238, 0)');

    this.context.clearRect(0, 0, bounds.width, bounds.height);
    this.context.beginPath();
    this.context.fillStyle = glow;
    this.context.arc(this.particle.x, this.particle.y, DEBUG_PARTICLE_GLOW_RADIUS, 0, Math.PI * 2);
    this.context.fill();

    this.context.beginPath();
    this.context.fillStyle = DEBUG_PARTICLE_COLOR;
    this.context.shadowColor = DEBUG_PARTICLE_COLOR;
    this.context.shadowBlur = 24;
    this.context.arc(this.particle.x, this.particle.y, this.particle.radius, 0, Math.PI * 2);
    this.context.fill();
    this.context.shadowBlur = 0;

    this.drawDebugText(bounds.width, bounds.height);
  }

  private drawDebugText(width: number, height: number): void {
    if (!this.context) {
      return;
    }

    this.context.save();
    this.context.font = '600 13px Inter, Arial, sans-serif';
    this.context.textAlign = 'right';
    this.context.textBaseline = 'bottom';
    this.context.fillStyle = 'rgba(165, 243, 252, 0.95)';
    this.context.shadowColor = 'rgba(34, 211, 238, 0.9)';
    this.context.shadowBlur = 12;
    this.context.fillText(DEBUG_TEXT, width - 24, height - 24);
    this.context.restore();
  }

  private keepParticleInsideBounds(): void {
    if (!this.particle) {
      return;
    }

    const bounds = this.getCanvasBounds();
    this.particle.x = Math.min(Math.max(this.particle.x, this.particle.radius), bounds.width - this.particle.radius);
    this.particle.y = Math.min(Math.max(this.particle.y, this.particle.radius), bounds.height - this.particle.radius);
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
