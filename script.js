let currentSlide = 0;

function showSlide(index) {
    const cards = Array.from(document.querySelectorAll('.carousel-card'));
    const dots = Array.from(document.querySelectorAll('.dot'));

    if (!cards.length) {
        return;
    }

    currentSlide = (index + cards.length) % cards.length;

    cards.forEach((card, cardIndex) => {
        card.classList.toggle('active', cardIndex === currentSlide);
    });

    dots.forEach((dot, dotIndex) => {
        dot.classList.toggle('active', dotIndex === currentSlide);
    });
}

if (document.querySelector('.carousel-card')) {
    document.querySelectorAll('.carousel-btn').forEach((button) => {
        button.addEventListener('click', () => {
            const direction = button.getAttribute('data-direction') === 'next' ? 1 : -1;
            showSlide(currentSlide + direction);
        });
    });

    document.querySelectorAll('.dot').forEach((dot) => {
        dot.addEventListener('click', () => {
            showSlide(Number(dot.getAttribute('data-index')));
        });
    });

    showSlide(0);
}