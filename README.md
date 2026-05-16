# IDA-PTW v60 — Promotor Review Portal

**Hash**: `47bffe6d`
**Live URL**: https://hanif7108.github.io/idaptw-review-v60-47bffe6d/

This is a private review portal for the IDA-PTW v60 manuscript submission to *Journal of Earthquake and Tsunami* (JET, World Scientific Publishing).

## Access

The URL contains a random hash that serves as a soft access code — it is not indexed by search engines (`<meta name="robots" content="noindex,nofollow">`) and only those with the URL can access. Share the URL with co-authors/promotor via email.

**Important**: This is "security through obscurity" — not a hard authentication wall. Anyone with the URL can read. Suitable for academic review of work-in-progress; not suitable for confidential pre-publication of patent-eligible IP without further protection.

## Contents

| File | Type | Description |
|---|---|---|
| `index.html` | Page | Landing dashboard with bilingual switcher (ID/EN) |
| `pdfs/manuscript_JET_v60_EN.pdf` | PDF | Primary submission manuscript (42 pages) |
| `pdfs/manuscript_JET_v60_ID.pdf` | PDF | Indonesian version (supplemental) |
| `docs/manuscript_JET_v60_EN.docx` | DOCX | Word version for track changes |
| `docs/manuscript_JET_v60_ID.docx` | DOCX | Word ID version |
| `pdfs/Cover_Letter_JET_v60.pdf` | PDF | Cover letter to JET editor |
| `pdfs/EVIDENCE_v59_numbers.pdf` | PDF | Numerical audit (7 pages, 1,606 claims) |
| `pdfs/EVIDENCE_v59_derivations.pdf` | PDF | 20 equation derivations (27 pages) |
| `pdfs/EVIDENCE_v59_visualizations.pdf` | PDF | 16 figures with narration (21 pages) |
| `pdfs/Grammar_Audit_v60.pdf` | PDF | Grammar audit grade A− |
| `docs/AI_Use_Disclosure_v60.md` | MD | AI use disclosure statement |
| `docs/Promotor_Review_Guide.md` | MD | Review guide with 3-scenario reading paths |

## Headline metrics

- Composite R² = **0.7091** across 103 spectral periods
- Stage-0 URPD AUC = **0.9136**
- Stage-1 Balanced Accuracy = **81.68%**
- ΔR² vs Atkinson–Boore GMPE = **+0.067**
- Dataset: 25,058 traces / 338 events / 151 stations / Java-Sunda

## Submission target

Journal of Earthquake and Tsunami (JET), World Scientific Publishing
Status: Submission-ready, pending co-author review

## Feedback channels

- **Email**: hanif.andi@ui.ac.id
- **Word track changes**: download DOCX → edit → email back
- **Annotated PDF**: download PDF → annotate → email back
- **GitHub PR comment**: see [PR #2 at hanif7108/IDA-PTW](https://github.com/hanif7108/IDA-PTW/pull/2)

## Site technical notes

- Static HTML site hosted on GitHub Pages
- No backend, no tracking
- Bilingual switcher uses localStorage for preference persistence
- Default language: Bahasa Indonesia (toggle to EN via top-right button)
- Mobile-responsive layout

## Lifecycle

This site exists for the duration of the JET review/revision cycle. After acceptance and publication, the repository may be archived or deleted at the author's discretion.

---

*Generated 2026-05-16 · Hanif Andi Nugraha · hanif.andi@ui.ac.id*
