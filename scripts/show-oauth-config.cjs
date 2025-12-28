#!/usr/bin/env node

/**
 * Get OAuth configuration URLs for Firebase Project
 * Shows step-by-step what needs to be configured
 */

const PROJECT_ID = 'golfklubb-it-website';
const PROJECT_NUMBER = '186711894198';

function generateOAuthConfig() {
  console.log('═════════════════════════════════════════════════════════════');
  console.log('🔐 GOOGLE OAUTH CONFIGURATION FOR ADMIN PANEL');
  console.log('═════════════════════════════════════════════════════════════\n');

  console.log('ℹ️  Project Details:');
  console.log(`   Project ID: ${PROJECT_ID}`);
  console.log(`   Project Number: ${PROJECT_NUMBER}\n`);

  console.log('Step 1️⃣  Configure OAuth Client Redirect URIs');
  console.log('─────────────────────────────────────────────\n');
  console.log('🔗 Open this URL:');
  console.log(`https://console.cloud.google.com/apis/credentials?project=${PROJECT_ID}\n`);

  console.log('Then:');
  console.log('  1. Click on "Golfklubb-IT Website" OAuth 2.0 Client ID');
  console.log('  2. Under "Authorized redirect URIs", add:');
  console.log('     • https://golfklubb-it-website.web.app/__/auth/handler');
  console.log('     • https://golfklubb-it-website.web.app/');
  console.log('     • http://localhost:5173/');
  console.log('  3. Click "Save"\n');

  console.log('Step 2️⃣  Configure OAuth Consent Screen');
  console.log('───────────────────────────────────────\n');
  console.log('🔗 Open this URL:');
  console.log(`https://console.cloud.google.com/apis/consent/screen?project=${PROJECT_ID}\n`);

  console.log('Then:');
  console.log('  1. Scroll to "Test users" section');
  console.log('  2. Click "Add users"');
  console.log('  3. Add email: owe-admin@golfklubb-it.com');
  console.log('  4. Click "Add"');
  console.log('  5. Click "Save and Continue"\n');

  console.log('Step 3️⃣  Test Admin Panel Login');
  console.log('──────────────────────────────\n');
  console.log('🔗 Go to admin panel:');
  console.log('https://golfklubb-it-website.web.app/admin\n');

  console.log('Then:');
  console.log('  1. Click "Sign In with Google"');
  console.log('  2. A popup should appear');
  console.log('  3. Select: owe-admin@golfklubb-it.com');
  console.log('  4. Grant permissions');
  console.log('  5. You should be logged in!\n');

  console.log('═════════════════════════════════════════════════════════════');
  console.log('📋 Troubleshooting');
  console.log('═════════════════════════════════════════════════════════════\n');

  console.log('❌ Popup closes immediately?');
  console.log('   → Make sure redirect URIs are added in Step 1\n');

  console.log('❌ "User not authorized" error?');
  console.log('   → Make sure owe-admin@golfklubb-it.com is added in Step 2\n');

  console.log('❌ Still not working?');
  console.log('   → Wait 5-10 minutes for Google to sync settings');
  console.log('   → Clear browser cache (Ctrl+Shift+Delete)');
  console.log('   → Try in incognito window\n');

  console.log('═════════════════════════════════════════════════════════════\n');
}

generateOAuthConfig();
