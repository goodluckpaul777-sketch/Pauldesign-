/**
 * Utility for drawing high-resolution, presentable advert stickers onto HTML5 Canvas
 * and exporting them directly as downloadable PNG/SVG image files that can be opened in Files / Gallery apps.
 * Strictly free of pricing information, focusing on quality, credibility, services, and direct contact.
 */

export interface StickerRenderOptions {
  title: string;
  tagline: string;
  phone: string;
  email?: string;
  badgeText: string;
  services: string[];
  themeColor: 'emerald' | 'indigo' | 'amber' | 'cyan' | 'rose' | 'slate';
  template: 'showcase' | 'story' | 'badge' | 'minimal';
  includeAvatar: boolean;
  includeQrCode: boolean;
  avatarImgUrl?: string;
}

export const THEME_PALETTES = {
  emerald: {
    name: 'Emerald Pro',
    bgStart: '#02100d',
    bgMid: '#06201b',
    bgEnd: '#0f172a',
    accent: '#10b981',
    accentLight: '#34d399',
    accentGlow: 'rgba(16, 185, 129, 0.25)',
    border: '#10b981',
    cardBg: 'rgba(15, 23, 42, 0.85)',
    textColor: '#ffffff',
    textMuted: '#94a3b8',
    badgeBg: 'rgba(16, 185, 129, 0.15)',
    badgeBorder: 'rgba(16, 185, 129, 0.4)',
    badgeText: '#34d399'
  },
  indigo: {
    name: 'Sapphire Pro',
    bgStart: '#0b0f19',
    bgMid: '#1e1b4b',
    bgEnd: '#0f172a',
    accent: '#6366f1',
    accentLight: '#818cf8',
    accentGlow: 'rgba(99, 102, 241, 0.25)',
    border: '#6366f1',
    cardBg: 'rgba(15, 23, 42, 0.85)',
    textColor: '#ffffff',
    textMuted: '#94a3b8',
    badgeBg: 'rgba(99, 102, 241, 0.15)',
    badgeBorder: 'rgba(99, 102, 241, 0.4)',
    badgeText: '#818cf8'
  },
  amber: {
    name: 'Gold Luxury',
    bgStart: '#140e02',
    bgMid: '#241a05',
    bgEnd: '#0f172a',
    accent: '#f59e0b',
    accentLight: '#fbbf24',
    accentGlow: 'rgba(245, 158, 11, 0.25)',
    border: '#f59e0b',
    cardBg: 'rgba(15, 23, 42, 0.85)',
    textColor: '#ffffff',
    textMuted: '#94a3b8',
    badgeBg: 'rgba(245, 158, 11, 0.15)',
    badgeBorder: 'rgba(245, 158, 11, 0.4)',
    badgeText: '#fbbf24'
  },
  cyan: {
    name: 'Cyber Cyan',
    bgStart: '#03141a',
    bgMid: '#062633',
    bgEnd: '#0f172a',
    accent: '#06b6d4',
    accentLight: '#22d3ee',
    accentGlow: 'rgba(6, 182, 212, 0.25)',
    border: '#06b6d4',
    cardBg: 'rgba(15, 23, 42, 0.85)',
    textColor: '#ffffff',
    textMuted: '#94a3b8',
    badgeBg: 'rgba(6, 182, 212, 0.15)',
    badgeBorder: 'rgba(6, 182, 212, 0.4)',
    badgeText: '#22d3ee'
  },
  rose: {
    name: 'Crimson Rose',
    bgStart: '#190409',
    bgMid: '#2e0a15',
    bgEnd: '#0f172a',
    accent: '#f43f5e',
    accentLight: '#fb7185',
    accentGlow: 'rgba(244, 63, 94, 0.25)',
    border: '#f43f5e',
    cardBg: 'rgba(15, 23, 42, 0.85)',
    textColor: '#ffffff',
    textMuted: '#94a3b8',
    badgeBg: 'rgba(244, 63, 94, 0.15)',
    badgeBorder: 'rgba(244, 63, 94, 0.4)',
    badgeText: '#fb7185'
  },
  slate: {
    name: 'Minimal Light',
    bgStart: '#f8fafc',
    bgMid: '#f1f5f9',
    bgEnd: '#e2e8f0',
    accent: '#0f172a',
    accentLight: '#059669',
    accentGlow: 'rgba(15, 23, 42, 0.08)',
    border: '#cbd5e1',
    cardBg: '#ffffff',
    textColor: '#0f172a',
    textMuted: '#64748b',
    badgeBg: 'rgba(16, 185, 129, 0.1)',
    badgeBorder: '#10b981',
    badgeText: '#065f46'
  }
};

