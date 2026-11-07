const fs = require('fs');
const PdfKit = require('pdfkit');

const ASSETS_DIR = 'C:\\Users\\Shreyas Gawade\\animated-portfolio\\assets';
const OUTPUT_FILE = 'C:\\Users\\Shreyas Gawade\\animated-portfolio\\Shreyas_Gawade_Graphic_Design_Portfolio.pdf';

const COLORS = {
  darkNavy: '#0f0f23',
  darkCharcoal: '#1a1a2e',
  accentBlue: '#667eea',
  accentYellow: '#ffe66d',
  textLight: '#a8aab5',
  white: '#ffffff'
};

const PROJECTS = [
  {
    id: 1,
    title: 'Event Poster Series',
    tags: ['Photoshop', 'Typography', 'Layout', 'Poster Design'],
    images: ['event-poster-series.png', 'event-poster-01-soundrise.png', 'event-poster-02-autoexpo.png', 'event-poster-03-creative-atelier.png']
  },
  {
    id: 2,
    title: 'Sonic Headphones Campaign',
    tags: ['Canva', 'Photoshop', 'Social Media', 'Branding'],
    images: ['soniq-headphones-campaign-01.png', 'soniq-headphones-campaign-02.png', 'soniq-headphones-campaign-03.png']
  },
  {
    id: 3,
    title: 'Urban Ink Illustration Series',
    tags: ['Procreate', 'Illustration', 'Digital Art', 'Drawing'],
    images: ['urban-ink-01-samurai.png', 'urban-ink-02-neon-tiger.png', 'urban-ink-03-cosmic-explorer.png', 'urban-ink-04-cyberpunk.png']
  },
  {
    id: 4,
    title: 'Cinematic Composites',
    tags: ['Photoshop', 'Photo Editing', 'Manipulation', 'Creative Retouching'],
    images: ['cinematic-01-long-ride.png', 'cinematic-02-last-samurai.png', 'cinematic-03-tokyo-drive.png', 'cinematic-04-coastal-escape.png']
  }
];

const INTRO_TEXT = {
  name: 'Shreyas Gawade',
  role: 'Graphic Designer',
  tagline: 'Graphic Designer & Visual Creative',
  skills: ['Typography & Colour Theory', 'Layout & Composition', 'Hand-drawn Illustration', 'Quick Learner', 'Team-ready'],
  bio: "I'm a passionate creative designer who believes in the power of visual storytelling. With hands-on experience in Photoshop for photo editing, Canva for social media creatives, and Procreate for digital illustration, I blend technical skills with artistic vision to create compelling designs that communicate effectively.",
  phone: '9527114960',
  email: 'shreyasgawade2004@gmail.com'
};

const PW = 595.28, PH = 841.89, M = 50;

function fExists(fp) {
  try { fs.accessSync(fp); return true; } catch { return false; }
}

const doc = new PdfKit({ margin: M, size: 'A4' });
const output = fs.createWriteStream(OUTPUT_FILE);
doc.pipe(output);

let pageCount = 0;
output.on('end', () => {
  pageCount = doc.page.number;
  const s = fs.statSync(OUTPUT_FILE);
  console.log('PDF: ' + pageCount + ' pages, ' + Math.round(s / 1024) + ' KB');
});

doc.on('page', () => { pageCount = doc.page.number; });

function addPage() { doc.addPage(); }

function drawTxt(txt, x, y, { c = COLORS.darkNavy, fs = 12, f = 'Helvetica', al = 'left' } = {}) {
  doc.fillColor(c);
  doc.fontSize(fs);
  doc.font(f);
  doc.text(txt, x, y, { align: al });
}

function drawProjHead(p) {
  doc.fillColor(COLORS.accentBlue);
  doc.fontSize(9);
  doc.font('Helvetica-Bold');
  doc.text('PROJECT ' + p.id, M, doc.y);
  doc.font('Helvetica');
  doc.font('Helvetica-Oblique');
  doc.text(p.title, PW / 2 + M, doc.y, { align: 'right' });
  doc.strokeColor(COLORS.accentBlue);
  doc.lineWidth(1);
  doc.moveTo(M, doc.y + 15);
  doc.lineTo(PW - M, doc.y + 15);
  doc.stroke();
  return doc.y + 25;
}

