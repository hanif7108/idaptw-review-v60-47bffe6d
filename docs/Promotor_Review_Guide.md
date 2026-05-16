# Panduan Review Promotor — Manuscript IDA-PTW v60

**Manuskrip**: A Saturation-Aware Multi-Stage Framework for Intensity-Driven Adaptive P-Wave Time Window Selection in Real-Time Spectral Acceleration Prediction: Operational Design for the Java-Sunda Subduction Zone

**Penulis utama**: Hanif Andi Nugraha (S3 Fisika FMIPA UI)
**Co-author/Promotor**: Dede Djuhana, Adhi Harmoko Saputro, Sigit Pramono
**Target jurnal**: Journal of Earthquake and Tsunami (JET, World Scientific)
**Status**: Submission-ready, menunggu review co-author/promotor sebelum submit

---

## 🎯 Yang diharapkan dari review Anda

Sebagai promotor / co-author, mohon **review 4 hal** dalam manuskrip:

1. **Akurasi teknis** — apakah klaim metode + hasil benar?
2. **Konsistensi numerik** — apakah angka di abstract konsisten dengan body/table?
3. **Representasi institusional** — apakah kredit UI / BMKG memadai?
4. **Kesiapan submit** — ada yang harus difix sebelum kirim ke JET?

---

## 📂 File-file dalam paket review ini (10 file, 16 MB)

| # | File | Format | Halaman | Untuk apa |
|--:|---|---|---:|---|
| 1 | `manuscript_JET_v60_EN.pdf` | PDF | 42 | **Manuscript utama EN — yang akan disubmit ke JET** |
| 2 | `manuscript_JET_v60_EN.docx` | Word | — | Editable Word (untuk track changes) |
| 3 | `manuscript_JET_v60_ID.pdf` | PDF | 42 | Versi Bahasa Indonesia (supplemental) |
| 4 | `manuscript_JET_v60_ID.docx` | Word | — | Editable Word ID |
| 5 | `Cover_Letter_JET_v60.pdf` | PDF | 3 | Surat pengantar ke editor JET |
| 6 | `EVIDENCE_v59_numbers.pdf` | PDF | 7 | **Audit konsistensi 1,606 angka di manuscript** |
| 7 | `EVIDENCE_v59_derivations.pdf` | PDF | 27 | **20 derivasi persamaan fisika/matematika/ML** |
| 8 | `EVIDENCE_v59_visualizations.pdf` | PDF | 21 | **16 visualisasi hasil riset dengan narasi** |
| 9 | `Grammar_Audit_v60.pdf` | PDF | 5 | Laporan audit grammar (grade A−) |
| 10 | `AI_Use_Disclosure_v60.md` | Markdown | — | Disclosure penggunaan AI tools |

**Total bacaan**: jika fokus pada PDF utama saja, ~60 halaman cukup untuk review komprehensif (≤ 2 jam baca).

---

## 🚀 Mulai dari mana? (Skenario waktu yang Anda miliki)

### Skenario A — 15 menit (executive review)
1. Baca **Cover Letter** (3 hal) — paham positioning paper
2. Baca **Abstract** manuscript_JET_v60_EN.pdf halaman 1
3. Lihat **Tabel 19** di manuscript (halaman terakhir Sec 6) — summary semua headline metrics
4. Lihat **Fig 1** (seismicity map) + **Fig 2** (pipeline architecture)

→ Cukup untuk approve/comment level konseptual.

### Skenario B — 1 jam (komprehensif teknis)
- Skenario A +
- Baca seluruh **Sec 4 Methods** (architecture 4-stage)
- Baca **Sec 5 Results** (Tabel 14, 17, 19)
- Lihat **EVIDENCE_v59_visualizations.pdf** (21 hal, dengan narasi per figur)
- Cek **EVIDENCE_v59_numbers.pdf** Section 1 (16 headline metrics tervalidasi)

→ Cukup untuk approve dengan substantive comments.

### Skenario C — 3-4 jam (deep review)
- Skenario B +
- Baca **EVIDENCE_v59_derivations.pdf** (27 hal, 20 persamaan dengan turunan)
- Baca **Sec 6 Discussion** + **References**
- Compare claim Tabel 17 (sigma decomposition) dengan literatur Al Atik 2010

→ Cukup untuk endorse submission sebagai promotor utama.

---

## 💬 Cara memberi komentar/feedback

### Opsi A — Comment di Pull Request (workflow GitHub) — **RECOMMENDED**

URL PR: (akan dikirim setelah branch di-push)

1. Buka URL PR
2. Klik "Files changed"
3. Hover atas baris yang ingin di-komentari → muncul ikon `+`
4. Klik `+` → tulis komentar → "Add single comment" atau "Start a review"
5. Setelah selesai, klik "Review changes" → pilih:
   - **Approve** (semua OK)
   - **Comment** (saran tanpa block)
   - **Request changes** (harus di-fix sebelum submit)

