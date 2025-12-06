# 📋 Oppgaveliste - Fredag 6. desember 2025

## 🔴 Kritisk - Firebase Functions Deploy (GDPR)

### Problem
Firebase Functions deployment feiler for `europe-west1` (GDPR-compliant region) med permissions-feil.

### Neste steg
1. **Åpne Firebase Console IAM:**
   - https://console.firebase.google.com/project/golfklubb-it-website/settings/iam
   
2. **Gi service account riktige permissions:**
   - Service Account: `186711894198-compute@developer.gserviceaccount.com`
   - Rolle: `Storage Object Viewer` eller `Cloud Functions Developer`
   
3. **Alternativt via Google Cloud Console:**
   - https://console.cloud.google.com/iam-admin/iam?project=golfklubb-it-website
   - Søk etter `186711894198-compute@developer.gserviceaccount.com`
   - Legg til rolle: `roles/storage.objectViewer`

4. **Deploy på nytt etter permissions er gitt:**
   ```bash
   cd c:/Dev/Gkit-ENK/gkit-website
   firebase deploy --only functions
   ```

5. **Verifiser at funksjonene kjører i europe-west1:**
   ```bash
   firebase functions:list
   ```

---

## ✅ Fullført i går

- ✅ Forenklet kontaktskjema (Fornavn, Etternavn, Mobil, E-post, GolfBox ID)
- ✅ Rebrand: "GKIT" → "Golfklubbens IT" overalt
- ✅ Firebase Cloud Function opprettet for e-postvarsling
- ✅ Nodemailer + Gmail SMTP konfigurert
- ✅ Gmail credentials satt (app password: `cknaueso trvicrat`)
- ✅ Region endret fra `us-central1` (USA) → `europe-west1` (GDPR)
- ✅ HTML mockup opprettet (`CONTACT_PAGE_MOCKUP.html`)
- ✅ Dokumentasjonsrutine etablert (`.github/DOCS-UPDATE-CHECKLIST.md`)

---

## 📝 Status nå

**Funksjonalitet klar:**
- Kontaktskjema samler data i Firestore
- Cloud Function skal sende e-post til `kontakt-oss@golfklubb-it.com`
- GDPR-compliant (europe-west1)

**Blokkert av:**
- Google Cloud Storage permissions for compute service account

---

## 🔧 Hvis permissions-problemet fortsetter

**Plan B - Bruk .env fil i stedet:**

1. Opprett `functions/.env`:
   ```
   GMAIL_USER=kontakt-oss@golfklubb-it.com
   GMAIL_APP_PASSWORD=cknaueso trvicrat
   ```

2. Oppdater `functions/src/index.ts` til å bruke `.env` i stedet for `functions.config()`

3. Deploy med dotenv (moderne metode, ikke deprecated)

---

## 📚 Dokumentasjon

- `EMAIL_NOTIFICATIONS_SETUP.md` - Guide for e-postvarsling
- `CONTACT_PAGE_MOCKUP.html` - Design-preview av kontaktside
- `.github/DOCS-UPDATE-CHECKLIST.md` - Dokumentasjonsrutine

---

## 🚀 Når alt er ferdig

**Test e-postvarsling:**
1. Gå til nettsiden
2. Fyll ut kontaktskjemaet
3. Sjekk `kontakt-oss@golfklubb-it.com` for varsel-e-post

**Oppdater dokumentasjon:**
1. Legg til "Hva ble gjort" i `docs/index.md`
2. Kjør `mkdocs gh-deploy` for å publisere docs
3. Commit og push alt til GitHub

---

## 💡 Tips

- Firebase Console: https://console.firebase.google.com/project/golfklubb-it-website
- Cloud Functions logs: `firebase functions:log`
- Test lokalt: `firebase emulators:start`

---

**Prioritet:** 🔴 Høy - GDPR-compliant e-postvarsling må fungere før produksjon.
