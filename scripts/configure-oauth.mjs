#!/usr/bin/env node
/**
 * Golfklubb-IT OAuth Configuration Script
 * 
 * This script displays comprehensive instructions for configuring
 * Google OAuth 2.0 redirect URIs and test users.
 * 
 * Usage:
 *   node scripts/configure-oauth.mjs
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ID = 'golfklubb-it-website';
const PROJECT_NUMBER = '186711894198';

const REDIRECT_URIS = [
  'https://golfklubb-it-website.web.app/__/auth/handler',
  'https://golfklubb-it-website.web.app/',
  'http://localhost:5173/'
];

const TEST_USER_EMAIL = 'owe-admin@golfklubb-it.com';

console.log('═'.repeat(80));
console.log('🔐 OAUTH 2.0 CONFIGURATION FOR GOLFKLUBB-IT ADMIN PANEL');
console.log('═'.repeat(80));
console.log('');

/**
 * Verify Firebase CLI is authenticated
 */
function verifyFirebaseAuth() {
  console.log('🔍 Verifying Firebase CLI authentication...');
  try {
    execSync('firebase projects:list', { 
      stdio: 'pipe',
      timeout: 5000
    });
    console.log('✅ Firebase CLI is authenticated');
    return true;
  } catch (error) {
    console.log('⚠️  Firebase CLI not fully authenticated');
    console.log('   Run: firebase login');
    return false;
  }
}

/**
 * Display comprehensive configuration guide
 */
function displayConfigurationGuide() {
  console.log('');
  console.log('═'.repeat(80));
  console.log('📋 OAUTH 2.0 CONFIGURATION STEPS');
  console.log('═'.repeat(80));
  console.log('');

  console.log('STEP 1️⃣  - ADD REDIRECT URIS');
  console.log('─'.repeat(80));
  console.log('');
  console.log('🔗 Open this URL in your browser:');
  console.log('   https://console.cloud.google.com/apis/credentials?project=' + PROJECT_ID);
  console.log('');
  console.log('Then:');
  console.log('   1. Find "Golfklubb-IT Website" in the OAuth 2.0 Client IDs');
  console.log('   2. Click to open its configuration');
  console.log('   3. Scroll to "Authorized redirect URIs"');
  console.log('   4. For each URI below, click "Add URI" and paste:');
  console.log('');
  REDIRECT_URIS.forEach((uri, i) => {
    console.log(`        ${i + 1}. ${uri}`);
  });
  console.log('');
  console.log('   5. Click "SAVE" button at the bottom');
  console.log('');

  console.log('STEP 2️⃣  - ADD TEST USER');
  console.log('─'.repeat(80));
  console.log('');
  console.log('🔗 Open this URL in your browser:');
  console.log('   https://console.cloud.google.com/apis/consent/screen?project=' + PROJECT_ID);
  console.log('');
  console.log('Then:');
  console.log('   1. Scroll to "Test users" section');
  console.log('   2. Click "+ Add users"');
  console.log(`   3. Enter: ${TEST_USER_EMAIL}`);
  console.log('   4. Click "Add"');
  console.log('   5. Click "Save and Continue"');
  console.log('');

  console.log('STEP 3️⃣  - VERIFY & TEST');
  console.log('─'.repeat(80));
  console.log('');
  console.log('⏱️  Wait 5-10 minutes for Google to sync your changes');
  console.log('');
  console.log('Then test the admin panel:');
  console.log('🔗 https://golfklubb-it-website.web.app/admin');
  console.log('');
  console.log('   1. Click "Sign In with Google"');
  console.log('   2. A popup should appear (NOT just blink and close)');
  console.log('   3. Select: ' + TEST_USER_EMAIL);
  console.log('   4. Grant requested permissions');
  console.log('   5. You should now see the admin dashboard ✅');
  console.log('');

  console.log('═'.repeat(80));
  console.log('🔧 TROUBLESHOOTING');
  console.log('═'.repeat(80));
  console.log('');
  console.log('Issue: Popup closes immediately');
  console.log('→ Redirect URIs not yet saved. Check you clicked "SAVE".');
  console.log('→ Wait longer (Google can take 5-10 min to sync)');
  console.log('');
  console.log('Issue: "auth/popup-closed-by-user" error');
  console.log('→ Same as above - URIs probably not saved yet');
  console.log('');
  console.log('Issue: "User not authorized" or similar');
  console.log('→ Make sure test user is added to consent screen (Step 2)');
  console.log('');
  console.log('Issue: Still not working after 10 minutes');
  console.log('→ Clear browser cache: Ctrl+Shift+Delete');
  console.log('→ Try in incognito/private window');
  console.log('→ Check that you\'re editing the right OAuth client');
  console.log('');

  console.log('═'.repeat(80));
  console.log('📌 QUICK REFERENCE');
  console.log('═'.repeat(80));
  console.log('');
  console.log('Project ID:      ' + PROJECT_ID);
  console.log('Project Number:  ' + PROJECT_NUMBER);
  console.log('Test User Email: ' + TEST_USER_EMAIL);
  console.log('Admin URL:       https://golfklubb-it-website.web.app/admin');
  console.log('');
}

/**
 * Save instructions to markdown file
 */
