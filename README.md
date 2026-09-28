<div align="center">

# 🌌 Tata Surya — Sistem Multimedia

**Website edukasi interaktif tentang tata surya**, dibuat dengan HTML, CSS, dan JavaScript.
Menyajikan informasi planet lewat halaman multimedia — galeri gambar, video, audio ambient, dan kuis interaktif.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](#)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-7952B3?style=flat&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

</div>

---

## 🎥 Demo Video

<div align="center">

[![Watch Demo on YouTube](https://img.shields.io/badge/▶️_Watch_Demo-YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtu.be/A3Aoh0fhWJc)

</div>

> ⚠️ **Catatan:** Link di atas masih placeholder. Ganti `GANTI_DENGAN_ID_VIDEO` dengan ID video YouTube-mu setelah diunggah, contoh: `https://youtu.be/dQw4w9WgXcQ`.

---

## ✨ Fitur

| Halaman | Deskripsi |
|---|---|
| 🏠 **Beranda** | Halaman utama dengan pengantar tata surya |
| 🪐 **Planet** | Informasi detail tiap planet |
| 🖼️ **Galeri** | Koleksi gambar planet (Merkurius sampai Neptunus) |
| 🎬 **Video** | Video edukasi tata surya |
| 📝 **Kuis** | Kuis interaktif pilihan ganda dengan penilaian otomatis |
| ℹ️ **Tentang** | Informasi seputar website ini |
| 🎵 **Audio** | Musik latar bertema luar angkasa |

---

## 🛠️ Teknologi

- **HTML5** & **CSS3**
- **JavaScript** (vanilla)
- [**Bootstrap 5.3.3**](https://getbootstrap.com/) — layout & komponen UI
- [**Font Awesome 6.5.1**](https://fontawesome.com/) — ikon

---

## 📁 Struktur Folder

```
Solar-System/
├── index.html            # Beranda
├── about.html            # Halaman tentang
├── planets.html          # Informasi planet
├── gallery.html          # Galeri gambar
├── video.html            # Video edukasi
├── quiz.html             # Kuis interaktif
├── css/
│   └── style.css
├── js/
│   ├── script.js
│   └── quiz.js           # Logika & data soal kuis
├── images/                # Gambar planet (mercury, venus, earth, dst.)
├── audio/
│   └── space.mp3
└── video/
    └── tata-surya.mp4
```

---

## 🚀 Cara Menjalankan

Karena ini website statis (tanpa backend), cukup buka `index.html` langsung di browser, atau jalankan lewat local server (disarankan, supaya audio/video/gambar termuat sempurna):

```bash
# Dengan Python
python -m http.server 8000

# Dengan Node.js (http-server)
npx http-server .
```

Lalu buka **http://localhost:8000** di browser.

---

## 📄 Lisensi

Proyek ini dibuat untuk keperluan pembelajaran/edukasi.

<div align="center">

Made with 🪐 for learning purposes

</div>