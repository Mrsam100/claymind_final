# Test Signup Troubleshooting

## Current Issue
API signup is failing with "Database error saving new user" (500 error)

## Possible Causes

### 1. SMTP Configuration Not Applied
The most likely cause is that the SMTP settings in the Supabase Dashboard weren't saved correctly or need to be re-applied.

### 2. Email Confirmation Blocking
Since `enable_confirmations = true`, Supabase requires sending an email when users sign up. If SMTP fails, the entire signup transaction rolls back.

## Steps to Verify SMTP Configuration

Go to: https://supabase.com/dashboard/project/iqsgicgowgawmrijqxrd/settings/auth

### Check 1: SMTP Settings Section
Scroll to "SMTP Settings" and verify:
- [ ] Toggle "Enable Custom SMTP" is **ON** (green)
- [ ] **Sender email**: sukhjeetkhalsa1111@gmail.com
- [ ] **Sender name**: ClayMind
- [ ] **Host**: smtp.gmail.com
- [ ] **Port number**: 587
- [ ] **Username**: sukhjeetkhalsa1111@gmail.com
- [ ] **Password**: qkxh njrz josf qwiu (filled in, not empty)
- [ ] Click **"Save"** button at the bottom

### Check 2: Test SMTP Connection
After saving SMTP settings:
1. Scroll to "Email Templates" section
2. Find "Confirm signup" template
3. Click "Send test email"
4. Enter your email: sukhjeetkhalsa1111@gmail.com
5. Check if email arrives

If test email fails, SMTP is not configured correctly.

### Check 3: Email Auth Settings
In the same page, scroll to "Email Auth" section:
- **Enable email signup**: Should be ON
- **Enable email confirmations**: Should be ON (or try turning OFF for testing)

## Alternative Test: Disable Email Confirmations

If SMTP is the blocker, temporarily disable confirmations:

1. In Dashboard → Auth Settings
2. Find "Enable email confirmations"
3. Toggle it **OFF**
4. Click **Save**
5. Try signup again

This will let users sign up without email verification, which bypasses SMTP.

## Alternative Test: Use Dashboard to Create User

Bypass API and create user manually:

1. Go to: https://supabase.com/dashboard/project/iqsgicgowgawmrijqxrd/auth/users
2. Click "Add user" button
3. Enter:
   - Email: test@example.com
   - Password: TestPassword123
   - Auto Confirm User: **YES** (check this box)
4. Click "Create user"

If this works, the issue is SMTP. If it fails, there's a database/trigger issue.

## Test Through Website UI

1. Open: https://claymind.online (when deployed)
2. Click "Sign Up"
3. Fill in form:
   - Email: your_test@example.com
   - Password: TestPassword123
4. Submit
5. Check browser console (F12) for detailed error
6. Check network tab for full API response

## Expected Behavior After Fix

When signup works correctly, you should see:
1. API returns 200 OK with user object
2. Email sent to user with confirmation link
3. Profile created in `profiles` table
4. User appears in Dashboard → Auth → Users

## Contact Support

If all else fails, you may need to contact Supabase support about SMTP configuration issues.

Check logs at: https://supabase.com/dashboard/project/iqsgicgowgawmrijqxrd/logs/explorer
