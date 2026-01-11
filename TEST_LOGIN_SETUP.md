# Test Login Setup Guide

## Overview
The Test Login feature allows you and your team to instantly login during development **WITHOUT any credentials or Supabase setup required**.

## Features
- ⚡ **Zero-setup** - No Supabase user creation needed!
- 🚀 One-click instant login
- 🔒 Only visible in development mode
- 🎨 Distinctive yellow/orange button design
- 💾 Auto-persists across page refreshes
- 🎯 Bypasses all authentication completely

## How It Works

The test login creates a **mock user** stored in localStorage. It completely bypasses Supabase authentication, so you don't need to:
- Create any users in Supabase
- Set up email verification
- Configure authentication providers
- Enter any credentials

## Usage

### Quick Start (3 seconds!)

1. Navigate to the login page (`/login`)
2. Click the yellow **"Quick Test Login (Dev Only)"** button
3. ✅ Done! You're logged in and redirected to `/kid-dashboard`

That's it! No setup, no credentials, no configuration needed.

### What Happens When You Click

1. Creates a mock user object:
   ```typescript
   {
     id: 'test-user-[timestamp]',
     email: 'test@clayrock.com',
     name: 'Test User',
     role: 'kid',
     emailVerified: true
   }
   ```

2. Stores it in `localStorage` under `clayrock_test_user`

3. Sets the user in the auth context

4. Redirects you to the dashboard

### Persistent Login

The mock user persists across:
- ✅ Page refreshes
- ✅ Browser restarts
- ✅ Tab closes/opens

To logout, just use the regular logout button.

## Security Features

### Development Only
- Button **only appears** when `import.meta.env.DEV === true`
- Automatically **hidden in production builds**
- No environment variables to commit by accident

### Production Safety
When you build for production:
```bash
npm run build
```
The test login button will **completely disappear**. The code checks:
```typescript
const showTestLogin = import.meta.env.DEV;
```

## Technical Details

### File Locations
- **Login Component:** `src/features/auth/screens/Login.tsx`
- **Auth Context:** `src/contexts/AuthContext.tsx`
- **Test Login Method:** `AuthContext.testLogin()`

### Implementation
The test login:
1. **Does NOT** call Supabase
2. **Does NOT** make API requests
3. **Does NOT** validate credentials
4. **ONLY** creates local state

### Mock User Data
```typescript
const mockUser: User = {
  id: 'test-user-' + Date.now(),
  email: 'test@clayrock.com',
  name: 'Test User',
  role: 'kid',
  avatarUrl: null,
  createdAt: new Date().toISOString(),
  emailVerified: true,
};
```

## Team Usage

All team members can use this instantly:

1. Pull the latest code
2. Run `npm run dev`
3. Go to `/login`
4. Click the test login button
5. Start developing!

No coordination, no shared credentials, no Supabase access needed.

## Troubleshooting

### Button Not Showing
**Check:** Are you in development mode?
```bash
npm run dev  # ✅ Test login visible
npm run build && npm run preview  # ❌ Test login hidden
```

**Check:** Is the dev server running?
- Restart with `npm run dev`

### Login Not Persisting
**Issue:** User logs out on refresh

**Fix:** Check browser localStorage:
1. Open DevTools (F12)
2. Go to Application → Local Storage
3. Check for `clayrock_test_user` key
4. If missing, click test login again

### Can't Logout
**Fix:** Use the logout button or manually clear:
```javascript
localStorage.removeItem('clayrock_test_user');
```

## Customization

### Change Mock User Data
Edit `src/contexts/AuthContext.tsx`:

```typescript
const mockUser: User = {
  id: 'test-user-' + Date.now(),
  email: 'your-email@example.com',  // ← Change this
  name: 'Your Name',                 // ← Change this
  role: 'kid',                       // ← Change this
  // ... etc
};
```

### Change Button Appearance
Edit `src/features/auth/screens/Login.tsx`:

```tsx
<Button3D
  type="button"
  variant="secondary"
  size="lg"
  onClick={handleTestLogin}
  disabled={isLoading}
  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500"
>
  {/* Customize text and icon here */}
</Button3D>
```

## Comparison: Before vs After

### ❌ Old Way (With Credentials)
1. Add credentials to `.env.local`
2. Create user in Supabase Dashboard
3. Verify email
4. Remember password
5. Type credentials every time
6. Share credentials with team

### ✅ New Way (Zero Setup)
1. Click button
2. Done!

## Need Help?

If the test login isn't working:
1. Check browser console for errors
2. Verify you're running `npm run dev`
3. Clear localStorage and try again
4. Restart the dev server

## Summary

🎉 **No setup required!** Just click the button and start developing. The test login is perfect for:
- Quick development iterations
- Testing protected routes
- Demoing the app
- Team collaboration
- CI/CD testing

All without touching Supabase or managing credentials!
