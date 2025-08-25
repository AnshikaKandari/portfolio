# 🚀 Deploy Portfolio to Vercel

## Quick Deployment Steps

### Method 1: Using Vercel CLI (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from project directory**
   ```bash
   cd Animated-Portfolio-main
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? → `Y`
   - Which scope? → Select your account
   - Link to existing project? → `N`
   - Project name? → `anshikakandari-portfolio`
   - Directory? → `./` (current directory)
   - Override settings? → `N`

### Method 2: Using GitHub + Vercel Dashboard

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy via Vercel Dashboard**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Set project name: `anshikakandari-portfolio`
   - Click "Deploy"

### Method 3: Drag & Drop (Simplest)

1. **Zip your project**
   - Select all files in `Animated-Portfolio-main` folder
   - Create a ZIP file

2. **Deploy via Vercel Dashboard**
   - Go to [vercel.com](https://vercel.com)
   - Sign in
   - Click "New Project"
   - Drag & drop your ZIP file
   - Set project name: `anshikakandari-portfolio`
   - Click "Deploy"

## 🎯 Custom Domain Setup

After deployment, your site will be available at:
`https://anshikakandari-portfolio.vercel.app`

### To add a custom domain:

1. **In Vercel Dashboard:**
   - Go to your project
   - Click "Settings" → "Domains"
   - Add your custom domain

2. **Popular options:**
   - `anshikakandari.vercel.app`
   - `anshikakandari-portfolio.vercel.app`
   - Your own domain (if you have one)

## 📁 Project Structure

```
Animated-Portfolio-main/
├── index.html          # Main page
├── style.css           # Styles
├── app.js              # JavaScript
├── vercel.json         # Vercel config
├── images/             # Images
├── videos/             # Videos
└── DEPLOYMENT.md       # This file
```

## ✅ Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All images display
- [ ] Videos play properly
- [ ] Contact form works
- [ ] Navigation works
- [ ] Mobile responsive
- [ ] Social links work

## 🔧 Troubleshooting

### Common Issues:

1. **Images not loading**
   - Check file paths are correct
   - Ensure images are in the `images/` folder

2. **Videos not playing**
   - Check video file sizes (keep under 10MB)
   - Ensure videos are in the `videos/` folder

3. **Contact form not working**
   - Verify FormSubmit email is correct
   - Test form submission

4. **Styling issues**
   - Clear browser cache
   - Check CSS file is loading

## 🎉 Success!

Your portfolio will be live at:
`https://anshikakandari-portfolio.vercel.app`

Share this link with potential employers and clients!
