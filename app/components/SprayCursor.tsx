"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    maxLife: number;
    color: string;
    size: number;
}

// Configuration constants
const CONFIG = {
    colors: ["#FF00FF", "#00FFFF", "#FFFF00", "#FF0000", "#FFFFFF"],
    particleDensity: 3, // particles per frame when moving
    minParticleSize: 1.5,
    maxParticleSize: 4,
    minVelocity: 1,
    maxVelocity: 3,
    gravity: 0.08,
    friction: 0.98,
    fadeSpeed: 0.015,
    maxParticles: 500, // prevent memory issues
    cursorSize: 40,
    velocityThreshold: 2, // minimum velocity to spawn particles
};

export default function SprayCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const requestRef = useRef<number>(null);
    const particles = useRef<Particle[]>([]);
    const mouse = useRef({ x: -100, y: -100, prevX: -100, prevY: -100 });
    const lastParticleTime = useRef(0);

    useEffect(() => {
        const cursor = cursorRef.current;
        const canvas = canvasRef.current;
        if (!cursor || !canvas) return;

        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        // Set canvas size
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        handleResize();
        window.addEventListener("resize", handleResize);

        // Track mouse with velocity calculation
        const handleMouseMove = (e: MouseEvent) => {
            mouse.current.prevX = mouse.current.x;
            mouse.current.prevY = mouse.current.y;
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;

            // Smooth cursor follow with centering
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });

        // Animation Loop
        const updateParticles = (timestamp: number) => {
            if (!ctx || !canvas) return;

            // Clear with slight fade for trail effect (optional)
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Calculate velocity
            const dx = mouse.current.x - mouse.current.prevX;
            const dy = mouse.current.y - mouse.current.prevY;
            const velocity = Math.sqrt(dx * dx + dy * dy);

            // Add new particles based on velocity (more particles = faster movement)
            if (velocity > CONFIG.velocityThreshold && timestamp - lastParticleTime.current > 16) {
                const particleCount = Math.min(
                    Math.ceil(velocity / 2) * CONFIG.particleDensity,
                    CONFIG.particleDensity * 2
                );

                for (let i = 0; i < particleCount; i++) {
                    // Limit total particles
                    if (particles.current.length >= CONFIG.maxParticles) {
                        particles.current.shift(); // Remove oldest
                    }

                    // Random angle for spray pattern
                    const angle = Math.random() * Math.PI * 2;
                    const speed = CONFIG.minVelocity + Math.random() * (CONFIG.maxVelocity - CONFIG.minVelocity);

                    // Add some randomness to spawn position for spray effect
                    const spawnRadius = 5;
                    const spawnAngle = Math.random() * Math.PI * 2;
                    const spawnX = mouse.current.x + Math.cos(spawnAngle) * spawnRadius * Math.random();
                    const spawnY = mouse.current.y + Math.sin(spawnAngle) * spawnRadius * Math.random();

                    particles.current.push({
                        x: spawnX,
                        y: spawnY,
                        vx: Math.cos(angle) * speed + dx * 0.1,
                        vy: Math.sin(angle) * speed + dy * 0.1,
                        life: 1.0,
                        maxLife: 1.0,
                        color: CONFIG.colors[Math.floor(Math.random() * CONFIG.colors.length)],
                        size: CONFIG.minParticleSize + Math.random() * (CONFIG.maxParticleSize - CONFIG.minParticleSize),
                    });
                }

                lastParticleTime.current = timestamp;
            }

            // Update and draw particles
            for (let i = particles.current.length - 1; i >= 0; i--) {
                const p = particles.current[i];

                // Apply physics
                p.x += p.vx;
                p.y += p.vy;
                p.vy += CONFIG.gravity; // gravity
                p.vx *= CONFIG.friction; // friction
                p.vy *= CONFIG.friction;
                p.life -= CONFIG.fadeSpeed;

                // Remove dead particles
                if (p.life <= 0) {
                    particles.current.splice(i, 1);
                    continue;
                }

                // Calculate opacity with easing for smooth fade
                const lifeRatio = p.life / p.maxLife;
                const opacity = Math.pow(lifeRatio, 1.5);

                // Draw particle with glow effect
                ctx.globalAlpha = opacity * 0.3;
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * 1.5, 0, Math.PI * 2);
                ctx.fill();

                // Draw main particle
                ctx.globalAlpha = opacity;
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.globalAlpha = 1;

            requestRef.current = requestAnimationFrame(updateParticles);
        };

        requestRef.current = requestAnimationFrame(updateParticles);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, []);

    return (
        <>
            <style jsx global>{`
                body {
                    cursor: none !important;
                }
                a, button, input, textarea, select, label {
                    cursor: none !important;
                }
                * {
                    cursor: none !important;
                }
            `}</style>

            {/* Canvas for Particles */}
            <canvas
                ref={canvasRef}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                    zIndex: 9998,
                }}
            />

            {/* Custom Cursor Image */}
            <div
                ref={cursorRef}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    pointerEvents: "none",
                    zIndex: 9999,
                    width: `${CONFIG.cursorSize}px`,
                    height: `${CONFIG.cursorSize}px`,
                    transform: "translate(-50%, -50%)",
                    transition: "transform 0.05s linear", /* Changed to linear for snappier feel */
                    willChange: "transform",
                }}
            >
                <img
                    src="/spraypaint.png"
                    alt="spray paint cursor"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        filter: "drop-shadow(0 0 4px rgba(0,0,0,0.3))"
                    }}
                />
            </div>
        </>
    );
}
