# Automatisering

Automatiserte workflows og prosesser for GKIT Website.

## GitHub Actions

### Automatisk deployment

Hver gang kode pushes til `main`, deployes den automatisk til Firebase Hosting.

**Workflow-fil**: `.github/workflows/deploy.yml`

```yaml
name: Deploy to Firebase Hosting

on:
  push:
    branches:
      - main

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy to Firebase
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          channelId: live
          projectId: golfklubb-it-website
```

### Preview Deploys

Automatiske preview-URLs for Pull Requests:

```yaml
name: Preview Deploy

on:
  pull_request:
    branches:
      - main

jobs:
  preview:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm install
      - run: npm run build
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          projectId: golfklubb-it-website
```

## Firebase Functions Triggers

### Scheduled Functions

Automatiske oppgaver som kjører på schedule:

```typescript
import { pubsub } from 'firebase-functions';

// Kjører hver natt kl 02:00
export const dailyCleanup = pubsub
  .schedule('0 2 * * *')
  .timeZone('Europe/Oslo')
  .onRun(async (context) => {
    // Cleanup-logikk her
    console.log('Running daily cleanup');
  });
```

### Database Triggers

Automatiske reaksjoner på Firestore-endringer:

```typescript
import { firestore } from 'firebase-functions';

// Når nytt kontaktskjema lagres
export const onContactCreated = firestore
  .document('contacts/{contactId}')
  .onCreate(async (snap, context) => {
    const contact = snap.data();
    
    // Send notifikasjon
    await sendEmailNotification(contact);
    
    // Logg til analytics
    await logToAnalytics('contact_created', contact);
  });
```

### HTTP Triggers

API-endepunkter som kan kalles eksternt:

```typescript
import { https } from 'firebase-functions';

export const api = https.onRequest((req, res) => {
  res.json({ status: 'ok' });
});
```

## Dependabot

Automatisk oppdatering av avhengigheter via GitHub Dependabot.

**Konfigurasjon**: `.github/dependabot.yml`

```yaml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    open-pull-requests-limit: 10

  - package-ecosystem: "npm"
    directory: "/functions"
    schedule:
      interval: "weekly"
```

## Pre-commit Hooks

Automatisk kjøring av sjekker før commit via Husky.

**Installasjon**:

```bash
npm install --save-dev husky
npx husky install
```

**Hook-konfigurasjon**: `.husky/pre-commit`

```bash
#!/bin/sh
npm run lint
npm run type-check
```

## Automatisk formatering

Prettier for automatisk kodeformatering.

**Konfigurasjon**: `.prettierrc`

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

**Format ved lagring** (VS Code):

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

## Automatisk testing

Jest for automatisk testing (når implementert):

```bash
npm test
```

**CI/CD test-workflow**:

```yaml
- name: Run tests
  run: npm test
```

## Performance Monitoring

Automatisk performance-monitoring via Firebase:

```typescript
import { getPerformance } from 'firebase/performance';

const perf = getPerformance();
// Automatisk tracking av page loads, API calls, etc.
```

## Error Tracking

Automatisk error tracking (kan implementeres med Sentry):

```typescript
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: "your-sentry-dsn",
  integrations: [new Sentry.BrowserTracing()],
  tracesSampleRate: 1.0,
});
```

## Backup Automation

Automatisk backup av Firestore (kan settes opp):

```bash
# Scheduled backup via gcloud
gcloud firestore export gs://backup-bucket/$(date +%Y%m%d)
```

## Neste steg

Les mer om [Brukerhåndbok](../guides/user-guide.md) for hvordan bruke systemet.
