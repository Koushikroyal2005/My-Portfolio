"use client";

import { useEffect, useRef } from "react";

type BrushPoint = { x: number; y: number; t: number };

export function TrailReveal({ src }: { src: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const maskRef = useRef<HTMLCanvasElement | null>(null);
  const pointsRef = useRef<BrushPoint[]>([]);
  const lastRef = useRef<BrushPoint | null>(null);
  const srcRef = useRef(src);
  const imagesRef = useRef<Record<string, HTMLImageElement>>({});

  useEffect(() => {
    srcRef.current = src;
    pointsRef.current = [];
    lastRef.current = null;
    const canvas = canvasRef.current;
    if (canvas) canvas.getContext("2d")?.clearRect(0, 0, canvas.width, canvas.height);
    const mask = maskRef.current;
    if (mask) mask.getContext("2d")?.clearRect(0, 0, mask.width, mask.height);
  }, [src]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const mask = document.createElement("canvas");
    maskRef.current = mask;

    for (const [key, url] of Object.entries({
      naruto: "/assets/naruto-aligned-v3.png",
      sasuke: "/assets/sasuke-aligned-v3.png",
    })) {
      const image = new Image();
      image.src = url;
      imagesRef.current[key] = image;
    }

    let frame = 0;
    const draw = (now: number) => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.max(1, Math.round(rect.width * dpr));
      const height = Math.max(1, Math.round(rect.height * dpr));

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        mask.width = width;
        mask.height = height;
        pointsRef.current = [];
        lastRef.current = null;
      }

      const context = canvas.getContext("2d");
      const brush = mask.getContext("2d");
      if (!context || !brush) {
        frame = requestAnimationFrame(draw);
        return;
      }

      const life = 1150;
      pointsRef.current = pointsRef.current.filter((point) => now - point.t < life);
      brush.clearRect(0, 0, width, height);
      brush.lineCap = "round";
      brush.lineJoin = "round";
      const points = pointsRef.current;

      if (points.length === 1) {
        const alpha = Math.max(0, 1 - (now - points[0].t) / life);
        brush.globalAlpha = alpha;
        brush.fillStyle = "#fff";
        brush.beginPath();
        brush.arc(points[0].x * dpr, points[0].y * dpr, 48 * dpr, 0, Math.PI * 2);
        brush.fill();
      }

      for (let index = 1; index < points.length; index++) {
        const start = points[index - 1];
        const end = points[index];
        const alpha = Math.max(0, 1 - (now - end.t) / life);
        brush.strokeStyle = "#fff";
        brush.globalAlpha = alpha * 0.28;
        brush.lineWidth = 118 * dpr;
        brush.beginPath();
        brush.moveTo(start.x * dpr, start.y * dpr);
        brush.lineTo(end.x * dpr, end.y * dpr);
        brush.stroke();
        brush.globalAlpha = alpha;
        brush.lineWidth = 88 * dpr;
        brush.beginPath();
        brush.moveTo(start.x * dpr, start.y * dpr);
        brush.lineTo(end.x * dpr, end.y * dpr);
        brush.stroke();
      }

      brush.globalAlpha = 1;
      context.clearRect(0, 0, width, height);
      const key = srcRef.current.includes("sasuke") ? "sasuke" : "naruto";
      const image = imagesRef.current[key];

      if (image?.complete && image.naturalWidth) {
        const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight);
        const drawnWidth = image.naturalWidth * scale;
        const drawnHeight = image.naturalHeight * scale;
        context.globalCompositeOperation = "source-over";
        context.drawImage(image, (width - drawnWidth) / 2, 0, drawnWidth, drawnHeight);
        context.globalCompositeOperation = "destination-in";
        context.drawImage(mask, 0, 0);
        context.globalCompositeOperation = "source-over";
      }

      frame = requestAnimationFrame(draw);
    };

    frame = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frame);
  }, []);

  const paint = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const now = performance.now();
    const next = { x: event.clientX - rect.left, y: event.clientY - rect.top, t: now };
    const last = lastRef.current;

    if (last) {
      const distance = Math.hypot(next.x - last.x, next.y - last.y);
      const steps = Math.max(1, Math.ceil(distance / 12));
      for (let index = 1; index <= steps; index++) {
        const mix = index / steps;
        pointsRef.current.push({
          x: last.x + (next.x - last.x) * mix,
          y: last.y + (next.y - last.y) * mix,
          t: now,
        });
      }
    } else {
      pointsRef.current.push(next);
    }

    if (pointsRef.current.length > 110) {
      pointsRef.current.splice(0, pointsRef.current.length - 110);
    }
    lastRef.current = next;
  };

  return (
    <canvas
      ref={canvasRef}
      className="trail-canvas brush-trail"
      onPointerEnter={paint}
      onPointerMove={paint}
      onPointerLeave={() => { lastRef.current = null; }}
      aria-hidden="true"
    />
  );
}
