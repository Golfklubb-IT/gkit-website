#!/usr/bin/env node
/**
 * Firestore Content Population Script
 * 
 * Automatically populates Firestore collections with initial content
 * using Firebase Admin SDK via application default credentials.
 * 
 * Collections to populate:
 * - home: Homepage hero and feature data
 * - solutions: Product solutions and services
 * - apps: Apps and integrations catalog
 * 
 * Usage:
 *   node scripts/populate-firestore-auto.mjs
 */

import admin from 'firebase-admin';

// Timestamp function
const now = () => new Date().toISOString();

console.log('═'.repeat(90));
console.log('📊 FIRESTORE AUTOMATIC CONTENT POPULATION');
console.log('═'.repeat(90));
console.log(`Started: ${now()}`);
console.log('');

/**
 * Initialize Firebase Admin SDK
 */
function initializeFirebase() {
  try {
    // Check if already initialized
    if (admin.apps.length > 0) {
      console.log('✅ Firebase already initialized');
      return admin.app();
    }

    // Try to use Application Default Credentials
    console.log('🔑 Initializing Firebase Admin SDK...');
    const app = admin.initializeApp({
      projectId: 'golfklubb-it-website'
    });

    console.log('✅ Firebase initialized successfully');
    return app;
  } catch (error) {
    console.error('❌ Failed to initialize Firebase:', error.message);
    console.log('');
    console.log('Troubleshooting:');
    console.log('1. Make sure you are logged in to Firebase CLI:');
    console.log('   firebase login');
    console.log('2. Make sure you have access to the project:');
    console.log('   firebase use golfklubb-it-website');
    console.log('');
    process.exit(1);
  }
}

/**
 * Population data
 */
