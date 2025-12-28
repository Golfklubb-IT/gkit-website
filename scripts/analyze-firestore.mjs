#!/usr/bin/env node

/**
 * Analyze Firestore Documents
 * Shows all properties across all collections
 */

const PROJECT_ID = 'golfklubb-it-website';
const API_KEY = process.env.FIREBASE_API_KEY;

async function fetchDocument(collectionName, documentId) {
  const url = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/${collectionName}/${documentId}?key=${API_KEY}`;
  
  try {
    const response = await fetch(url);
    if (response.ok) {
      const doc = await response.json();
      return doc.fields || {};
    }
    return {};
  } catch (error) {
    console.error(`Error fetching ${collectionName}/${documentId}:`, error.message);
    return {};
  }
}

function formatValue(firestoreValue) {
  if (firestoreValue.stringValue) return `"${firestoreValue.stringValue.substring(0, 50)}..."`;
  if (firestoreValue.integerValue) return firestoreValue.integerValue;
  if (firestoreValue.doubleValue) return firestoreValue.doubleValue;
  if (firestoreValue.booleanValue) return firestoreValue.booleanValue;
  if (firestoreValue.arrayValue) {
    const count = firestoreValue.arrayValue.values?.length || 0;
    return `[Array: ${count} items]`;
  }
  if (firestoreValue.mapValue) {
    const keys = Object.keys(firestoreValue.mapValue.fields || {});
    return `{Object: ${keys.length} keys}`;
  }
  return 'unknown';
}

async function main() {
  console.log('\n╔════════════════════════════════════════════════════════════╗');
  console.log('║          FIRESTORE DOCUMENT ANALYSIS                       ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');

  if (!API_KEY) {
    console.log('⚠️  FIREBASE_API_KEY not set. Please run:');
    console.log('   $env:FIREBASE_API_KEY = "AIzaSyA81DXrTztXQz9eYHeSysneh1fwAzC_GRc"\n');
    process.exit(1);
  }

  const expectedDocs = {
    home: ['homepage'],
    solutions: ['workspace-business', 'clubsite-cms', 'golfbox-automation', 'digital-signage'],
    apps: ['soknadsportalen', 'golfteam-time', 'frivillig-kalender', 'ai-file-analyzer', 'golfbilkontroll', 'booking-kalender']
  };

  const allProperties = {};

  // Fetch all documents and collect properties
  for (const [collectionName, docIds] of Object.entries(expectedDocs)) {
    console.log(`\n📁 ${collectionName.toUpperCase()} COLLECTION`);
    console.log('─'.repeat(60));

    allProperties[collectionName] = {};

    for (const docId of docIds) {
      const fields = await fetchDocument(collectionName, docId);
      
      console.log(`\n  📄 ${docId}`);
      
      const propertyNames = Object.keys(fields).sort();
      
      for (const propName of propertyNames) {
        const value = fields[propName];
        const type = Object.keys(value)[0];
        const displayValue = formatValue(value);
        
        console.log(`     • ${propName}`);
        console.log(`       Type: ${type.replace('Value', '')}`);
        console.log(`       Sample: ${displayValue}`);

        if (!allProperties[collectionName][propName]) {
          allProperties[collectionName][propName] = {
            type: type.replace('Value', ''),
            collections: new Set()
          };
        }
        allProperties[collectionName][propName].collections.add(docId);
      }
    }
  }

  // Summary
  console.log('\n\n╔════════════════════════════════════════════════════════════╗');
  console.log('║                   PROPERTY SUMMARY                         ║');
  console.log('╚════════════════════════════════════════════════════════════╝\n');

  for (const [collectionName, properties] of Object.entries(allProperties)) {
    const propList = Object.entries(properties)
      .map(([name, info]) => `${name} (${info.type})`)
      .join('\n                    ');
    
    console.log(`${collectionName}:`);
    console.log(`                    ${propList}\n`);
  }

  console.log('Total properties found:');
  let total = 0;
  for (const props of Object.values(allProperties)) {
    total += Object.keys(props).length;
  }
  console.log(`  ${total} unique properties across all documents\n`);
}

main();
