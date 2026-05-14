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
    dots: false
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
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    lazyLoad: false,
    responsive:{
        0:{ items:3 },
        600:{ items:4 },
        1000:{ items:6 }
    }
  });

  // Carrossel de Depoimentos
  $('.owl-dep8').owlCarousel({
    items: 1,
    loop: false,
    autoplay: true,
    nav: false,
    dots: true,
    autoHeight: true
  });

  // Swiper Modelos (Inicializado diretamente no index.html para maior performance)
});
