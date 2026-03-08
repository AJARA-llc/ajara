"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>(0);

  const createParticle = useCallback(
    (x: number, y: number): Particle => ({
      x,
      y,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.3,
      life: 0,
      maxLife: Math.random() * 120 + 60,
    }),
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Seed initial particles
    for (let i = 0; i < 50; i++) {
      particlesRef.current.push(
        createParticle(
          Math.random() * canvas.width,
          Math.random() * canvas.height
        )
      );
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      // Spawn particles near cursor
      for (let i = 0; i < 2; i++) {
        if (particlesRef.current.length < 150) {
          particlesRef.current.push(
            createParticle(
              e.clientX + (Math.random() - 0.5) * 40,
              e.clientY + (Math.random() - 0.5) * 40
            )
          );
        }
      }
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;

        if (p.life > p.maxLife) {
          particles.splice(i, 1);
          continue;
        }

        // Gentle attraction to center
        const cx = canvas.width / 2;
        const cy = canvas.height / 2;
        const dx = cx - p.x;
        const dy = cy - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > 100) {
          p.vx += (dx / dist) * 0.02;
          p.vy += (dy / dist) * 0.02;
        }

        // Mouse repulsion
        const mx = p.x - mouseRef.current.x;
        const my = p.y - mouseRef.current.y;
        const md = Math.sqrt(mx * mx + my * my);
        if (md < 120) {
          p.vx += (mx / md) * 0.5;
          p.vy += (my / md) * 0.5;
        }

        p.vx *= 0.98;
        p.vy *= 0.98;
        p.x += p.vx;
        p.y += p.vy;

        const lifeRatio = p.life / p.maxLife;
        const alpha = p.opacity * (1 - lifeRatio);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232, 96, 10, ${alpha})`;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const d = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
          if (d < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(232, 96, 10, ${0.1 * (1 - d / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Spawn ambient particles
      if (Math.random() < 0.1 && particles.length < 80) {
        particles.push(
          createParticle(
            Math.random() * canvas.width,
            Math.random() * canvas.height
          )
        );
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, [createParticle]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
}