/**
 * Helper: draw rounded rectangle
 */
function drawRoundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
  fill = true,
  stroke = true
) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  if (fill) ctx.fill();
  if (stroke) ctx.stroke();
}

/**
 * Helper: text wrapping on canvas
 */
function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number
): number {
  const words = text.split(' ');
  let line = '';
  let currentY = y;

  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line.trim(), x, currentY);
      line = words[n] + ' ';
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line.trim(), x, currentY);
  return currentY + lineHeight;
}

/**
 * Helper to load an image safely
 */
function loadImage(src: string): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    // Sanitize any legacy /src/assets paths
    const cleanSrc = src.startsWith('/src/assets/') ? src.replace('/src/assets/', '/assets/') : src;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = () => {
      // If failed and not already using static fallback, attempt static fallback
      if (cleanSrc.includes('assets/images/')) {
        const filename = cleanSrc.split('/').pop();
        if (filename && !cleanSrc.startsWith('/assets/images/')) {
          const fallbackImg = new Image();
          fallbackImg.crossOrigin = 'anonymous';
          fallbackImg.onload = () => resolve(fallbackImg);
          fallbackImg.onerror = () => resolve(null);
          fallbackImg.src = `/assets/images/${filename}`;
          return;
        }
      }
      resolve(null);
    };
    img.src = cleanSrc;
  });
}

/**
 * Main function to render a sticker onto an HTML5 Canvas at high resolution
 */
