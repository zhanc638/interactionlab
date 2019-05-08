// ~Made by Rijk, loosely based on SO 9614109
function getAngle(x, y) {
  var midPointX = window.innerWidth / 2;
  var midPointY = window.innerHeight / 2;

  var dx = x - midPointX;
  var dy = y - midPointY;

  var theta = Math.atan2(dy, dx);
  theta *= 180 / Math.PI;
  if (theta < 0) theta = 360 + theta;

  return Math.floor(theta);
}
// ~End

$('body').mousemove(handleMove);
$('body').bind('touchmove', handleMove);

function handleMove(event) {
  var x = event.clientX;
  var y = event.clientY;

  var angle = getAngle(x, y);

  $('.arm').css({
    transform: 'rotate(' + angle + 'deg)'
  });

  $('.images').removeClass('active');

  if (angle >= 0 && angle < 6) $('.images-nineam').addClass('active');
  if (angle >= 6 && angle < 30) $('.images-tenam').addClass('active');
  if (angle >= 30 && angle < 54) $('.images-elevenam').addClass('active');
  if (angle >= 54 && angle < 78) $('.images-twelvepm').addClass('active');
  if (angle >= 78 && angle < 102) $('.images-onepm').addClass('active');
  if (angle >= 102 && angle < 126) $('.images-twopm').addClass('active')
  if (angle >= 126 && angle < 150) $('.images-threepm').addClass('active')
  if (angle >= 150 && angle < 174) $('.images-fourpm').addClass('active');
  if (angle >= 174 && angle < 198) $('.images-fivepm').addClass('active');
  if (angle >= 198 && angle < 222) $('.images-sixpm').addClass('active');
  if (angle >= 222 && angle < 246) $('.images-sevenpm').addClass('active');
  if (angle >= 246 && angle < 269) $('.images-eightpm').addClass('active');
  if (angle >= 269 && angle < 293) $('.images-sixam').addClass('active');
  if (angle >= 293 && angle < 318) $('.images-sevenam').addClass('active');
  if (angle >= 318 && angle < 342) $('.images-eightam').addClass('active');
  if (angle >= 342 && angle < 360) $('.images-nineam').addClass('active');
}