// ──────── COVER ────────
addPage();
doc.fillColor(COLORS.darkNavy);
doc.fontSize(32);
doc.font('Helvetica-Bold');
doc.text('SHREYAS GAWADE', PW / 2, M + 50, { align: 'center' });

doc.fontSize(15);
doc.font('Helvetica');
doc.text('GRAPHIC DESIGNER & VISUAL CREATIVE', PW / 2, M + 105, { align: 'center' });

doc.fillColor(COLORS.accentYellow);
doc.fontSize(12);
doc.font('Helvetica-Oblique');
doc.text('Selected Works | Portfolio 2026', PW / 2, M + 145, { align: 'center' });

// Profile picture
const pp = `${ASSETS_DIR}\\shreyas-professional-profile.png`;
if (fExists(pp)) {
  try { doc.image(pp, (PW - 240) / 2, M + 170, 240, 300); } catch (e) {
    console.log('Profile img err:', e.message);
    doc.fillColor('#1a1a2e');
    doc.strokeColor('#444444');
    doc.lineWidth(1);
    doc.roundedRect((PW - 240) / 2, M + 170, 240, 300, 6);
    doc.fillColor('#666666');
    doc.fontSize(8);
    doc.text('Profile Photo', (PW - 240) / 2 + 120, M + 170 + 140, { align: 'center' });
  }
}

doc.fontSize(8);
doc.fillColor('#666666');
doc.text('Graphic Designer Portfolio', PW / 2, PH - M, { align: 'center' });
doc.text('shreyasgawade2004@gmail.com | 9527114960', PW / 2, PH - M + 12, { align: 'center' });

// ──────── INTRODUCTION ──────
addPage();
drawTxt('Introduction', M, M / 2 + 25, { f: 'Helvetica-Bold', fs: 10 });
drawTxt(INTRO_TEXT.name, M, doc.y + 35, { f: 'Helvetica-Bold', fs: 20 });
drawTxt(INTRO_TEXT.role, M, doc.y + 70, { f: 'Helvetica', fs: 13 });
drawTxt(INTRO_TEXT.tagline, M, doc.y + 95, { f: 'Helvetica-Oblique', fs: 11, c: COLORS.accentBlue });

doc.strokeColor(COLORS.accentBlue);
doc.lineWidth(1);
doc.moveTo(M, doc.y + 115);
doc.lineTo(PW - M, doc.y + 115);
doc.stroke();

doc.fontSize(9);
doc.font('Helvetica');
doc.fillColor(COLORS.textLight);
doc.text(INTRO_TEXT.bio, M, doc.y + 130);

doc.fontSize(8);
doc.font('Helvetica-Bold');
doc.fillColor(COLORS.accentBlue);
const skills = INTRO_TEXT.skills;
doc.y += 25;
skills.forEach((s, i) => {
  const x = M + (i % 3) * 95;
  const sy = doc.y + Math.floor(i / 3) * 22;
  doc.fillColor('rgba(102,126,234,0.15)');
  doc.strokeColor(COLORS.accentBlue);
  doc.lineWidth(1);
  doc.roundedRect(x, sy, 90, 16, 3);
  doc.fillColor(COLORS.accentBlue);
  doc.text(s, x + 5, sy + 4, { align: 'center' });
});

doc.fontSize(9);
doc.font('Helvetica');
doc.fillColor(COLORS.textLight);
doc.y += 30;
drawTxt('📞 ' + INTRO_TEXT.phone, M, doc.y);
drawTxt('✉️ ' + INTRO_TEXT.email, M, doc.y + 12);
drawTxt('Graphic Designer | Photoshop | Canva | Procreate', M, doc.y + 12);