export async function renderStickerToCanvas(
  canvas: HTMLCanvasElement,
  options: StickerRenderOptions
): Promise<void> {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const palette = THEME_PALETTES[options.themeColor] || THEME_PALETTES.emerald;
  const isLight = options.themeColor === 'slate';

  // Determine canvas dimensions based on template
  let width = 1200;
  let height = 1200;

  if (options.template === 'story') {
    width = 1080;
    height = 1920;
  } else if (options.template === 'badge') {
    width = 1200;
    height = 700;
  } else if (options.template === 'minimal') {
    width = 1200;
    height = 1200;
  }

  canvas.width = width;
  canvas.height = height;

  // 1. Draw Outer Background with Subtle Mesh Gradient
  const bgGrad = ctx.createLinearGradient(0, 0, width, height);
  bgGrad.addColorStop(0, palette.bgStart);
  bgGrad.addColorStop(0.5, palette.bgMid);
  bgGrad.addColorStop(1, palette.bgEnd);
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  // Subtle decorative radial glow
  const glowGrad = ctx.createRadialGradient(width * 0.2, height * 0.2, 50, width * 0.2, height * 0.2, width * 0.7);
  glowGrad.addColorStop(0, palette.accentGlow);
  glowGrad.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = glowGrad;
  ctx.fillRect(0, 0, width, height);

  // Decorative border
  ctx.strokeStyle = palette.border;
  ctx.lineWidth = isLight ? 4 : 8;
  drawRoundRect(ctx, 24, 24, width - 48, height - 48, 36, false, true);

  // Inner card container
  const padding = 54;
  const innerX = padding;
  const innerY = padding;
  const innerW = width - padding * 2;
  const innerH = height - padding * 2;

  // Load avatar image if needed
  let avatarImg: HTMLImageElement | null = null;
  if (options.includeAvatar && options.avatarImgUrl) {
    avatarImg = await loadImage(options.avatarImgUrl);
  }

  // 2. Render Template-Specific Layouts
  if (options.template === 'story') {
    // -------------------------------------------------------------
    // WHATSAPP STATUS / STORY FORMAT (1080 x 1920)
    // -------------------------------------------------------------
    
    // Top Badge Tag
    ctx.fillStyle = palette.badgeBg;
    ctx.strokeStyle = palette.badgeBorder;
    ctx.lineWidth = 2;
    drawRoundRect(ctx, width / 2 - 240, 100, 480, 56, 28, true, true);

    ctx.fillStyle = palette.badgeText;
    ctx.font = 'bold 22px system-ui, -apple-system, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(options.badgeText.toUpperCase(), width / 2, 136);

    // Title / Brand Name
    ctx.fillStyle = isLight ? '#475569' : '#94a3b8';
    ctx.font = 'bold 24px system-ui, -apple-system, sans-serif';
    ctx.fillText(options.title.toUpperCase(), width / 2, 210);

    // Main Tagline Headline
    ctx.fillStyle = palette.textColor;
    ctx.font = '900 48px system-ui, -apple-system, sans-serif';
    wrapText(ctx, options.tagline, width / 2, 275, 880, 62);

    // Center Image or Visual Feature Card
    const cardY = 490;
    const cardH = 560;
    ctx.fillStyle = isLight ? '#ffffff' : '#090d16';
    ctx.strokeStyle = isLight ? '#cbd5e1' : 'rgba(255,255,255,0.1)';
    ctx.lineWidth = 3;
    drawRoundRect(ctx, 90, cardY, width - 180, cardH, 32, true, true);

    if (avatarImg) {
      // Draw clipped avatar image
      ctx.save();
      ctx.beginPath();
      const imgX = 110;
      const imgY = cardY + 20;
      const imgW = width - 220;
      const imgH = cardH - 40;
      drawRoundRect(ctx, imgX, imgY, imgW, imgH, 24, false, false);
      ctx.clip();
      ctx.drawImage(avatarImg, imgX, imgY, imgW, imgH);
      ctx.restore();
    } else {
      // Draw modern graphic pattern
      ctx.fillStyle = palette.accent;
      ctx.font = 'bold 36px system-ui, -apple-system, sans-serif';
      ctx.fillText('⚡ 100% PRO DIGITAL BUILDER', width / 2, cardY + 280);
    }

    // Services Checklist Box
    const servY = 1100;
    ctx.fillStyle = isLight ? 'rgba(241, 245, 249, 0.9)' : 'rgba(15, 23, 42, 0.8)';
    ctx.strokeStyle = palette.badgeBorder;
    ctx.lineWidth = 2;
    drawRoundRect(ctx, 90, servY, width - 180, 360, 28, true, true);

    ctx.textAlign = 'left';
    ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
    ctx.font = 'bold 24px system-ui, -apple-system, sans-serif';
    ctx.fillText('✨ What We Offer For Your Business:', 130, servY + 50);

    let currServY = servY + 105;
    options.services.slice(0, 4).forEach((svc) => {
      // Draw check icon
      ctx.fillStyle = palette.accent;
      ctx.font = 'bold 24px system-ui, sans-serif';
      ctx.fillText('✓', 130, currServY);

      ctx.fillStyle = isLight ? '#334155' : '#cbd5e1';
      ctx.font = '500 24px system-ui, sans-serif';
      ctx.fillText(svc, 165, currServY);
      currServY += 58;
    });

    // Bottom Contact Callout Banner
    const botY = 1520;
    ctx.fillStyle = isLight ? '#0f172a' : '#020617';
    ctx.strokeStyle = palette.accent;
    ctx.lineWidth = 4;
    drawRoundRect(ctx, 90, botY, width - 180, 260, 32, true, true);

    ctx.textAlign = 'center';
    ctx.fillStyle = isLight ? '#94a3b8' : '#94a3b8';
    ctx.font = 'bold 22px system-ui, sans-serif';
    ctx.fillText('CALL OR WHATSAPP DIRECTLY TO ORDER:', width / 2, botY + 55);

    ctx.fillStyle = palette.accentLight;
    ctx.font = '900 64px monospace, system-ui, sans-serif';
    ctx.fillText(options.phone, width / 2, botY + 135);

    if (options.email) {
      ctx.fillStyle = isLight ? '#059669' : '#34d399';
      ctx.font = 'bold 22px system-ui, sans-serif';
      ctx.fillText(`✉️ ${options.email}  •  💬 WhatsApp Available`, width / 2, botY + 205);
    } else {
      ctx.fillStyle = isLight ? '#059669' : '#34d399';
      ctx.font = 'bold 24px system-ui, sans-serif';
      ctx.fillText('💬 Instant WhatsApp Chat & Fast Setup', width / 2, botY + 205);
    }

    // Footer Watermark
    ctx.fillStyle = isLight ? '#94a3b8' : '#64748b';
    ctx.font = '18px system-ui, sans-serif';
    ctx.fillText('Verified Web Developer • Back-End System Setup • Full Control Handover', width / 2, 1835);

  } else if (options.template === 'badge') {
    // -------------------------------------------------------------
    // COMPACT BADGE / DECAL FORMAT (1200 x 700)
    // -------------------------------------------------------------
    
    // Top Row: Brand & Trust Pill
    ctx.textAlign = 'left';
    ctx.fillStyle = palette.badgeBg;
    ctx.strokeStyle = palette.badgeBorder;
    ctx.lineWidth = 2;
    drawRoundRect(ctx, 60, 60, 420, 48, 24, true, true);

    ctx.fillStyle = palette.badgeText;
    ctx.font = 'bold 18px system-ui, -apple-system, sans-serif';
    ctx.fillText(options.badgeText.toUpperCase(), 85, 92);

    ctx.textAlign = 'right';
    ctx.fillStyle = isLight ? '#64748b' : '#94a3b8';
    ctx.font = 'bold 20px system-ui, -apple-system, sans-serif';
    ctx.fillText(options.title.toUpperCase(), width - 60, 92);

    // Main Tagline
    ctx.textAlign = 'left';
    ctx.fillStyle = palette.textColor;
    ctx.font = '900 42px system-ui, -apple-system, sans-serif';
    wrapText(ctx, options.tagline, 60, 175, 740, 52);

    // Left Column: 4 Services
    let bulletY = 320;
    options.services.slice(0, 3).forEach((svc) => {
      ctx.fillStyle = palette.accent;
      ctx.font = 'bold 22px system-ui, sans-serif';
      ctx.fillText('✓', 60, bulletY);

      ctx.fillStyle = isLight ? '#334155' : '#e2e8f0';
      ctx.font = '500 22px system-ui, sans-serif';
      ctx.fillText(svc, 95, bulletY);
      bulletY += 46;
    });

    // Right Side: Avatar or Brand Emblem
    if (avatarImg) {
      ctx.save();
      const imgX = 820;
      const imgY = 140;
      const imgW = 320;
      const imgH = 320;
      drawRoundRect(ctx, imgX, imgY, imgW, imgH, 28, false, false);
      ctx.clip();
      ctx.drawImage(avatarImg, imgX, imgY, imgW, imgH);
      ctx.restore();

      ctx.strokeStyle = palette.accent;
      ctx.lineWidth = 3;
      drawRoundRect(ctx, 820, 140, 320, 320, 28, false, true);
    }

    // Bottom Contact Bar
    const botY = 500;
    ctx.fillStyle = isLight ? '#0f172a' : '#020617';
    ctx.strokeStyle = palette.accent;
    ctx.lineWidth = 3;
    drawRoundRect(ctx, 60, botY, width - 120, 140, 24, true, true);

    ctx.textAlign = 'left';
    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 18px system-ui, sans-serif';
    ctx.fillText('DIRECT PHONE & WHATSAPP:', 95, botY + 50);

    ctx.fillStyle = palette.accentLight;
    ctx.font = '900 48px monospace, system-ui, sans-serif';
    ctx.fillText(options.phone, 95, botY + 105);

    ctx.textAlign = 'right';
    ctx.fillStyle = isLight ? '#34d399' : '#10b981';
    ctx.font = 'bold 22px system-ui, sans-serif';
    ctx.fillText('💬 Available For New Projects', width - 95, botY + 65);

    ctx.fillStyle = '#cbd5e1';
    ctx.font = '16px system-ui, sans-serif';
    ctx.fillText('Full Back-End Setup & Handover', width - 95, botY + 100);

  } else {
    // -------------------------------------------------------------
    // SHOWCASE CARD / MINIMAL SQUARE (1200 x 1200)
    // -------------------------------------------------------------
    
    // Top Row: Trust Badge Pill + Verified Tag
    ctx.textAlign = 'left';
    ctx.fillStyle = palette.badgeBg;
    ctx.strokeStyle = palette.badgeBorder;
    ctx.lineWidth = 2;
    drawRoundRect(ctx, 70, 70, 480, 52, 26, true, true);

    ctx.fillStyle = palette.badgeText;
    ctx.font = 'bold 20px system-ui, -apple-system, sans-serif';
    ctx.fillText(options.badgeText.toUpperCase(), 98, 104);

    ctx.textAlign = 'right';
    ctx.fillStyle = isLight ? '#64748b' : '#94a3b8';
    ctx.font = 'bold 22px system-ui, -apple-system, sans-serif';
    ctx.fillText(options.title.toUpperCase(), width - 70, 104);

    // Left Column: Headline & Bullet points
    const leftWidth = avatarImg ? 680 : 1060;

    ctx.textAlign = 'left';
    ctx.fillStyle = palette.textColor;
    ctx.font = '900 52px system-ui, -apple-system, sans-serif';
    const nextY = wrapText(ctx, options.tagline, 70, 195, leftWidth, 68);

    // Services Box
    const servY = Math.max(nextY + 20, 400);
    ctx.fillStyle = isLight ? '#ffffff' : 'rgba(15, 23, 42, 0.7)';
    ctx.strokeStyle = isLight ? '#cbd5e1' : 'rgba(255,255,255,0.08)';
    ctx.lineWidth = 2;
    drawRoundRect(ctx, 70, servY, leftWidth, 340, 24, true, true);

    ctx.fillStyle = isLight ? '#0f172a' : '#f8fafc';
    ctx.font = 'bold 24px system-ui, sans-serif';
    ctx.fillText('🌟 Complete Website Services Included:', 105, servY + 50);

    let sy = servY + 105;
    options.services.slice(0, 4).forEach((svc) => {
      ctx.fillStyle = palette.accent;
      ctx.font = 'bold 24px system-ui, sans-serif';
      ctx.fillText('✓', 105, sy);

      ctx.fillStyle = isLight ? '#334155' : '#cbd5e1';
      ctx.font = '500 22px system-ui, sans-serif';
      ctx.fillText(svc, 140, sy);
      sy += 54;
    });

    // Right Column: Avatar if enabled
    if (avatarImg) {
      const imgX = 800;
      const imgY = 190;
      const imgW = 330;
      const imgH = 550;

      ctx.save();
      drawRoundRect(ctx, imgX, imgY, imgW, imgH, 28, false, false);
      ctx.clip();
      ctx.drawImage(avatarImg, imgX, imgY, imgW, imgH);
      ctx.restore();

      ctx.strokeStyle = palette.accent;
      ctx.lineWidth = 4;
      drawRoundRect(ctx, imgX, imgY, imgW, imgH, 28, false, true);

      // Verified overlay on image
      ctx.fillStyle = 'rgba(2, 6, 23, 0.85)';
      ctx.strokeStyle = palette.badgeBorder;
      ctx.lineWidth = 2;
      drawRoundRect(ctx, imgX + 15, imgY + imgH - 70, imgW - 30, 52, 16, true, true);

      ctx.textAlign = 'center';
      ctx.fillStyle = palette.accentLight;
      ctx.font = 'bold 16px system-ui, sans-serif';
      ctx.fillText('🛡️ Verified Website Builder', imgX + imgW / 2, imgY + imgH - 38);
    }

    // Bottom Contact Callout
    const botY = 820;
    ctx.fillStyle = isLight ? '#0f172a' : '#020617';
    ctx.strokeStyle = palette.accent;
    ctx.lineWidth = 4;
    drawRoundRect(ctx, 70, botY, width - 140, 240, 32, true, true);

    ctx.textAlign = 'left';
    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 20px system-ui, sans-serif';
    ctx.fillText('DIRECT CALL / WHATSAPP NUMBER:', 120, botY + 55);

    ctx.fillStyle = palette.accentLight;
    ctx.font = '900 68px monospace, system-ui, sans-serif';
    ctx.fillText(options.phone, 120, botY + 130);

    if (options.email) {
      ctx.fillStyle = '#34d399';
      ctx.font = 'bold 22px monospace, system-ui, sans-serif';
      ctx.fillText(`✉️ ${options.email}`, 120, botY + 185);
    }

    ctx.textAlign = 'right';
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 26px system-ui, sans-serif';
    ctx.fillText('💬 Message Me On WhatsApp', width - 120, botY + 75);

    ctx.fillStyle = palette.accent;
    ctx.font = 'bold 20px system-ui, sans-serif';
    ctx.fillText('Ready To Build Your Website Online', width - 120, botY + 120);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '16px system-ui, sans-serif';
    ctx.fillText('Full Back-End Setup & Handover', width - 120, botY + 160);

    // Bottom Footer
    ctx.textAlign = 'center';
    ctx.fillStyle = isLight ? '#64748b' : '#64748b';
    ctx.font = '18px system-ui, sans-serif';
    ctx.fillText('Clean Code • Mobile Responsive • Back-End System • 100% Satisfaction Guaranteed', width / 2, 1120);
  }
}

