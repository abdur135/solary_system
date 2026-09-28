# 🌌 Tata Surya - Sistem Multimedia

Website edukasi interaktif tentang tata surya, dibuat dengan HTML, CSS, dan JavaScript. Menyajikan informasi planet lewat halaman multimedia — galeri gambar, video, audio ambient, dan kuis interaktif.

---

## 🎥 Demo Video

Klik tombol di bawah untuk melihat video demo website:

### ▶️ [WATCH DEMO VIDEO](./demo/demo_tatasurya.mp4)

---

## ✨ Fitur

- **Beranda** — halaman utama dengan pengantar tata surya
- **Planet** — informasi detail tiap planet
- **Galeri** — koleksi gambar planet (Merkurius sampai Neptunus)
- **Video** — video edukasi tata surya
- **Kuis** — kuis interaktif pilihan ganda seputar tata surya, dengan penilaian otomatis
- **Tentang** — informasi seputar website ini
- Musik latar (audio ambient bertema luar angkasa)

## 🛠️ Teknologi

- HTML5 & CSS3
- JavaScript (vanilla)
- [Bootstrap 5.3.3](https://getbootstrap.com/) — layout & komponen UI
- [Font Awesome 6.5.1](https://fontawesome.com/) — ikon

## 📁 Struktur Folder

```
Solar-System/
├── index.html           # Beranda
├── about.html           # Halaman tentang
├── planets.html         # Informasi planet
├── gallery.html         # Galeri gambar
├── video.html           # Video edukasi
├── quiz.html            # Kuis interaktif
├── css/
│   └── style.css
├── js/
│   ├── script.js
│   └── quiz.js           # Logika & data soal kuis
├── images/               # Gambar planet (mercury, venus, earth, dst.)
├── audio/
│   └── space.mp3
└── video/
│   └── tata-surya.mp4
├── js/
│   └── space.mp3
```

## 🚀 Cara Menjalankan

Karena ini website statis (tanpa backend), cukup buka `index.html` langsung di browser, atau jalankan lewat local server (disarankan, supaya audio/video/gambar termuat sempurna):

```bash
# Dengan Python
python -m http.server 8000

# Dengan Node.js (http-server)
npx http-server .
```

Lalu buka `http://localhost:8000` di browser.

## 📄 Lisensi

Proyek ini dibuat untuk keperluan pembelajaran/edukasi.
