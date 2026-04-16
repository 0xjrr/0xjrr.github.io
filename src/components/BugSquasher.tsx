"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";

// ── constants ──────────────────────────────────────────────────────────────────
const W = 400;
const H = 500;
const PLAYER_W = 44;
const PLAYER_H = 22;
const BULLET_W = 4;
const BULLET_H = 14;
const BULLET_SPEED = 7;
const PLAYER_SPEED = 5;
const INITIAL_BUG_INTERVAL = 1400; // ms between bug spawns
const MIN_BUG_INTERVAL = 500;

// Bug types: label shown, fall speed, points, colour
const BUG_TYPES = [
  { label: "🐛", speed: 1.2, pts: 10, color: "#4ade80" },
  { label: "🦟", speed: 1.8, pts: 20, color: "#f87171" },
  { label: "🐞", speed: 1.0, pts: 15, color: "#fb923c" },
  { label: "⚠️", speed: 2.4, pts: 30, color: "#facc15" },
  { label: "💀", speed: 3.0, pts: 50, color: "#c084fc" },
] as const;

type Bug = {
  id: number;
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  speed: number;
  pts: number;
  color: string;
  hit: boolean;
  hitTimer: number;
};

type Bullet = { id: number; x: number; y: number };

type Particle = { x: number; y: number; vx: number; vy: number; life: number; color: string };

let nextId = 0;
const uid = () => ++nextId;

