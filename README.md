import React, { useEffect, useRef } from 'react';

const PlanetCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    // Set canvas dimensions to match the window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawPlanet(ctx);
    };

    // Initial canvas size
    resizeCanvas();

    // Handle window resize
    window.addEventListener('resize', resizeCanvas);

    // Cleanup event listener
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  // Function to draw the planet glow
  const drawPlanet = (ctx: CanvasRenderingContext2D) => {
    const { width, height } = ctx.canvas;
    
    // Clear the canvas
    ctx.clearRect(0, 0, width, height);
    
    // Background gradient
    const gradient = ctx.createRadialGradient(
      width / 2, height / 2, width / 3,
      width / 2, height / 2, width / 1.5
    );
    gradient.addColorStop(0, '#240F5F');  // Dark purple/blue center
    gradient.addColorStop(1, '#000');     // Outer blackish space

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Glow effect
    const glowGradient = ctx.createRadialGradient(
      width / 2, height / 1.5, 150,
      width / 2, height / 1.5, 400
    );
    glowGradient.addColorStop(0, 'rgba(128, 0, 255, 0.9)');  // Inner glowing purple
    glowGradient.addColorStop(1, 'rgba(128, 0, 255, 0)');    // Outer transparent purple

    ctx.fillStyle = glowGradient;
    ctx.beginPath();
    ctx.arc(width / 2, height / 1.5, 400, 0, Math.PI * 2, false);
    ctx.fill();
  };

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />;
};

export default PlanetCanvas;
