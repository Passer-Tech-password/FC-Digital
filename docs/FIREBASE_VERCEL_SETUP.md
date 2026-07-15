# Fixing Firebase auth/unauthorized-domain Error on Vercel

## Problem
When deploying to Vercel, Google Sign In throws `Firebase: Error (auth/unauthorized-domain)` even though it works perfectly on localhost.

## Why This Happens
Firebase requires whitelisting **all** domains that will use Firebase Authentication. By default, only `localhost` is whitelisted.

## How to Fix

### Step 1: Get Your Vercel Domain
First, find your Vercel deployment domain. It will look like:
- `your-project-name.vercel.app`
- Or your custom domain if you've set one up

### Step 2: Add Domain to Firebase Console

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project (`fc-digital`)
3. In the left sidebar, go to **Authentication**
4. Click on the **Settings** tab (top right, gear icon)
5. Scroll down to **Authorized domains**
6. Click **Add domain**
7. Enter your Vercel domain (e.g., `fc-digital.vercel.app`)
8. Click **Add**

### Step 3: Also Add These Domains (Recommended)
To prevent issues with future deployments, add:
- All your Vercel deployment domains
- Any custom domains you're using
- `localhost` (should already be there)

### Step 4: Wait for Changes to Propagate
It can take **5-10 minutes** for Firebase to apply the domain changes.

### Step 5: Redeploy (Optional)
After the domains are whitelisted, you can redeploy your Vercel site to ensure everything works.

---

## Additional Notes

### For Vercel Preview Deployments
If you want preview deployments (like `feature-branch-fc-digital.vercel.app`) to also work, you can:
1. Whitelist individual preview domains as they are created
2. Or use a wildcard domain (if your plan supports it)

### Firebase Auth Providers
This fix applies to **all** Firebase Auth providers, not just Google Sign In:
- Email/Password
- Google
- Facebook
- Twitter
- GitHub
- etc.

---

## Need Help?
If you still have issues after following these steps:
1. Double-check that you entered the domain correctly (no typos, no extra characters)
2. Make sure you're looking at the correct Firebase project
3. Check your browser console for any other error messages
