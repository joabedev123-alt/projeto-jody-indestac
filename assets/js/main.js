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
    nav: true,
    dots: false
  });

  // Carrossel Clientes/Modelos
  $('.clientes-02-lista').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    autoplay: true,
    responsive:{
        0:{ items:1 },
        600:{ items:3 },
        1000:{ items:4 }
    }
  });
});
