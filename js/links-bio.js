(function () {
    var hora = new Date().getHours();
    var saudacao = hora < 12 ? 'Bom dia' : hora < 18 ? 'Boa tarde' : 'Boa noite';
    var el = document.getElementById('lb-greeting');
    if (el) el.textContent = saudacao + '! 👋';
}());
