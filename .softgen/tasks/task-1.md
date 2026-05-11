---
title: Halaman Home
status: in_progress
priority: urgent
type: feature
tags: [home, hero, animations]
created_by: agent
created_at: 2026-05-11
position: 1
---

## Notes
Halaman beranda dengan hero Ken Burns slides, statistics counters, layanan unggulan, parallax sections, dan logo carousel klien. Halaman ini adalah first impression website dan harus langsung menampilkan profesionalisme Trans Security.

## Checklist
- [x] Setup design system: import Montserrat + Inter dari Google Fonts di globals.css, update CSS variables untuk navy-gold palette, sync ke tailwind.config.ts
- [x] Buat komponen Navbar dengan logo placeholder shield "Trans Security", menu links, tombol CTA "Minta Penawaran" gold, sticky dengan blur on scroll, hamburger menu mobile
- [x] Hero section dengan 3 slides Ken Burns zoom animation (8 detik per slide), overlay gradient navy transparent, teks + CTA button tiap slide
- [x] Section Statistics dengan 4 counter animations: 100+ Klien | 1000+ Personel | 10+ Tahun | 24/7 Operational
- [x] Section Layanan Unggulan: 3 cards dengan icon, judul, deskripsi, hover lift + shadow + border gold
- [ ] Section Parallax "Mengapa Trans Security": background blur, 4 poin keunggulan dengan icon
- [ ] Section Logo Carousel Klien: auto-scroll horizontal seamless
- [ ] Section CTA Parallax: background image, teks persuasif, tombol "Hubungi Kami"

## Acceptance
- Hero slides berjalan otomatis dengan Ken Burns zoom effect smooth
- Counter statistics animate on scroll into view
- Navbar menjadi sticky dengan blur background saat scroll
- Semua card layanan memiliki hover animation yang consistent