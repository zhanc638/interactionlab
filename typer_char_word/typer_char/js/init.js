// input is defining the variable which then defines the result (after =)
var input = document.querySelector("input"); //string inside the browser function inside the object "document" which is the entry point into DOM
var container = document.querySelector("#container"); //id string inside the

var positionOneKeys = ["q", "w", "e", "r", "a", "s", "d", "f", "z", "x", "c", "shift", "caps lock", "tab"]; //a list containing an array of strings = the value of the var
var positionTwoKeys = ["t", "y", "v", "b", "g", "h", "u"];
var positionThreeKeys = ["p", "o", "i", "l", "k", "j", "m", "n", ";", ",", ".", "/", "'", "[", "]"];

var possibleWords = [
  ["i"],          // first word  [0]
  ["don't", "do", "can't"], // second word [1]
  ["know", "love", "believe"],    // third word  [2]
  ["...", "you", "that"], // fourth word [3]
];

var currentWord = 0;

input.addEventListener("keydown", onKeyDown);

function onKeyDown(event) {
  event.preventDefault();

  var key = event.key.toLowerCase(); // key that was pressed

  if (key === "enter") {
    sendUserMessage();
    return;
  }

  var index; // 0, 1, or 2

  if (positionOneKeys.includes(key)) {
    index = 0;
  }

  if (positionTwoKeys.includes(key)) {
    index = 1;
  }

  if (positionThreeKeys.includes(key)) {
    index = 2;
  }

  var possibleWordsIndex = currentWord % possibleWords.length;
  var wordsArray = possibleWords[possibleWordsIndex];
  var word = wordsArray[index % wordsArray.length];

  input.value += word + " ";

  // after everything
  currentWord = currentWord + 1;
}

function sendUserMessage() {
  var value = input.value;
  var html = '<div class="message mine"><span>' + value + '</span></div>';
  container.innerHTML += html;

  input.value = "";

  var bfMessage = chooseResponse(value);

  if (bfMessage) {
    sendBFMessage(bfMessage);
  }
}

function chooseResponse(userMessage) {
  var arrayOfWords = userMessage.split(" ");

  if (arrayOfWords.includes("know")) {
    return "take your time, i'll wait";
  } else if (arrayOfWords.includes("do")) {
    return "i'm so happy my love";
  } else if (arrayOfWords.includes("believe")) {
    return "i've been in love with you since junior year";
  } else if (arrayOfWords.includes("don't")) {
    return "it's okay, i just had to tell you";
  } else if (arrayOfWords.includes("that")) {
    return "take your time"
  }}

function sendBFMessage(message) {
  var html = '<div class="message"><span>' + message + '</span></div>';
  container.innerHTML += html;
}
