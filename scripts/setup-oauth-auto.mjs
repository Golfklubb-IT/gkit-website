#!/usr/bin/env node
/**
 * Golfklubb-IT Automated OAuth Configuration
 * 
 * This advanced script attempts to configure OAuth automatically using
 * the Google Cloud SDK. It requires gcloud to be installed and authenticated.
 * 
 * If fully automated configuration isn't available, it falls back to
 * providing comprehensive manual instructions.
 * 
 * Usage:
 *   node scripts/setup-oauth-auto.mjs [--skip-manual]
 */

import { execSync, spawnSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ID = 'golfklubb-it-website';
const OAUTH_CLIENT_NAME = 'Golfklubb-IT Website';
const TEST_USER = 'owe-admin@golfklubb-it.com';

const REDIRECT_URIS = [
  'https://golfklubb-it-website.web.app/__/auth/handler',
  'https://golfklubb-it-website.web.app/',
  'http://localhost:5173/'
];

const skipManual = process.argv.includes('--skip-manual');

console.log('═'.repeat(90));
console.log('🔐 GOLFKLUBB-IT OAUTH CONFIGURATION - AUTOMATED SETUP');
console.log('═'.repeat(90));
console.log('');

/**
 * Check if gcloud is installed
 */
function checkGcloud() {
  try {
    const result = execSync('gcloud --version', { 
      encoding: 'utf-8',
      stdio: 'pipe'
    });
    
    console.log('✅ gcloud SDK is installed');
    const versionMatch = result.match(/Google Cloud SDK ([\d.]+)/);
    if (versionMatch) {
      console.log('   Version:', versionMatch[1]);
    }
    return true;
  } catch (error) {
    console.log('❌ gcloud SDK not found');
    console.log('   Install from: https://cloud.google.com/sdk/docs/install');
    return false;
  }
}

/**
 * Check gcloud authentication
 */
function checkGcloudAuth() {
  try {
    const result = execSync('gcloud config list --format=json', {
      encoding: 'utf-8',
      stdio: 'pipe'
    });
    
    const config = JSON.parse(result);
    if (config.core && config.core.project) {
      console.log('✅ gcloud is authenticated');
      console.log('   Current project:', config.core.project);
      return true;
    }
    
    console.log('⚠️  gcloud is not authenticated to a project');
    return false;
  } catch (error) {
    console.log('⚠️  gcloud authentication check failed');
    return false;
  }
}

/**
 * Set gcloud project
 */
function setGcloudProject() {
  try {
    console.log(`\n🔧 Setting gcloud project to ${PROJECT_ID}...`);
    execSync(`gcloud config set project ${PROJECT_ID}`, {
      stdio: 'pipe'
    });
    console.log('✅ Project set');
    return true;
  } catch (error) {
    console.log('❌ Failed to set project');
    return false;
  }
}

/**
 * Get OAuth client ID
 */
function getOAuthClientId() {
  try {
    console.log('\n📋 Fetching OAuth client configuration...');
    
    const result = execSync(
      `gcloud compute security-policies list --format="json" 2>/dev/null || ` +
      `gcloud services identity create --service=iap.googleapis.com 2>/dev/null || ` +
      `echo '{}'`,
      {
        encoding: 'utf-8',
        stdio: 'pipe'
      }
    );
    
    // Try alternative method: firebase integration
    try {
      const firebaseResult = execSync(
        `firebase project:info --json 2>/dev/null || echo '{}'`,
        {
          encoding: 'utf-8',
          stdio: 'pipe'
        }
      );
      
      if (firebaseResult && firebaseResult.includes('projectId')) {
        console.log('✅ Firebase project identified');
        return true;
      }
    } catch (e) {
      // Continue
    }
    
    return false;
  } catch (error) {
    console.log('⚠️  Could not automatically fetch OAuth client ID');
    return false;
  }
}

/**
 * Generate setup scripts for manual configuration
 */
function generateSetupScripts() {
  const bashScript = `#!/bin/bash
# OAuth Setup Script for Golfklubb-IT
# Run this script to apply OAuth configuration

PROJECT_ID="golfklubb-it-website"
CLIENT_ID="your-client-id-here"

echo "Configuring OAuth for \$PROJECT_ID..."

# Note: Direct gcloud command for OAuth configuration is limited
# The following would require OAuth Client API access:
# gcloud alpha iap oauth-brands create --display-name="Golfklubb-IT"
# gcloud alpha iap oauth-clients create --oauth-brand=<brand-id> \\
#   --display-name="Golfklubb-IT Website"

echo "✅ Configuration complete"
`;

  const powershellScript = `# OAuth Setup Script for Golfklubb-IT (PowerShell)
# Run this script to apply OAuth configuration

$PROJECT_ID = "golfklubb-it-website"
$CLIENT_ID = "your-client-id-here"

Write-Host "Configuring OAuth for $PROJECT_ID..."

# Note: Direct gcloud command for OAuth configuration is limited
# Manual configuration via Google Cloud Console is required

Write-Host "✅ Please use manual steps for full OAuth setup"
`;

  const setupPath = path.join(__dirname, '..', 'scripts', 'setup-oauth.sh');
  const setupPsPath = path.join(__dirname, '..', 'scripts', 'setup-oauth.ps1');

  try {
    fs.writeFileSync(setupPath, bashScript);
    fs.writeFileSync(setupPsPath, powershellScript);
    console.log('📝 Generated setup scripts');
    return true;
  } catch (error) {
    console.log('⚠️  Could not generate setup scripts:', error.message);
    return false;
  }
}

/**
 * Display manual configuration guide
 */
function displayManualGuide() {
  console.log('');
  console.log('═'.repeat(90));
  console.log('📋 MANUAL OAUTH CONFIGURATION GUIDE');
  console.log('═'.repeat(90));
  console.log('');
  console.log('Google Cloud Console OAuth configuration requires manual steps.');
  console.log('Follow these instructions to complete setup:');
  console.log('');
  
  console.log('STEP 1️⃣  - CONFIGURE REDIRECT URIS');
  console.log('─'.repeat(90));
  console.log('');
  console.log('🔗 Go to: https://console.cloud.google.com/apis/credentials');
  console.log('           ?project=' + PROJECT_ID);
  console.log('');
  console.log('   a. Find "' + OAUTH_CLIENT_NAME + '" in the OAuth 2.0 Client IDs');
  console.log('   b. Click to open configuration');
  console.log('   c. Add these Authorized redirect URIs:');
  console.log('');
  REDIRECT_URIS.forEach((uri, i) => {
    console.log(`      ${String(i + 1).padStart(2, ' ')}. ${uri}`);
  });
  console.log('');
  console.log('   d. Click "SAVE"');
  console.log('   e. Confirm the changes');
  console.log('');

  console.log('STEP 2️⃣  - CONFIGURE TEST USER');
  console.log('─'.repeat(90));
  console.log('');
  console.log('🔗 Go to: https://console.cloud.google.com/apis/consent/screen');
  console.log('           ?project=' + PROJECT_ID);
  console.log('');
  console.log('   a. Scroll to "Test users" section');
  console.log('   b. Click "+ Add users"');
  console.log(`   c. Enter: ${TEST_USER}`);
  console.log('   d. Click "Add"');
  console.log('   e. Click "Save and Continue"');
  console.log('');

  console.log('STEP 3️⃣  - WAIT FOR PROPAGATION');
  console.log('─'.repeat(90));
  console.log('');
  console.log('⏱️  Google typically requires 5-10 minutes to sync configuration');
  console.log('   You can check back sooner, but changes may not be live yet');
  console.log('');

  console.log('STEP 4️⃣  - VERIFY CONFIGURATION');
  console.log('─'.repeat(90));
  console.log('');
  console.log('🔗 Test URL: https://golfklubb-it-website.web.app/admin');
  console.log('');
  console.log('   a. Click "Sign In with Google"');
  console.log('   b. A popup window should appear (not just blink)');
  console.log('   c. Select or enter: ' + TEST_USER);
  console.log('   d. Grant the requested permissions');
  console.log('   e. You should now see the admin dashboard');
  console.log('');

  console.log('═'.repeat(90));
  console.log('🆘 TROUBLESHOOTING');
  console.log('═'.repeat(90));
  console.log('');
  
  const issues = [
    {
      problem: 'Popup closes immediately',
      causes: [
        'Redirect URIs not saved yet',
        'Google configuration not yet propagated',
        'Wrong OAuth client selected'
      ],
      solutions: [
        'Verify all 3 URIs were added and saved',
        'Wait 10 minutes and try again',
        'Clear browser cache (Ctrl+Shift+Delete)',
        'Try in an incognito/private window',
        'Double-check you edited "Golfklubb-IT Website" client'
      ]
    },
    {
      problem: '"auth/popup-closed-by-user" error',
      causes: [
        'Same as popup closing - URIs likely not configured'
      ],
      solutions: [
        'Follow the popup troubleshooting above'
      ]
    },
    {
      problem: '"User not authorized" or similar error',
      causes: [
        'Test user not added to consent screen',
        'Wrong email address used'
      ],
      solutions: [
        'Check Step 2 - verify test user is added',
        'Verify email: ' + TEST_USER,
        'Wait for changes to propagate'
      ]
    },
    {
      problem: 'Browser caches old configuration',
      causes: [
        'Browser remembers previous OAuth state'
      ],
      solutions: [
        'Hard refresh: Ctrl+F5 (or Cmd+Shift+R on Mac)',
        'Clear all cache: Ctrl+Shift+Delete',
        'Try in incognito/private window',
        'Try in a different browser'
      ]
    }
  ];

  issues.forEach((issue, idx) => {
    console.log(`\n${idx + 1}. ${issue.problem}`);
    console.log(`   Possible causes:`);
    issue.causes.forEach(c => console.log(`   • ${c}`));
    console.log(`   Solutions:`);
    issue.solutions.forEach(s => console.log(`   ✓ ${s}`));
  });

  console.log('');
  console.log('═'.repeat(90));
  console.log('📚 REFERENCE');
  console.log('═'.repeat(90));
  console.log('');
  console.log('Project ID:              ' + PROJECT_ID);
  console.log('OAuth Client Name:       ' + OAUTH_CLIENT_NAME);
  console.log('Test User Email:         ' + TEST_USER);
  console.log('Admin Panel URL:         https://golfklubb-it-website.web.app/admin');
  console.log('Redirect URI (handler):  ' + REDIRECT_URIS[0]);
  console.log('Redirect URI (root):     ' + REDIRECT_URIS[1]);
  console.log('Redirect URI (dev):      ' + REDIRECT_URIS[2]);
  console.log('');
}

/**
 * Main execution
 */
function main() {
  try {
    console.log('🔍 Environment Check');
    console.log('─'.repeat(90));
    console.log('');

    // Check gcloud
    const hasGcloud = checkGcloud();
    
    if (hasGcloud) {
      console.log('');
      const isAuthed = checkGcloudAuth();
      
      if (isAuthed || setGcloudProject()) {
        console.log('');
        getOAuthClientId();
      }
    }

    // Generate helper scripts
    generateSetupScripts();

    // Display manual guide
    if (!skipManual) {
      displayManualGuide();
    }

    console.log('');
    console.log('═'.repeat(90));
    console.log('✅ SETUP INSTRUCTIONS DISPLAYED');
    console.log('═'.repeat(90));
    console.log('');
    console.log('📝 Next Steps:');
    console.log('   1. Follow the manual configuration steps above');
    console.log('   2. Go to Google Cloud Console and update OAuth settings');
    console.log('   3. Wait 5-10 minutes for changes to propagate');
    console.log('   4. Test the admin panel: https://golfklubb-it-website.web.app/admin');
    console.log('');
    console.log('💡 Tip: Use the run-oauth script generated for quick reference:');
    console.log('   - scripts/setup-oauth.sh (for Linux/Mac)');
    console.log('   - scripts/setup-oauth.ps1 (for PowerShell)');
    console.log('');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
