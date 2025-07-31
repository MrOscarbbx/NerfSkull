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
