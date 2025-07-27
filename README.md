## Daftar Isi

1.  [Tentang Proyek](https://www.google.com/search?q=%23tentang-proyek)
2.  [Fitur Utama](https://www.google.com/search?q=%23fitur-utama)
3.  [Teknologi yang Digunakan](https://www.google.com/search?q=%23teknologi-yang-digunakan)
4.  [Struktur File](https://www.google.com/search?q=%23struktur-file)
5.  [Instalasi dan Penggunaan](https://www.google.com/search?q=%23instalasi-dan-penggunaan)
6.  [Tampilan Proyek](https://www.google.com/search?q=%23tampilan-proyek)

## Tentang Proyek

Tujuan utama proyek ini adalah membangun sebuah website perusahaan yang tidak hanya statis, tetapi juga memberikan pengalaman pengguna yang menarik dan interaktif. Setiap halaman dirancang untuk memenuhi kebutuhan spesifik dalam sebuah website bisnis modern, mulai dari halaman depan yang menarik perhatian hingga halaman blog dengan manajemen konten sederhana.

## Fitur Utama

Berikut adalah rincian fitur yang diimplementasikan di setiap halaman:

### Halaman Utama (`index.html`)

  - **Hero Section Interaktif**: Efek *parallax scrolling* pada elemen dekoratif.
  - **Efek Ketik Dinamis**: Tagline pada deskripsi muncul dengan animasi ketikan menggunakan **Typed.js**.
  - **Penghitung Statistik**: Angka statistik beranimasi menghitung naik saat terlihat di layar.

### Halaman Tentang Kami (`about.html`)

  - **Timeline Sejarah Perusahaan**: Timeline vertikal interaktif dengan animasi saat scroll.
  - **Kartu Anggota Tim**: Kartu dengan efek *3D flip* saat di-hover untuk menampilkan detail.
  - **Nilai-Nilai Perusahaan**: Bagian interaktif dengan efek *hover* pada setiap kartu nilai.

### Halaman Menu & Paket (`services.html`)

  - **Katalog Produk dengan Filter**: Galeri produk yang dapat difilter secara dinamis berdasarkan kategori.
  - **Kalkulator Harga Interaktif**: Alat untuk mengestimasi total biaya berdasarkan produk dan kuantitas.
  - **Tabel Perbandingan Paket**: Tabel informatif untuk memudahkan perbandingan antar paket.
  - **Formulir Kustomisasi Paket**: Formulir dengan total harga yang ter-update secara otomatis.

### Halaman Portfolio (`portfolio.html`)

  - **Galeri Proyek dengan Filter**: Showcase acara yang telah ditangani, dapat difilter berdasarkan jenis acara.
  - **Lightbox Gallery**: Detail gambar dapat dilihat dalam galeri *lightbox* menggunakan **GLightbox**.
  - **Modal Detail Proyek**: Konten detail (deskripsi & testimoni) dimuat secara dinamis ke dalam sebuah *modal*.

### Halaman Kontak (`contact.html`)

  - **Formulir Kontak Canggih**: Validasi input secara *real-time*.
  - **Peta Interaktif**: Peta lokasi dengan tombol untuk berpindah antar cabang.
  - **Simulasi Live Chat**: Widget chat sederhana yang mensimulasikan percakapan.
  - **FAQ Accordion dengan Pencarian**: Daftar pertanyaan yang bisa dibuka-tutup dan dilengkapi fitur pencarian.

### Halaman Blog (`blog.html`)

  - **Daftar Artikel Dinamis**: Menampilkan ringkasan (excerpt) artikel dengan **paginasi** (halaman Berikutnya/Sebelumnya).
  - **Filter & Pencarian**: Pengguna dapat mencari artikel berdasarkan kata kunci atau memfilternya berdasarkan kategori (Resep, Tips, Berita).
  - **Fitur Kartu Artikel**: Setiap kartu dilengkapi **kalkulator waktu baca**, kategori, dan tombol **"Baca Selengkapnya"** yang mengarah ke artikel penuh.
  - **Tombol Berbagi Sosial**: Simulasi tombol untuk berbagi artikel ke media sosial.

## Teknologi yang Digunakan

  - **HTML5**: Untuk struktur dasar website.
  - **CSS3**: Untuk styling, layout (Flexbox & Grid), variabel, dan animasi.
  - **JavaScript (ES6+)**: Untuk semua fungsionalitas interaktif.
  - **[RemixIcon](https://remixicon.com/)**: Library ikon.
  - **[ScrollReveal.js](https://scrollrevealjs.org/)**: Untuk animasi elemen saat scroll.
  - **[Typed.js](https://github.com/mattboldt/typed.js/)**: Untuk efek ketik dinamis.
  - **[Swiper.js](https://swiperjs.com/)**: Untuk carousel testimoni.
  - **[GLightbox](https://biati-digital.github.io/glightbox/)**: Untuk galeri gambar lightbox.

## Struktur File

```
/
|-- index.html
|-- about.html
|-- services.html
|-- portfolio.html
|-- contact.html
|-- blog.html
|-- single-post.html
|-- README.md
|
|-- assets/
|   |-- css/
|   |   |-- styles.css
|   |
|   |-- js/
|   |   |-- main.js
|   |   |-- scrollreveal.min.js
|   |
|   |-- img/
|       |-- (semua gambar dan ikon proyek)
```

## Instalasi dan Penggunaan

Proyek ini adalah website statis dan tidak memerlukan proses build.

1.  **Clone repositori ini:**
    ```bash
    git clone https://github.com/Rofidevv/[nama-repositori].git
    ```
2.  **Buka file `index.html`:**
    Cukup buka file `index.html` di browser favorit Anda untuk memulai.
