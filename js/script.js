// Navigation Toggle for Mobile
// Mendapatkan elemen tombol navigasi
const navToggle = document.querySelector('.nav-toggle');
// Mendapatkan elemen list link navigasi
const navLinks = document.querySelector('.nav-links');

// Menambahkan event listener untuk mendengarkan klik pada tombol navigasi
navToggle.addEventListener('click', () => {
    // Menambahkan atau menghapus kelas 'show' pada elemen navLinks untuk menampilkan atau menyembunyikan menu
    navLinks.classList.toggle('show');
});

// JavaScript untuk mengganti header sesuai dengan slide yang tampil
// Mendapatkan elemen header yang akan diubah
const header = document.getElementById("banner-header");
// Mendapatkan semua elemen slide untuk gambar
const slides = document.querySelectorAll(".banner-autoslide");
// Array berisi judul yang sesuai dengan slide
const titles = ["Mountain Adventure on Lombok", "City Exploration on Java", "Beach Getaway on Bali"];

let currentSlide = 0;

// Fungsi untuk mengganti slide dan teks header
function changeSlide() {
    // Ganti teks header berdasarkan slide yang tampil
    header.textContent = titles[currentSlide];

    // Pindah ke slide berikutnya
    currentSlide = (currentSlide + 1) % slides.length;
}

// Ganti slide dan header setiap 4 detik agar lebih sinkron
setInterval(changeSlide, 4000); // Ganti slide setiap 4 detik

// Smooth Scroll to Home
// Event listener untuk scroll halus ke bagian Home ketika link diklik
document.querySelector('a[href="#home"]').addEventListener('click', function(e) {
    e.preventDefault(); // Mencegah aksi default (perpindahan halaman)
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' }); // Scroll ke elemen home dengan efek halus
});

// Smooth Scroll to Packages
// Event listener untuk scroll halus ke bagian Packages ketika link diklik
document.querySelector('a[href="#packages"]').addEventListener('click', function(e) {
    e.preventDefault(); // Mencegah aksi default (perpindahan halaman)
    document.getElementById('packages').scrollIntoView({ behavior: 'smooth' }); // Scroll ke elemen packages dengan efek halus
});

// Smooth Scroll to Testimonials
// Event listener untuk scroll halus ke bagian Testimonials ketika link diklik
document.querySelector('a[href="#testimonials"]').addEventListener('click', function(e) {
    e.preventDefault(); // Mencegah aksi default (perpindahan halaman)
    document.getElementById('testimonials').scrollIntoView({ behavior: 'smooth' }); // Scroll ke elemen testimonials dengan efek halus
});

// Smooth Scroll to Contact Form
// Event listener untuk scroll halus ke bagian Form Kontak ketika link diklik
document.querySelector('a[href="#contact"]').addEventListener('click', function(e) {
    e.preventDefault(); // Mencegah aksi default (perpindahan halaman)
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' }); // Scroll ke elemen home (seharusnya kontak form) dengan efek halus
});

// Form Validation
// Event listener untuk memvalidasi form saat disubmit
document.getElementById('contactForm').addEventListener('submit', function(e) {
    // Mengambil nilai input dari form
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const package = this.package.value;

    // Cek jika ada field yang kosong
    if (!name || !email || !package) {
        alert('Please fill out all fields!'); // Tampilkan peringatan
        e.preventDefault(); // Mencegah pengiriman form
    } else if (!/\S+@\S+\.\S+/.test(email)) { // Validasi format email
        alert('Please provide a valid email address.'); // Tampilkan peringatan
        e.preventDefault(); // Mencegah pengiriman form
    }
});

// Ambil tombol Contact Us dan form kontak
const contactBtn = document.querySelector('.contact-us-btn');
// Ambil elemen form kontak (seharusnya form di ID "contact" bukan "home")
const contactForm = document.getElementById('home');

// Event listener untuk scroll ke form kontak saat tombol diklik
contactBtn.addEventListener('click', function(e) {
    e.preventDefault();  // Mencegah aksi default jika menggunakan <a> tag
    contactForm.scrollIntoView({
        behavior: 'smooth', // Efek scroll halus
        block: 'start'      // Posisi scroll di atas form
    });
});