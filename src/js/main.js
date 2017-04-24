import $ from 'jquery';

$(".down-arrow").click(function() {
     $('html, body').animate({
         scrollTop: $(".about-me").offset().top   }, 1000);
 });
