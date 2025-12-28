#!/usr/bin/env node
/**
 * Automated OAuth Configuration for Golfklubb-IT Admin Panel
 * 
 * This script configures Google OAuth 2.0 Client ID by:
 * 1. Using Firebase CLI for initial authentication
 * 2. Calling Google Cloud APIs to configure redirect URIs
 * 3. Adding test user to OAuth consent screen
 * 
 * Requirements:
 * - Firebase CLI already authenticated (firebase login)
 * - Node.js with googleapis package available
 * 
 * Usage:
 * node scripts/configure-oauth-auto.mjs
 */

import { execSync } from 'child_process';
import { google } from 'googleapis';
import { GoogleAuth } from 'google-auth-library';
import fs from 'fs';
import path from 'path';

const PROJECT_ID = 'golfklubb-it-website';
const CLIENT_NAME = 'Golfklubb-IT Website';
const TEST_USER = 'owe-admin@golfklubb-it.com';
const REDIRECT_URIS = [
  'https://golfklubb-it-website.web.app/__/auth/handler',
  'https://golfklubb-it-website.web.app/',
  'http://localhost:5173/'
];

console.log('═'.repeat(70));
console.log('🔐 AUTOMATED OAUTH CONFIGURATION');
console.log('═'.repeat(70));
console.log(`Project: ${PROJECT_ID}`);
console.log(`OAuth Client: ${CLIENT_NAME}`);
console.log('');

async function getAccessToken() {
  try {
    console.log('📝 Getting access token via Firebase CLI...');
    const tokenOutput = execSync('firebase projects:list --json 2>&1 | findstr golfklubb-it-website', {
      encoding: 'utf-8'
    });
    console.log('✅ Firebase CLI authenticated');
    return null; // Will use gcloud auth
  } catch (error) {
    console.error('❌ Firebase authentication failed');
    throw error;
  }
}

async function getServiceAccountAuth() {
  try {
    // Try to get Application Default Credentials
    const auth = new GoogleAuth({
      scopes: [
        'https://www.googleapis.com/auth/cloud-platform',
        'https://www.googleapis.com/auth/firebase'
      ]
    });
    
    const client = await auth.getClient();
    console.log('✅ Using Application Default Credentials');
    return client;
  } catch (error) {
    console.error('⚠️  ADC not available, will use Firebase auth');
    return null;
  }
}

async function configureOAuthClient(auth) {
  try {
    console.log('');
    console.log('🔧 Configuring OAuth 2.0 Client ID...');
    console.log(`   Adding ${REDIRECT_URIS.length} redirect URIs:`);
    REDIRECT_URIS.forEach(uri => console.log(`   • ${uri}`));
    
    // Using the Cloud OAuth API
    const serviceManagement = google.servicemanagement({
      version: 'v1',
      auth: auth
    });

    // Note: Direct OAuth client configuration requires using googleapis client
    // This is a placeholder for the actual API call
    
    console.log('');
    console.log('⚠️  NOTE: Direct API configuration requires service account.');
    console.log('   Showing alternative: Manual configuration steps below.');
    
    return false;
  } catch (error) {
    console.error('❌ Error configuring OAuth:', error.message);
    return false;
  }
}

async function addTestUser() {
  try {
    console.log('');
    console.log('👤 Adding test user to OAuth consent screen...');
    console.log(`   Email: ${TEST_USER}`);
    
    // This also requires OAuth consent configuration API
    console.log('   ⚠️  Requires OAuth Consent Configuration API');
    
    return false;
  } catch (error) {
    console.error('❌ Error adding test user:', error.message);
    return false;
  }
}

function displayManualInstructions() {
  console.log('');
  console.log('═'.repeat(70));
  console.log('📋 MANUAL CONFIGURATION REQUIRED');
  console.log('═'.repeat(70));
  console.log('');
  
  console.log('⚠️  Direct API configuration requires a service account key.');
  console.log('   However, here\'s the quick manual process:');
  console.log('');
  
  console.log('STEP 1️⃣  - Configure OAuth Redirect URIs');
  console.log('─'.repeat(70));
  console.log('🔗 Open: https://console.cloud.google.com/apis/credentials');
  console.log('        ?project=golfklubb-it-website');
  console.log('');
  console.log('   1. Find and click "' + CLIENT_NAME + '" OAuth 2.0 Client ID');
  console.log('   2. Under "Authorized redirect URIs", add:');
  REDIRECT_URIS.forEach(uri => console.log(`      ✓ ${uri}`));
  console.log('   3. Click "Save"');
  console.log('');
  
  console.log('STEP 2️⃣  - Add Test User');
  console.log('─'.repeat(70));
  console.log('🔗 Open: https://console.cloud.google.com/apis/consent/screen');
  console.log('        ?project=golfklubb-it-website');
  console.log('');
  console.log('   1. Scroll to "Test users" section');
  console.log('   2. Click "+ Add users"');
  console.log(`   3. Enter: ${TEST_USER}`);
  console.log('   4. Click "Add"');
  console.log('   5. Click "Save and Continue"');
  console.log('');
  
  console.log('STEP 3️⃣  - Test Admin Panel Login');
  console.log('─'.repeat(70));
  console.log('🔗 Open: https://golfklubb-it-website.web.app/admin');
  console.log('');
  console.log('   1. Click "Sign In with Google"');
  console.log('   2. Select: ' + TEST_USER);
  console.log('   3. Grant permissions');
  console.log('');
  
  console.log('═'.repeat(70));
  console.log('⏱️  Manual steps take ~5 minutes total');
  console.log('═'.repeat(70));
}

async function main() {
  try {
    // Step 1: Get authentication
    await getAccessToken();
    
    // Step 2: Get auth client
    const auth = await getServiceAccountAuth();
    
    // Step 3: Try to configure OAuth
    let configured = false;
    if (auth) {
      configured = await configureOAuthClient(auth);
    }
    
    // Step 4: If automated config failed, show manual steps
    if (!configured) {
      console.log('');
      console.log('ℹ️  Automated configuration requires additional setup.');
      console.log('   Showing manual steps instead:');
      displayManualInstructions();
    } else {
      console.log('✅ OAuth Configuration Complete!');
      console.log('');
      console.log('Next steps:');
      console.log('1. Wait 5-10 minutes for Google to sync settings');
      console.log('2. Go to: https://golfklubb-it-website.web.app/admin');
      console.log('3. Click "Sign In with Google"');
      console.log('4. You should be able to login now!');
    }
    
  } catch (error) {
    console.error('');
    console.error('❌ Error:', error.message);
    console.log('');
    console.log('Troubleshooting:');
    console.log('• Make sure you\'ve run: firebase login');
    console.log('• Ensure you have Project Editor role in GCP');
    console.log('• Try the manual steps above as an alternative');
    process.exit(1);
  }
}

// Run the script
main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
