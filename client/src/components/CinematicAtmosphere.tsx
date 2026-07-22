/*
 * Zacks Jersey House — Cinematic Atmosphere
 * Subtle background elements for light theme
 * Colors: Teal
 */
import { useEffect, useRef } from "react";

interface Props {
  density?: number;
  color?: string;
  className?: string;
}

export function AmbientParticles({ density = 20, color = "13, 148, 136", className = "" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; size: number; speed: number; opacity: number; drift: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < density; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.2 + 0.3,
        speed: Math.random() * 0.15 + 0.03,
        opacity: Math.random() * 0.15 + 0.03,
        drift: (Math.random() - 0.5) * 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.y -= p.speed;
        p.x += p.drift;
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${p.opacity})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [density, color]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{ opacity: 0.6 }}
    />
  );
}

/* Subtle teal glow overlay */
export function StadiumGlow({ position = "top" }: { position?: "top" | "left" | "right" | "center" }) {
  const posClasses = {
    top: "top-0 left-1/2 -translate-x-1/2",
    left: "top-1/4 left-0",
    right: "top-1/4 right-0",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  };

  return (
    <div className={`absolute ${posClasses[position]} pointer-events-none`}>
      <div className="w-[600px] h-[600px] rounded-full bg-teal-400/[0.04] blur-[150px]" />
      <div className="absolute inset-0 w-[400px] h-[400px] rounded-full bg-emerald-400/[0.06] blur-[100px]" />
    </div>
  );
}
