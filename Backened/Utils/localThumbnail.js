

 import { createCanvas } from "canvas";

export const generateLocalThumbnail = async (title) => {

  const width = 1280;
  const height = 720;

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  // ---------- BACKGROUND GRADIENT ----------
  const gradient = ctx.createLinearGradient(0, 0, width, height);

  gradient.addColorStop(0, "#0f172a");
  gradient.addColorStop(1, "#9333ea");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // ---------- GLOW EFFECT ----------
  ctx.fillStyle = "rgba(255,255,255,0.05)";
  ctx.fillRect(0, height - 200, width, 200);

  // ---------- TITLE TEXT ----------
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";

  ctx.font = "bold 80px Arial";

  const lines = wrapText(ctx, title.toUpperCase(), 900);

  let y = height / 2;

  lines.forEach(line => {

    // shadow
    ctx.fillStyle = "rgba(0,0,0,0.6)";
    ctx.fillText(line, width / 2 + 4, y + 4);

    // main text
    ctx.fillStyle = "#ffffff";
    ctx.fillText(line, width / 2, y);

    y += 90;
  });

  return canvas.toBuffer("image/png");
};


// ---------- TEXT WRAPPER ----------
function wrapText(ctx, text, maxWidth) {

  const words = text.split(" ");
  let lines = [];
  let line = "";

  for (let n = 0; n < words.length; n++) {

    const testLine = line + words[n] + " ";
    const metrics = ctx.measureText(testLine);

    if (metrics.width > maxWidth && n > 0) {
      lines.push(line);
      line = words[n] + " ";
    } else {
      line = testLine;
    }
  }

  lines.push(line);

  return lines;
}