// ──────── PROJECTS ──────
for (const project of PROJECTS) {
  doc.y += 20;
  if (doc.y > PH - 200) { addPage(); }
  drawProjHead(project);

  doc.fontSize(9);
  doc.font('Helvetica');
  doc.fillColor(COLORS.textLight);
  doc.text(project.overview || 'Overview not available', M, doc.y);
  doc.y += 30;

  doc.fontSize(8);
  doc.font('Helvetica-Bold');
  doc.fillColor(COLORS.accentBlue);
  project.tags.forEach((t, i) => {
    if (i > 0) doc.text(' · ');
    doc.text(t, M + (i * 30), doc.y);
  });
  doc.y += 15;
  doc.fillColor(COLORS.darkNavy);
  doc.text('Technologies: ' + project.tags.join(', '), M, doc.y);
  doc.y += 25;

  // Image gallery
  const galY = doc.y + 10;
  const iMaxW = (PW - M * 3) / 2;
  const iMaxH = iMaxW * 0.6;
  const rG = 12, cG = 12;
  let imgIdx = 0;
  const iPrR = 2;

  for (const imgPath of project.images) {
    const fP = `${ASSETS_DIR}\\${imgPath}`;
    if (!fExists(fP)) { console.log('Missing: ' + imgPath); imgIdx++; continue; }
    const r = Math.floor(imgIdx / iPrR);
    const c = imgIdx % iPrR;
    const ix = M + c * (iMaxW + cG);
    const iy = galY + r * (iMaxH + rG);

    if (iy + iMaxH > PH - M - 80) { addPage(); doc.y = galY; }

    doc.fillColor('#1a1a2e');
    doc.strokeColor('#444444');
    doc.lineWidth(0.5);
    doc.roundedRect(ix, iy, iMaxW, iMaxH, 4);

    try {
      const buf = fs.readFileSync(fP);
      doc.image(buf, ix, iy, iMaxW, iMaxH);
    } catch (e) {
      console.log('Image err ' + imgPath + ': ' + e.message.substring(0, 30));
    }

    doc.fontSize(6);
    doc.font('Helvetica');
    doc.fillColor('#555555');
    doc.text(project.id + '-' + (imgIdx + 1), ix + (iMaxW / 2), iy + iMaxH - 10, { align: 'center' });
    imgIdx++;
  }

  doc.y = PH - M - 30;
  doc.fillColor('#666666');
  doc.fontSize(7.5);
  doc.text(project.images.length + ' artwork pieces featured', PW / 2, doc.y, { align: 'center' });

  if (project.id < PROJECTS.length) { addPage(); }
}

// ──────── CONTACT ──────
addPage();
doc.fillColor(COLORS.darkNavy);
doc.fontSize(14);
doc.font('Helvetica-Bold');
doc.text('Get In Touch', M, doc.y + 30);

doc.fontSize(10);
doc.font('Helvetica');
doc.fillColor(COLORS.textLight);
const ci = [
  '📞 ' + INTRO_TEXT.phone,
  '✉️ ' + INTRO_TEXT.email,
  '📍 Graphic Designer Portfolio',
  '🌐 shreyasgawade2004@gmail.com'
];
ci.forEach((it, i) => { doc.text(it, M, doc.y + (i * 26)); });

doc.fontSize(9);
doc.fillColor('#666666');
doc.y = PH - M - 35;
doc.text('Thank you for exploring my portfolio.', PW / 2, doc.y, { align: 'center' });

doc.end();

setTimeout(() => {
  try {
    const s = fs.statSync(OUTPUT_FILE);
    console.log('PDF generation complete!');
    console.log('File: ' + OUTPUT_FILE);
    console.log('Size: ' + Math.round(s / 1024) + ' KB');
    console.log('Pages: ' + pageCount);
    if (s > 0) {
      console.log('\n✅ PDF successfully generated!');
      console.log('Pages:');
      console.log('  1. Cover - name, tagline, profile photo');
      console.log('  2. Introduction - bio, skills');
      console.log('  3-5. Projects 1-4 with artwork');
      console.log('  6. Contact page');
      console.log('\nPDF ready at: ' + OUTPUT_FILE);
    }
  } catch (e) { console.log('Error: ' + e.message); }
  process.exit(0);
}, 2000);