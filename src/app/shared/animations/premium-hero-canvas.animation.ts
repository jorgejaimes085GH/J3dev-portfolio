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
  private animationFrameId: number | null = null;
  private isRunning = false;
  private hasLoggedAnimationRunning = false;
  private readonly particles: PremiumHeroParticle[] = [
    this.createParticle(14, 0.45, 0.35, 0.1, 0.92, 0.006, '34, 211, 238'),
    this.createParticle(9, -0.55, 0.3, 0.16, 0.68, 0.0045, '147, 197, 253'),
    this.createParticle(16, 0.35, -0.5, 0.05, 0.86, 0.0052, '224, 242, 254'),
    this.createParticle(7, -0.4, -0.45, 0.12, 0.58, 0.007, '103, 232, 249'),
    this.createParticle(12, 0.65, 0.25, 0.18, 0.74, 0.0038, '56, 189, 248'),
    this.createParticle(5, -0.32, 0.52, 0.08, 0.62, 0.0065, '186, 230, 253'),
    this.createParticle(10, 0.5, -0.28, 0.14, 0.8, 0.0042, '34, 211, 238'),
    this.createParticle(6, -0.6, -0.2, 0.05, 0.5, 0.0075, '219, 234, 254'),
    this.createParticle(15, 0.25, 0.6, 0.2, 0.9, 0.0035, '125, 211, 252'),
    this.createParticle(8, -0.48, 0.42, 0.1, 0.7, 0.0058, '240, 249, 255'),
    this.createParticle(11, 0.38, 0.46, 0.09, 0.76, 0.0048, '165, 180, 252'),
    this.createParticle(6, -0.52, 0.34, 0.13, 0.64, 0.0062, '34, 211, 238'),
    this.createParticle(13, 0.58, -0.36, 0.06, 0.82, 0.004, '191, 219, 254'),
    this.createParticle(7, -0.36, -0.58, 0.17, 0.6, 0.0068, '103, 232, 249'),
    this.createParticle(17, 0.28, 0.5, 0.08, 0.88, 0.0036, '224, 242, 254'),
    this.createParticle(5, -0.44, -0.32, 0.11, 0.56, 0.0072, '216, 180, 254'),
    this.createParticle(10, 0.62, 0.18, 0.15, 0.72, 0.0044, '56, 189, 248'),
    this.createParticle(8, -0.28, 0.56, 0.07, 0.66, 0.0056, '240, 249, 255'),
    this.createParticle(12, 0.42, -0.48, 0.19, 0.78, 0.0039, '147, 197, 253'),
    this.createParticle(6, -0.64, 0.24, 0.1, 0.52, 0.0066, '196, 181, 253'),
    this.createParticle(9, 0.31, -0.54, 0.12, 0.69, 0.0051, '34, 211, 238'),
    this.createParticle(13, -0.46, 0.39, 0.07, 0.83, 0.0043, '147, 197, 253'),
    this.createParticle(7, 0.57, 0.33, 0.15, 0.61, 0.0069, '240, 249, 255'),
    this.createParticle(15, -0.29, -0.41, 0.09, 0.87, 0.0037, '196, 181, 253'),
    this.createParticle(5, 0.49, -0.22, 0.18, 0.57, 0.0074, '103, 232, 249'),
    this.createParticle(11, -0.61, 0.27, 0.06, 0.79, 0.0049, '191, 219, 254'),
    this.createParticle(8, 0.36, 0.59, 0.13, 0.66, 0.0059, '224, 242, 254'),
    this.createParticle(14, -0.53, -0.31, 0.11, 0.84, 0.0041, '165, 180, 252'),
    this.createParticle(6, 0.63, 0.44, 0.08, 0.55, 0.0064, '56, 189, 248'),
    this.createParticle(10, -0.34, -0.57, 0.16, 0.73, 0.0054, '216, 180, 254'),
  ];
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
      console.log('Canvas Particles Running');
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
  }

  private placeInitialParticles(): void {
    const { width, height } = this.canvas;

    if (width === 0 || height === 0) {
      return;
    }

    const positions = [
      { x: width * 0.18, y: height * 0.25 },
      { x: width * 0.34, y: height * 0.48 },
      { x: width * 0.52, y: height * 0.3 },
      { x: width * 0.72, y: height * 0.42 },
      { x: width * 0.84, y: height * 0.68 },
      { x: width * 0.24, y: height * 0.72 },
      { x: width * 0.45, y: height * 0.78 },
      { x: width * 0.63, y: height * 0.64 },
      { x: width * 0.78, y: height * 0.2 },
      { x: width * 0.12, y: height * 0.55 },
      { x: width * 0.56, y: height * 0.52 },
      { x: width * 0.9, y: height * 0.34 },
      { x: width * 0.68, y: height * 0.82 },
      { x: width * 0.38, y: height * 0.18 },
      { x: width * 0.08, y: height * 0.82 },
      { x: width * 0.48, y: height * 0.58 },
      { x: width * 0.88, y: height * 0.5 },
      { x: width * 0.3, y: height * 0.34 },
      { x: width * 0.6, y: height * 0.16 },
      { x: width * 0.16, y: height * 0.38 },
      { x: width * 0.26, y: height * 0.14 },
      { x: width * 0.74, y: height * 0.76 },
      { x: width * 0.92, y: height * 0.22 },
      { x: width * 0.42, y: height * 0.9 },
      { x: width * 0.1, y: height * 0.18 },
      { x: width * 0.82, y: height * 0.88 },
      { x: width * 0.54, y: height * 0.7 },
      { x: width * 0.7, y: height * 0.1 },
      { x: width * 0.22, y: height * 0.9 },
      { x: width * 0.96, y: height * 0.6 },
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

      this.updateParticleOpacity(particle);
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

    for (const particle of this.particles) {
      this.context.shadowColor = `rgba(${particle.color}, ${Math.min(particle.opacity + 0.15, 1)})`;
      this.context.shadowBlur = Math.max(12, particle.radius * 2.2);
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
