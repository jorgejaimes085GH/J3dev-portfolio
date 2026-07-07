interface PremiumHeroParticle {
  x: number;
  y: number;
  radius: number;
  velocityX: number;
  velocityY: number;
  opacity: number;
  color: string;
}

export class PremiumHeroCanvasAnimation {
  private readonly context: CanvasRenderingContext2D | null;
  private readonly reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  private readonly particles: PremiumHeroParticle[] = [];
  private animationFrameId: number | null = null;
  private isRunning = false;

  private readonly handleResize = (): void => {
    if (!this.resize()) {
      return;
    }

    this.keepParticlesInBounds();
  };

  private readonly handleReducedMotionChange = (): void => {
    if (this.reducedMotionQuery.matches) {
      this.stop();
    }
  };

  constructor(private readonly canvas: HTMLCanvasElement) {
    this.context = canvas.getContext('2d');
  }

  start(): void {
    if (!this.context || this.isRunning || this.reducedMotionQuery.matches) {
      this.clear();
      return;
    }

    if (!this.resize()) {
      this.clear();
      return;
    }

    if (this.particles.length === 0) {
      this.createParticles();
    }

    this.isRunning = true;
    window.addEventListener('resize', this.handleResize, { passive: true });
    this.reducedMotionQuery.addEventListener('change', this.handleReducedMotionChange);
    this.animate();
  }

  stop(): void {
    window.removeEventListener('resize', this.handleResize);
    this.reducedMotionQuery.removeEventListener('change', this.handleReducedMotionChange);
    this.isRunning = false;

    if (this.animationFrameId !== null) {
      window.cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }

    this.clear();
  }

  destroy(): void {
    this.stop();
    this.particles.length = 0;
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

    return true;
  }

  private createParticles(): void {
    const palette = ['rgba(255, 255, 255, 1)', 'rgba(103, 232, 249, 1)', 'rgba(196, 167, 255, 1)'];
    const particleSeeds = [
      { x: 0.18, y: 0.28, radius: 3.2, velocityX: 0.35, velocityY: 0.28, opacity: 0.62 },
      { x: 0.36, y: 0.68, radius: 2.6, velocityX: -0.42, velocityY: 0.32, opacity: 0.58 },
      { x: 0.58, y: 0.36, radius: 4.4, velocityX: 0.52, velocityY: -0.36, opacity: 0.5 },
      { x: 0.74, y: 0.62, radius: 3.8, velocityX: -0.31, velocityY: -0.46, opacity: 0.56 },
      { x: 0.88, y: 0.24, radius: 2.8, velocityX: 0.27, velocityY: 0.54, opacity: 0.64 },
    ];

    this.particles.length = 0;
    this.particles.push(
      ...particleSeeds.map((seed, index) => ({
        x: this.canvas.width * seed.x,
        y: this.canvas.height * seed.y,
        radius: seed.radius,
        velocityX: seed.velocityX,
        velocityY: seed.velocityY,
        opacity: seed.opacity,
        color: palette[index % palette.length],
      })),
    );
  }

  private animate(): void {
    if (!this.isRunning || this.reducedMotionQuery.matches) {
      this.clear();
      return;
    }

    this.clear();
    this.updateParticles();
    this.drawParticles();
    this.animationFrameId = window.requestAnimationFrame(() => this.animate());
  }

  private updateParticles(): void {
    for (const particle of this.particles) {
      particle.x += particle.velocityX;
      particle.y += particle.velocityY;

      if (particle.x <= particle.radius || particle.x >= this.canvas.width - particle.radius) {
        particle.velocityX *= -1;
        particle.x = Math.min(Math.max(particle.x, particle.radius), this.canvas.width - particle.radius);
      }

      if (particle.y <= particle.radius || particle.y >= this.canvas.height - particle.radius) {
        particle.velocityY *= -1;
        particle.y = Math.min(Math.max(particle.y, particle.radius), this.canvas.height - particle.radius);
      }
    }
  }

  private drawParticles(): void {
    if (!this.context) {
      return;
    }

    for (const particle of this.particles) {
      this.context.save();
      this.context.globalAlpha = particle.opacity;
      this.context.shadowBlur = particle.radius * 4.5;
      this.context.shadowColor = particle.color;
      this.context.fillStyle = particle.color;
      this.context.beginPath();
      this.context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      this.context.fill();
      this.context.restore();
    }
  }

  private keepParticlesInBounds(): void {
    for (const particle of this.particles) {
      particle.x = Math.min(Math.max(particle.x, particle.radius), this.canvas.width - particle.radius);
      particle.y = Math.min(Math.max(particle.y, particle.radius), this.canvas.height - particle.radius);
    }
  }

  private clear(): void {
    this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
