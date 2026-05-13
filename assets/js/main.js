$(document).ready(function(){
  // Hero Principal
  $('.owl-carousel-ban31').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    animateOut: 'fadeOut',
    nav: false,
    dots: true
  });

  // Carrossel Sobre
  $('.owl-carousel-sobre-22').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    nav: false,
    dots: false
  });

  // Carrossel Clientes/Modelos (Oitavada, Oval, etc)
  $('.clientes-02-lista').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    lazyLoad: true,
    responsive:{
        0:{ items:1 },
        600:{ items:3 },
        1000:{ items:4 }
    }
  });

  // Carrossel de Depoimentos
  $('.owl-dep8').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    nav: false,
    dots: true,
    autoHeight: true
  });

  // Swiper Modelos (Inicializado diretamente no index.html para maior performance)
});
