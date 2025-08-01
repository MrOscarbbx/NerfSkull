// Efecto 3D dinámico en el carrusel
window.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    if (!slider || slides.length === 0) return;

    function update3DEffect() {
        const sliderRect = slider.getBoundingClientRect();
        const sliderCenter = sliderRect.left + sliderRect.width / 2;
        slides.forEach(slide => {
            const slideRect = slide.getBoundingClientRect();
            const slideCenter = slideRect.left + slideRect.width / 2;
            const offset = (slideCenter - sliderCenter) / sliderRect.width;
            // offset: -0.5 (izquierda) a 0 (centro) a 0.5 (derecha)
            const rotateY = -offset * 40; // más ángulo para más 3D
            const scale = 1 + 0.4 * (1 - Math.abs(offset * 2));
            slide.style.transform = `perspective(800px) rotateY(${rotateY}deg) scale(${scale})`;
            slide.style.zIndex = Math.round(100 - Math.abs(offset) * 100);
        });
    }

    // Actualizar en scroll y animación
    slider.addEventListener('mousemove', update3DEffect);
    window.addEventListener('scroll', update3DEffect);
    setInterval(update3DEffect, 100);
    update3DEffect();
});



window.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const track = document.querySelector('.slide-track');
    let slides = Array.from(document.querySelectorAll('.slide'));
    if (!slider || slides.length === 0) return;

    // Duplica los slides para efecto infinito
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        track.appendChild(clone);
    });

    // Vuelve a seleccionar todos los slides (originales + clones)
    slides = Array.from(document.querySelectorAll('.slide'));

    let slideWidth = slides[0].offsetWidth;
    let totalSlides = slides.length / 2; // Solo cuenta los originales para el loop
    let position = 0;
    let speed = 1.2;

    function update3DEffect() {
        const sliderRect = slider.getBoundingClientRect();
        const sliderCenter = sliderRect.left + sliderRect.width / 2;
        slides.forEach(slide => {
            const slideRect = slide.getBoundingClientRect();
            const slideCenter = slideRect.left + slideRect.width / 2;
            const offset = (slideCenter - sliderCenter) / sliderRect.width;
            const rotateY = -offset * 40;
            const scale = 1 + 0.4 * (1 - Math.abs(offset * 2));
            slide.style.transform = `perspective(800px) rotateY(${rotateY}deg) scale(${scale})`;
            slide.style.zIndex = Math.round(100 - Math.abs(offset) * 100);
        });
    }

    function animate() {
        position -= speed;
        if (Math.abs(position) >= slideWidth * totalSlides) {
            position = 0;
        }
        track.style.transform = `translateX(${position}px)`;
        update3DEffect(); // <-- Aplica el efecto 3D en cada frame
        requestAnimationFrame(animate);
    }

    animate();

    // Opcional: actualiza el efecto 3D en scroll y mousemove
    slider.addEventListener('mousemove', update3DEffect);
    window.addEventListener('scroll', update3DEffect);
});

window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const maxScroll = window.innerHeight; // puedes ajustar según qué tan pronto quieres que ocurra el efecto
    const progress = Math.min(scrollY / maxScroll, 1);

    const cuadradoUno = document.querySelector('.cuadrado.uno');
    const cuadradoDos = document.querySelector('.cuadrado.dos');
    const codigo = document.querySelector('.codigo');

    if (cuadradoUno) {
        cuadradoUno.style.transform = `rotate(26deg) translateX(-${progress * 250}vw) scale(${1 + progress * 0.2})`;
        cuadradoUno.style.opacity = `${1 - progress * 0.5}`;
    }

    if (cuadradoDos) {
        cuadradoDos.style.transform = `rotate(26deg) translateX(-${progress * 250}vw) scale(${1 + progress * 0.2})`;
        cuadradoDos.style.opacity = `${1 - progress * 0.5}`;
    }

    if (codigo) {
        if (scrollY > 30) {
            codigo.classList.add('hide');
        } else {
            codigo.classList.remove('hide');
        }
    }
});

window.addEventListener('DOMContentLoaded', function () {
    const fadeEls = document.querySelectorAll('.fade-in');
    const observer = new window.IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.21
    });
    fadeEls.forEach(el => observer.observe(el));
});
