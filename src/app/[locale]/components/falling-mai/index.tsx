'use client';

import {useEffect, useRef} from 'react';

const FallingMai = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const numFlowers = 50;
    const flowers: {
      x: number;
      y: number;
      size: number;
      speed: number;
      angle: number;
    }[] = [];

    for (let i = 0; i < numFlowers; i++) {
      flowers.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 30 + 5,
        speed: Math.random() * 2 + 1,
        angle: Math.random() * 360,
      });
    }

    const maiImage = new Image();
    maiImage.src = '/flower-yellow.png'; // Đặt ảnh hoa mai vào thư mục `public/mai.png`

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      flowers.forEach(flower => {
        ctx.save();
        ctx.translate(flower.x, flower.y);
        ctx.rotate((flower.angle * Math.PI) / 180);
        ctx.drawImage(
          maiImage,
          -flower.size / 2,
          -flower.size / 2,
          flower.size,
          flower.size,
        );
        ctx.restore();

        flower.y += flower.speed;
        flower.angle += 1;
        if (flower.y > canvas.height) {
          flower.y = -flower.size;
          flower.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(draw);
    };

    maiImage.onload = () => {
      draw();
    };

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    return;
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"></canvas>
  );
};

export default FallingMai;