### Opsi B — Komentar via Word track changes

1. Download `manuscript_JET_v60_EN.docx` dari GitHub
2. Buka di Word → enable Track Changes (Review → Track Changes → ON)
3. Edit langsung dengan markup
4. Upload kembali ke GitHub (atau email ke hanif.andi@ui.ac.id)

### Opsi C — Email langsung

Subject: "Review manuscript IDA-PTW v60 — [nama Anda]"
To: hanif.andi@ui.ac.id
Cc: promotor lain

---

## 📋 Checklist review

Mohon centang yang sudah Anda verifikasi:

### Konten teknis
- [ ] Abstract menyampaikan kontribusi paper dengan akurat
- [ ] Methods (Sec 4) reproducible dari deskripsi yang diberikan
- [ ] Hasil (Sec 5) konsisten dengan klaim abstract
- [ ] Discussion (Sec 6) tidak overclaim
- [ ] Limitations dilaporkan jujur (mis. negative result Stage 1.5)

### Konsistensi numerik
- [ ] Composite R² = 0.7091 muncul konsisten (abstract + body + Tab 19)
- [ ] AUC Stage 0 = 0.9136 konsisten
- [ ] Balanced Accuracy Stage 1 = 81.68% konsisten
- [ ] Latency 10.65 s + 99.44% golden time konsisten
- [ ] ΔR² vs GMPE = +0.067 konsisten

### Representasi institusi
- [ ] UI Fisika FMIPA disebut sebagai afiliasi pertama
- [ ] BMKG sebagai data provider + co-author affiliation
- [ ] InaTEWS context disebut di intro dan discussion
- [ ] Citation Indonesian researcher memadai (Natawidjaja 2006, Setiyono 2019 BMKG, Latief 2000, Pribadi 2023, Mukhlisin 2023)

### Kesiapan submission
- [ ] Cover letter komunikatif untuk editor JET
- [ ] AI use disclosure transparent + non-overclaim
- [ ] Reproducibility statement clear (Data Availability section)
- [ ] Tidak ada typo/grammar issue yang fatal

---

## 🔬 Tentang kontribusi paper ini

**Kebaruan utama** (per Sec 1 paragraf terakhir):
1. **Saturation-awareness** untuk event $M_w > 6.5$ (mengatasi keterbatasan τc/Pd klasik)
2. **Intensity-driven adaptive PTW** (jendela {3, 5, 8} s per kelas intensitas)
3. **Catalog-independent** operation (tanpa magnitudo estimasi)
4. **103-period Sa(T)** prediction real-time

**Headline metrics**:
- Composite R² = 0.7091 di 103 periode spektral
- Stage 0 URPD AUC = 0.9136 (zona buta dekat-sumber dikurangi 71-89%)
- Stage 1 Balanced Accuracy = 81.68% (Damaging recall ~86%)
- σ_total = 0.862 di T = 1.0 s (Al Atik 2010 decomposition)
- End-to-end latency = 10.65 s (Golden time compliance 99.44%)
- ΔR² = +0.067 vs Atkinson–Boore subduction GMPE baseline

**Dataset**: 25,058 trace tiga-komponen dari 338 events Mw 1.7–6.2 di 151 stasiun IA-BMKG sepanjang zona subduksi Jawa-Sunda (Nov 2022 – Mar 2026).

---

## 🛠 Reproducibility

Pipeline lengkap (training + evaluation + audit) tersedia di repo ini. Eksekusi `python3 verify_repro.py` di root repo memberikan **51-check audit** yang memvalidasi:
- Versi paket Python ter-pin
- Checksum input dataset (MD5)
- Metrik headline match canonical
- LaTeX source compliance v60

Hasil FULL re-run pipeline (3h 40min) menghasilkan drift ≤ 0.0005 vs canonical metrics — terbukti reproducible.

---

## ❓ Pertanyaan untuk diskusi

Hal-hal yang ingin saya konsultasikan dengan Anda:

1. **Suggested reviewer JET**: di Cover Letter saya cantumkan 4 nama (Galasso, Tatar, Lin, Gusman). Apakah ada nama lain yang Anda rekomendasikan?
2. **Citation order**: di paragraf konteks Indonesian event, apakah urutan Natawidjaja → Sieh → Setiyono → Latief sudah representatif?
3. **AI use disclosure**: apakah wording yang saya tulis sudah cukup tegas tentang batas AI use?
4. **Patent strategy**: kapan rencana submit paten ke DJKI? Apakah harus sebelum atau sesudah JET acceptance?

---

## 📞 Kontak

**Hanif Andi Nugraha**
Email: hanif.andi@ui.ac.id
Departemen Fisika, FMIPA, Universitas Indonesia
BMKG

GitHub: hanif7108

---

*Versi paket review: v60*
*Tanggal: 2026-05-16*
*Branch: review/v60-promotor*
