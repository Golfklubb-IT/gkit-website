# 📚 Dokumentasjons-Update Checklist

Denne checklisteen sikrer at dokumentasjonen holdes synkronisert med kodeendringer og alltid publiseres til GitHub Pages.

## Før hver commit med kodeendringer

### 1. Kodeendringer
- [ ] Implementert feature/bugfix lokalt
- [ ] Kjørt `npm run build` – OK uten feil
- [ ] Testet lokalt (`npm run dev`)

### 2. Dokumentasjons-oppdateringer
- [ ] Oppdatert relevante `.md` filer i `/docs` mappen
- [ ] Lagt til "Hva endret seg" i `docs/index.md` > **Nylige Oppdateringer** seksjonen
- [ ] Inkludert: dato, hva som ble gjort, tekniske detaljer, links (hvis relevant)
- [ ] Oppdatert `README.md` hvis generell info endret seg

### 3. Format for nylige oppdateringer

Legg til ny seksjon øverst i "Nylige Oppdateringer":

```markdown
### Din Feature/Endra Navn
**Dato:** [DATO]

**Implementert:**
- ✅ Punkt 1
- ✅ Punkt 2

**Tekniske detaljer:**
- Komponenter berørt: `ComponentName.tsx`
- CSS-klasser: `.class-name`
- Database-endringer: Ja/Nei

**Testing:**
- [ ] Lokal test OK
- [ ] Build OK (`npm run build`)
```

### 4. Git commit (med både kode + docs)

```bash
# Stage alt
git add .

# Commit med beskrivende melding
git commit -m "Feature: Din feature + docs update"

# Push
git push origin master
```

### 5. Deploy dokumentasjon til GitHub Pages

Etter push:

```bash
# Bygge og deploy MkDocs til gh-pages branch
mkdocs gh-deploy
```

Eller bruk script:
```bash
./scripts/deploy-docs.sh
```

---

## Rutine etter hver release/sprint

1. **Review alle docs** i `/docs` – sikre at innhold er aktuelt
2. **Kjør `mkdocs build`** – generer `site/` mappen
3. **Kjør `mkdocs gh-deploy`** – push til `gh-pages` branch
4. **Verifiser** på `https://owe-s.github.io/gkit-website/`

---

## Nyttige kommandoer

```bash
# Lokal preview av MkDocs
mkdocs serve

# Bygge site lokalt
mkdocs build

# Deploy til GitHub Pages
mkdocs gh-deploy

# Auto-deploy via script
./scripts/deploy-docs.sh
```

---

## Struktur for dokumentasjonsfiler

```
docs/
├── index.md                    # Hovedside med nylige oppdateringer
├── setup/                      # Installasjon og oppsett
├── architecture/               # Teknisk arkitektur
├── api/                        # API-dokumentasjon
├── guides/                     # Brukerveiledninger
└── workflows/                  # Deploy, CI/CD osv.
```

---

## Kontakt & Spørsmål

Se `README.md` for kontaktinformasjon.
