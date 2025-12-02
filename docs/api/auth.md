# Autentisering

Autentisering og autorisasjon i GKIT Website.

## Firebase Authentication

GKIT Website bruker Firebase Authentication for sikkerhet.

### Støttede metoder

Per nå er autentisering ikke implementert for offentlige brukere, men kan enkelt legges til:

- Email/Password
- Google Sign-In
- Microsoft (Azure AD)
- Anonymous

## Firestore Security Rules

Sikkerhetsregler er definert i `firestore.rules`.

### Kontaktskjema

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{contactId} {
      // Tillat skriving for alle (offentlig skjema)
      allow create: if true;
      
      // Kun autentiserte admins kan lese
      allow read: if request.auth != null && 
                     request.auth.token.admin == true;
      
      // Kun autentiserte admins kan oppdatere
      allow update: if request.auth != null && 
                       request.auth.token.admin == true;
    }
  }
}
```

### Analytics

```javascript
match /analytics/{analyticsId} {
  // Tillat skriving for alle (public analytics)
  allow create: if true;
  
  // Kun autentiserte kan lese
  allow read: if request.auth != null;
}
```

## Admin-tilgang

For å gi admin-tilgang, sett custom claims via Firebase Admin SDK:

```typescript
import { getAuth } from 'firebase-admin/auth';

await getAuth().setCustomUserClaims(uid, { 
  admin: true 
});
```

## API Keys

Firebase API-nøkler er offentlige og trygt å dele i frontend-koden.

Sikkerhet håndteres av:

- Firestore Security Rules
- Firebase Functions autorisasjon
- CORS-konfigurasjon

### Miljøvariabler

For sensitive nøkler (hvis nødvendig i fremtiden):

```bash
# .env.local (ikke commit til git)
VITE_SECRET_KEY=your-secret-key
```

Legg til i `.gitignore`:

```text
.env.local
```

## HTTPS

All kommunikasjon går over HTTPS:

- Firebase Hosting enforcer HTTPS
- Firebase Functions kjører kun over HTTPS
- Lokalt (development) bruker HTTP

## CORS

CORS er konfigurert i Firebase Functions:

```typescript
import * as cors from 'cors';

const corsHandler = cors({
  origin: [
    'https://golfklubb-it-website.web.app',
    'https://golfklubb-it-website.firebaseapp.com',
    'http://localhost:5173'
  ]
});
```

## Best Practices

### Sikkerhet

1. ✅ Aldri commit hemmeligheter til git
2. ✅ Bruk Firestore Security Rules
3. ✅ Valider all input i Functions
4. ✅ Bruk HTTPS everywhere
5. ✅ Implementer rate limiting

### Testing

Test sikkerhetsregler med Firebase Emulator:

```bash
firebase emulators:start --only firestore
```

Kjør sikkerhetsregel-tester:

```bash
npm test
```

## Neste steg

Les mer om [Workflows](../workflows/overview.md) for deployment og CI/CD.
