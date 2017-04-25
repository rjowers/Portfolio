import $ from 'jquery';


$(".down-arrow").click(function() {
     $('html, body').animate({
         scrollTop: $(".about-me").offset().top   }, 1000);
 });


//  $('.about-bullets').typeIt({
//      strings: ["This is a great string.", "But here is a better one."],
//      speed: 50,
//      breakLines: false,
//      autoStart: false
// });


// var $typer = $('.about-bullets'),
//     txt = $typer.data("text"),
//     tot = txt.length,
//     ch  = 0;
//
// (function typeIt() {
//   if(ch > tot) return;
//   $typer.text( txt.substring(0, ch++) );
//   setTimeout(typeIt, ~~(Math.random()*(300-60+1)+60));
// }());
