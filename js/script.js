function menuMobile(){
    const icone = document.querySelector('[data-menu-mobile="icone"]');
    const lista = document.querySelector('[data-menu-mobile="lista"]');

    function abrirFechar(){
        icone.classList.toggle('transformar');
        lista.classList.toggle('mostrar');
    }

    icone.addEventListener('click', abrirFechar);
}

menuMobile();