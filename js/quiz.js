(function () {

    var hora = new Date().getHours();
    var saudacao = hora < 12 ? 'Bom dia' : hora < 18 ? 'Boa tarde' : 'Boa noite';
    var greeting = document.getElementById('quiz-greeting');
    if (greeting) greeting.textContent = saudacao + ', Gerente de loja, beleza! 👋';

    var options = document.querySelectorAll('.quiz__option');
    var cta = document.getElementById('quizCta');

    var destinations = {
        'gerente': 'historia-gerente.html',
        'sub-gerente': 'historia-sub-gerente.html',
        'vendedor-responsavel': 'historia-vendedor-responsavel.html'
    };

    var selected = null;

    options.forEach(function (btn) {

        btn.addEventListener('click', function () {

            options.forEach(function (o) {
                o.classList.remove('quiz__option--selected');
            });

            btn.classList.add('quiz__option--selected');
            selected = btn.dataset.value;

            cta.disabled = false;

            gtag('event', 'quiz_option_selected', {
                option: selected
            });

        });

    });

    cta.addEventListener('click', function () {

        if (!selected) return;

        gtag('event', 'quiz_cta_click', {
            option: selected
        });

        window.location.href = destinations[selected];

    });

}());
