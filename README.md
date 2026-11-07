# Dark Mode Animated Portfolio - Shreyas Gawade

A **dark-themed**, creative portfolio inspired by Ivan Kalkaev's sophisticated design style. Perfect for junior graphic designers who want to demonstrate advanced design skills.

## 🎨 **Design Inspiration**

This portfolio adapts principles from **Ivan Kalkaev** (Apple Design Award winner, product designer):
- Dark color theme with brand accent colors
- Grid-based project layout with hover effects
- Subtle abstract background shapes
- Smooth hover transitions and micro-interactions
- Elegant typography with Playfair Display headings

## 📁 **Files Included**

| File | Description |
|------|-------------|
| `dark-index.html` | Complete dark-mode portfolio HTML |
| `dark-mode.css` | All dark-themed CSS with animations |
| `script.js` | Interactive functionality (optional, for light version) |
| `README.md` | This setup guide |

## 🚀 **Quick Setup (3 Options)**

### **Option 1: GitHub Pages (Free & Recommended)**
1. Go to [github.com](https://github.com) → Create free account
2. Create new repo: `yourusername.github.io` (or any name)
3. Upload **both**: `dark-index.html` + `dark-mode.css`
4. Settings → Pages → Select main branch → Save
5. **Live at:** `https://yourusername.github.io`

### **Option 2: Netlify (Also Free)**
1. Go to [netlify.com/drop](https://netlify.com/drop)
2. Drag the entire `animated-portfolio` folder
3. Get instant URL: `random-name.netlify.app`

### **Option 3: Local Viewing**
1. Double-click `dark-index.html`
2. Opens in browser offline

## 🛠️ **Customization Guide**

### **1. Color Scheme**
Your dark theme colors are set in `dark-mode.css`:
```css
:root {
  --primary: #667eea;      /* Purple - main accent */
  --secondary: #764ba2;    /* Darker purple - secondary */
  --accent: #ffe66d;       /* Yellow - highlights */
  --text-dark: #f8f9fa;    /* Light gray - body text */
  --text-light: #a8aab5;   /* Muted gray - secondary text */
  --bg-dark: #0f0f23;      /* Very dark navy - background */
  --bg-card: #1a1a2e;      /* Card background */
  --bg-section: #16162a;   /* Section background */
}
```

**To change colors:** Edit the `:root` variables at the top of `dark-mode.css`.

### **2. Replace Profile Photo**
In `dark-index.html`, find `.image-placeholder` and add:
```html
<img src="your-photo.jpg" alt="Shreyas Gawade" 
     style="width:100%; height:100%; object-fit:cover; border-radius:15px;">
```

### **3. Update Project Details**
Edit the `projectsData` array in the `<script>` section:
- Change `title`, `description`, `tags` for each project
- Replace image URLs with your actual work screenshots
- I've included 4 sample projects based on your Photoshop/Canva/Procreate skills

### **4. Add Your Contact Info**
In `dark-index.html`, update the contact items with your real details:
- Phone: 9527114960
- Email: shreyasgawade2004@gmail.com

### **5. Add More Projects**
Add more `.project-card` divs in the HTML section and corresponding entries in `projectsData`.

## 📊 **Portfolio Structure**

Your dark portfolio has **4 main sections** (exactly as requested):

| Section | Page | Purpose |
|---------|------|---------|
| **1. Hero** | First page | "GRAPHIC DESIGNER" badge + CTA button with animated gradient title |
| **2. About Me** | Introduction | Your professional summary, skills, contact info |
| **3. Projects** | My Work | 4 project cards (Poster, Social Media, Procreate, Photo Edit) |
| **4. Thank You** | Closing | Gratitude message with symbolic animation |

## 🎯 **Why This Dark Version Works for You**

### **Advantages for Junior Designers:**
1. ✅ **Demonstrates color theory skills** - Shows you can work with dark modes
2. ✅ **Stands out** - Most junior portfolios are light-themed
3. ✅ **Looks "established"** - Matches professional designer portfolios
4. ✅ **Your brand colors pop** - Purple (#667eea) and yellow (#ffe66d) contrast beautifully
5. ✅ **Modern feel** - Current design trend for creatives

### **What It Shows Clients:**
- You understand **contrast and readability** in dark themes
- You can work with **sophisticated color palettes**
- You're familiar with **current design trends**
- You pay **attention to detail** (subtle animations, grid layout)

## 📸 **Getting Real Project Images**

Since you're just starting, here's how to get images:

### **Free Stock Photo Sources:**
1. **Unsplash** (unsplash.com) - High-quality free photos
2. **Pexels** (pexels.com) - Free stock photos & videos
3. **Canva's built-in library** - When designing in Canva

### **Sample Workflow for Project 3 (Photo Editing):**
1. Download a model photo from Unsplash
2. Open in Photoshop: Remove background, adjust colors, add "50% OFF" badge
3. Result: Professional-looking project screenshot

### **For Social Media Projects:**
1. Create designs in Canva/Photoshop using template dimensions
2. Take screenshots of your work
3. Use those screenshots in the portfolio

## 🔄 **Light vs Dark Version**

| Feature | Light Version | Dark Version |
|---------|--------------|--------------|
| **Background** | White (#f8f9fa) | Dark navy (#0f0f23) |
| **Mood** | Friendly, approachable | Sophisticated, pro |
| **Best for** | Traditional companies | Creative agencies/startups |
| **Color contrast** | High (black on white) | Subtle (light on dark) |
| **File size** | Slightly smaller | Slightly larger (effects) |

**You can switch between them** - just change the CSS file linked in HTML.

## 💡 **Pro Tips for Getting Your First Job**

1. **Add your URL to your resume** - Even before it's "perfect"
2. **Share on LinkedIn** - "New portfolio launched!" posts get attention
3. **Include in job applications** - Cover letter bullet point
4. **Mention in interviews** - Shows initiative and skills
5. **Keep updating** - Add 1 new project every month
6. **Track clicks** - Use Bitly links to see what recruiters click

## 🙏 **Credits**

- **Design inspiration:** Ivan Kalkaev portfolio
- **Fonts:** Playfair Display & Inter (Google Fonts)
- **Particle effect:** Canvas API with dark adaptation
- **Color palette:** Curated for graphic designer brand identity

---

**Built with ❤️ for Shreyas Gawade**

*Perfect for applying to graphic design roles, creative agencies, and freelance work.*