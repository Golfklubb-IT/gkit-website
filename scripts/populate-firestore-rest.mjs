#!/usr/bin/env node

/**
 * Populate Firestore collections using Firebase REST API
 * 
 * This script uses the Firestore REST API to add documents without requiring
 * service account credentials. It works with Firebase authentication.
 * 
 * Usage:
 *   node scripts/populate-firestore-rest.mjs
 * 
 * Requirements:
 *   - Node.js 18+
 *   - firebase-admin (for REST API calls)
 *   - Valid Firebase project with Firestore enabled
 * 
 * Data Populates:
 *   - 1 home document (homepage hero data)
 *   - 4 solution documents (workspace, clubsite, golfbox, signage)
 *   - 6 app documents (soknadsportalen, golfteam-time, etc.)
 * 
 * Security:
 *   - Relies on Firestore security rules
 *   - Only admin user (owe-admin@golfklubb-it.com) can write
 *   - Uses standard Firestore authentication
 */

import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ============================================================================
// CONFIGURATION
// ============================================================================

const CONFIG = {
  projectId: 'golfklubb-it-website',
  firestoreUrl: 'https://firestore.googleapis.com/v1/projects',
  apiKey: process.env.FIREBASE_API_KEY || 'AIzaSyBcFV6WnvKJ8RCn4wZnMtmTT6EV5X_example', // ⚠️ Replace with actual API key
};

// ============================================================================
// FIRESTORE DATA SCHEMA
// ============================================================================

