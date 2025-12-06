# 🚀 Deploy Plan - Lørdag 7. desember 2025

## ✅ FERDIG: IAM Permissions
Service account `186711894198-compute@developer.gserviceaccount.com` har nå **Storage Object Viewer** rollen.

**✅ VERIFISERT:** `firebase deploy --only functions --dry-run` kjørte uten feil! 🎉

---

## 🎯 START HER I MORGEN

### Steg 1: Deploy Functions til europe-west1 (GDPR-compliant)

```bash
cd c:/Dev/Gkit-ENK/gkit-website
firebase deploy --only functions
```

**Forventet output:**
```
✔ functions[europe-west1-sendLeadNotification]: Successful create operation.
✔ functions[europe-west1-submitContactForm]: Successful update operation.
```

⏱️ **Tid:** Ca. 2-3 minutter

---

### Steg 2: Verifiser at functions er i riktig region

```bash
firebase functions:list
```

**✅ SJEKK AT:**
- `sendLeadNotification` → Region: **europe-west1**
- `submitContactForm` → Region: **europe-west1**

**❌ INGEN SKAL VÆRE I:** us-central1

---

### Steg 3: Test email-notifikasjoner

#### A. Gå til nettsiden
https://golfklubb-it-website.web.app

#### B. Fyll ut kontaktskjemaet
- **Fornavn:** Test
- **Etternavn:** Testesen
- **Mobil:** 98765432
- **E-post:** din-epost@golfklubb-it.com
- **GolfBox ID:** (valgfritt - la stå tomt)

#### C. Send skjemaet
Klikk "Send melding" knappen.

#### D. Sjekk inbox
Åpne `kontakt-oss@golfklubb-it.com` og sjekk for ny e-post.

**✅ Forventet e-post:**
```
Subject: Ny henvendelse fra Golfklubbens IT nettside

Innhold:
- Fornavn: Test
- Etternavn: Testesen
- Mobil: 98765432
- E-post: din-epost@golfklubb-it.com
- GolfBox ID: (tomt)
- Tidspunkt: [tidsstempel]
- Lead ID: [auto-generert]
```

---

### Steg 4: Hvis e-post IKKE kommer

#### A. Sjekk Cloud Function logs
```bash
firebase functions:log --only sendLeadNotification --limit 10
```

**Se etter:**
- Error messages
- "Email sent successfully" (success)
- Gmail authentication issues

#### B. Sjekk Firestore
1. Gå til: https://console.firebase.google.com/project/golfklubb-it-website/firestore
2. Åpne `leads` collection
3. Sjekk om test-lead ble lagret med riktig tidsstempel

#### C. Test manuelt trigger
```bash
# Les siste lead ID fra Firestore, deretter:
firebase functions:shell
# I shell:
sendLeadNotification({leadId: 'PASTE_LEAD_ID_HER'})
```

---

### Steg 5: Oppdater dokumentasjon

#### A. Rediger docs
```bash
cd docs
code index.md  # Eller din favoritt editor
```

**Under "Nylige Oppdateringer" seksjonen, legg til:**
```markdown
### Desember 2025
- ✅ **E-post notifikasjoner** - Automatisk varsling når noen fyller ut kontaktskjema
  - GDPR-compliant deployment (europe-west1)
  - Sendes til kontakt-oss@golfklubb-it.com
  - Inneholder alle skjemafelt + tidsstempel
```

#### B. Deploy docs til GitHub Pages
```bash
mkdocs gh-deploy
```

#### C. Commit og push
```bash
cd ..
git add docs/index.md
git commit -m "docs: Add email notifications update"
git push origin master
```

---

## 📊 Success Criteria

✅ Alle disse må være oppfylt:

1. ✅ `firebase functions:list` viser **kun europe-west1** (IKKE us-central1)
2. ✅ Test-epost mottas på `kontakt-oss@golfklubb-it.com`
3. ✅ Lead lagres i Firestore `leads` collection
4. ✅ Ingen errors i `firebase functions:log`
5. ✅ Dokumentasjon oppdatert på https://owe-s.github.io/gkit-website/

---

## ⚠️ Viktige notater

### GDPR Compliance
- Alle functions **MÅ** være i `europe-west1` (Belgia)
- **ALDRI** deploy til `us-central1` (USA)

### Gmail Credentials
Allerede konfigurert:
```bash
gmail.user = "kontakt-oss@golfklubb-it.com"
gmail.password = "cknaueso trvicrat"
```

### Service Account
`186711894198-compute@developer.gserviceaccount.com` har nå:
- ✅ Editor role
- ✅ Storage Object Viewer role

---

## 🔮 Fremtidige oppgraderinger (Valgfritt)

Firebase varsler om deprecation av `functions.config()` i mars 2026.

### Migrering til .env (Modern metode)

**Når du har tid senere:**

1. Opprett `functions/.env`:
```env
GMAIL_USER=kontakt-oss@golfklubb-it.com
GMAIL_APP_PASSWORD=cknauesotrvicrat
```

2. Oppdater `functions/src/index.ts`:
```typescript
// Erstatt:
const gmailUser = functions.config().gmail.user;
const gmailPassword = functions.config().gmail.password;

// Med:
const gmailUser = process.env.GMAIL_USER;
const gmailPassword = process.env.GMAIL_APP_PASSWORD;
```

3. Legg til i `functions/.gitignore`:
```
.env
```

4. Deploy på nytt:
```bash
firebase deploy --only functions
```

**Les mer:** https://firebase.google.com/docs/functions/config-env#migrate-to-dotenv

---

## 🎉 Gratulerer!

Når alle steg er fullført, har du:
- ✅ GDPR-compliant email notifications
- ✅ Automatisk lead capture og varsling
- ✅ Clean, moderne kontaktskjema
- ✅ Full rebrand til "Golfklubbens IT"
- ✅ Oppdatert dokumentasjon

**Nyt en velfortjent kaffe! ☕**
