// $(window).scroll(function(e){
//   var $el = $('.fixedElement');
//   var isPositionFixed = ($el.css('position') == 'fixed');
//   if ($(this).scrollTop() > 200 && !isPositionFixed){
//     $el.css({'position': 'fixed', 'top': '0px'});
//   }
//   if ($(this).scrollTop() < 200 && isPositionFixed){
//     $el.css({'position': 'static', 'top': '0px'});
//   }
// });


// var lastElementWidth = 0;
//
// $("body *")
//   .css("position", "absolute")
//   .css("top", "0")
//   .each(function(index) {
//     var currentElement = $(this);
//     currentElement.css("left", lastElementWidth + "px");
//     lastElementWidth = currentElement.width();
//   });

$("body > * *")
  .css("position", "static")
  .each(function() {
    $(this).parent().before(this);
  });

$("body")
  .css("cssText", "height: auto; display: grid; grid-template-columns: repeat(5, 20vw); grid-gap: 30px; background-color: rgb(41,45,52); align-items: start;");

$("body > *")
  .css("background-color", "white");

//$("body > *:empty:not(img)").css("display", "none");

//$("body > *:empty").css("display", "none");
