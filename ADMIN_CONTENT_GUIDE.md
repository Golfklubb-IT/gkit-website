# Adding Content to Admin Panel

**Status:** You're logged in! Now let's add content.

## Two Ways to Add Content

### Option A: Via Admin Panel (Recommended for Quick Testing)
**Time:** ~10 minutes  
**Difficulty:** Easy (UI-based)  
**Best for:** Testing, quick edits

### Option B: Via Firebase Console (Better for Structure)
**Time:** ~15 minutes  
**Difficulty:** Medium  
**Best for:** Bulk creation, exact control

---

## OPTION A: Add Content via Admin Panel UI

### Step 1: Go to Admin Panel

1. Open: `https://golfklubb-it-website.web.app/admin`
2. You should see your dashboard with three sections:
   - 📄 home
   - 💼 solutions
   - 📱 apps

### Step 2: Add Homepage Content

1. **Click "home" section**
2. **Click "+ New Item" button**
3. **Fill in the form:**

```
Title: Golfklubb-IT - Din IT-Partner for Golfklubber
Tagline: Spesialisert IT-løsninger for golfklubber og idrettslag
Description: Vi tilbyr Google Workspace, integrasjoner, og automatisering for moderne golfklubber
Features: (click + to add)
  - Google Workspace Integration
  - Custom Apps & Automations
  - Cloud Infrastructure
  - Digital Membership Management
CTA Primary: Kontakt oss i dag
CTA Secondary: Se våre løsninger
```

4. **Click "Save"**
5. ✅ Document created!

### Step 3: Add Solutions (4 items)

**Solution 1: Google Workspace**
1. Click "solutions" section
2. Click "+ New Item"
3. Fill in:

```
ID: workspace-business
Name: Google Workspace - Business Edition
Slug: workspace
Category: Produkter
Description: Komplett Google Workspace-løsning for bedrifter og organisasjoner
Details: Inkluderer Gmail, Drive, Docs, Sheets, Meet, Calendar, Sites og mange flere verktøy
Price: Fra 6 USD/bruker/måned
Features: (add each)
  - Gmail med eget domene
  - Ubegrenset lagring i Drive
  - Samarbeid i Docs, Sheets, Slides
  - Video møter med Meet
  - Kalender og oppgavestyring
  - Sikkerhetskopiering og gjenoppretting
  - Admin console for brukerstyring
Image URL: /assets/products/workspace.png
CTA: Kontakt oss for tilbud
Order: 1
Active: true (checkbox)
```

4. Click "Save"

**Solution 2: ClubsiteCMS**
```
ID: clubsite-cms
Name: ClubsiteCMS - Nettstedadministrasjon
Slug: clubsitecms
Category: Produkter
Description: Enkelt og kraftig system for å administrere klubbens nettsted
Details: Drift, vedlikehold og oppdatering av klubbnettsider med minimal teknisk kompetanse
Price: Kontakt oss
Features:
  - Drag-and-drop side builder
  - Automatisk SSL-sertifikat
  - Responsiv design
  - SEO-optimalisert
  - Integrasjon med medlemsregister
  - Nyhetsarkiv og blogg
  - Kontaktskjema og booking
Image URL: /assets/products/clubsite.png
CTA: Be om demo
Order: 2
Active: true
```

**Solution 3: GolfBox**
```
ID: golfbox-automation
Name: GolfBox - Automatisering & Integrasjon
Slug: golfbox
Category: Produkter
Description: Automatiser GolfBox med Google Workspace og andre systemer
Details: Sveiser sammen dine golfklubbs systemer med kraftige automatiseringer
Price: Fra 2000 NOK/måned
Features:
  - Automatisk booking av tider
  - Synkronisering med Google Calendar
  - Medlemslister til Google Groups
  - Fakturaering automatisert
  - Rapportgenerering
  - Webhook integrasjoner
  - Custom API tilgang
Image URL: /assets/products/golfbox.png
CTA: Se priser
Order: 3
Active: true
```

**Solution 4: Digital Signage**
```
ID: digital-signage
Name: Digital Skilting - Info Display System
Slug: signage
Category: Produkter
Description: Digitale skjermer for klubbhuset - lister, meldinger, resultater
Details: Vis viktig informasjon på skjermer rundt klubben - oppdateres automatisk
Price: Fra 5000 NOK
Features:
  - Enkel admin grensesnitt
  - Sanntid oppdateringer
  - Støttelse for foto og video
  - Værvarsel og nyheter
  - Turneringsresultater (live)
  - Åpningstider og beskjeder
  - Statistikk og rapporter
Image URL: /assets/products/signage.png
CTA: Forespørsel
Order: 4
Active: true
```