const FIRESTORE_DATA = {
  home: [
    {
      documentId: 'homepage',
      fields: {
        title: { stringValue: 'Golfklubb-IT - Din IT-Partner for Golfklubber' },
        tagline: { stringValue: 'Spesialisert IT-løsninger for golfklubber og idrettslag' },
        description: { stringValue: 'Vi tilbyr Google Workspace, integrasjoner, og automatisering for moderne golfklubber' },
        features: {
          arrayValue: {
            values: [
              { stringValue: 'Google Workspace Integration' },
              { stringValue: 'Custom Apps & Automations' },
              { stringValue: 'Cloud Infrastructure' },
              { stringValue: 'Digital Membership Management' },
            ],
          },
        },
        ctaPrimary: { stringValue: 'Kontakt oss i dag' },
        ctaSecondary: { stringValue: 'Se våre løsninger' },
        updatedAt: { timestampValue: new Date().toISOString() },
      },
    },
  ],

  solutions: [
    {
      documentId: 'workspace-business',
      fields: {
        name: { stringValue: 'Google Workspace - Business Edition' },
        slug: { stringValue: 'workspace' },
        category: { stringValue: 'Produkter' },
        description: { stringValue: 'Komplett Google Workspace-løsning for bedrifter og organisasjoner' },
        details: { stringValue: 'Inkluderer Gmail, Drive, Docs, Sheets, Meet, Calendar, Sites og mange flere verktøy' },
        price: { stringValue: 'Fra 6 USD/bruker/måned' },
        features: {
          arrayValue: {
            values: [
              { stringValue: 'Gmail med eget domene' },
              { stringValue: 'Ubegrenset lagring i Drive' },
              { stringValue: 'Samarbeid i Docs, Sheets, Slides' },
              { stringValue: 'Video møter med Meet' },
              { stringValue: 'Kalender og oppgavestyring' },
              { stringValue: 'Sikkerhetskopiering og gjenoppretting' },
              { stringValue: 'Admin console for brukerstyring' },
            ],
          },
        },
        imageUrl: { stringValue: '/assets/products/workspace.png' },
        cta: { stringValue: 'Kontakt oss for tilbud' },
        order: { integerValue: 1 },
        active: { booleanValue: true },
        updatedAt: { timestampValue: new Date().toISOString() },
      },
    },
    {
      documentId: 'clubsite-cms',
      fields: {
        name: { stringValue: 'ClubsiteCMS - Nettstedadministrasjon' },
        slug: { stringValue: 'clubsitecms' },
        category: { stringValue: 'Produkter' },
        description: { stringValue: 'Enkelt og kraftig system for å administrere klubbens nettsted' },
        details: { stringValue: 'Drift, vedlikehold og oppdatering av klubbnettsider med minimal teknisk kompetanse' },
        price: { stringValue: 'Kontakt oss' },
        features: {
          arrayValue: {
            values: [
              { stringValue: 'Drag-and-drop side builder' },
              { stringValue: 'Automatisk SSL-sertifikat' },
              { stringValue: 'Responsiv design' },
              { stringValue: 'SEO-optimalisert' },
              { stringValue: 'Integrasjon med medlemsregister' },
              { stringValue: 'Nyhetsarkiv og blogg' },
              { stringValue: 'Kontaktskjema og booking' },
            ],
          },
        },
        imageUrl: { stringValue: '/assets/products/clubsite.png' },
        cta: { stringValue: 'Be om demo' },
        order: { integerValue: 2 },
        active: { booleanValue: true },
        updatedAt: { timestampValue: new Date().toISOString() },
      },
    },
    {
      documentId: 'golfbox-automation',
      fields: {
        name: { stringValue: 'GolfBox - Automatisering & Integrasjon' },
        slug: { stringValue: 'golfbox' },
        category: { stringValue: 'Produkter' },
        description: { stringValue: 'Automatiser GolfBox med Google Workspace og andre systemer' },
        details: { stringValue: 'Sveiser sammen dine golfklubbs systemer med kraftige automatiseringer' },
        price: { stringValue: 'Fra 2000 NOK/måned' },
        features: {
          arrayValue: {
            values: [
              { stringValue: 'Automatisk booking av tider' },
              { stringValue: 'Synkronisering med Google Calendar' },
              { stringValue: 'Medlemslister til Google Groups' },
              { stringValue: 'Fakturaering automatisert' },
              { stringValue: 'Rapportgenerering' },
              { stringValue: 'Webhook integrasjoner' },
              { stringValue: 'Custom API tilgang' },
            ],
          },
        },
        imageUrl: { stringValue: '/assets/products/golfbox.png' },
        cta: { stringValue: 'Se priser' },
        order: { integerValue: 3 },
        active: { booleanValue: true },
        updatedAt: { timestampValue: new Date().toISOString() },
      },
    },
    {
      documentId: 'digital-signage',
      fields: {
        name: { stringValue: 'Digital Skilting - Info Display System' },
        slug: { stringValue: 'signage' },
        category: { stringValue: 'Produkter' },
        description: { stringValue: 'Digitale skjermer for klubbhuset - lister, meldinger, resultater' },
        details: { stringValue: 'Vis viktig informasjon på skjermer rundt klubben - oppdateres automatisk' },
        price: { stringValue: 'Fra 5000 NOK' },
        features: {
          arrayValue: {
            values: [
              { stringValue: 'Enkel admin grensesnitt' },
              { stringValue: 'Sanntid oppdateringer' },
              { stringValue: 'Støttelse for foto og video' },
              { stringValue: 'Værvarsel og nyheter' },
              { stringValue: 'Turneringsresultater (live)' },
              { stringValue: 'Åpningstider og beskjeder' },
              { stringValue: 'Statistikk og rapporter' },
            ],
          },
        },
        imageUrl: { stringValue: '/assets/products/signage.png' },
        cta: { stringValue: 'Forespørsel' },
        order: { integerValue: 4 },
        active: { booleanValue: true },
        updatedAt: { timestampValue: new Date().toISOString() },
      },
    },
  ],

  apps: [
    {
      documentId: 'soknadsportalen',
      fields: {
        name: { stringValue: 'Søknadsportalen' },
        slug: { stringValue: 'soknadsportalen' },
        category: { stringValue: 'Apps' },
        description: { stringValue: 'Digitale søknadsskjemaer for klubben - medlemskap, tilskudd, arrangementer' },
        url: { stringValue: 'https://apps.golfklubb-it.no/soknadsportalen' },
        features: {
          arrayValue: {
            values: [
              { stringValue: 'Fleksible skjemaer' },
              { stringValue: 'Integrasjon med medlemsregister' },
              { stringValue: 'Automatisk notifikasjoner' },
              { stringValue: 'Signeringsløsning' },
              { stringValue: 'PDF-export' },
            ],
          },
        },
        icon: { stringValue: 'form' },
        order: { integerValue: 1 },
        active: { booleanValue: true },
        updatedAt: { timestampValue: new Date().toISOString() },
      },
    },
    {
      documentId: 'golfteam-time',
      fields: {
        name: { stringValue: 'GolfTeam Time' },
        slug: { stringValue: 'golfteam-time' },
        category: { stringValue: 'Apps' },
        description: { stringValue: 'Lag og turnerings-administrasjon - lag, spill, statistikk' },
        url: { stringValue: 'https://apps.golfklubb-it.no/golfteam' },
        features: {
          arrayValue: {
            values: [
              { stringValue: 'Lagadministrasjon' },
              { stringValue: 'Turneringssystem' },
              { stringValue: 'Live-scoring' },
              { stringValue: 'Lederstavle' },
              { stringValue: 'Statistikk og analyser' },
            ],
          },
        },
        icon: { stringValue: 'trophy' },
        order: { integerValue: 2 },
        active: { booleanValue: true },
        updatedAt: { timestampValue: new Date().toISOString() },
      },
    },
    {
      documentId: 'frivillig-kalender',
      fields: {
        name: { stringValue: 'Frivillig Kalender' },
        slug: { stringValue: 'frivillig-kalender' },
        category: { stringValue: 'Apps' },
        description: { stringValue: 'Koordinering av frivilliger - oppgaver, tidsslot, påmelding' },
        url: { stringValue: 'https://apps.golfklubb-it.no/frivillig' },
        features: {
          arrayValue: {
            values: [
              { stringValue: 'Oppgavelister' },
              { stringValue: 'Påmelding til tidsslot' },
              { stringValue: 'Automatiske påminnelser' },
              { stringValue: 'Oversikt over ressurser' },
              { stringValue: 'Rapporter' },
            ],
          },
        },
        icon: { stringValue: 'calendar' },
        order: { integerValue: 3 },
        active: { booleanValue: true },
        updatedAt: { timestampValue: new Date().toISOString() },
      },
    },
    {
      documentId: 'ai-file-analyzer',
      fields: {
        name: { stringValue: 'AI File Analyzer' },
        slug: { stringValue: 'ai-file-analyzer' },
        category: { stringValue: 'Apps' },
        description: { stringValue: 'Intelligentanalyse av dokumenter - OCR, tekst-gjenkjenning, klassifisering' },
        url: { stringValue: 'https://apps.golfklubb-it.no/ai-analyzer' },
        features: {
          arrayValue: {
            values: [
              { stringValue: 'OCR og tekstgjenkjenning' },
              { stringValue: 'Dokumentklassifisering' },
              { stringValue: 'Automatisk indeksering' },
              { stringValue: 'Søk i dokumenter' },
              { stringValue: 'Batch-prosessering' },
            ],
          },
        },
        icon: { stringValue: 'brain' },
        order: { integerValue: 4 },
        active: { booleanValue: true },
        updatedAt: { timestampValue: new Date().toISOString() },
      },
    },
    {
      documentId: 'golfbilkontroll',
      fields: {
        name: { stringValue: 'Golfbil-Kontroll' },
        slug: { stringValue: 'golfbilkontroll' },
        category: { stringValue: 'Apps' },
        description: { stringValue: 'Administrasjon av golfbiler - booking, vedlikehold, kostnader' },
        url: { stringValue: 'https://apps.golfklubb-it.no/golfbil' },
        features: {
          arrayValue: {
            values: [
              { stringValue: 'Billeting og booking' },
              { stringValue: 'Vedlikeholdsplan' },
              { stringValue: 'Kostnadsoppfølging' },
              { stringValue: 'Brukerhistorie' },
              { stringValue: 'Alerts og varsler' },
            ],
          },
        },
        icon: { stringValue: 'car' },
        order: { integerValue: 5 },
        active: { booleanValue: true },
        updatedAt: { timestampValue: new Date().toISOString() },
      },
    },
    {
      documentId: 'booking-kalender',
      fields: {
        name: { stringValue: 'Booking Kalender' },
        slug: { stringValue: 'booking-kalender' },
        category: { stringValue: 'Apps' },
        description: { stringValue: 'Enkel booking av ressurser - baner, rom, utstyr, instruktører' },
        url: { stringValue: 'https://apps.golfklubb-it.no/booking' },
        features: {
          arrayValue: {
            values: [
              { stringValue: 'Kalender-basert booking' },
              { stringValue: 'Ressurs-styring' },
              { stringValue: 'Automatisk konfirmasjoner' },
              { stringValue: 'Betalingsintegrasjon' },
              { stringValue: 'API for innbygging' },
            ],
          },
        },
        icon: { stringValue: 'calendar-check' },
        order: { integerValue: 6 },
        active: { booleanValue: true },
        updatedAt: { timestampValue: new Date().toISOString() },
      },
    },
  ],
};

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Convert JavaScript types to Firestore JSON format
 */
