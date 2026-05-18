# IDA-PTW v60 — Promotor Review Portal

**Hash**: `47bffe6d`
**Live URL**: https://hanif7108.github.io/idaptw-review-v60-47bffe6d/

A multi-page bilingual review portal for the IDA-PTW v60 manuscript submission to *Journal of Earthquake and Tsunami* (JET, World Scientific Publishing).

## Access

The URL contains a random hash that serves as a soft access code — the portal sets `<meta name="robots" content="noindex,nofollow">` so search engines should not index it, and only those given the URL can browse it. Share with co-authors / promotors via private email.

**Important**: this is "security through obscurity" — not a hard authentication wall. Anyone with the URL can read. Suitable for academic pre-submission review of a draft manuscript that has not yet been published; not suitable for confidential pre-publication of patent-eligible IP without further protection.

## Site map

| Page | Purpose |
|---|---|
| `index.html` | Bilingual dashboard with headline metrics, site sections, file downloads, authors |
| `01-crosscheck.html` | Headline metric cross-check: 16 metrics traced manuscript → table → canonical CSV |
| `02-audit.html` | Numbers audit of 1,606 claims + 12 derivation spot-checks (all PASS) |
| `03-appendix.html` | 20 equation derivations (Brune source, σ decomposition, GMPE, Sa(T)↔height, ML) |
| `04-figure.html` | 16 publication-grade research visualisations with narration |
| `05-readiness.html` | Submission readiness scorecard: cover letter, grammar A−, AI disclosure, template |
| `06-sigbmkg.html` | SIG-BMKG intensity framework + Indonesian citation matrix + InaTEWS integration |
| `07-final-results.html` | Final operational results, 4-stage architecture, submission roadmap |

## Headline metrics

- Composite R² = **0.7091** across 103 spectral periods (oracle UB 0.7779)
- Stage-0 URPD AUC = **0.9136** (blind-zone 38 → 11 km, −71%)
- Stage-1 Balanced Accuracy = **81.68%** (Damaging recall ≈ 86%)
- ΔR² vs Atkinson–Boore GMPE = **+0.067**
- σ_total at T = 1.0 s = 0.862 (within Al Atik 2010 budget)
- End-to-end latency = 10.65 s, 99.44% golden-time compliance
- Dataset: 25,058 traces / 338 events / 151 stations / Java-Sunda subduction

## Downloadable files

| File | Format | Pages | Description |
|---|---|---:|---|
| `pdfs/manuscript_JET_v60_EN.pdf` | PDF | 42 | Primary submission (English) |
| `pdfs/manuscript_JET_v60_ID.pdf` | PDF | 42 | Indonesian (supplemental) |
| `docs/manuscript_JET_v60_EN.docx` | DOCX | — | Editable for track changes |
| `docs/manuscript_JET_v60_ID.docx` | DOCX | — | Editable Indonesian |
| `pdfs/Cover_Letter_JET_v60.pdf` | PDF | 3 | Cover letter to JET editor |
| `pdfs/EVIDENCE_v59_numbers.pdf` | PDF | 7 | 1,606 claims audit |
| `pdfs/EVIDENCE_v59_derivations.pdf` | PDF | 27 | 20 equation derivations |
| `pdfs/EVIDENCE_v59_visualizations.pdf` | PDF | 21 | 16 figures with narration |
| `pdfs/Grammar_Audit_v60.pdf` | PDF | 5 | Grammar audit (grade A−) |
| `docs/AI_Use_Disclosure_v60.md` | MD | — | AI use disclosure |
| `docs/Promotor_Review_Guide.md` | MD | — | Reading guide (3 scenarios) |

## Submission target

Journal of Earthquake and Tsunami (JET), World Scientific Publishing
Template: `ws-jet-strict v19`
Status: submission-ready, pending promotor / co-author review

## Feedback channels

- **Word track changes**: download DOCX → enable Track Changes → edit → email back
- **Annotated PDF**: download PDF → annotate (Acrobat/Preview/pdf.js) → email back
- **GitHub PR review**: [PR #2 at hanif7108/IDA-PTW](https://github.com/hanif7108/IDA-PTW/pull/2)
- **Direct email**: hanif.andi@ui.ac.id (subject prefix "Review IDA-PTW v60")

## Site technical notes

- Static HTML site hosted on GitHub Pages, no backend / no tracking
- Bilingual ID/EN switcher: URL-shareable via `?lang=en` query parameter + localStorage fallback
- Default language: Bahasa Indonesia; toggle via top-right `EN` / `ID` buttons
- Mobile-responsive layout (one-column at ≤ 760 px)
- `<meta name="robots" content="noindex,nofollow">` on every page

## Lifecycle

This site exists for the duration of the JET review / revision cycle. After acceptance and publication the repository may be archived or deleted at the author's discretion. The reproducibility package (code + canonical CSVs) lives separately at [hanif7108/IDA-PTW](https://github.com/hanif7108/IDA-PTW) and will be Zenodo-archived with a permanent DOI upon JET acceptance.

---

*Updated 2026-05-18 · Hanif Andi Nugraha · hanif.andi@ui.ac.id · S3 Fisika FMIPA UI / BMKG*
