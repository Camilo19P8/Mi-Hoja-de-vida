let slideIndex = 0;
        const slides = document.querySelectorAll('.carousel-item');

        function changeSlide(n) {
            slides[slideIndex].classList.remove('active');
            slideIndex = (slideIndex + n + slides.length) % slides.length;
            slides[slideIndex].classList.add('active');
        }

        function toggleContactForm() {
            const form = document.getElementById('contact-form');
            if (form.style.display === 'none') {
                form.style.display = 'block';
            } else {
                form.style.display = 'none';
            }
        }