function toFirestoreValue(value) {
  if (typeof value === 'string') return { stringValue: value };
  if (typeof value === 'number') {
    return Number.isInteger(value)
      ? { integerValue: value }
      : { doubleValue: value };
  }
  if (typeof value === 'boolean') return { booleanValue: value };
  if (value instanceof Date) return { timestampValue: value.toISOString() };
  if (Array.isArray(value)) {
    return {
      arrayValue: {
        values: value.map(toFirestoreValue),
      },
    };
  }
  if (value && typeof value === 'object') {
    return {
      mapValue: {
        fields: Object.entries(value).reduce((acc, [k, v]) => {
          acc[k] = toFirestoreValue(v);
          return acc;
        }, {}),
      },
    };
  }
  return { nullValue: null };
}

/**
 * Create a Firestore document via REST API
 */
async function createFirestoreDocument(projectId, collection, documentId, fields) {
  const url = `${CONFIG.firestoreUrl}/${projectId}/databases/(default)/documents/${collection}/${documentId}?key=${CONFIG.apiKey}`;

  const body = {
    fields: Object.entries(fields).reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {}),
  };

  try {
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`HTTP ${response.status}: ${errorData.error?.message || 'Unknown error'}`);
    }

    return await response.json();
  } catch (error) {
    throw new Error(`Failed to create document ${documentId} in ${collection}: ${error.message}`);
  }
}

