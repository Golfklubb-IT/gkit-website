# Miljø & Konfigurasjon

Oppsett av miljøvariabler og konfigurasjonsfiler for GKIT Website.

## Firebase-konfigurasjon

Firebase-konfigurasjonen finnes i `src/firebase.ts`.

### Produksjon

Produksjonskonfigurasjonen er allerede satt opp for Firebase-prosjektet `golfklubb-it-website`.

```typescript
const firebaseConfig = {
  apiKey: "...",
  authDomain: "golfklubb-it-website.firebaseapp.com",
  projectId: "golfklubb-it-website",
  storageBucket: "golfklubb-it-website.firebasestorage.app",
  messagingSenderId: "...",
  appId: "...",
  measurementId: "..."
};
```

### Lokal utvikling

For lokal utvikling med Firebase Emulator:

1. Start emulatoren:
```bash
firebase emulators:start
```

2. Applikasjonen vil automatisk koble seg til lokal emulator når den kjører.

## Google Analytics

Google Analytics 4 er konfigurert i applikasjonen via `react-ga4`.

Measurement ID er satt i Firebase-konfigurasjonen.

## Vite-konfigurasjon

Vite-konfigurasjonen finnes i `vite.config.ts`:

- Port: 5173 (standard)
- Build output: `dist/`
- TypeScript-støtte aktivert

## TypeScript-konfigurasjon

Prosjektet bruker flere TypeScript-konfigurasjonsfiler:

- `tsconfig.json` - Hovedkonfigurasjon
- `tsconfig.app.json` - App-spesifikk konfigurasjon
- `tsconfig.node.json` - Node-spesifikk konfigurasjon
- `functions/tsconfig.json` - Firebase Functions konfigurasjon

## ESLint-konfigurasjon

ESLint er konfigurert i `eslint.config.js` for kodekvalitet og konsistens.

Kjør linting:
```bash
npm run lint
```

## Firebase Hosting

Hosting-konfigurasjonen finnes i `firebase.json`:

```json
{
  "hosting": {
    "public": "dist",
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

## Firestore-regler

Firestore-sikkerhetsregler finnes i `firestore.rules`.

Test regler lokalt med emulatoren før deployment.

## Neste steg

Les mer om [Arkitekturen](../architecture/index.md) for å forstå hvordan systemet er bygget opp.
