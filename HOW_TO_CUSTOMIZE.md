# Customization Guide: The El Design House

This guide explains how to easily change your project tiles, images, text, and details on your website.

---

## 🖼️ 1. How to Change Images

All website images are stored in the folder:
📁 `assets/images/`

### Method A: Replace Existing Files (Easiest)
You can directly replace any image file in the `assets/images/` folder with your own photo **using the exact same filename**:

| Image Filename | Where It Appears on the Website | Recommended Size |
| :--- | :--- | :--- |
| **`hero_interior.jpg`** | Main Hero banner background | 1920 × 1080 px (16:9) |
| **`about_studio.jpg`** | About Us section moodboard frame | 1200 × 900 px (4:3) |
| **`process_models.jpg`** | Design Process highlight box | 800 × 600 px (4:3) |
| **`res_obsidian_penthouse.jpg`** | Project 1: Obsidian Penthouse card & modal | 1200 × 900 px (4:3) |
| **`comm_atelier_boutique.jpg`** | Project 2: Aura Couture Atelier card & modal | 1200 × 900 px (4:3) |
| **`res_aethelgard_villa.jpg`** | Project 3: Aethelgard Villa card & modal | 1200 × 900 px (4:3) |
| **`comm_kuro_lounge.jpg`** | Project 4: Kuro Speakeasy card & modal | 1200 × 900 px (4:3) |
| **`comm_omnia_hq.jpg`** | Project 5: Axiom Headquarters card & modal | 1200 × 900 px (4:3) |
| **`before_raw_space.jpg`** | Before/After Slider ("Before" raw shell) | 1600 × 900 px (16:9) |
| **`after_luxe_space.jpg`** | Before/After Slider ("After" finished luxury) & Project 6 | 1600 × 900 px (16:9) |

---

## 🧱 2. How to Change, Add, or Remove Project Tiles

All project tiles are dynamically loaded from a single clean list in [`app.js`](file:///C:/Users/Lucky/.gemini/antigravity/scratch/the-el-design-house/app.js) starting at line **15**.

### To Edit an Existing Project Tile:
Open [`app.js`](file:///C:/Users/Lucky/.gemini/antigravity/scratch/the-el-design-house/app.js) and simply edit the values inside `PORTFOLIO_ITEMS`:

```javascript
{
  id: 'obsidian-penthouse',                          // Unique ID
  title: 'The Obsidian Sky Penthouse',              // Project title on card
  category: 'residential',                          // 'residential' or 'commercial'
  categoryLabel: 'Residential',                     // Badge label
  subCategory: 'Penthouse',                         // Sub-badge label
  location: 'Mayfair, London, UK',                  // Location pill
  footprint: '6,400 sq.ft',                         // Space size
  timeline: '22 Weeks',                             // Project duration
  scope: 'End-to-End Turnkey Architecture',         // Scope description
  image: './assets/images/res_obsidian_penthouse.jpg', // Photo path
  summary: 'Monolithic Nero Marquina black marble...', // Card summary text
  description: 'Full case study description...',    // Pop-up modal story
  materials: ['Nero Marquina Marble', 'Smoked Oak'] // Material tags
}
```

### To Add a New Project (e.g., Tile #7):
Just copy one of the blocks in `PORTFOLIO_ITEMS` in `app.js`, paste it into the array with a new `id`, title, and photo path. The website will automatically:
1. Render the new tile card into the portfolio grid.
2. Update the category counts (`All Works`, `Residential`, `Commercial`).
3. Connect the interactive case study pop-up modal.

---

## ✏️ 3. How to Edit Text & Sections

- **Studio Profile & Vision / Mission**: Open [`index.html`](file:///C:/Users/Lucky/.gemini/antigravity/scratch/the-el-design-house/index.html) and search for `<!-- ABOUT US SECTION -->` (around line 240).
- **Design Process (4 Steps)**: Search for `<!-- DESIGN PROCESS SECTION -->` in `index.html` (around line 340).
- **Studio Addresses & Contact Info**: Search for `<!-- FOOTER / CONTACT SECTION -->` in `index.html` (around line 1060).

---

## 🚀 4. How to Run Locally

You can view the site at any time by:
1. Opening [`index.html`](file:///C:/Users/Lucky/.gemini/antigravity/scratch/the-el-design-house/index.html) directly in Chrome, Edge, Safari, or Firefox.
2. Or starting the local server:
   ```bash
   python -m http.server 8080 --directory "C:\Users\Lucky\.gemini\antigravity\scratch\the-el-design-house"
   ```
   Then navigating to `http://localhost:8080`.