/**
 * Generates a PNG Blob and triggers an immediate standard file download
 * named e.g. `website-developer-advert-sticker.png` that directly opens in Files / Gallery apps.
 */
export async function downloadStickerAsPng(
  options: StickerRenderOptions,
  filename = 'website-developer-advert-sticker.png'
): Promise<boolean> {
  try {
    const canvas = document.createElement('canvas');
    await renderStickerToCanvas(canvas, options);

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          resolve(false);
          return;
        }
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(url), 2000);
        resolve(true);
      }, 'image/png');
    });
  } catch (err) {
    console.error('Error exporting PNG sticker:', err);
    return false;
  }
}

/**
 * Exports sticker as SVG vector file for crisp vector file viewing
 */
export function generateStickerSvg(options: StickerRenderOptions): string {
  const palette = THEME_PALETTES[options.themeColor] || THEME_PALETTES.emerald;
  const isLight = options.themeColor === 'slate';
  const width = 1200;
  const height = 1200;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${palette.bgStart}" />
      <stop offset="50%" stop-color="${palette.bgMid}" />
      <stop offset="100%" stop-color="${palette.bgEnd}" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#bgGrad)" />
  <rect x="24" y="24" width="${width - 48}" height="${height - 48}" rx="36" fill="none" stroke="${palette.border}" stroke-width="6" />
  
  <!-- Trust Badge -->
  <rect x="70" y="70" width="480" height="52" rx="26" fill="${palette.badgeBg}" stroke="${palette.badgeBorder}" stroke-width="2" />
  <text x="310" y="104" fill="${palette.badgeText}" font-family="system-ui, sans-serif" font-size="20" font-weight="bold" text-anchor="middle">${options.badgeText.toUpperCase()}</text>
  
  <!-- Developer Brand -->
  <text x="${width - 70}" y="104" fill="${isLight ? '#64748b' : '#94a3b8'}" font-family="system-ui, sans-serif" font-size="22" font-weight="bold" text-anchor="end">${options.title.toUpperCase()}</text>
  
  <!-- Tagline -->
  <text x="70" y="220" fill="${palette.textColor}" font-family="system-ui, sans-serif" font-size="52" font-weight="900">${options.tagline}</text>
  
  <!-- Contact Box -->
  <rect x="70" y="820" width="${width - 140}" height="240" rx="32" fill="${isLight ? '#0f172a' : '#020617'}" stroke="${palette.accent}" stroke-width="4" />
  <text x="120" y="880" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="20" font-weight="bold">DIRECT PHONE &amp; WHATSAPP:</text>
  <text x="120" y="965" fill="${palette.accentLight}" font-family="monospace, sans-serif" font-size="68" font-weight="900">${options.phone}</text>
  
  <text x="${width - 120}" y="895" fill="#ffffff" font-family="system-ui, sans-serif" font-size="26" font-weight="bold" text-anchor="end">Message Me On WhatsApp</text>
  <text x="${width - 120}" y="940" fill="${palette.accent}" font-family="system-ui, sans-serif" font-size="20" font-weight="bold" text-anchor="end">Ready To Build Your Website</text>
  <text x="${width - 120}" y="980" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="16" text-anchor="end">Full Back-End Setup &amp; Handover</text>
</svg>`;
}

/**
 * Downloads the SVG vector file
 */
export function downloadStickerAsSvg(options: StickerRenderOptions, filename = 'website-developer-advert-sticker.svg') {
  const svgMarkup = generateStickerSvg(options);
  const blob = new Blob([svgMarkup], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}