const collectionsData = {
  home: {
    'homepage': {
      title: 'Golfklubb-IT - Din IT-Partner for Golfklubber',
      tagline: 'Spesialisert IT-løsninger for golfklubber og idrettslag',
      description: 'Vi tilbyr Google Workspace, integrasjoner, og automatisering for moderne golfklubber',
      features: [
        'Google Workspace Integration',
        'Custom Apps & Automations',
        'Cloud Infrastructure',
        'Digital Membership Management'
      ],
      cta_primary: 'Kontakt oss i dag',
      cta_secondary: 'Se våre løsninger',
      created_at: new Date(now()),
      updated_at: new Date(now())
    }
  },

  solutions: {
    'workspace-business': {
      id: 'workspace-business',
      name: 'Google Workspace - Business Edition',
      slug: 'workspace',
      category: 'Produkter',
      description: 'Komplett Google Workspace-løsning for bedrifter og organisasjoner',
      details: 'Inkluderer Gmail, Drive, Docs, Sheets, Meet, Calendar, Sites og mange flere verktøy',
      price: 'Fra 6 USD/bruker/måned',
      features: [
        'Gmail med eget domene',
        'Ubegrenset lagring i Drive',
        'Samarbeid i Docs, Sheets, Slides',
        'Video møter med Meet',
        'Kalender og oppgavestyring',
        'Sikkerhetskopiering og gjenoppretting',
        'Admin console for brukerstyring'
      ],
      image_url: '/assets/products/workspace.png',
      cta: 'Kontakt oss for tilbud',
      order: 1,
      active: true,
      created_at: new Date(now()),
      updated_at: new Date(now())
    },

    'clubsite-cms': {
      id: 'clubsite-cms',
      name: 'ClubsiteCMS - Nettstedadministrasjon',
      slug: 'clubsitecms',
      category: 'Produkter',
      description: 'Enkelt og kraftig system for å administrere klubbens nettsted',
      details: 'Drift, vedlikehold og oppdatering av klubbnettsider med minimal teknisk kompetanse',
      price: 'Kontakt oss',
      features: [
        'Drag-and-drop side builder',
        'Automatisk SSL-sertifikat',
        'Responsiv design',
        'SEO-optimalisert',
        'Integrasjon med medlemsregister',
        'Nyhetsarkiv og blogg',
        'Kontaktskjema og booking'
      ],
      image_url: '/assets/products/clubsite.png',
      cta: 'Be om demo',
      order: 2,
      active: true,
      created_at: new Date(now()),
      updated_at: new Date(now())
    },

    'golfbox-automation': {
      id: 'golfbox-automation',
      name: 'GolfBox - Automatisering & Integrasjon',
      slug: 'golfbox',
      category: 'Produkter',
      description: 'Automatiser GolfBox med Google Workspace og andre systemer',
      details: 'Sveiser sammen dine golfklubbs systemer med kraftige automatiseringer',
      price: 'Fra 2000 NOK/måned',
      features: [
        'Automatisk booking av tider',
        'Synkronisering med Google Calendar',
        'Medlemslister til Google Groups',
        'Fakturaering automatisert',
        'Rapportgenerering',
        'Webhook integrasjoner',
        'Custom API tilgang'
      ],
      image_url: '/assets/products/golfbox.png',
      cta: 'Se priser',
      order: 3,
      active: true,
      created_at: new Date(now()),
      updated_at: new Date(now())
    },

    'digital-signage': {
      id: 'digital-signage',
      name: 'Digital Skilting - Info Display System',
      slug: 'signage',
      category: 'Produkter',
      description: 'Digitale skjermer for klubbhuset - lister, meldinger, resultater',
      details: 'Vis viktig informasjon på skjermer rundt klubben - oppdateres automatisk',
      price: 'Fra 5000 NOK',
      features: [
        'Enkel admin grensesnitt',
        'Sanntid oppdateringer',
        'Støttelse for foto og video',
        'Værvarsel og nyheter',
        'Turneringsresultater (live)',
        'Åpningstider og beskjeder',
        'Statistikk og rapporter'
      ],
      image_url: '/assets/products/signage.png',
      cta: 'Forespørsel',
      order: 4,
      active: true,
      created_at: new Date(now()),
      updated_at: new Date(now())
    }
  },

  apps: {
    'soknadsportalen': {
      id: 'soknadsportalen',
      name: 'Søknadsportalen',
      slug: 'soknadsportalen',
      category: 'Apps',
      description: 'Digitale søknadsskjemaer for klubben - medlemskap, tilskudd, arrangementer',
      url: 'https://apps.golfklubb-it.no/soknadsportalen',
      features: ['Fleksible skjemaer', 'Integrasjon med medlemsregister', 'Automatisk notifikasjoner', 'Signeringsløsning', 'PDF-export'],
      icon: 'form',
      order: 1,
      active: true,
      created_at: new Date(now()),
      updated_at: new Date(now())
    },

    'golfteam-time': {
      id: 'golfteam-time',
      name: 'GolfTeam Time',
      slug: 'golfteam-time',
      category: 'Apps',
      description: 'Lag og turnerings-administrasjon - lag, spill, statistikk',
      url: 'https://apps.golfklubb-it.no/golfteam',
      features: ['Lagadministrasjon', 'Turneringssystem', 'Live-scoring', 'Lederstavle', 'Statistikk og analyser'],
      icon: 'trophy',
      order: 2,
      active: true,
      created_at: new Date(now()),
      updated_at: new Date(now())
    },

    'frivillig-kalender': {
      id: 'frivillig-kalender',
      name: 'Frivillig Kalender',
      slug: 'frivillig-kalender',
      category: 'Apps',
      description: 'Koordinering av frivilliger - oppgaver, tidsslot, påmelding',
      url: 'https://apps.golfklubb-it.no/frivillig',
      features: ['Oppgavelister', 'Påmelding til tidsslot', 'Automatiske påminnelser', 'Oversikt over ressurser', 'Rapporter'],
      icon: 'calendar',
      order: 3,
      active: true,
      created_at: new Date(now()),
      updated_at: new Date(now())
    },

    'ai-file-analyzer': {
      id: 'ai-file-analyzer',
      name: 'AI File Analyzer',
      slug: 'ai-file-analyzer',
      category: 'Apps',
      description: 'Intelligentanalyse av dokumenter - OCR, tekst-gjenkjenning, klassifisering',
      url: 'https://apps.golfklubb-it.no/ai-analyzer',
      features: ['OCR og tekstgjenkjenning', 'Dokumentklassifisering', 'Automatisk indeksering', 'Søk i dokumenter', 'Batch-prosessering'],
      icon: 'brain',
      order: 4,
      active: true,
      created_at: new Date(now()),
      updated_at: new Date(now())
    },

    'golfbilkontroll': {
      id: 'golfbilkontroll',
      name: 'Golfbil-Kontroll',
      slug: 'golfbilkontroll',
      category: 'Apps',
      description: 'Administrasjon av golfbiler - booking, vedlikehold, kostnader',
      url: 'https://apps.golfklubb-it.no/golfbil',
      features: ['Billeting og booking', 'Vedlikeholdsplan', 'Kostnadsoppfølging', 'Brukerhistorie', 'Alerts og varsler'],
      icon: 'car',
      order: 5,
      active: true,
      created_at: new Date(now()),
      updated_at: new Date(now())
    },

    'booking-kalender': {
      id: 'booking-kalender',
      name: 'Booking Kalender',
      slug: 'booking-kalender',
      category: 'Apps',
      description: 'Enkel booking av ressurser - baner, rom, utstyr, instruktører',
      url: 'https://apps.golfklubb-it.no/booking',
      features: ['Kalender-basert booking', 'Ressurs-styring', 'Automatisk konfirmasjoner', 'Betalingsintegrasjon', 'API for innbygging'],
      icon: 'calendar-check',
      order: 6,
      active: true,
      created_at: new Date(now()),
      updated_at: new Date(now())
    }
  }
};

