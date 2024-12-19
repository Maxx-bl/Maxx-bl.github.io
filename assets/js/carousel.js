const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');

let currentSlideIndex = 0;

function updateSlidePosition() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentSlideIndex * slideWidth}px)`;
}

nextButton.addEventListener('click', () => {
    if (currentSlideIndex < slides.length - 1) currentSlideIndex++;
    else currentSlideIndex = 0;
    updateSlidePosition();
});

prevButton.addEventListener('click', () => {
    if (currentSlideIndex > 0) currentSlideIndex--;
    else currentSlideIndex = slides.length - 1;
    updateSlidePosition();
});

window.addEventListener('resize', updateSlidePosition);
