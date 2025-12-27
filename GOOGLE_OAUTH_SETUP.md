# Google OAuth Setup for Admin Panel

## Firebase Console Setup (Required)

### 1. Enable Google Sign-in Provider
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select project: **golfklubb-it-website**
3. Go to **Authentication** → **Sign-in method**
4. Find **Google** provider
5. Click **Enable**
6. Set **Project name for OAuth consent screen**: "Golfklubb-IT Admin"
7. Click **Save**

### 2. Configure OAuth Consent Screen
1. Firebase will redirect you to Google Cloud Console
2. Fill in OAuth consent screen:
   - **User Type**: External
   - **App name**: Golfklubb-IT Admin Panel
   - **User support email**: owe@golfklubb-it.no (or your email)
   - **Developer contact**: owe@golfklubb-it.no
3. Click **Save and Continue**
4. **Scopes**: Add `email` and `profile` (already done in code)
5. Click **Save and Continue**
6. **Test users**: Add `owe-admin@golfklubb-it.com`
7. Click **Save and Continue**

### 3. Copy Web API Key (if needed)
1. In Firebase Console → **Project Settings**
2. Copy your **Web API Key** (should already be in `admin/.env`)
3. Verify it matches: `VITE_FIREBASE_API_KEY`

## Testing

Once Google OAuth is configured:

1. Go to **https://golfklubb-it-website.web.app/admin**
2. Click **Sign In with Google**
3. Should see Google login popup
4. Login with `owe-admin@golfklubb-it.com`
5. You should see the admin dashboard

## Troubleshooting

If popup doesn't appear:
- Check browser console for error messages (F12)
- Verify Google provider is **Enabled** in Firebase Console
- Check that OAuth consent screen is configured
- Make sure `owe-admin@golfklubb-it.com` is added as test user
- Clear browser cache and try again

## Error Messages

- **"auth/invalid-api-key"**: Check `.env` file has correct `VITE_FIREBASE_API_KEY`
- **"auth/popup-blocked"**: Browser blocked popup, allow popups for this site
- **"auth/unauthorized-domain"**: Domain not authorized in Firebase Console
- **"auth/user-not-authorized"**: User not added to OAuth consent screen test users

## Next Steps After Login Works

1. ✅ Google Sign-in configured
2. Create sample data in Firestore collections
3. Implement collection editor UI
4. Set up GitHub Actions for auto-deploy
5. Configure additional admins via invitation system
