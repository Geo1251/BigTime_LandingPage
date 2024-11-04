let currentIndex = 0; 
const itemsPerPage = 2; 

function setCurrentSlide(index) {
    currentIndex = index;
    updateCarousel();
}

function updateCarousel() {
    const items = document.querySelectorAll('.feedback__section-list-item');
    const totalSlides = Math.ceil(items.length / itemsPerPage); 
    const offset = -currentIndex * (200 / totalSlides); 

    document.querySelector('.feedback__section-carousel-container').style.transform = `translateX(${offset}%)`;

    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentIndex) {
            dot.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateCarousel(); 
});
