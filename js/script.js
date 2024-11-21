// ini JavaScript
// Navigation Toggle for Mobile
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// JavaScript untuk mengganti header sesuai dengan slide yang tampil
const header = document.getElementById("banner-header");
const slides = document.querySelectorAll(".banner-autoslide");
const titles = ["Mountain Adventure on Lombok", "City Exploration on Java", "Beach Getaway on Bali"];

let currentSlide = 0;

function changeSlide() {
    // Ganti teks header berdasarkan slide yang tampil
    header.textContent = titles[currentSlide];

    // Pindah ke slide berikutnya
    currentSlide = (currentSlide + 1) % slides.length;
}

// Ganti slide dan header setiap 4 detik agar lebih sinkron
setInterval(changeSlide, 4000); // Ganti slide setiap 4 detik

// Smooth Scroll to Home
document.querySelector('a[href="#home"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});

// Smooth Scroll to Packages
document.querySelector('a[href="#packages"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('packages').scrollIntoView({ behavior: 'smooth' });
});

// Smooth Scroll to Testimonials
document.querySelector('a[href="#testimonials"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('testimonials').scrollIntoView({ behavior: 'smooth' });
});

// Smooth Scroll to Contact Form
document.querySelector('a[href="#contact"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});

// Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const package = this.package.value;

    if (!name || !email || !package) {
        alert('Please fill out all fields!');
        e.preventDefault();
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Please provide a valid email address.');
        e.preventDefault();
    }
});

// Ambil tombol Contact Us dan form kontak
const contactBtn = document.querySelector('.contact-us-btn');
const contactForm = document.getElementById('home');

// Event listener untuk scroll ke form kontak saat tombol diklik
contactBtn.addEventListener('click', function(e) {
    e.preventDefault();  // Mencegah aksi default jika menggunakan <a> tag
    contactForm.scrollIntoView({
        behavior: 'smooth', // Efek scroll halus
        block: 'start'      // Posisi scroll di atas form
    });
});