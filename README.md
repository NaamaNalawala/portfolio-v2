# Portfolio Website - Setup Instructions

## 🚀 Quick Start

This is a single-page portfolio website built with pure HTML, CSS, and JavaScript. No frameworks or build tools required!

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A text editor (VS Code, Sublime Text, or any editor you prefer)
- (Optional) A local web server for testing

---

## 📁 File Structure
```
portfolio-website/
│
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # All JavaScript code
├── README.md           # This file
└── assets/             # Folder for images
    └── profile.jpg     # Your profile photo (optional)
```

---

## 🛠️ Setup Steps

### 1. Download/Clone the Files
- Download all files and keep them in the same folder
- Maintain the folder structure exactly as shown above

### 2. Customize Your Content

#### **Update Personal Information**
Open `index.html` and replace:
- `Your Name` → Your actual name
- `YourName` → Your brand/nickname in the logo
- `[Your City]` → Your location
- `your.email@example.com` → Your real email
- `linkedin.com/in/yourprofile` → Your LinkedIn URL
- `github.com/yourusername` → Your GitHub URL

#### **Update Profile Photo (Optional)**
- Add your photo to `assets/profile.jpg`
- In `index.html`, replace the profile photo div:
```html
  <!-- Change this: -->
  <div class="profile-photo">YN</div>
  
  <!-- To this: -->
  <img src="assets/profile.jpg" alt="Your Name" style="width: 200px; height: 200px; border-radius: 50%; object-fit: cover;">
```

#### **Customize Projects**
Edit the project cards in `index.html`:
- Update project titles, descriptions, and technologies
- Add more projects by copying a `project-card` div

#### **Customize Achievements**
Edit the achievements section:
- Update achievements with your real accomplishments
- Change icons (🏆 → any emoji you like)
- Update years and descriptions

#### **Customize Skills**
Edit skill tags to match your tech stack:
- Add/remove skills in each category
- Create new categories if needed

#### **Customize Articles**
- Update article titles and descriptions
- Add links to your Medium/Dev.to articles
- Update dates

### 3. Test Locally

#### **Option A: Direct File Opening**
- Simply double-click `index.html`
- It will open in your default browser

#### **Option B: Local Server (Recommended)**

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js:**
```bash
npx http-server
```

**Using VS Code:**
- Install "Live Server" extension
- Right-click on `index.html`
- Select "Open with Live Server"

Then visit: `http://localhost:8000`

---

## 🌐 Deployment Options

### **Option 1: GitHub Pages (Free & Easy)**

1. Create a GitHub repository
2. Upload all files to the repository
3. Go to Settings → Pages
4. Select branch: `main` and folder: `/ (root)`
5. Save and your site will be live at `https://yourusername.github.io/repo-name`

### **Option 2: Netlify (Free)**

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Your site is live instantly!
4. Get a free `yoursite.netlify.app` domain

### **Option 3: Vercel (Free)**

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository or upload files
3. Deploy with one click

### **Option 4: Custom Domain**

Buy a domain and host on:
- GitHub Pages with custom domain
- Netlify with custom domain
- Vercel with custom domain
- Traditional hosting (Bluehost, HostGator, etc.)

---

## 🎨 Customization Tips

### **Change Colors**
Edit `styles.css` and update these CSS variables:
```css
/* Primary blue: #3498db */
/* Green accent: #2ecc71 */
/* Dark background: #0a0e17 */
```

### **Change Fonts**
The site uses system fonts for fast loading. To use custom fonts:
1. Add Google Fonts link in `<head>` of `index.html`
2. Update `font-family` in `styles.css`

### **Add More Sections**
1. Copy an existing section in `index.html`
2. Update the ID and content
3. Add navigation link in the menu
4. Styles will automatically apply!

### **Modify Animations**
All animations are in `styles.css`:
- Search for `@keyframes` to find animation definitions
- Adjust `transition` durations for hover effects
- Change `animation-delay` values for timing

---

## 📱 Mobile Optimization

The site is fully responsive and includes:
- Mobile hamburger menu (auto-activates on screens < 968px)
- Touch-friendly buttons and cards
- Optimized layouts for all screen sizes

Test on mobile:
- Chrome DevTools (F12 → Toggle Device Toolbar)
- Actual mobile device
- Browser resize

---

## ⚡ Performance Tips

1. **Optimize Images**
   - Compress your profile photo
   - Use WebP format for better compression
   - Recommended size: 200x200px for profile

2. **Minimize Code (Optional)**
   - Use CSS/JS minifiers for production
   - Combine files if needed

3. **Enable Caching**
   - Configure your hosting for browser caching
   - Set cache headers for static files

---

## 🐛 Troubleshooting

**Problem: Menu not working on mobile**
- Ensure `script.js` is linked correctly
- Check browser console for errors (F12)

**Problem: Animations not showing**
- Clear browser cache (Ctrl+Shift+R)
- Ensure JavaScript is enabled

**Problem: Particles not visible**
- They're subtle by design
- Increase opacity in `styles.css` → `.particle` → `background`

**Problem: Smooth scrolling not working**
- Check that all section IDs match nav href values
- Ensure `scroll-behavior: smooth` is in CSS

---

## 📧 Need Help?

If you run into issues:
1. Check the browser console (F12)
2. Validate your HTML at [validator.w3.org](https://validator.w3.org)
3. Ensure all files are in the correct location

---

## 🎉 You're All Set!

Your portfolio website is ready to showcase your skills! Remember to:
- ✅ Update all placeholder content
- ✅ Test on multiple devices
- ✅ Get feedback from friends/colleagues
- ✅ Deploy and share your work!

Good luck! 🚀