/**
 * Main population function
 */
async function populateCollections() {
  const db = admin.firestore();
  const results = {
    success: [],
    failed: [],
    total: 0
  };

  for (const [collectionName, documents] of Object.entries(collectionsData)) {
    console.log(`📝 Populating "${collectionName}" collection...`);
    console.log('─'.repeat(90));

    for (const [docId, docData] of Object.entries(documents)) {
      results.total++;
      console.log(`  Creating: ${collectionName}/${docId}...`);

      try {
        await db.collection(collectionName).doc(docId).set(docData);
        console.log(`  ✅ Success`);
        results.success.push(`${collectionName}/${docId}`);
      } catch (error) {
        console.log(`  ❌ Failed: ${error.message}`);
        results.failed.push({
          document: `${collectionName}/${docId}`,
          error: error.message
        });
      }
    }
    console.log('');
  }

  return results;
}

/**
 * Display results
 */
function displayResults(results) {
  console.log('═'.repeat(90));
  console.log('📊 POPULATION RESULTS');
  console.log('═'.repeat(90));
  console.log('');

  console.log(`Total Documents: ${results.total}`);
  console.log(`✅ Successful: ${results.success.length}`);
  console.log(`❌ Failed: ${results.failed.length}`);
  console.log('');

  if (results.success.length > 0) {
    console.log('Successfully Created:');
    console.log('─'.repeat(90));
    results.success.forEach(doc => {
      console.log(`  ✓ ${doc}`);
    });
    console.log('');
  }

  if (results.failed.length > 0) {
    console.log('Failed Documents:');
    console.log('─'.repeat(90));
    results.failed.forEach(item => {
      console.log(`  ✗ ${item.document}`);
      console.log(`    Error: ${item.error}`);
    });
    console.log('');
  }

  console.log('═'.repeat(90));
  console.log(`Completed: ${now()}`);
  console.log('═'.repeat(90));
  console.log('');

  if (results.failed.length === 0) {
    console.log('🎉 All documents created successfully!');
    console.log('');
    console.log('Next steps:');
    console.log('1. Go to admin panel: https://golfklubb-it-website.web.app/admin');
    console.log('2. Verify content loaded in each collection');
    console.log('3. Edit content as needed');
    console.log('4. Test CRUD operations');
  } else {
    console.log('⚠️  Some documents failed. Check errors above.');
    process.exit(1);
  }
}

/**
 * Main execution
 */
async function main() {
  try {
    initializeFirebase();
    const results = await populateCollections();
    displayResults(results);
    process.exit(0);
  } catch (error) {
    console.error('Fatal error:', error.message);
    process.exit(1);
  }
}

main();
