$(".bg-zoom").css("background-image", "url('images/1.jpg')");
var bg = ["'images/2.jpg'", "'images/3.jpg'", "'images/4.jpg'", "'images/1.jpg'"];
var imageHead = document.querySelector(".zoominheader");
var i = 0;
setInterval(function() {
  $(".bg-zoom").css("background-image", "url(" + bg[i] + ")");
  i = i + 1;
  if (i == bg.length) {
    i = 0;
  }
}, 10000);

$(document).scroll(function() {
  $(".fixed-top").toggleClass('scrolled', $(document).scrollTop() > $(".fixed-top").height());
  $(".fixed-top").toggleClass('nav-shadow', $(this).scrollTop() > $(".fixed-top").height());
});

$('.owl-carousel').owlCarousel({
  autowidth: true,
  stagePadding: 50,
  autoplay: true,
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
})
