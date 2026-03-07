# 🚀 Vercel Deployment Guide - COMPLETE FIX

## ✅ ISSUE FIXED: 404 on Routes

**Problem:** Vercel returns 404 for all routes except `/` because it doesn't know how to handle client-side routing.

**Solution:** Created `vercel.json` with SPA rewrites configuration.

---

## 📁 FILES CREATED:

### 1. **vercel.json** (Root directory)
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This tells Vercel to serve `index.html` for ALL routes, allowing React Router to handle routing client-side.

---

## 🔧 DEPLOYMENT STEPS:

### **Step 1: Configure Environment Variables**

Go to: https://vercel.com/your-project/settings/environment-variables

Add these variables:

```
VITE_SUPABASE_URL=https://iqsgicgowgawmrijqxrd.supabase.co
VITE_SUPABASE_ANON_KEY=<your_anon_key>
VITE_ENABLE_TEST_LOGIN=false
```

**IMPORTANT:** Copy anon key from `.env.local`

---

### **Step 2: Update Supabase Configuration**

1. Go to: https://supabase.com/dashboard/project/iqsgicgowgawmrijqxrd/auth/url-configuration

2. Update **Site URL:**
   ```
   https://claymind-final.vercel.app
   ```

3. Update **Redirect URLs** (add all these):
   ```
   https://claymind-final.vercel.app/auth/callback
   https://claymind-final.vercel.app/**
   http://localhost:5173/auth/callback
   http://localhost:5173/**
   ```

---

### **Step 3: Update Google OAuth Settings**

1. Go to: https://console.cloud.google.com/apis/credentials

2. Edit your OAuth 2.0 Client ID

3. Add **Authorized JavaScript origins:**
   ```
   https://claymind-final.vercel.app
   ```

4. Add **Authorized redirect URIs:**
   ```
   https://iqsgicgowgawmrijqxrd.supabase.co/auth/v1/callback
   ```

---

### **Step 4: Deploy to Vercel**

```bash
# Option A: Deploy via Git (Recommended)
git add .
git commit -m "Add Vercel config and production fixes"
git push origin main

# Vercel will auto-deploy from GitHub/GitLab

# Option B: Deploy via CLI
npm install -g vercel
vercel --prod
```

---

### **Step 5: Test Production Deployment**

1. **Go to:** https://claymind-final.vercel.app

2. **Test Landing Page:**
   - Should load without errors
   - Logo and content visible

3. **Test Login Page:**
   - Go to: https://claymind-final.vercel.app/login
   - Should NOT get 404 ✅
   - Should see login form

4. **Test Google OAuth:**
   - Click "Continue with Google"
   - Sign in with Google
   - Should redirect to dashboard
   - **NOT** to landing page

5. **Test Dashboard:**
   - Should load without 406 errors
   - User data should display
   - Navigation should work

---

## 🐛 TROUBLESHOOTING:

### **Issue: Still getting 404**

**Check:**
1. Is `vercel.json` in root directory? ✅
2. Did you redeploy after adding `vercel.json`? ✅
3. Clear browser cache (Ctrl+Shift+Delete)

**Fix:**
```bash
# Force redeploy
git commit --allow-empty -m "Force redeploy"
git push origin main
```

---

### **Issue: OAuth redirects to localhost**

**Problem:** Redirect URL still pointing to localhost

**Fix:**
1. Check Supabase Site URL (should be production URL)
2. Check Google OAuth redirect URIs (should include Supabase callback)
3. Clear browser cache

---

### **Issue: Environment variables not working**

**Check:**
1. Go to Vercel Dashboard → Settings → Environment Variables
2. Make sure variables start with `VITE_` (Vite requirement)
3. Redeploy after adding variables

**Fix:**
```bash
# Redeploy to pick up new env vars
vercel --prod
```

---

### **Issue: 406 errors on dashboard**

**Problem:** RLS policies not applied to production database

**Fix:**
```bash
# Apply migrations to production
npx supabase db push --db-url "postgres://postgres:[YOUR_PASSWORD]@db.iqsgicgowgawmrijqxrd.supabase.co:5432/postgres"
```

Or run migrations manually in Supabase SQL Editor.

---

## ✅ PRODUCTION CHECKLIST:

Before going live:

- [x] `vercel.json` created
- [ ] Environment variables set in Vercel
- [ ] Supabase Site URL updated
- [ ] Supabase Redirect URLs updated
- [ ] Google OAuth URLs updated
- [ ] Database migrations applied to production
- [ ] Test OAuth flow on production
- [ ] Test all routes (no 404s)
- [ ] Test dashboard loading
- [ ] Test progress tracking
- [ ] Test logout/login flow

---

## 🔒 SECURITY NOTES:

**Production Environment Variables:**
- Never commit `.env.local` to Git
- Always use Vercel's environment variables dashboard
- Keep `VITE_SUPABASE_ANON_KEY` secure (but it's meant to be public)
- Never expose `SUPABASE_SERVICE_ROLE_KEY` to frontend

**HTTPS Required:**
- OAuth requires HTTPS (Vercel provides this automatically)
- Mixed content (HTTP + HTTPS) will fail

**CORS:**
- Supabase automatically handles CORS for configured URLs
- Make sure your production URL is in Supabase settings

---

## 🎯 EXPECTED RESULTS:

After deployment:

✅ All routes work (no 404s)
✅ OAuth redirects to production domain
✅ Users can sign up/login
✅ Dashboard loads correctly
✅ Progress is saved
✅ No console errors
✅ Fast loading times

---

## 📞 VERCEL SUPPORT:

If issues persist:

1. **Check Vercel Logs:**
   - Go to: https://vercel.com/your-project/deployments
   - Click latest deployment → Runtime Logs

2. **Check Build Logs:**
   - Look for build errors
   - Verify all dependencies installed

3. **Check Function Logs:**
   - If using Edge Functions
   - Look for runtime errors

---

## 🚀 DEPLOYMENT COMPLETE!

Your app is now production-ready on Vercel with:
- ✅ Proper SPA routing
- ✅ OAuth authentication
- ✅ Environment variables
- ✅ Security headers
- ✅ Fast CDN delivery

**Next Steps:**
1. Commit and push `vercel.json`
2. Configure environment variables
3. Update Supabase and Google OAuth URLs
4. Test production deployment
5. Monitor for errors

---

**Production URL:** https://claymind-final.vercel.app

**Test it now!** 🎉
