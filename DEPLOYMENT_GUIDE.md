# ClayMind Deployment Guide

## 🚨 Quick Fix for Current Error

You're seeing this error because environment variables aren't configured for your deployed app:
```
Missing Supabase environment variables. Please check your .env.local file.
```

## ✅ Immediate Solution

I've created a `.env` file in your project with the Supabase credentials. Now:

1. **Rebuild your app:**
   ```bash
   npm run build
   ```

2. **Redeploy** (method depends on where you deployed)

---

## 📦 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

#### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Step 2: Deploy
```bash
cd claymind_final
vercel
```

#### Step 3: Set Environment Variables
**Method A - Using Vercel Dashboard:**
1. Go to https://vercel.com/dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add these variables:
   - `VITE_SUPABASE_URL` = `https://iqsgicgowgawmrijqxrd.supabase.co`
   - `VITE_SUPABASE_ANON_KEY` = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlxc2dpY2dvd2dhd21yaWpxeHJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY5NDgzMjgsImV4cCI6MjA4MjUyNDMyOH0.9eJUpXOYdrzrUWp8oqemd9_6E1MdxLxMFXuZ6qKOPR8`

**Method B - Using Vercel CLI:**
```bash
vercel env add VITE_SUPABASE_URL
# Paste: https://iqsgicgowgawmrijqxrd.supabase.co

vercel env add VITE_SUPABASE_ANON_KEY
# Paste: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlxc2dpY2dvd2dhd21yaWpxeHJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY5NDgzMjgsImV4cCI6MjA4MjUyNDMyOH0.9eJUpXOYdrzrUWp8oqemd9_6E1MdxLxMFXuZ6qKOPR8
```

#### Step 4: Redeploy
```bash
vercel --prod
```

---

### Option 2: Netlify

#### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

#### Step 2: Build Your App
```bash
npm run build
```

#### Step 3: Deploy
```bash
netlify deploy --prod
```

#### Step 4: Set Environment Variables
**In Netlify Dashboard:**
1. Go to https://app.netlify.com
2. Select your site
3. Go to **Site Settings** → **Environment Variables**
4. Add:
   - `VITE_SUPABASE_URL` = `https://iqsgicgowgawmrijqxrd.supabase.co`
   - `VITE_SUPABASE_ANON_KEY` = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlxc2dpY2dvd2dhd21yaWpxeHJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY5NDgzMjgsImV4cCI6MjA4MjUyNDMyOH0.9eJUpXOYdrzrUWp8oqemd9_6E1MdxLxMFXuZ6qKOPR8`

#### Step 5: Trigger Redeploy
```bash
netlify deploy --prod
```

---

### Option 3: GitHub Pages (Static Only)

#### Step 1: Install gh-pages
```bash
npm install --save-dev gh-pages
```

#### Step 2: Update package.json
Add to `scripts`:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

Add (replace YOUR_USERNAME and YOUR_REPO):
```json
"homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO"
```

#### Step 3: Deploy
```bash
npm run deploy
```

**⚠️ Note:** GitHub Pages doesn't support environment variables easily. You'll need to hardcode them (not recommended for production) or use a different platform.

---

### Option 4: Custom Server / VPS

If deploying to your own server:

#### Step 1: Build
```bash
npm run build
```

#### Step 2: Set Environment Variables
Create `.env` file on your server:
```bash
VITE_SUPABASE_URL=https://iqsgicgowgawmrijqxrd.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlxc2dpY2dvd2dhd21yaWpxeHJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY5NDgzMjgsImV4cCI6MjA4MjUyNDMyOH0.9eJUpXOYdrzrUWp8oqemd9_6E1MdxLxMFXuZ6qKOPR8
```

#### Step 3: Serve
Use nginx, Apache, or a Node.js server to serve the `dist` folder.

---

## 🔒 Important: Environment File Types

### Development Files:
- ✅ `.env.local` - **Development only** (gitignored)
- ✅ `.env` - **Gets built into production** (gitignored)

### Production:
- ❌ **Don't commit** `.env` or `.env.local` to Git
- ✅ **Set variables** in your hosting platform instead
- ✅ **Use** platform's environment variable settings

---

## 📋 Environment Variables Checklist

Make sure you have these set:

```bash
# Required
VITE_SUPABASE_URL=https://iqsgicgowgawmrijqxrd.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlxc2dpY2dvd2dhd21yaWpxeHJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY5NDgzMjgsImV4cCI6MjA4MjUyNDMyOH0.9eJUpXOYdrzrUWp8oqemd9_6E1MdxLxMFXuZ6qKOPR8

# Optional (if you add features later)
VITE_API_BASE_URL=your_api_url
VITE_GOOGLE_CLIENT_ID=your_google_client_id
```

---

## 🐛 Troubleshooting

### Error: "Missing Supabase environment variables"

**Problem:** Environment variables not loaded in production

**Solutions:**
1. ✅ Check `.env` file exists in project root
2. ✅ Verify variables are set in hosting platform
3. ✅ Rebuild and redeploy after adding variables
4. ✅ Clear build cache: `rm -rf dist && npm run build`

### Build Works Locally But Fails in Production

**Problem:** `.env.local` only works locally

**Solution:**
1. Create `.env` file (not `.env.local`)
2. OR set environment variables in your hosting platform
3. Rebuild and redeploy

### Variables Not Updating After Changes

**Problem:** Build cache

**Solution:**
```bash
# Clear dist folder
rm -rf dist

# Clear node_modules/.vite
rm -rf node_modules/.vite

# Rebuild
npm run build

# Redeploy
```

---

## 🚀 Quick Deploy Script

Save this as `deploy.sh`:

```bash
#!/bin/bash

echo "🏗️  Building ClayMind..."
npm run build

echo "📦 Deploying to Vercel..."
vercel --prod

echo "✅ Deployment complete!"
echo "🌐 Your app is live!"
```

Make it executable:
```bash
chmod +x deploy.sh
./deploy.sh
```

---

## 📝 Deployment Checklist

Before deploying:

- [ ] Environment variables are set
- [ ] `npm run build` completes successfully
- [ ] Test build locally: `npm run preview`
- [ ] `.env` and `.env.local` are in `.gitignore`
- [ ] Supabase project is active
- [ ] Database migrations are applied

After deploying:

- [ ] Test the deployed site
- [ ] Check browser console for errors
- [ ] Test authentication flows
- [ ] Verify environment variables loaded
- [ ] Test on mobile devices

---

## 💡 Best Practices

1. **Never commit** `.env` files to Git
2. **Always use** platform environment variables for production
3. **Test locally** with `npm run build && npm run preview`
4. **Monitor** error logs in your hosting platform
5. **Keep** Supabase keys secure

---

## 🆘 Need Help?

If you're still getting errors:

1. Check the browser console (F12)
2. Check your hosting platform's deployment logs
3. Verify environment variables are set correctly
4. Try clearing build cache and rebuilding
5. Check Supabase project is active and accessible

---

## 🎯 Current Configuration

Your app is configured with:
- **Supabase URL:** https://iqsgicgowgawmrijqxrd.supabase.co
- **Project Name:** claymind
- **Build Output:** `dist/`
- **Framework:** React + Vite

Ready to deploy! 🚀
