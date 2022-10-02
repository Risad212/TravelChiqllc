// owl slider init -- >
$('.owl-carousel').owlCarousel({
   loop: true,
   margin: 15,
   autoplay: true,
   dots: false,
   autoplayTimeout: 3000,
   nav: false,
     responsive: {
            1200: {
               items: 3
            },
            1000: {
               items: 2
            },
            800: {
               items: 1
            },
            500: {
               items: 1
            },
            400: {
               items: 1
            },
            300: {
               items: 1
            }
         }
      })


// video popup init -->
$('.popup').magnificPopup({
    type:'iframe',
});