/**
 * Populate a collection with documents
 */
async function populateCollection(projectId, collectionName, documents) {
  console.log(`\n📝 Populating "${collectionName}" collection...`);

  let successCount = 0;
  let failureCount = 0;

  for (const doc of documents) {
    try {
      await createFirestoreDocument(projectId, collectionName, doc.documentId, doc.fields);
      console.log(`   ✅ Created: ${doc.documentId}`);
      successCount++;
    } catch (error) {
      console.error(`   ❌ Failed: ${doc.documentId}`);
      console.error(`      ${error.message}`);
      failureCount++;
    }
  }

  return { successCount, failureCount };
}

/**
 * Main execution
 */
async function main() {
  console.log('\n╔════════════════════════════════════════════════════════════╗');
  console.log('║         FIRESTORE POPULATION VIA REST API                 ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');

  // Check for API key
  if (!CONFIG.apiKey || CONFIG.apiKey.includes('example')) {
    console.error('\n❌ FIREBASE_API_KEY not set!');
    console.error('\nTo use this script, you need your Firebase API key.');
    console.error('\nHow to get your API key:');
    console.error('1. Go to: https://console.firebase.google.com/project/golfklubb-it-website/settings/general');
    console.error('2. Find "Web API Key"');
    console.error('3. Copy the key');
    console.error('4. Run: export FIREBASE_API_KEY="your-api-key"');
    console.error('5. Then run this script again');
    process.exit(1);
  }

  try {
    const results = {};

    // Populate each collection
    for (const [collection, documents] of Object.entries(FIRESTORE_DATA)) {
      results[collection] = await populateCollection(CONFIG.projectId, collection, documents);
    }

    // Summary
    console.log('\n╔════════════════════════════════════════════════════════════╗');
    console.log('║                      SUMMARY                             ║');
    console.log('╚════════════════════════════════════════════════════════════╝\n');

    let totalSuccess = 0;
    let totalFailure = 0;

    for (const [collection, { successCount, failureCount }] of Object.entries(results)) {
      const status = failureCount === 0 ? '✅' : '⚠️';
      console.log(`${status} ${collection}: ${successCount} created, ${failureCount} failed`);
      totalSuccess += successCount;
      totalFailure += failureCount;
    }

    console.log(`\n📊 Total: ${totalSuccess} documents created, ${totalFailure} failed\n`);

    if (totalFailure === 0) {
      console.log('✅ All documents created successfully!');
      console.log('\n📋 Next steps:');
      console.log('1. Go to: https://golfklubb-it-website.web.app/admin');
      console.log('2. Reload the page');
      console.log('3. Verify all content appears');
      console.log('4. Test the CRUD editor\n');
    } else {
      console.log(`⚠️  ${totalFailure} documents failed to create`);
      console.log('Check the error messages above for details.\n');
      process.exit(1);
    }
  } catch (error) {
    console.error('\n❌ Fatal error:', error.message);
    process.exit(1);
  }
}

// Run the script
main().catch(console.error);