// ── component ─────────────────────────────────────────────────────────────────
export default function BugSquasher({ onClose }: { onClose: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // mutable game state (avoid re-renders in loop)
  const S = useRef({
    playerX: W / 2 - PLAYER_W / 2,
    bugs: [] as Bug[],
    bullets: [] as Bullet[],
    particles: [] as Particle[],
    score: 0,
    lives: 3,
    alive: true,
    keys: { left: false, right: false, space: false },
    spaceCooldown: 0,
    bugTimer: 0,
    bugInterval: INITIAL_BUG_INTERVAL,
    lastTime: 0,
  });

  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [dead, setDead] = useState(false);
  const rafRef = useRef<number | null>(null);

  // ── spawn bug ────────────────────────────────────────────────────────────────
  const spawnBug = useCallback(() => {
    const type = BUG_TYPES[Math.floor(Math.random() * BUG_TYPES.length)];
    const bugW = 32;
    const bugH = 32;
    S.current.bugs.push({
      id: uid(),
      x: Math.random() * (W - bugW),
      y: -bugH,
      w: bugW,
      h: bugH,
      label: type.label,
      speed: type.speed * (1 + S.current.score / 800),
      pts: type.pts,
      color: type.color,
      hit: false,
      hitTimer: 0,
    });
  }, []);

  // ── spawn particles ──────────────────────────────────────────────────────────
  const burst = useCallback((x: number, y: number, color: string) => {
    for (let i = 0; i < 8; i++) {
      const angle = (Math.PI * 2 * i) / 8;
      const speed = 2 + Math.random() * 3;
      S.current.particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        color,
      });
    }
  }, []);

  // ── draw ─────────────────────────────────────────────────────────────────────
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const s = S.current;

    // BG
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(0, 0, W, H);

    // Scanline effect
    for (let y = 0; y < H; y += 4) {
      ctx.fillStyle = "rgba(0,0,0,0.12)";
      ctx.fillRect(0, y, W, 2);
    }

    // Ground line
    ctx.strokeStyle = "rgba(99,102,241,0.4)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, H - 40);
    ctx.lineTo(W, H - 40);
    ctx.stroke();

    // Particles
    s.particles.forEach((p) => {
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;

    // Bugs
    ctx.font = "26px serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    s.bugs.forEach((bug) => {
      if (bug.hit) {
        ctx.globalAlpha = bug.hitTimer / 12;
      }
      ctx.fillText(bug.label, bug.x + bug.w / 2, bug.y + bug.h / 2);
      ctx.globalAlpha = 1;
    });

    // Bullets
    s.bullets.forEach((b) => {
      const grad = ctx.createLinearGradient(b.x, b.y, b.x, b.y + BULLET_H);
      grad.addColorStop(0, "#a78bfa");
      grad.addColorStop(1, "#6366f1");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.roundRect(b.x, b.y, BULLET_W, BULLET_H, 2);
      ctx.fill();
    });

    // Player (terminal cursor ship)
    const px = s.playerX;
    const py = H - 40 - PLAYER_H;
    // Body
    ctx.fillStyle = "#6366f1";
    ctx.beginPath();
    ctx.roundRect(px, py + 8, PLAYER_W, PLAYER_H - 8, 4);
    ctx.fill();
    // Nozzle
    ctx.fillStyle = "#a78bfa";
    ctx.beginPath();
    ctx.moveTo(px + PLAYER_W / 2 - 5, py + 8);
    ctx.lineTo(px + PLAYER_W / 2 + 5, py + 8);
    ctx.lineTo(px + PLAYER_W / 2, py);
    ctx.closePath();
    ctx.fill();
    // Engine glow
    ctx.fillStyle = "#818cf8";
    ctx.beginPath();
    ctx.roundRect(px + 6, py + PLAYER_H + 2, 8, 5, 2);
    ctx.fill();
    ctx.beginPath();
    ctx.roundRect(px + PLAYER_W - 14, py + PLAYER_H + 2, 8, 5, 2);
    ctx.fill();

    // HUD
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillStyle = "#94a3b8";
    ctx.font = "12px monospace";
    ctx.fillText(`SCORE: ${s.score}`, 8, 8);
    ctx.textAlign = "right";
    ctx.fillText(`LIVES: ${"❤️".repeat(s.lives)}`, W - 8, 8);
  }, []);

  // ── game tick ────────────────────────────────────────────────────────────────
  const tick = useCallback((now: number) => {
    const s = S.current;
    if (!s.alive) return;

    const dt = Math.min(now - s.lastTime, 50); // cap dt
    s.lastTime = now;

    // Player movement
    if (s.keys.left) s.playerX = Math.max(0, s.playerX - PLAYER_SPEED);
    if (s.keys.right) s.playerX = Math.min(W - PLAYER_W, s.playerX + PLAYER_SPEED);

    // Shoot
    if (s.keys.space && s.spaceCooldown <= 0) {
      s.bullets.push({
        id: uid(),
        x: s.playerX + PLAYER_W / 2 - BULLET_W / 2,
        y: H - 40 - PLAYER_H - BULLET_H,
      });
      s.spaceCooldown = 12;
    }
    if (s.spaceCooldown > 0) s.spaceCooldown--;

    // Bug spawn
    s.bugTimer += dt;
    if (s.bugTimer >= s.bugInterval) {
      s.bugTimer = 0;
      s.bugInterval = Math.max(MIN_BUG_INTERVAL, s.bugInterval - 20);
      spawnBug();
    }

    // Move bullets up
    s.bullets = s.bullets.filter((b) => b.y > -BULLET_H);
    s.bullets.forEach((b) => { b.y -= BULLET_SPEED; });

    // Move bugs down
    s.bugs.forEach((bug) => {
      if (!bug.hit) bug.y += bug.speed;
      else {
        bug.hitTimer--;
        bug.y -= 1.5;
      }
    });

    // Particles
    s.particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.life -= 0.06;
    });
    s.particles = s.particles.filter((p) => p.life > 0);

    // Bullet ↔ bug collision
    s.bullets.forEach((b) => {
      s.bugs.forEach((bug) => {
        if (
          !bug.hit &&
          b.x < bug.x + bug.w &&
          b.x + BULLET_W > bug.x &&
          b.y < bug.y + bug.h &&
          b.y + BULLET_H > bug.y
        ) {
          bug.hit = true;
          bug.hitTimer = 12;
          b.y = -9999; // remove bullet
          s.score += bug.pts;
          burst(bug.x + bug.w / 2, bug.y + bug.h / 2, bug.color);
        }
      });
    });

    // Remove dead bugs
    s.bugs = s.bugs.filter((bug) => !(bug.hit && bug.hitTimer <= 0));

    // Bugs reaching ground
    const reached = s.bugs.filter((bug) => !bug.hit && bug.y + bug.h >= H - 40);
    if (reached.length > 0) {
      reached.forEach((bug) => burst(bug.x + bug.w / 2, bug.y + bug.h / 2, "#ef4444"));
      s.bugs = s.bugs.filter((bug) => bug.hit || bug.y + bug.h < H - 40);
      s.lives -= reached.length;
      if (s.lives <= 0) {
        s.lives = 0;
        s.alive = false;
        setLives(0);
        setScore(s.score);
        draw();
        setDead(true);
        return;
      }
      setLives(s.lives);
    }

    setScore(s.score);
    draw();
    rafRef.current = requestAnimationFrame(tick);
  }, [draw, spawnBug, burst]);

  // ── restart ──────────────────────────────────────────────────────────────────
  const restart = useCallback(() => {
    S.current = {
      playerX: W / 2 - PLAYER_W / 2,
      bugs: [],
      bullets: [],
      particles: [],
      score: 0,
      lives: 3,
      alive: true,
      keys: { left: false, right: false, space: false },
      spaceCooldown: 0,
      bugTimer: 0,
      bugInterval: INITIAL_BUG_INTERVAL,
      lastTime: performance.now(),
    };
    setScore(0);
    setLives(3);
    setDead(false);
    rafRef.current = requestAnimationFrame(tick);
  }, [tick]);

  // ── start on mount ───────────────────────────────────────────────────────────
  useEffect(() => {
    S.current.lastTime = performance.now();
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [tick]);

  // ── keyboard ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    const onDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") S.current.keys.left = true;
      if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") S.current.keys.right = true;
      if (e.key === " ") { S.current.keys.space = true; e.preventDefault(); }
      if (["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.key)) e.preventDefault();
    };
    const onUp = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") S.current.keys.left = false;
      if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") S.current.keys.right = false;
      if (e.key === " ") S.current.keys.space = false;
    };
    window.addEventListener("keydown", onDown);
    window.addEventListener("keyup", onUp);
    return () => {
      window.removeEventListener("keydown", onDown);
      window.removeEventListener("keyup", onUp);
    };
  }, []);

  // ── touch controls ────────────────────────────────────────────────────────────
  const touchX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
    S.current.keys.space = true;
    setTimeout(() => { S.current.keys.space = false; }, 80);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.touches[0].clientX - touchX.current;
    if (dx > 10) { S.current.keys.right = true; S.current.keys.left = false; }
    else if (dx < -10) { S.current.keys.left = true; S.current.keys.right = false; }
    else { S.current.keys.left = false; S.current.keys.right = false; }
  };
  const onTouchEnd = () => {
    S.current.keys.left = false;
    S.current.keys.right = false;
    touchX.current = null;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-3">
        {/* Header */}
        <div className="flex items-center justify-between w-full px-1">
          <span className="text-white font-bold text-lg font-mono">🐛 Bug Squasher</span>
          <span className="text-indigo-400 font-mono text-sm">
            Score: {score} &nbsp;|&nbsp; {"❤️".repeat(lives)}{"🖤".repeat(Math.max(0, 3 - lives))}
          </span>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition text-xl px-2"
            aria-label="Close game"
          >
            ✕
          </button>
        </div>

        {/* Canvas */}
        <div
          className="relative"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <canvas
            ref={canvasRef}
            width={W}
            height={H}
            className="rounded-xl border border-indigo-900 shadow-2xl shadow-indigo-900/40"
            style={{ display: "block", maxWidth: "92vw", maxHeight: "65vh" }}
          />
          {dead && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/75 rounded-xl">
              <p className="text-red-400 text-2xl font-bold font-mono mb-1">{"// SEGFAULT"}</p>
              <p className="text-gray-300 text-sm mb-1 font-mono">Fatal: too many unresolved bugs</p>
              <p className="text-indigo-300 font-mono mb-5">Score: {score}</p>
              <button
                onClick={restart}
                className="px-6 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white font-bold transition font-mono"
              >
                $ restart
              </button>
            </div>
          )}
        </div>

        {/* Controls hint */}
        <p className="text-gray-500 text-xs font-mono">← → / A D to move &nbsp;·&nbsp; Space to shoot &nbsp;·&nbsp; Swipe on mobile</p>
      </div>
    </div>
  );
}
