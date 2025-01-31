// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Update the form submission code in script.js
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('button[type="submit"]');
    submitBtn.innerHTML = '<div class="loader"></div>';
    submitBtn.disabled = true;

    emailjs.sendForm('ecomotech', 'template_yd4f2my', this) // Replace with your Service ID and Template ID
        .then(() => {
            alert('Message sent successfully!');
            this.reset();
        })
        .catch((error) => {
            alert('Error: Please try again or contact us directly.');
            console.error('Failed:', error);
        })
        .finally(() => {
            submitBtn.innerHTML = 'Send Message';
            submitBtn.disabled = false;
        });
});



// Hero Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    // Reset all slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Set new active slide
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Initialize slider
showSlide(0);

// Auto-advance every 5 seconds
let sliderInterval = setInterval(nextSlide, 5000);

// Optional: Pause on hover
const hero = document.querySelector('.hero');
hero.addEventListener('mouseenter', () => clearInterval(sliderInterval));
hero.addEventListener('mouseleave', () => {
    sliderInterval = setInterval(nextSlide, 5000);
});