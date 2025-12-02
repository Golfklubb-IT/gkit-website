# Workflow Oversikt

Oversikt over arbeidsflyter og prosesser for GKIT Website.

## Utviklingsworkflow

### 1. Lokal utvikling

```bash
# Start dev-server
npm run dev

# Start Firebase emulator
firebase emulators:start
```

### 2. Implementer endringer

- Opprett ny branch: `git checkout -b feature/ny-funksjon`
- Gjør endringer i koden
- Test lokalt
- Commit: `git commit -m "Beskrivelse"`

### 3. Code review

- Push til GitHub: `git push origin feature/ny-funksjon`
- Opprett Pull Request
- Be om review
- Merge til main når godkjent

### 4. Deployment

```bash
# Build production
npm run build

# Deploy til Firebase
firebase deploy
```

## Git Workflow

### Branch-strategi

- `main` - Produksjon (alltid deploybar)
- `develop` - Utviklingsgren (testing)
- `feature/*` - Feature branches
- `hotfix/*` - Kritiske fikser

### Commit-meldinger

Følg konvensjon:

```text
type(scope): beskrivelse

Eksempler:
feat(contact): legg til e-postvalidering
fix(navbar): rett responsive layout
docs(readme): oppdater installasjonsinstruks
style(button): endre farger på CTA-knapper
```

### Types

- `feat` - Ny funksjonalitet
- `fix` - Bugfix
- `docs` - Dokumentasjon
- `style` - Styling (CSS, UI)
- `refactor` - Koderefaktorering
- `test` - Testing
- `chore` - Vedlikehold

## Build Workflow

### Development Build

```bash
npm run dev
```

- Hot module replacement (HMR)
- Source maps
- Ingen minifisering
- Rask rebuild

### Production Build

```bash
npm run build
```

- Minifisert JavaScript/CSS
- Tree shaking
- Code splitting
- Optimaliserte assets
- Output til `dist/`

### Build-sjekk

```bash
npm run preview
```

Tester production build lokalt.

## Testing Workflow

### Linting

```bash
npm run lint
```

Sjekker kodekvalitet med ESLint.

### Type-sjekk

```bash
npx tsc --noEmit
```

Sjekker TypeScript-typer uten å bygge.

### Firebase Emulator

```bash
firebase emulators:start
```

Tester:

- Firestore lokalt
- Functions lokalt
- Hosting lokalt

## Deployment Workflow

### Manuell deployment

```bash
# 1. Build
npm run build

# 2. Deploy alt
firebase deploy

# Eller deploy kun hosting
firebase deploy --only hosting

# Eller deploy kun functions
firebase deploy --only functions
```

### CI/CD (GitHub Actions)

Automatisk deployment ved push til `main`:

```yaml
# .github/workflows/deploy.yml
name: Deploy to Firebase

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm run build
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
```

## Rollback

Hvis noe går galt:

```bash
# Se deployment-historikk
firebase hosting:channel:list

# Rollback til forrige versjon
firebase hosting:clone <source>:<target>
```

## Monitoring

### Firebase Console

Monitor i Firebase Console:

- Hosting metrics
- Function logs
- Firestore usage
- Performance monitoring

### Google Analytics

Se brukerstatistikk i GA4:

- Sidevisninger
- Brukerflyt
- Konverteringer

## Neste steg

Les mer om [Automatisering](automations.md) for automatiserte workflows.
