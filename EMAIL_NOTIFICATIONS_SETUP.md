# E-post Notifikasjoner Setup Guide

## Oversikt
Firebase Cloud Function sender automatisk e-post til `kontakt-oss@golfklubb-it.com` når noen fyller ut kontaktskjemaet.

---

## Steg 1: Opprett Google App Password

1. Gå til [Google Account Security](https://myaccount.google.com/security)
2. Skru på **2-faktor autentisering** (hvis ikke allerede på)
3. Gå til **App passwords** (søk etter "App passwords" i innstillinger)
4. Velg:
   - **App:** Mail
   - **Device:** Other (Custom name) → skriv "Firebase Functions"
5. Klikk **Generate**
6. **Kopier passordet** (16 tegn, f.eks. `abcd efgh ijkl mnop`)

---

## Steg 2: Konfigurer Firebase Functions

### Metode 1: Via Firebase CLI (Anbefalt)

```bash
# Installer dependencies først
cd functions
npm install

# Sett Gmail credentials
firebase functions:config:set gmail.user="kontakt-oss@golfklubb-it.com"
firebase functions:config:set gmail.password="abcd efgh ijkl mnop"

# Verifiser konfigurasjonen
firebase functions:config:get
```

### Metode 2: Via miljøvariabler (lokal testing)

Opprett `.env` i `functions/` mappen:

```
GMAIL_USER=kontakt-oss@golfklubb-it.com
GMAIL_APP_PASSWORD=abcdefghijklmnop
```

---

## Steg 3: Deploy Cloud Function

```bash
# Bygg TypeScript
cd functions
npm run build

# Deploy til Firebase
firebase deploy --only functions
```

---

## Steg 4: Test

1. Gå til nettsiden
2. Fyll ut kontaktskjemaet
3. Sjekk `kontakt-oss@golfklubb-it.com` innboks

---

## E-post Innhold

Når noen sender inn skjema får du:

**Emne:** 🔔 Ny henvendelse fra [Fornavn Etternavn]

**Innhold:**
- Fornavn & Etternavn
- Mobilnummer
- E-postadresse
- GolfBox ID (hvis oppgitt)
- Tidspunkt
- Lead ID (Firebase)

---

## Feilsøking

### "Gmail credentials not configured"
- Sjekk at du har kjørt `firebase functions:config:set`
- Kjør `firebase functions:config:get` for å verifisere

### "Authentication failed"
- Kontroller at App Password er riktig
- Sjekk at 2FA er aktivert på Google-kontoen
- Prøv å generere nytt App Password

### "Error sending email"
- Sjekk Firebase Functions logs: `firebase functions:log`
- Verifiser at Gmail SMTP er tilgjengelig (port 587/465)

---

## Kostnader

✅ **100% Gratis** (innenfor Firebase free tier):
- Firebase Functions: 2 millioner påkallinger/måned gratis
- Gmail SMTP: Gratis via Google Workspace
- Nodemailer: Gratis npm-pakke

---

## Sikkerhet

- App Password er lagret i Firebase Functions config (kryptert)
- Aldri commit `.env` til Git
- Gmail credentials eksponeres ikke til frontend

---

## Vedlikehold

### Endre mottaker-e-post
Rediger `functions/src/index.ts` linje med:
```typescript
to: "kontakt-oss@golfklubb-it.com",
```

### Endre avsender-navn
Rediger `from` feltet:
```typescript
from: `"Golfklubbens IT Website" <${gmailUser}>`,
```

---

## Support

Ved problemer, kjør:
```bash
firebase functions:log --only sendLeadNotification
```

Se også: [Nodemailer Gmail Guide](https://nodemailer.com/usage/using-gmail/)
