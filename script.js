//TESTIMONIALS SLIDE CHANGE CODE
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const totalSlides = slides.length;
const wrapper = document.querySelector('.testimonial-wrapper');
function changeSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    wrapper.style.transform = `translateX(-${100 * currentSlide}%)`;
    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentSlide].classList.add('active');
}
setInterval(changeSlide, 3000);
slides[currentSlide].classList.add('active');


//EMAIL VALIDATION AT NEWSLETTER
const mail = document.getElementById('mail');
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function validate() {
    if (emailRegex.test(mail.value)) {
        Swal.fire({
            title: 'Success!',
            text: "We'll contact you soon!",
            icon: 'success',
            confirmButtonText: 'Cool'
        });
    }
    else {
        Swal.fire({
            title: 'Error!',
            text: 'Enter a valid E-mail.',
            icon: 'error',
            confirmButtonText: 'Okay'
        });
    }
}
