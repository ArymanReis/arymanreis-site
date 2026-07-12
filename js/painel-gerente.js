(function () {

    /* --------------------------------------------------
       Saudação dinâmica pelo horário
    -------------------------------------------------- */
    var hora = new Date().getHours();
    var saudacao = hora < 12 ? 'Bom dia' : hora < 18 ? 'Boa tarde' : 'Boa noite';
    var el = document.getElementById('pg-greeting');
    if (el) el.textContent = saudacao + '! Gerente de loja. 👋';

    /* --------------------------------------------------
       "Continuar lendo" — reveal da história
    -------------------------------------------------- */
    var btn  = document.getElementById('pgReadMore');
    var part = document.getElementById('pgPart2');

    if (btn && part) {
        btn.addEventListener('click', function () {
            btn.style.display = 'none';
            part.classList.add('visible');
            gtag('event', 'story_continuar_lendo', { page_title: document.title });
            setTimeout(function () {
                part.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        });
    }

}());
