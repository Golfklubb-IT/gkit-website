# Installasjon

Guide for å installere og sette opp GKIT Website lokalt.

## Forutsetninger

Før du starter, må følgende være installert:

### Node.js og npm

- Node.js versjon 20 eller høyere
- Last ned fra [nodejs.org](https://nodejs.org/)

Verifiser installasjon:

```bash
node --version
npm --version
```

### Python

- Python 3.10 eller høyere (for MkDocs-dokumentasjon)
- Last ned fra [python.org](https://www.python.org/downloads/)

Verifiser installasjon:

```bash
python --version
```

### Firebase CLI

Installer Firebase CLI globalt:

```bash
npm install -g firebase-tools
```

Verifiser installasjon:

```bash
firebase --version
```

### Git

- Last ned fra [git-scm.com](https://git-scm.com/)

Verifiser installasjon:

```bash
git --version
```

## Klon repositoryet

```bash
git clone https://github.com/gkit-enk/gkit-website.git
cd gkit-website
```

## Installer avhengigheter

### Frontend-avhengigheter

```bash
npm install
```

### Firebase Functions-avhengigheter

```bash
cd functions
npm install
cd ..
```

### Dokumentasjonsavhengigheter

```bash
pip install mkdocs mkdocs-material
```


## Kjør lokalt

### Utviklingsserver (Frontend)

```bash
npm run dev
```

Åpner på `http://localhost:5173`

### Firebase Emulator

For å teste Firebase Functions lokalt:

```bash
firebase emulators:start
```

### Dokumentasjon

For å kjøre dokumentasjonen lokalt:

```bash
mkdocs serve
```

Åpner på `http://127.0.0.1:8000`

## Neste steg

Gå videre til [Miljø & konfig](environment.md) for å sette opp miljøvariabler og Firebase-konfigurasjon.
