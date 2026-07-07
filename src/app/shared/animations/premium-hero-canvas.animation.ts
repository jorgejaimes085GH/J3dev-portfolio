interface PremiumHeroParticle {
  x: number;
  y: number;
  radius: number;
  velocityX: number;
  velocityY: number;
  opacity: number;
  minOpacity: number;
  maxOpacity: number;
  opacityDirection: 1 | -1;
  opacitySpeed: number;
  color: string;
}

export class PremiumHeroCanvasAnimation {
  private readonly context: CanvasRenderingContext2D | null;
  private readonly reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  private animationFrameId: number | null = null;
  private isRunning = false;
  private readonly particles: PremiumHeroParticle[] = [
    this.createParticle(3, 0.45, 0.35, 0.1, 0.62, 0.006, '224, 242, 254'),
    this.createParticle(5, -0.55, 0.3, 0.16, 0.68, 0.0045, '147, 197, 253'),
    this.createParticle(2, 0.35, -0.5, 0.05, 0.56, 0.0052, '240, 249, 255'),
    this.createParticle(4, -0.4, -0.45, 0.12, 0.58, 0.007, '103, 232, 249'),
    this.createParticle(7, 0.65, 0.25, 0.18, 0.74, 0.0038, '56, 189, 248'),
    this.createParticle(2, -0.32, 0.52, 0.08, 0.62, 0.0065, '186, 230, 253'),
    this.createParticle(6, 0.5, -0.28, 0.14, 0.8, 0.0042, '34, 211, 238'),
    this.createParticle(3, -0.6, -0.2, 0.05, 0.5, 0.0075, '219, 234, 254'),
    this.createParticle(9, 0.25, 0.6, 0.2, 0.72, 0.0035, '125, 211, 252'),
    this.createParticle(4, -0.48, 0.42, 0.1, 0.7, 0.0058, '240, 249, 255'),
    this.createParticle(2, 0.38, 0.44, 0.07, 0.48, 0.0062, '196, 181, 253'),
    this.createParticle(5, -0.28, -0.36, 0.12, 0.64, 0.0048, '191, 219, 254'),
    this.createParticle(3, 0.58, -0.18, 0.08, 0.52, 0.0068, '165, 243, 252'),
    this.createParticle(8, -0.42, 0.24, 0.14, 0.66, 0.004, '129, 140, 248'),
    this.createParticle(2, 0.22, -0.58, 0.05, 0.46, 0.0072, '224, 242, 254'),
    this.createParticle(4, -0.52, 0.16, 0.1, 0.6, 0.0054, '56, 189, 248'),
    this.createParticle(6, 0.31, 0.5, 0.16, 0.76, 0.0039, '221, 214, 254'),
    this.createParticle(3, -0.36, -0.5, 0.07, 0.54, 0.006, '186, 230, 253'),
    this.createParticle(10, 0.18, -0.34, 0.18, 0.7, 0.0036, '147, 197, 253'),
    this.createParticle(2, -0.62, 0.28, 0.04, 0.44, 0.0078, '240, 249, 255'),
    this.createParticle(4, 0.46, -0.42, 0.12, 0.58, 0.005, '103, 232, 249'),
    this.createParticle(5, -0.2, 0.56, 0.1, 0.64, 0.0046, '196, 181, 253'),
    this.createParticle(3, 0.54, 0.2, 0.06, 0.5, 0.0066, '224, 242, 254'),
    this.createParticle(7, -0.44, -0.26, 0.15, 0.68, 0.0041, '34, 211, 238'),
    this.createParticle(2, 0.28, 0.62, 0.05, 0.48, 0.007, '191, 219, 254'),
    this.createParticle(4, -0.58, -0.34, 0.09, 0.56, 0.0056, '221, 214, 254'),
    this.createParticle(12, 0.2, 0.22, 0.16, 0.6, 0.0034, '125, 211, 252'),
    this.createParticle(3, -0.3, 0.46, 0.08, 0.52, 0.0064, '240, 249, 255'),
  ];

  constructor(private readonly canvas: HTMLCanvasElement) {
    this.context = canvas.getContext('2d');
  }

  start(): void {
    if (!this.context || this.reducedMotionQuery.matches) {
      this.clear();
      return;
    }

    if (!this.resize()) {
      this.clear();
      return;
    }

    if (this.isRunning) {
      this.keepParticlesInBounds();
      return;
    }

    this.placeInitialParticles();
    window.addEventListener('resize', this.handleResize, { passive: true });
    this.isRunning = true;
    this.animate();
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

  private createParticle(
    radius: number,
    velocityX: number,
    velocityY: number,
    minOpacity: number,
    maxOpacity: number,
    opacitySpeed: number,
    color: string,
  ): PremiumHeroParticle {
    return {
      x: 0,
      y: 0,
      radius,
      velocityX,
      velocityY,
      opacity: minOpacity,
      minOpacity,
      maxOpacity,
      opacityDirection: 1,
      opacitySpeed,
      color,
    };
  }

  private updateParticleOpacity(particle: PremiumHeroParticle): void {
    particle.opacity += particle.opacityDirection * particle.opacitySpeed;

    if (particle.opacity >= particle.maxOpacity) {
      particle.opacity = particle.maxOpacity;
      particle.opacityDirection = -1;
    }

    if (particle.opacity <= particle.minOpacity) {
      particle.opacity = particle.minOpacity;
      particle.opacityDirection = 1;
    }
  }

  private readonly handleResize = (): void => {
    if (!this.isRunning || !this.resize()) {
      return;
    }

    this.keepParticlesInBounds();
  };

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

  private animate = (): void => {
    if (!this.isRunning || !this.context) {
      return;
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
    this.context.fillStyle = 'rgba(255, 0, 0, 0.22)';
    this.context.fillRect(0, 0, width, height);
    this.updateParticles(width, height);
    this.drawParticles();
  }

  private placeInitialParticles(): void {
    const { width, height } = this.canvas;

    if (width === 0 || height === 0) {
      return;
    }

    const columns = 7;
    const rows = 4;

    this.particles.forEach((particle, index) => {
      const column = index % columns;
      const row = Math.floor(index / columns) % rows;
      const offsetX = ((index * 37) % 19) / 100;
      const offsetY = ((index * 29) % 17) / 100;

      particle.x = width * ((column + 0.35 + offsetX) / columns);
      particle.y = height * ((row + 0.32 + offsetY) / rows);
      particle.opacity =
        particle.minOpacity + ((particle.maxOpacity - particle.minOpacity) * (index % 5)) / 5;
      particle.opacityDirection = index % 2 === 0 ? 1 : -1;
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

      this.updateParticleOpacity(particle);
    }
  }

  private drawParticles(): void {
    if (!this.context) {
      return;
    }

    for (const particle of this.particles) {
      this.context.shadowColor = `rgba(${particle.color}, ${Math.min(particle.opacity + 0.12, 1)})`;
      this.context.shadowBlur = Math.max(8, particle.radius * 1.8);
      this.context.fillStyle = `rgba(${particle.color}, ${particle.opacity})`;
      this.context.beginPath();
      this.context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      this.context.fill();
    }

    this.context.shadowBlur = 0;
    this.context.shadowColor = 'transparent';
  }

  private clear(): void {
    this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