function saveInstructions() {
  const instructionsPath = path.join(__dirname, '..', 'OAUTH_CONFIGURATION_STEPS.md');
  
  const markdown = `# OAuth 2.0 Configuration for Golfklubb-IT Admin Panel

**Generated:** ${new Date().toLocaleString()}  
**Project:** ${PROJECT_ID}

---

## Quick Navigation

| Action | Link |
|--------|------|
| Edit OAuth Client | https://console.cloud.google.com/apis/credentials?project=${PROJECT_ID} |
| Edit Consent Screen | https://console.cloud.google.com/apis/consent/screen?project=${PROJECT_ID} |
| Test Admin Panel | https://golfklubb-it-website.web.app/admin |

---

## Step-by-Step Instructions

### Step 1️⃣ - Configure Redirect URIs (5 minutes)

1. Open: https://console.cloud.google.com/apis/credentials?project=${PROJECT_ID}
2. Find "Golfklubb-IT Website" OAuth 2.0 Client ID
3. Click to open its configuration
4. Scroll to "Authorized redirect URIs" section
5. Click "Add URI" three times and add these URLs:

\`\`\`
${REDIRECT_URIS.map(uri => `• ${uri}`).join('\n')}
\`\`\`

6. Click "SAVE" button
7. You'll see a confirmation message

### Step 2️⃣ - Add Test User (2 minutes)

1. Open: https://console.cloud.google.com/apis/consent/screen?project=${PROJECT_ID}
2. Scroll to "Test users" section
3. Click "+ Add users"
4. Enter email: \`${TEST_USER_EMAIL}\`
5. Click "Add"
6. Click "Save and Continue"

### Step 3️⃣ - Test Your Configuration (5 minutes)

1. **Wait 5-10 minutes** for Google to sync your changes
2. Open: https://golfklubb-it-website.web.app/admin
3. Click "Sign In with Google"
4. A popup window should appear
5. Select: ${TEST_USER_EMAIL}
6. Grant the requested permissions
7. ✅ You should now be logged into the admin dashboard!

---

## Configuration Checklist

- [ ] All 3 redirect URIs added to OAuth client
- [ ] Changes saved in OAuth credentials
- [ ] Test user added to consent screen
- [ ] Changes saved in consent screen
- [ ] Waited 5-10 minutes
- [ ] Tested admin panel login
- [ ] Popup appears and doesn't close
- [ ] Successfully logged in

---

## Troubleshooting

### Popup closes immediately after clicking "Sign In"

**Cause:** Redirect URIs not configured yet  
**Fix:**
1. Go back to Step 1
2. Make sure all 3 URIs are added
3. Click "SAVE"
4. Wait 5-10 minutes
5. Clear browser cache (Ctrl+Shift+Delete)
6. Try again

### "auth/popup-closed-by-user" error in console

**Cause:** Same as above - URIs probably not saved  
**Fix:** Follow the popup issue troubleshooting above

### "User not authorized" or "User not in test user list"

**Cause:** Test user not added to consent screen  
**Fix:**
1. Go back to Step 2
2. Make sure ${TEST_USER_EMAIL} is in test users
3. Click "Save and Continue"
4. Wait a few minutes
5. Try again

### Still not working after 10 minutes

**Try these:**
1. Clear browser cache entirely (Ctrl+Shift+Delete)
2. Try in an incognito/private browsing window
3. Try in a different browser
4. Check you're editing the **correct** OAuth client (should be "Golfklubb-IT Website")
5. Verify test user email is spelled correctly

---

## Project Details

- **Project ID:** ${PROJECT_ID}
- **Project Number:** ${PROJECT_NUMBER}
- **OAuth Client:** Golfklubb-IT Website
- **Admin Panel:** https://golfklubb-it-website.web.app/admin
- **Test User:** ${TEST_USER_EMAIL}

---

## What Happens Next?

Once login is working:

1. **Sign in** to the admin panel with your test account
2. **Populate** Firestore collections with content
3. **Test** CRUD operations (create, read, update, delete)
4. **Set up** GitHub Actions for automated deployments
5. **Configure** additional admin users (when ready)

---

**Generated by:** \`scripts/configure-oauth.mjs\`  
**Last updated:** ${new Date().toISOString()}
`;

  try {
    fs.writeFileSync(instructionsPath, markdown);
    console.log('💾 Full instructions saved to: OAUTH_CONFIGURATION_STEPS.md');
    return true;
  } catch (error) {
    console.error('⚠️  Could not save instructions file:', error.message);
    return false;
  }
}

/**
 * Main execution
 */
function main() {
  try {
    // Verify Firebase CLI
    const firebaseAuth = verifyFirebaseAuth();
    console.log('');

    // Display the guide
    displayConfigurationGuide();

    // Save instructions file
    console.log('');
    saveInstructions();

    console.log('');
    console.log('═'.repeat(80));
    console.log('✅ READY FOR CONFIGURATION');
    console.log('═'.repeat(80));
    console.log('');
    console.log('👉 NEXT ACTION: Follow the steps above');
    console.log('');
    
    if (firebaseAuth) {
      console.log('✓ Firebase CLI is authenticated');
      console.log('✓ You have access to the project');
    } else {
      console.log('⚠️  Run "firebase login" to complete authentication');
    }

    console.log('');
    console.log('Estimated time: 15 minutes total');
    console.log('(5 min for Step 1, 2 min for Step 2, 5-10 min waiting/testing)');
    console.log('');
    
  } catch (error) {
    console.error('');
    console.error('❌ Error:', error.message);
    console.log('');
    console.log('Troubleshooting:');
    console.log('• Make sure you have Node.js installed');
    console.log('• Make sure Firebase CLI is installed: npm install -g firebase-tools');
    console.log('• Run: firebase login');
    process.exit(1);
  }
}

// Run the script
main();
