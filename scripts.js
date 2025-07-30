window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const maxScroll = window.innerHeight; // puedes ajustar según qué tan pronto quieres que ocurra el efecto
    const progress = Math.min(scrollY / maxScroll, 1);

    const cuadradoUno = document.querySelector('.cuadrado.uno');
    const cuadradoDos = document.querySelector('.cuadrado.dos');

    if (cuadradoUno) {
        cuadradoUno.style.transform = `rotate(26deg) translateX(-${progress * 250}vw) scale(${1 + progress * 0.2})`;
        cuadradoUno.style.opacity = `${1 - progress * 0.5}`;
    }

    if (cuadradoDos) {
        cuadradoDos.style.transform = `rotate(26deg) translateX(-${progress * 250}vw) scale(${1 + progress * 0.2})`;
        cuadradoDos.style.opacity = `${1 - progress * 0.5}`;
    }
});
