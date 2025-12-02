# Arkitektur Diagrammer

Visuelle representasjoner av GKIT Website arkitekturen.

## Systemdiagram

```
┌─────────────┐
│   Bruker    │
└──────┬──────┘
       │
       │ HTTPS
       ▼
┌─────────────────────┐
│  Firebase Hosting   │
│   (React SPA)       │
└──────┬──────────────┘
       │
       ├────────────┐
       │            │
       ▼            ▼
┌──────────┐  ┌──────────────┐
│Firestore │  │   Firebase   │
│          │  │   Functions  │
└──────────┘  └──────────────┘
       │            │
       └────────────┘
            │
            ▼
     ┌──────────────┐
     │ Google       │
     │ Analytics 4  │
     └──────────────┘
```

## Komponent-hierarki

```
App
├── Navbar
└── Routes
    ├── Home
    ├── Services
    ├── Projects
    ├── About
    ├── Club2026
    ├── Products
    │   ├── ClubsiteCMS
    │   ├── GolfBox
    │   ├── Signage
    │   └── Workspace
    └── Apps
        ├── AIFileAnalyzer
        ├── BookingKalender
        ├── FrivilligKalender
        ├── Golfbilkontroll
        ├── GolfTeamTime
        └── Soknadsportalen
```

## Deployment-flyt

```
┌──────────────┐
│ Developer    │
│ (npm run     │
│  build)      │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   Vite       │
│   Build      │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  dist/       │
│  folder      │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  firebase    │
│  deploy      │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  Firebase    │
│  Hosting     │
│  (Live)      │
└──────────────┘
```

## Dataflyt - Kontaktskjema

```
┌─────────────┐
│   Bruker    │
│ (fyller ut  │
│  skjema)    │
└──────┬──────┘
       │
       ▼
┌──────────────┐
│ ContactForm  │
│ (validering) │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  Firebase    │
│  Function    │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  Firestore   │
│  (lagring)   │
└──────────────┘
```

## Firebase Services

```
Firebase Project: golfklubb-it-website
│
├── Hosting
│   └── dist/ (React build)
│
├── Firestore
│   └── Collections
│       ├── contacts
│       └── analytics
│
├── Functions
│   ├── handleContactForm
│   └── sendNotification
│
└── Analytics
    └── GA4 Integration
```

## Neste steg

Les mer om [API-endepunkter](../api/endpoints.md) for detaljert API-dokumentasjon.
