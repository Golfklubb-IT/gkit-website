# FORSLAG: Google Workspace Non-profit Section
**For: Workspace.tsx**
**Status: FORSLAG - VENTER PÅ GODKJENNELSE**

---

## INNHOLDS-FORSLAG

Her er hva jeg foreslår å legge til i `Workspace.tsx`. Denne seksjonen skal plasseres **rett etter "Hva får dere?" og før "Hvorfor Google Workspace?"**

### **Visuell Layout Forslag (kort):**
```
┌─────────────────────────────────────────────────┐
│  🎯 GOOGLE WORKSPACE FOR NONPROFITS             │
│  (Highlight – gul/grønn bakgrunn)              │
├─────────────────────────────────────────────────┤
│  For ideelle organisasjoner i Norge            │
│  Gmail, Drive, Meet, Calendar, Chat, Docs      │
│  Vi gjør oppsettet for dere                    │
│                                                 │
│  Pris (nonprofit):                              │
│  • Starter: 0 kr/bruker/mnd                     │
│  • Standard: ca. $3/bruker/mnd                  │
│  • Plus: ca. $5/bruker/mnd                      │
│  • Enterprise: rabatt – kontakt                 │
│                                                 │
│  [Kontakt oss →]  [Se funksjoner ▼]             │
└─────────────────────────────────────────────────┘
```

### **SECTION 1: Google for Nonprofits (Hva dere får)**

**Tittel:** "Google Workspace for Nonprofits"

**Innhold (kort):**
```
For ideelle organisasjoner i Norge: profesjonell e-post, lagring, videomøter,
chat og samarbeid – med donerte/rabatterte priser.

✅ Business Starter: 0 kr/bruker/mnd (donert)
✅ Business Standard: ca. $3/bruker/mnd (rabatt)
✅ Business Plus: ca. $5/bruker/mnd (rabatt)
✅ Enterprise: rabattert (kontakt)

Vi gjør hele oppsettet og driften for dere.
```

**Visuelle elementer:**
- Highlight-boks gul/grønn (dette er nøkkelfordelen)
- Prislinje med donert/rabattert-stempel
- En tydelig CTA: "Kontakt oss – vi setter opp alt"

---

### **SECTION 2: Hvem kvalifiserer? (kort)**

**✅ Typisk kvalifisert:** registrerte ideelle organisasjoner/foreninger (inkl. golfklubber med org.nr)

**❌ Ikke kvalifisert:** offentlige etater, kommersielle aktører uten ideell status, private skoler/helseinstitutter

**Vår rolle:** Vi avklarer kvalifikasjon og håndterer søknad og aktivering for dere.

---

### **SECTION 3: Hva vi leverer (tjenesten)**

```
• Vi søker, aktiverer og drifter Google Workspace for klubben.
• Vi setter opp domene, e-post, grupper, sikkerhet og tilgang.
• Vi migrerer e-post/dokumenter ved behov.
• Vi tilbyr support og opplæring til ansatte.
```

CTA: "Kontakt oss for oppsett" (ingen how-to for kunden)

---

### **SECTION 4: Pris (korrigert)**

Tabell med donert/rabattert priser fra Google for Nonprofits:

```
┌────────────────────────┬────────────────────────────┐
│ Plan                   │ Nonprofit-pris*            │
├────────────────────────┼────────────────────────────┤
│ Business Starter       │ 0 kr / bruker / mnd        │
│ Business Standard      │ ca. $3 / bruker / mnd      │
│ Business Plus          │ ca. $5 / bruker / mnd      │
│ Enterprise             │ Rabattert – kontakt oss    │
└────────────────────────┴────────────────────────────┘
* Kilde: google.com/nonprofits/workspace/compare/
```

Kort tekst: "Vi håndterer søknad og aktivering. Dere betaler kun Googles rabatterte lisens (eller 0 kr for Starter)."

---

### **SECTION 5: Hvorfor det lønner seg (kort)**

```
• Starter-plan: 0 kr/bruker – perfekt for små klubber.
• Standard/Plus: rabattert, men med mer lagring og møteromskapasitet.
• Mindre lisenskost, mer tid spart – vi gjør oppsettet for dere.
```

---

### **SECTION 6: Ofte Stilte Spørsmål (Expander/Accordion)**

**Nye FAQ-items å legge til (etter eksisterende):**

**Q: Hva koster Google Workspace for ideelle organisasjoner?**
A: Starter er donert (0 kr/bruker). Standard og Plus er rabattert (ca. $3 og $5). Enterprise er rabattert på forespørsel.

**Q: Hva må vi gjøre selv?**
A: Ingenting – vi håndterer søknad, oppsett og drift.

**Q: Kan en golfklubb kvalifisere?**
A: Ja, hvis den er registrert som ideell organisasjon. Vi avklarer kvalifikasjon for dere.

**Q: Får vi norsk support?**
A: Ja, vi leverer support og opplæring til klubben.

---

## PLASSERING I SIDEN

Jeg foreslår denne rekkefølgen:

```
1. HERO (eksisterer allerede)
2. Produktbilde (eksisterer allerede)
3. ✅ "Hva får dere?" (eksisterer allerede)
4. 🆕 "Google for Nonprofits" ← LEGGES HER
5. ✅ "Hvorfor Google Workspace?" (eksisterer allerede)
6. ✅ "FAQ" (UTVIDES med nye spørsmål)
7. ✅ "Kontakt" CTA (eksisterer allerede)
```

---

## VISUELLE FORSLAG

**For Non-profit seksjonen:**
- Bakgrunn: Lysegrønn/gul (rgba(255, 193, 7, 0.05)) - highlights at det er bonus/gratis
- Border: Gul stripe på venstre side (var(--color-accent-yellow))
- Ikon: 🎯 eller 💚 eller ✨
- Typografi: Litt større og dristigere enn vanlige sections (dette er main selling point)

**For priser/tabell:**
 - Grønn bakgrunn for donert/rabattert pris
 - Kort tekst: "Starter donert, Standard/Plus rabattert"

**For tjenesteliste (vår rolle):**
- 4-5 korte bullets med "Vi gjør X"

---

## DITT SVAR KREVES

Godkjenner du dette innholdet? Eller vil du at jeg endrer:
- [ ] Tekstmengde (mer/mindre?)
- [ ] Plasseringen av seksjonen?
- [ ] Visuelle elementer?
- [ ] Tone/språk?
- [ ] Noe annet?

**Når du sier OK**, vil jeg lage en **visual sketch** av hvordan det ser ut, deretter implementerer vi det i koden.