### Step 4: Add Apps (6 items)

**App 1: Søknadsportalen**
```
ID: soknadsportalen
Name: Søknadsportalen
Slug: soknadsportalen
Category: Apps
Description: Digitale søknadsskjemaer for klubben - medlemskap, tilskudd, arrangementer
URL: https://apps.golfklubb-it.no/soknadsportalen
Features:
  - Fleksible skjemaer
  - Integrasjon med medlemsregister
  - Automatisk notifikasjoner
  - Signeringsløsning
  - PDF-export
Icon: form
Order: 1
Active: true
```

**App 2: GolfTeam Time**
```
ID: golfteam-time
Name: GolfTeam Time
Slug: golfteam-time
Category: Apps
Description: Lag og turnerings-administrasjon - lag, spill, statistikk
URL: https://apps.golfklubb-it.no/golfteam
Features:
  - Lagadministrasjon
  - Turneringssystem
  - Live-scoring
  - Lederstavle
  - Statistikk og analyser
Icon: trophy
Order: 2
Active: true
```

**App 3: Frivillig Kalender**
```
ID: frivillig-kalender
Name: Frivillig Kalender
Slug: frivillig-kalender
Category: Apps
Description: Koordinering av frivilliger - oppgaver, tidsslot, påmelding
URL: https://apps.golfklubb-it.no/frivillig
Features:
  - Oppgavelister
  - Påmelding til tidsslot
  - Automatiske påminnelser
  - Oversikt over ressurser
  - Rapporter
Icon: calendar
Order: 3
Active: true
```

**App 4: AI File Analyzer**
```
ID: ai-file-analyzer
Name: AI File Analyzer
Slug: ai-file-analyzer
Category: Apps
Description: Intelligentanalyse av dokumenter - OCR, tekst-gjenkjenning, klassifisering
URL: https://apps.golfklubb-it.no/ai-analyzer
Features:
  - OCR og tekstgjenkjenning
  - Dokumentklassifisering
  - Automatisk indeksering
  - Søk i dokumenter
  - Batch-prosessering
Icon: brain
Order: 4
Active: true
```

**App 5: Golfbil-Kontroll**
```
ID: golfbilkontroll
Name: Golfbil-Kontroll
Slug: golfbilkontroll
Category: Apps
Description: Administrasjon av golfbiler - booking, vedlikehold, kostnader
URL: https://apps.golfklubb-it.no/golfbil
Features:
  - Billeting og booking
  - Vedlikeholdsplan
  - Kostnadsoppfølging
  - Brukerhistorie
  - Alerts og varsler
Icon: car
Order: 5
Active: true
```

**App 6: Booking Kalender**
```
ID: booking-kalender
Name: Booking Kalender
Slug: booking-kalender
Category: Apps
Description: Enkel booking av ressurser - baner, rom, utstyr, instruktører
URL: https://apps.golfklubb-it.no/booking
Features:
  - Kalender-basert booking
  - Ressurs-styring
  - Automatisk konfirmasjoner
  - Betalingsintegrasjon
  - API for innbygging
Icon: calendar-check
Order: 6
Active: true
```

---

## OPTION B: Add Content via Firebase Console

### Step 1: Go to Firestore

1. Open: `https://console.firebase.google.com/project/golfklubb-it-website/firestore`
2. You should see three collections:
   - home
   - solutions
   - apps

### Step 2: Add Documents

1. Click collection name
2. Click "+ Add document"
3. Set document ID (e.g., "homepage", "workspace-business")
4. Add fields one by one
5. Click "Save"

---

## ✅ Verification

After adding content:

1. **Go to admin panel:** `https://golfklubb-it-website.web.app/admin`
2. **Reload the page**
3. **You should see:**
   - ✅ home: 1 document
   - ✅ solutions: 4 documents
   - ✅ apps: 6 documents

---

## 🧪 Testing CRUD Operations

Once content is added, test:

### Create
1. Click "+ New Item" in any collection
2. Add data and click "Save"
3. ✅ Document appears in list

### Read
1. Content should load automatically on admin panel
2. ✅ All items visible

### Update
1. Click any item
2. Edit the content
3. Click "Save"
4. ✅ Changes saved to Firestore

### Delete
1. Click any item
2. Click "Delete" button
3. Confirm deletion
4. ✅ Document removed

---

## Next Steps After Content is Added

1. ✅ Verify content loads in admin panel
2. ✅ Test CRUD operations
3. ⏳ Set up GitHub Actions for CI/CD
4. ⏳ Display content on main website
5. ⏳ Production deployment checklist

**Total time to complete Option A:** ~10 minutes
