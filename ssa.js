$(".zoominheader").css("background-image", "url('images/1.jpg')");
var bg=["'images/2.jpg'","'images/3.jpg'","'images/4.jpg'","'images/1.jpg'"];
var imageHead = document.querySelector(".zoominheader");
var i = 0;
setInterval(function() {
 $(".zoominheader").css("background-image", "url(" + bg[i] + ")");
      i = i + 1;
      if (i == bg.length) {
        i =  0;
      }
}, 10000);

// $(document).scroll(function(){
//   $("nav").addClass("bg-dark")
//   // if($("nav").scrollTop()<($("nav").height()))
//   // {
//   //   $("nav").removeClass("bg-dark")
//   //
//   // }
// })
// $(function () {
  $(document).scroll(function () {
    // var $nav = $(".fixed-top");
  $(".fixed-top").toggleClass('scrolled', $(document).scrollTop() > $(".fixed-top").height());
  $(".fixed-top").toggleClass('nav-shadow', $(this).scrollTop() > $(".fixed-top").height());
  });
// });
