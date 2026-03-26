"use client";

import { useRef, useEffect, useCallback, useState } from "react";

const GRAVITY = 0.4;
const FLAP_FORCE = -6.5;
const PIPE_SPEED = 2.5;
const PIPE_GAP = 130;
const PIPE_WIDTH = 52;
const PIPE_SPAWN_INTERVAL = 100; // frames
const BIRD_X = 80;
const BIRD_SIZE = 20;

interface Pipe {
  x: number;
  gapY: number; // center of gap
  scored: boolean;
}

type GameState = "idle" | "playing" | "dead";

export default function GameWindow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef({
    bird: { y: 0, vy: 0, rotation: 0, flapFrame: 0 },
    pipes: [] as Pipe[],
    score: 0,
    best: 0,
    frame: 0,
    state: "idle" as GameState,
    groundX: 0,
  });
  const rafRef = useRef(0);
  const [displayScore, setDisplayScore] = useState(0);
  const [displayBest, setDisplayBest] = useState(0);
  const [gameState, setGameState] = useState<GameState>("idle");

  const resetGame = useCallback(() => {
    const s = stateRef.current;
    const canvas = canvasRef.current;
    const ch = canvas?.height || 480;
    s.bird = { y: ch * 0.4, vy: 0, rotation: 0, flapFrame: 0 };
    s.pipes = [];
    s.score = 0;
    s.frame = 0;
    s.state = "idle";
    s.groundX = 0;
    setDisplayScore(0);
    setGameState("idle");
  }, []);

  const flap = useCallback(() => {
    const s = stateRef.current;
    if (s.state === "dead") {
      resetGame();
      return;
    }
    if (s.state === "idle") {
      s.state = "playing";
      setGameState("playing");
    }
    s.bird.vy = FLAP_FORCE;
    s.bird.flapFrame = 8;
  }, [resetGame]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const cw = canvas.width;
    const ch = canvas.height;
    const groundY = ch - 50;

    // Initialize bird position
    stateRef.current.bird.y = ch * 0.4;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === " " || e.key === "ArrowUp" || e.key === "w") {
        e.preventDefault();
        flap();
      }
    };
    const onClick = () => flap();
    canvas.addEventListener("keydown", onKey);
    canvas.addEventListener("click", onClick);

    let lastTime = 0;

    function tick(timestamp: number) {
      if (!lastTime) lastTime = timestamp;
      const elapsed = timestamp - lastTime;

      if (elapsed >= 1000 / 60) {
        lastTime = timestamp - (elapsed % (1000 / 60));
        update();
      }
      draw();
      rafRef.current = requestAnimationFrame(tick);
    }

    function update() {
      const s = stateRef.current;
      s.frame++;

      // Ground scrolling (always)
      if (s.state !== "dead") {
        s.groundX = (s.groundX + PIPE_SPEED) % 24;
      }

      if (s.state === "idle") {
        // Idle bob
        s.bird.y = ch * 0.4 + Math.sin(s.frame * 0.05) * 8;
        return;
      }

      if (s.state === "dead") return;

      // Bird physics
      s.bird.vy += GRAVITY;
      if (s.bird.vy > 10) s.bird.vy = 10;
      s.bird.y += s.bird.vy;
      s.bird.rotation = Math.min(Math.max(s.bird.vy * 4, -30), 70);
      if (s.bird.flapFrame > 0) s.bird.flapFrame--;

      // Spawn pipes
      if (s.frame % PIPE_SPAWN_INTERVAL === 0) {
        const minGap = 80;
        const maxGap = groundY - 80;
        const gapY = minGap + Math.random() * (maxGap - minGap - PIPE_GAP) + PIPE_GAP / 2;
        s.pipes.push({ x: cw + 10, gapY, scored: false });
      }

      // Move pipes
      for (const pipe of s.pipes) {
        pipe.x -= PIPE_SPEED;

        // Score
        if (!pipe.scored && pipe.x + PIPE_WIDTH < BIRD_X) {
          pipe.scored = true;
          s.score++;
          setDisplayScore(s.score);
        }
      }

      // Remove off-screen pipes
      s.pipes = s.pipes.filter(p => p.x + PIPE_WIDTH > -10);

      // Collision detection
      const birdRect = {
        x: BIRD_X - BIRD_SIZE / 2 + 3,
        y: s.bird.y - BIRD_SIZE / 2 + 3,
        w: BIRD_SIZE - 6,
        h: BIRD_SIZE - 6,
      };

      // Ground/ceiling
      if (s.bird.y + BIRD_SIZE / 2 >= groundY || s.bird.y - BIRD_SIZE / 2 <= 0) {
        die();
        return;
      }

      // Pipes
      for (const pipe of s.pipes) {
        const topPipe = { x: pipe.x, y: 0, w: PIPE_WIDTH, h: pipe.gapY - PIPE_GAP / 2 };
        const botPipe = { x: pipe.x, y: pipe.gapY + PIPE_GAP / 2, w: PIPE_WIDTH, h: groundY - (pipe.gapY + PIPE_GAP / 2) };

        if (rectsOverlap(birdRect, topPipe) || rectsOverlap(birdRect, botPipe)) {
          die();
          return;
        }
      }
    }

    function die() {
      const s = stateRef.current;
      s.state = "dead";
      if (s.score > s.best) {
        s.best = s.score;
        setDisplayBest(s.best);
      }
      setGameState("dead");
    }

    function rectsOverlap(a: {x:number;y:number;w:number;h:number}, b: {x:number;y:number;w:number;h:number}) {
      return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
    }

    function draw() {
      const s = stateRef.current;

      // Sky
      const sky = ctx.createLinearGradient(0, 0, 0, ch);
      sky.addColorStop(0, "#4dc9f6");
      sky.addColorStop(1, "#a0e4ff");
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, cw, ch);

      // Background clouds
      ctx.fillStyle = "rgba(255,255,255,0.6)";
      for (let i = 0; i < 4; i++) {
        const cx = ((i * 160 + 40) - s.groundX * 0.3 - s.frame * 0.15) % (cw + 120) - 60;
        ctx.beginPath();
        ctx.ellipse(cx, 60 + i * 30, 45 + i * 8, 16, 0, 0, Math.PI * 2);
        ctx.fill();
      }

      // Pipes
      for (const pipe of s.pipes) {
        drawPipe(pipe);
      }

      // Ground
      const gy = groundY;
      ctx.fillStyle = "#8BC34A";
      ctx.fillRect(0, gy, cw, 6);
      ctx.fillStyle = "#D2B48C";
      ctx.fillRect(0, gy + 6, cw, ch - gy - 6);
      // Ground texture
      ctx.strokeStyle = "#c4a882";
      ctx.lineWidth = 1;
      for (let x = -s.groundX; x < cw; x += 24) {
        ctx.beginPath();
        ctx.moveTo(x, gy + 6);
        ctx.lineTo(x + 12, gy + ch);
        ctx.stroke();
      }

      // Bird
      drawBird();

      // HUD
      if (s.state === "playing") {
        // Score
        ctx.fillStyle = "#fff";
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 3;
        ctx.font = "bold 36px 'Trebuchet MS', sans-serif";
        ctx.textAlign = "center";
        ctx.strokeText(`${s.score}`, cw / 2, 50);
        ctx.fillText(`${s.score}`, cw / 2, 50);
        ctx.textAlign = "left";
      }

      // Idle screen
      if (s.state === "idle") {
        ctx.fillStyle = "#fff";
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 3;
        ctx.font = "bold 28px 'Trebuchet MS', sans-serif";
        ctx.textAlign = "center";
        ctx.strokeText("Flappy Dev", cw / 2, ch * 0.22);
        ctx.fillText("Flappy Dev", cw / 2, ch * 0.22);
        ctx.lineWidth = 2;
        ctx.font = "bold 15px 'Trebuchet MS', sans-serif";
        ctx.strokeText("Click or press Space to fly", cw / 2, ch * 0.65);
        ctx.fillText("Click or press Space to fly", cw / 2, ch * 0.65);
        ctx.textAlign = "left";
      }

      // Death screen
      if (s.state === "dead") {
        ctx.fillStyle = "rgba(0,0,0,0.45)";
        ctx.fillRect(0, 0, cw, ch);

        // Panel
        const px = cw / 2 - 100;
        const py = ch / 2 - 70;
        ctx.fillStyle = "#DEB887";
        ctx.strokeStyle = "#8B6914";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.roundRect(px, py, 200, 140, 10);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#fff";
        ctx.font = "bold 22px 'Trebuchet MS', sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("Game Over", cw / 2, py + 32);

        ctx.fillStyle = "#333";
        ctx.font = "16px 'Trebuchet MS', sans-serif";
        ctx.fillText(`Score: ${s.score}`, cw / 2, py + 62);
        ctx.fillText(`Best: ${s.best}`, cw / 2, py + 86);

        ctx.fillStyle = "#666";
        ctx.font = "12px 'Trebuchet MS', sans-serif";
        ctx.fillText("Click to retry", cw / 2, py + 118);
        ctx.textAlign = "left";
      }
    }

    function drawPipe(pipe: Pipe) {
      const s = stateRef.current;
      const topH = pipe.gapY - PIPE_GAP / 2;
      const botY = pipe.gapY + PIPE_GAP / 2;
      const botH = groundY - botY;

      // Top pipe body
      const grad1 = ctx.createLinearGradient(pipe.x, 0, pipe.x + PIPE_WIDTH, 0);
      grad1.addColorStop(0, "#4CAF50");
      grad1.addColorStop(0.3, "#66BB6A");
      grad1.addColorStop(0.7, "#43A047");
      grad1.addColorStop(1, "#388E3C");
      ctx.fillStyle = grad1;
      ctx.fillRect(pipe.x + 4, 0, PIPE_WIDTH - 8, topH - 16);
      // Top pipe lip
      ctx.fillRect(pipe.x, topH - 16, PIPE_WIDTH, 16);
      ctx.strokeStyle = "#2E7D32";
      ctx.lineWidth = 1.5;
      ctx.strokeRect(pipe.x + 0.5, topH - 16, PIPE_WIDTH - 1, 16);

      // Bottom pipe body
      ctx.fillStyle = grad1;
      ctx.fillRect(pipe.x + 4, botY + 16, PIPE_WIDTH - 8, botH - 16);
      // Bottom pipe lip
      ctx.fillRect(pipe.x, botY, PIPE_WIDTH, 16);
      ctx.strokeRect(pipe.x + 0.5, botY, PIPE_WIDTH - 1, 16);
    }

    function drawBird() {
      const s = stateRef.current;
      const bx = BIRD_X;
      const by = s.bird.y;
      const rot = s.bird.rotation * Math.PI / 180;
      const flapping = s.bird.flapFrame > 0;

      ctx.save();
      ctx.translate(bx, by);
      ctx.rotate(rot);

      // Body
      ctx.fillStyle = "#FFD700";
      ctx.beginPath();
      ctx.ellipse(0, 0, BIRD_SIZE / 2 + 2, BIRD_SIZE / 2, 0, 0, Math.PI * 2);
      ctx.fill();

      // Belly
      ctx.fillStyle = "#FFF8DC";
      ctx.beginPath();
      ctx.ellipse(2, 3, 8, 6, 0, 0, Math.PI * 2);
      ctx.fill();

      // Wing
      ctx.fillStyle = "#DAA520";
      ctx.beginPath();
      if (flapping) {
        // Wing up
        ctx.ellipse(-4, -10, 8, 5, -0.3, 0, Math.PI * 2);
      } else {
        // Wing down
        ctx.ellipse(-4, 3, 8, 4, 0.2, 0, Math.PI * 2);
      }
      ctx.fill();

      // Eye (white)
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(6, -4, 5, 0, Math.PI * 2);
      ctx.fill();

      // Pupil
      ctx.fillStyle = "#000";
      ctx.beginPath();
      ctx.arc(8, -4, 2.5, 0, Math.PI * 2);
      ctx.fill();

      // Beak
      ctx.fillStyle = "#FF6347";
      ctx.beginPath();
      ctx.moveTo(10, -1);
      ctx.lineTo(18, 1);
      ctx.lineTo(10, 4);
      ctx.closePath();
      ctx.fill();

      ctx.restore();
    }

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener("keydown", onKey);
      canvas.removeEventListener("keyup", onKeyUp);
      canvas.removeEventListener("click", onClick);
    };

    function onKeyUp() {} // placeholder for cleanup
  }, [flap, resetGame]);

  return (
    <div style={{ background: "#000", height: "100%", position: "relative" }}>
      <canvas
        ref={canvasRef}
        width={320}
        height={480}
        tabIndex={0}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          imageRendering: "auto",
          outline: "none",
          cursor: "pointer",
        }}
      />
    </div>
  );
}
