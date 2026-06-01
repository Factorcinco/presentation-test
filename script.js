document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');
    const slideProgress = document.getElementById('slideProgress');
    const btnReiniciar = document.getElementById('btnReiniciar');
    
    let currentSlideIndex = 0;

    // Función para actualizar el estado visual de la presentación
    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'prev-slide');
            
            if (index === currentSlideIndex) {
                slide.classList.add('active'); // Muestra la actual
            } else if (index < currentSlideIndex) {
                slide.classList.add('prev-slide'); // Desplaza a la izquierda las pasadas
            }
        });

        // Actualizar el contador de la interfaz
        slideProgress.textContent = `${currentSlideIndex + 1} / ${slides.length}`;

        // Habilitar o deshabilitar botones según la posición
        btnPrev.disabled = currentSlideIndex === 0;
        btnNext.disabled = currentSlideIndex === slides.length - 1;
    }

    // Funciones de navegación
    function nextSlide() {
        if (currentSlideIndex < slides.length - 1) {
            currentSlideIndex++;
            updateSlides();
        }
    }

    function prevSlide() {
        if (currentSlideIndex > 0) {
            currentSlideIndex--;
            updateSlides();
        }
    }

    // Eventos de los botones de la UI
    btnNext.addEventListener('click', nextSlide);
    btnPrev.addEventListener('click', prevSlide);
    
    // Botón de reinicio en la última diapositiva
    btnReiniciar.addEventListener('click', () => {
        currentSlideIndex = 0;
        updateSlides();
    });

    // Soporte para navegación con teclado (Flechas)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault(); // Evita scroll con el espacio
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
        }
    });

    // Inicializar vista
    updateSlides();
});
