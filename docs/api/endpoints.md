# API Endepunkter

Dokumentasjon av API-endepunkter i GKIT Website.

## Firebase Functions

### POST /handleContactForm

Håndterer kontaktskjema-innsendinger.

**URL**: `https://us-central1-golfklubb-it-website.cloudfunctions.net/handleContactForm`

**Metode**: `POST`

**Request Body**:

```json
{
  "name": "string",
  "email": "string",
  "company": "string",
  "interest": "string",
  "message": "string"
}
```

**Response**:

```json
{
  "success": true,
  "id": "document-id"
}
```

**Feilmeldinger**:

- `400 Bad Request` - Mangler påkrevde felter
- `500 Internal Server Error` - Serverfeil

## Firestore Collections

### contacts

Lagrer kontaktskjema-innsendinger.

**Struktur**:

```typescript
interface Contact {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
  timestamp: Timestamp;
  status: 'new' | 'contacted' | 'closed';
}
```

**Eksempel**:

```json
{
  "name": "Ole Nordmann",
  "email": "ole@example.com",
  "company": "Golf Club AS",
  "interest": "GolfBox-automatisering",
  "message": "Ønsker møte for å diskutere automatisering",
  "timestamp": "2025-12-02T10:30:00Z",
  "status": "new"
}
```

### analytics

Lagrer brukeranalyse og metrics.

**Struktur**:

```typescript
interface Analytics {
  event: string;
  userId?: string;
  timestamp: Timestamp;
  metadata: Record<string, any>;
}
```

## Google Analytics 4

### Events

Følgende events trackes via GA4:

- `page_view` - Sidevisninger
- `contact_form_submit` - Kontaktskjema sendt
- `button_click` - Knappeklikk
- `navigation_click` - Navigasjonsklikk
- `external_link_click` - Eksterne lenker

### Implementasjon

Events sendes via `react-ga4`:

```typescript
import ReactGA from 'react-ga4';

// Send event
ReactGA.event({
  category: 'form',
  action: 'submit',
  label: 'contact_form'
});
```

## Autentisering

Se [Autentisering](auth.md) for detaljer om autentisering og autorisasjon.

## Rate Limiting

Firebase Functions har innebygd rate limiting:

- Max 10 requests per sekund per IP
- Max 1000 requests per time

## CORS

CORS er konfigurert for følgende domener:

- `https://golfklubb-it-website.web.app`
- `https://golfklubb-it-website.firebaseapp.com`
- `http://localhost:5173` (utvikling)

## Neste steg

Les mer om [Autentisering](auth.md) for sikkerhet og tilgangskontroll.
