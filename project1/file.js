  $('.editable').keydown(function(event) {
  var key = event.key;
  var allowedKeys = [ ".", ",", "(", ")", "'", "{","}",":",";","?","/","!","*","[","]"];

  if (allowedKeys.includes(key) === false) {
    event.preventDefault();
  }
});
