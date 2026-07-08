(function () {

    var btn = document.getElementById('historiaReadMore');
    var part2 = document.getElementById('historiaPart2');

    if (!btn || !part2) return;

    btn.addEventListener('click', function () {

        btn.style.display = 'none';
        part2.classList.add('visible');

        gtag('event', 'historia_continuar_lendo', {
            page_title: document.title
        });

        setTimeout(function () {
            part2.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);

    });

}());
