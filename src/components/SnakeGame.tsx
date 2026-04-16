"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";

const CELL = 20;
const COLS = 20;
const ROWS = 20;
const W = CELL * COLS;
const H = CELL * ROWS;
const INITIAL_SPEED = 163;

type Dir = "UP" | "DOWN" | "LEFT" | "RIGHT";
type Point = { x: number; y: number };

function rand(): Point {
  return {
    x: Math.floor(Math.random() * COLS),
    y: Math.floor(Math.random() * ROWS),
  };
}

export default function SnakeGame({ onClose }: { onClose: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef({
    snake: [{ x: 10, y: 10 }] as Point[],
    dir: "RIGHT" as Dir,
    nextDir: "RIGHT" as Dir,
    food: rand() as Point,
    score: 0,
    alive: true,
    speed: INITIAL_SPEED,
  });
  const [score, setScore] = useState(0);
  const [dead, setDead] = useState(false);
  const rafRef = useRef<number | null>(null);
  const lastTickRef = useRef<number>(0);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const s = stateRef.current;

    // BG
    ctx.fillStyle = "#111827";
    ctx.fillRect(0, 0, W, H);

    // Grid dots
    ctx.fillStyle = "rgba(255,255,255,0.04)";
    for (let x = 0; x < COLS; x++)
      for (let y = 0; y < ROWS; y++)
        ctx.fillRect(x * CELL + CELL / 2 - 1, y * CELL + CELL / 2 - 1, 2, 2);

    // Food
    const fx = s.food.x * CELL + CELL / 2;
    const fy = s.food.y * CELL + CELL / 2;
    ctx.fillStyle = "#f87171";
    ctx.beginPath();
    ctx.arc(fx, fy, CELL / 2 - 2, 0, Math.PI * 2);
    ctx.fill();

    // Snake
    s.snake.forEach((seg, i) => {
      const alpha = 1 - (i / s.snake.length) * 0.4;
      ctx.fillStyle = i === 0 ? `rgba(74,222,128,${alpha})` : `rgba(34,197,94,${alpha})`;
      ctx.beginPath();
      ctx.roundRect(
        seg.x * CELL + 2,
        seg.y * CELL + 2,
        CELL - 4,
        CELL - 4,
        4
      );
      ctx.fill();
    });
  }, []);

  const tick = useCallback((now: number) => {
    const s = stateRef.current;
    if (!s.alive) return;

    if (now - lastTickRef.current >= s.speed) {
      lastTickRef.current = now;
      s.dir = s.nextDir;
      const head = s.snake[0];
      let nx = head.x, ny = head.y;
      if (s.dir === "UP") ny--;
      if (s.dir === "DOWN") ny++;
      if (s.dir === "LEFT") nx--;
      if (s.dir === "RIGHT") nx++;

      // Wall
      if (nx < 0 || nx >= COLS || ny < 0 || ny >= ROWS) {
        s.alive = false;
        setDead(true);
        return;
      }
      // Self
      if (s.snake.some(seg => seg.x === nx && seg.y === ny)) {
        s.alive = false;
        setDead(true);
        return;
      }

      const newSnake = [{ x: nx, y: ny }, ...s.snake];
      if (nx === s.food.x && ny === s.food.y) {
        s.score++;
        s.speed = Math.max(75, INITIAL_SPEED - s.score * 5);
        s.food = rand();
        setScore(s.score);
      } else {
        newSnake.pop();
      }
      s.snake = newSnake;
    }

    draw();
    rafRef.current = requestAnimationFrame(tick);
  }, [draw]);

  const restart = useCallback(() => {
    stateRef.current = {
      snake: [{ x: 10, y: 10 }],
      dir: "RIGHT",
      nextDir: "RIGHT",
      food: rand(),
      score: 0,
      alive: true,
      speed: INITIAL_SPEED,
    };
    setScore(0);
    setDead(false);
    lastTickRef.current = 0;
    rafRef.current = requestAnimationFrame(tick);
  }, [tick]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [tick]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const s = stateRef.current;
      const map: Record<string, Dir> = {
        ArrowUp: "UP", w: "UP", W: "UP",
        ArrowDown: "DOWN", s: "DOWN", S: "DOWN",
        ArrowLeft: "LEFT", a: "LEFT", A: "LEFT",
        ArrowRight: "RIGHT", d: "RIGHT", D: "RIGHT",
      };
      const newDir = map[e.key];
      if (!newDir) return;
      const opp: Record<Dir, Dir> = { UP: "DOWN", DOWN: "UP", LEFT: "RIGHT", RIGHT: "LEFT" };
      if (newDir !== opp[s.dir]) s.nextDir = newDir;
      // Prevent page scroll
      if (["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key)) e.preventDefault();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Touch swipe support
  const touchStart = useRef<Point | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current) return;
    const dx = e.changedTouches[0].clientX - touchStart.current.x;
    const dy = e.changedTouches[0].clientY - touchStart.current.y;
    const s = stateRef.current;
    const opp: Record<Dir, Dir> = { UP: "DOWN", DOWN: "UP", LEFT: "RIGHT", RIGHT: "LEFT" };
    let newDir: Dir | null = null;
    if (Math.abs(dx) > Math.abs(dy)) {
      newDir = dx > 0 ? "RIGHT" : "LEFT";
    } else {
      newDir = dy > 0 ? "DOWN" : "UP";
    }
    if (newDir && newDir !== opp[s.dir]) s.nextDir = newDir;
    touchStart.current = null;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        {/* Header */}
        <div className="flex items-center justify-between w-full px-1">
          <span className="text-white font-bold text-lg">🐍 Snake</span>
          <span className="text-green-400 font-mono text-lg">Score: {score}</span>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition text-xl px-2"
            aria-label="Close game"
          >
            ✕
          </button>
        </div>

        {/* Canvas */}
        <div className="relative" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <canvas
            ref={canvasRef}
            width={W}
            height={H}
            className="rounded-xl border border-gray-700 shadow-2xl"
            style={{ display: "block", maxWidth: "90vw", maxHeight: "60vh", aspectRatio: "1/1" }}
          />
          {dead && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 rounded-xl">
              <p className="text-white text-2xl font-bold mb-1">Game Over</p>
              <p className="text-gray-300 text-sm mb-4">Score: {score}</p>
              <button
                onClick={restart}
                className="px-6 py-2 rounded-lg bg-green-500 hover:bg-green-400 text-black font-bold transition"
              >
                Play Again
              </button>
            </div>
          )}
        </div>

        {/* Controls hint */}
        <p className="text-gray-500 text-xs">Arrow keys or WASD · Swipe on mobile</p>
      </div>
    </div>
  );
}
