'use client';

import React, { useEffect, useRef } from 'react';

interface FollowCursorProps {
  color?: string;
}

const FollowCursor: React.FC<FollowCursorProps> = ({ color = '#323232a6' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    let animationFrame: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let cursor = { x: width / 2, y: height / 2 };
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    class Dot {
      position: { x: number; y: number };
      width: number;
      lag: number;

      constructor(x: number, y: number, width: number, lag: number) {
        this.position = { x, y };
        this.width = width;
        this.lag = lag;
      }

      moveTowards(x: number, y: number, context: CanvasRenderingContext2D) {
        this.position.x += (x - this.position.x) / this.lag;
        this.position.y += (y - this.position.y) / this.lag;
        context.fillStyle = color;
        context.beginPath();
        context.arc(this.position.x, this.position.y, this.width, 0, 2 * Math.PI);
        context.fill();
        context.closePath();
      }
    }

    const dot = new Dot(width / 2, height / 2, 10, 10);

    const onMouseMove = (e: MouseEvent) => {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
    };

    const onWindowResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const updateDot = () => {
      context.clearRect(0, 0, width, height);
      dot.moveTowards(cursor.x, cursor.y, context);
    };

    const loop = () => {
      updateDot();
      animationFrame = requestAnimationFrame(loop);
    };

    if (!prefersReducedMotion.matches) {
      canvas.width = width;
      canvas.height = height;
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('resize', onWindowResize);
      loop();
    }

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onWindowResize);
    };
  }, [color]);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 pointer-events-none" />;
};

export default FollowCursor;
