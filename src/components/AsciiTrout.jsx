import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const SOURCE_WIDTH = 720;
const SOURCE_HEIGHT = 280;
const GLYPHS = "@%#*+=-:.";

// Original brook-trout illustration, sampled into colored ASCII cells.
// Pale vermiculations, blue-ringed red spots, and white-edged fins distinguish
// a brook trout from the rainbow trout in the earlier background animation.
function makeTrout() {
  const canvas = document.createElement("canvas");
  canvas.width = SOURCE_WIDTH;
  canvas.height = SOURCE_HEIGHT;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return null;
  let seed = 27;
  const random = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  const shape = (path, fill, stroke, lineWidth = 1) => {
    const outline = new Path2D(path);
    ctx.fillStyle = fill;
    ctx.fill(outline);
    if (stroke) {
      ctx.strokeStyle = stroke;
      ctx.lineWidth = lineWidth;
      ctx.stroke(outline);
    }
    return outline;
  };

  // Tail and dorsal fin, with radiating fin rays.
  shape(
    "M164 133 Q108 108 64 70 L79 115 Q89 139 73 167 L63 199 Q124 180 166 153Z",
    "#727344",
    "#3e4f3b",
    2,
  );
  shape("M270 86 Q293 57 312 32 Q345 41 379 87Z", "#76753c", "#405139", 2);
  ctx.strokeStyle = "#b3a75e";
  ctx.lineWidth = 2;
  for (let i = 0; i < 9; i++) {
    ctx.beginPath();
    ctx.moveTo(158, 143);
    ctx.lineTo(73 + Math.sin(i) * 8, 81 + i * 13);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(287 + i * 10, 86);
    ctx.lineTo(312 + i * 7, 40 + i * 5);
    ctx.stroke();
  }
  // Small adipose fin near the tail.
  shape("M197 107 Q191 85 211 82 Q225 86 223 100Z", "#6b7949");

  const bodyColor = ctx.createLinearGradient(0, 71, 0, 194);
  bodyColor.addColorStop(0, "#243f36");
  bodyColor.addColorStop(0.3, "#566345");
  bodyColor.addColorStop(0.58, "#99966b");
  bodyColor.addColorStop(0.79, "#be864c");
  bodyColor.addColorStop(1, "#b7542c");
  const body = shape(
    "M150 135 Q243 75 374 77 Q475 75 561 104 Q605 110 633 128 L666 140 Q671 146 659 151 L632 154 Q611 178 569 181 Q452 208 324 184 Q223 163 151 151Z",
    bodyColor,
  );

  ctx.save();
  ctx.clip(body);
  // Worm-like golden markings over the dark back.
  ctx.strokeStyle = "#b9b47a";
  ctx.lineWidth = 2.2;
  for (let i = 0; i < 165; i++) {
    const x = 155 + random() * 450;
    const y = 73 + random() * 58;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x + 9, y - 7, x - 6, y + 9, x + 7, y + 5);
    ctx.stroke();
  }
  // Subtle scale stippling and pale flank spots.
  for (let i = 0; i < 1000; i++) {
    ctx.fillStyle = random() > 0.5 ? "#ffffff14" : "#142d2420";
    ctx.fillRect(155 + random() * 490, 85 + random() * 110, 1.3, 1.3);
  }
  for (let i = 0; i < 60; i++) {
    const x = 183 + random() * 370;
    const y = 117 + random() * 50;
    ctx.fillStyle = "#d1bd79";
    ctx.beginPath();
    ctx.ellipse(x, y, 2 + random() * 2, 1.5 + random(), 0, 0, Math.PI * 2);
    ctx.fill();
  }
  for (let i = 0; i < 23; i++) {
    const x = 218 + random() * 332;
    const y = 130 + random() * 39;
    ctx.fillStyle = "#6895b3";
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#ae4c3d";
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();

  // Gill plate, jaw, and eye.
  ctx.strokeStyle = "#46513a";
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(574, 110);
  ctx.bezierCurveTo(557, 136, 581, 155, 562, 177);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(665, 145);
  ctx.lineTo(625, 147);
  ctx.lineTo(607, 157);
  ctx.stroke();
  ctx.fillStyle = "#d3bc77";
  ctx.beginPath();
  ctx.arc(620, 132, 7, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#172e2a";
  ctx.beginPath();
  ctx.arc(621, 132, 4.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#e3dfbf";
  ctx.fillRect(621, 128, 2, 2);

  // Orange lower fins, black bands, and the characteristic white leading edge.
  for (const [path, edge] of [
    ["M537 162 Q525 198 495 211 L499 179Z", "M537 163 Q521 198 495 211"],
    ["M365 178 Q357 216 324 224 L334 184Z", "M365 179 Q350 216 324 224"],
    ["M251 165 Q235 192 210 187 L225 159Z", "M251 165 Q233 188 210 187"],
  ]) {
    shape(path, "#b86637", "#624c31", 2);
    ctx.strokeStyle = "#283e35";
    ctx.lineWidth = 7;
    ctx.stroke(new Path2D(edge));
    ctx.strokeStyle = "#e8e1c5";
    ctx.lineWidth = 3;
    ctx.stroke(new Path2D(edge));
  }
  return ctx.getImageData(0, 0, SOURCE_WIDTH, SOURCE_HEIGHT);
}

export default function AsciiTrout({ paused, reducedMotion }) {
  const canvasRef = useRef(null);
  const controls = useRef({ paused, reducedMotion });
  useEffect(() => {
    controls.current = { paused, reducedMotion };
  }, [paused, reducedMotion]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const source = makeTrout();
    if (!ctx || !source) return;
    let frame;
    let width = 0;
    let height = 0;
    let fishWidth = 0;
    let cells = [];
    let time = 0;
    let lastTime = 0;
    let lastDraw = 0;
    let dirty = true;

    function resize() {
      width = canvas.getBoundingClientRect().width;
      height = canvas.getBoundingClientRect().height;
      fishWidth = Math.min(width < 600 ? width * 0.55 : 340, height * 0.55);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const columns = width < 600 ? 75 : 100;
      const stepX = SOURCE_WIDTH / columns;
      const stepY = stepX * 1.65;
      cells = [];
      for (let y = stepY / 2; y < SOURCE_HEIGHT; y += stepY) {
        for (let x = stepX / 2; x < SOURCE_WIDTH; x += stepX) {
          const i = (Math.floor(y) * SOURCE_WIDTH + Math.floor(x)) * 4;
          const [r, g, b, a] = source.data.subarray(i, i + 4);
          if (a < 80) continue;
          const luminance = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 255;
          cells.push({
            x,
            y,
            r: Math.min(255, r + 45),
            g: Math.min(255, g + 45),
            b: Math.min(255, b + 40),
            glyph: Math.min(
              GLYPHS.length - 1,
              Math.floor(luminance * GLYPHS.length),
            ),
            phase: x * 0.12 + y * 0.07,
          });
        }
      }
      ctx.font = `${(fishWidth / columns) * 1.58}px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      dirty = true;
    }

    function render(now) {
      frame = requestAnimationFrame(render);
      const dt = Math.min((now - (lastTime || now)) / 1000, 0.05);
      lastTime = now;
      const moving =
        !controls.current.paused && !controls.current.reducedMotion;
      if (document.hidden || (!moving && !dirty)) return;
      if (moving) time += dt;
      if (!dirty && now - lastDraw < 1000 / 24) return;
      lastDraw = now;
      const scale = fishWidth / SOURCE_WIDTH;
      const fishHeight = SOURCE_HEIGHT * scale;
      ctx.clearRect(0, 0, width, height);
      ctx.save();
      // Keep every character, including animated fins, below the screen midpoint.
      ctx.beginPath();
      ctx.rect(0, height / 2, width, height / 2);
      ctx.clip();
      const route = width + fishWidth + 40;
      const padding = 12;
      const laneSpace = Math.max(0, height / 2 - fishHeight - padding * 2);
      for (let fish = 0; fish < 5; fish++) {
        const phase = fish * 2.1;
        const progress =
          (time * (17 + fish * 4) + route * (0.1 + fish * 0.2)) % route;
        const facingLeft = fish % 2 === 1;
        const offsetX = facingLeft ? width - progress : progress - fishWidth;
        const offsetY = Math.max(
          height / 2 + padding,
          Math.min(
            height - fishHeight - padding,
            height / 2 +
              padding +
              laneSpace * (0.1 + fish * 0.2) +
              Math.sin(time * 0.4 + phase) * 8,
          ),
        );
        ctx.save();
        ctx.translate(offsetX + (facingLeft ? fishWidth : 0), offsetY);
        ctx.scale(facingLeft ? -1 : 1, 1);
        for (const cell of cells) {
          const tailWeight = Math.pow(1 - cell.x / SOURCE_WIDTH, 2);
          const wave =
            Math.sin(time * 2.4 + cell.x * 0.013 + phase) * 8 * tailWeight;
          const shift = Math.sin(time * 1.7 + cell.phase + phase) > 0.8 ? 1 : 0;
          ctx.fillStyle = `rgb(${cell.r},${cell.g},${cell.b})`;
          ctx.fillText(
            GLYPHS[Math.min(GLYPHS.length - 1, cell.glyph + shift)],
            cell.x * scale,
            (cell.y + wave) * scale,
          );
        }
        ctx.restore();
      }
      ctx.restore();
      dirty = false;
    }
    function visibility() {
      lastTime = 0;
    }
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    document.addEventListener("visibilitychange", visibility);
    resize();
    frame = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);

  return (
    <figure className="ascii-trout">
      <canvas
        ref={canvasRef}
        role="img"
        aria-label="Five small brook trout drawn in colored ASCII characters, swimming in the bottom half of the screen."
      />
    </figure>
  );
}

AsciiTrout.propTypes = {
  paused: PropTypes.bool.isRequired,
  reducedMotion: PropTypes.bool.isRequired,
};
