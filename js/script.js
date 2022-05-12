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

function scrollSuave(){
    const linksInternos = document.querySelectorAll('[data-menu="item"]');
    const menuHeight = document.querySelector('[data-menu="barra"]').offsetHeight;

    function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        const topo = section.offsetTop - menuHeight;
        window.scrollTo({
            top: topo,
            behavior: 'smooth',
        });
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}

scrollSuave();