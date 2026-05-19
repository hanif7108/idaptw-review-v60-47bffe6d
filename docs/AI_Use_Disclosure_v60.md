# AI Use Disclosure Statement — Manuscript JET v60

**Purpose**: Compliant disclosure of AI-assisted writing tools used during manuscript preparation, per World Scientific Publishing (JET publisher) AI policy, ICMJE recommendations, and 2024–2026 best-practice for academic publishing.

**Status**: Draft — ready to integrate into manuscript Acknowledgments section after author approval.

---

## English version (untuk manuscript_JET_v60_EN.tex)

Tempatkan **di akhir Acknowledgments section**, sebelum References:

> **AI use disclosure.** Large language model tools (Claude Code by Anthropic) were used during manuscript preparation for: (i) language editing and grammatical refinement, (ii) internal consistency auditing of numerical claims across sections, (iii) bibliographic verification (DOI / publisher / author cross-checks against a 105-entry reference library), and (iv) refactoring of figure captions and supplementary documentation. All research design, dataset curation, pipeline implementation, training, evaluation, statistical analysis, and substantive interpretation are the original work of the authors. The AI tools generated no novel findings, did not synthesize data, and did not produce content presented as empirical results. The authors take full responsibility for the manuscript's content, including any errors that may remain. All AI-suggested edits were reviewed and approved by the corresponding author prior to inclusion.

---

## Indonesian version (untuk manuscript_JET_v60_ID.tex)

Tempatkan **di akhir bagian Penghargaan / Acknowledgments**, sebelum References:

> **Pengungkapan penggunaan AI.** Tool model bahasa besar (Claude Code dari Anthropic) digunakan selama persiapan manuskrip untuk: (i) penyuntingan bahasa dan penghalusan tata bahasa, (ii) audit konsistensi internal terhadap klaim numerik antar-bagian, (iii) verifikasi bibliografi (pemeriksaan DOI / penerbit / penulis terhadap pustaka referensi berisi 105 entri), dan (iv) penataan ulang keterangan gambar serta dokumentasi pendukung. Seluruh perancangan riset, kurasi dataset, implementasi pipeline, pelatihan, evaluasi, analisis statistik, dan interpretasi substantif adalah hasil karya asli penulis. Tool AI tidak menghasilkan temuan baru, tidak melakukan sintesis data, dan tidak menghasilkan konten yang disajikan sebagai hasil empiris. Penulis bertanggung jawab penuh atas isi manuskrip, termasuk kekeliruan yang mungkin tersisa. Semua saran perubahan dari AI telah ditinjau dan disetujui oleh *corresponding author* sebelum dimasukkan.

---

## Compliance mapping

Statement di atas memenuhi:

| Policy | Requirement | Compliant? |
|---|---|:-:|
| World Scientific (JET publisher) | Disclose AI tool use in editing | ✅ |
| ICMJE Recommendations 2024 | AI tools tidak boleh listed as authors; disclosed in acknowledgments | ✅ |
| Elsevier "Use of AI" Policy | Specify AI tool name + scope of use | ✅ |
| Springer Nature AI Policy | Confirm authors take responsibility | ✅ |
| arXiv AI Guidelines 2024 | Disclose AI-assisted writing | ✅ |

Statement mencakup 4 elemen wajib best-practice 2026:
1. **What tool** (Claude Code by Anthropic) — spesifik, bukan generic "AI"
2. **What scope** (4 use cases didefinisikan) — bukan blanket "general assistance"
3. **What NOT** (no novel findings, no data synthesis, no empirical content) — explicit boundary
4. **Authorial responsibility** — penulis bertanggung jawab penuh

---

## LaTeX-ready snippet (jika nanti mau di-apply)

### EN version (paste setelah \section*{Acknowledgments}):

```latex
\paragraph{AI use disclosure.}
Large language model tools (Claude Code by Anthropic) were used during
manuscript preparation for: (i) language editing and grammatical refinement,
(ii) internal consistency auditing of numerical claims across sections,
(iii) bibliographic verification (DOI / publisher / author cross-checks
against a 105-entry reference library), and (iv) refactoring of figure
captions and supplementary documentation. All research design, dataset
curation, pipeline implementation, training, evaluation, statistical
analysis, and substantive interpretation are the original work of the
authors. The AI tools generated no novel findings, did not synthesize data,
and did not produce content presented as empirical results. The authors take
full responsibility for the manuscript's content, including any errors that
may remain. All AI-suggested edits were reviewed and approved by the
corresponding author prior to inclusion.
```

### ID version (paste setelah \section*{Penghargaan}):

```latex
\paragraph{Pengungkapan penggunaan AI.}
Tool model bahasa besar (Claude Code dari Anthropic) digunakan selama
persiapan manuskrip untuk: (i) penyuntingan bahasa dan penghalusan tata
bahasa, (ii) audit konsistensi internal terhadap klaim numerik antar-bagian,
(iii) verifikasi bibliografi (pemeriksaan DOI / penerbit / penulis terhadap
pustaka referensi berisi 105 entri), dan (iv) penataan ulang keterangan
gambar serta dokumentasi pendukung. Seluruh perancangan riset, kurasi
dataset, implementasi pipeline, pelatihan, evaluasi, analisis statistik, dan
interpretasi substantif adalah hasil karya asli penulis. Tool AI tidak
menghasilkan temuan baru, tidak melakukan sintesis data, dan tidak
menghasilkan konten yang disajikan sebagai hasil empiris. Penulis
bertanggung jawab penuh atas isi manuskrip, termasuk kekeliruan yang mungkin
tersisa. Semua saran perubahan dari AI telah ditinjau dan disetujui oleh
\emph{corresponding author} sebelum dimasukkan.
```

---

## Catatan penggunaan

1. **Statement ini melindungi Anda secara hukum dan etika** — bukan admission of guilt, tapi standard practice 2026
2. **Tidak akan menurunkan probabilitas penerimaan** — JET editor justru lebih percaya manuscript dengan disclosure dibanding tanpa disclosure
3. **Format paragraph kecil** — total ~120 kata, tidak mengganggu structure paper
4. **Konsisten dengan v60 narrative** — Anda sudah punya audit infrastructure (EVIDENCE_v59_*) yang membuktikan AI digunakan untuk audit, bukan generate

## Yang BELUM dilakukan (menunggu konfirmasi Anda)

- ❌ Statement belum di-apply ke `main_ID.tex` / `main.tex`
- ❌ Tidak ada edit destructive ke manuscript
- ❌ PDF v60 belum di-rebuild dengan statement ini

Saat Anda siap apply, beri tahu — saya integrate ke LaTeX source + rebuild PDF.

---

*Drafted: 2026-05-16 · v1*
