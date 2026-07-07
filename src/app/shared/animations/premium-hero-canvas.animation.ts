interface PremiumHeroParticle {
  x: number;
  y: number;
  radius: number;
  velocityX: number;
  velocityY: number;
  opacity?: number;
}

export class PremiumHeroCanvasAnimation {
  private readonly context: CanvasRenderingContext2D | null;
  private animationFrameId: number | null = null;
  private isRunning = false;
  private hasLoggedAnimationRunning = false;
  private readonly particles: PremiumHeroParticle[] = [
    { x: 0, y: 0, radius: 14, velocityX: 0.45, velocityY: 0.35, opacity: 1 },
    { x: 0, y: 0, radius: 13, velocityX: -0.55, velocityY: 0.3, opacity: 1 },
    { x: 0, y: 0, radius: 14, velocityX: 0.35, velocityY: -0.5, opacity: 1 },
    { x: 0, y: 0, radius: 12, velocityX: -0.4, velocityY: -0.45, opacity: 1 },
    { x: 0, y: 0, radius: 13, velocityX: 0.65, velocityY: 0.25, opacity: 1 },
  ];

  private readonly handleResize = (): void => {
    if (!this.isRunning || !this.resize()) {
      return;
    }

    this.keepParticlesInBounds();
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

    this.placeInitialParticles();

    if (!this.isRunning) {
      window.addEventListener('resize', this.handleResize, { passive: true });
      this.isRunning = true;
      this.animate();
    }
  }

  stop(): void {
    window.removeEventListener('resize', this.handleResize);
    this.isRunning = false;

    if (this.animationFrameId !== null) {
      window.cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }

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

  private animate = (): void => {
    if (!this.isRunning || !this.context) {
      return;
    }

    if (!this.hasLoggedAnimationRunning) {
      console.log('Canvas Animation Running');
      this.hasLoggedAnimationRunning = true;
    }

    this.drawFrame();
    this.animationFrameId = window.requestAnimationFrame(this.animate);
  };

  private drawFrame(): void {
    const { width, height } = this.canvas;

    if (width === 0 || height === 0 || !this.context) {
      return;
    }

    this.clear();
    this.drawDiagnosticBackground(width, height);
    this.updateParticles(width, height);
    this.drawParticles();
    this.drawDiagnosticText(height);
  }

  private placeInitialParticles(): void {
    const { width, height } = this.canvas;

    if (width === 0 || height === 0) {
      return;
    }

    const positions = [
      { x: width * 0.25, y: height * 0.3 },
      { x: width * 0.5, y: height * 0.5 },
      { x: width * 0.72, y: height * 0.35 },
      { x: width * 0.82, y: height * 0.68 },
      { x: width * 0.38, y: height * 0.72 },
    ];

    this.particles.forEach((particle, index) => {
      particle.x = positions[index].x;
      particle.y = positions[index].y;
    });

    this.keepParticlesInBounds();
  }

  private keepParticlesInBounds(): void {
    const { width, height } = this.canvas;

    for (const particle of this.particles) {
      particle.x = Math.min(Math.max(particle.x, particle.radius), width - particle.radius);
      particle.y = Math.min(Math.max(particle.y, particle.radius), height - particle.radius);
    }
  }

  private updateParticles(width: number, height: number): void {
    for (const particle of this.particles) {
      particle.x += particle.velocityX;
      particle.y += particle.velocityY;

      if (particle.x <= particle.radius || particle.x >= width - particle.radius) {
        particle.velocityX *= -1;
        particle.x = Math.min(Math.max(particle.x, particle.radius), width - particle.radius);
      }

      if (particle.y <= particle.radius || particle.y >= height - particle.radius) {
        particle.velocityY *= -1;
        particle.y = Math.min(Math.max(particle.y, particle.radius), height - particle.radius);
      }
    }
  }

  private drawDiagnosticBackground(width: number, height: number): void {
    if (!this.context) {
      return;
    }

    this.context.fillStyle = 'rgba(255, 0, 0, 0.22)';
    this.context.fillRect(0, 0, width, height);
  }

  private drawParticles(): void {
    if (!this.context) {
      return;
    }

    this.context.shadowColor = 'rgba(34, 211, 238, 0.95)';
    this.context.shadowBlur = 40;

    for (const particle of this.particles) {
      this.context.fillStyle = `rgba(34, 211, 238, ${particle.opacity ?? 1})`;
      this.context.beginPath();
      this.context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      this.context.fill();
    }

    this.context.shadowBlur = 0;
    this.context.shadowColor = 'transparent';
  }

  private drawDiagnosticText(height: number): void {
    if (!this.context) {
      return;
    }

    this.context.fillStyle = 'white';
    this.context.font = '40px Arial';
    this.context.fillText('CANVAS OK', 40, height - 40);
  }

  private clear(): void {
    this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
