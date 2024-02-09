document.addEventListener("DOMContentLoaded", function() {
  const changingText = document.getElementById("noButton");
  const changeButton = document.getElementById("noButton");
  const changeSize = document.getElementById("yesButton");
  const buttonTexts = [
    "Change Text",
    "New Text",
    "Click Me",
    "Update Text"
  ];
  const phrases = [
    "please?",
    "are you sure?",
    "you might regret this...",
    "i beg you...",
    "you are the highlight of my day....",
    "you bring sunshine into my life..",
    "i would be so sad...",
    "every time you text me...",
    "i gain a little bit of happiness..",
  ];
  let buttonTextIndex = 0;
  let phraseIndex = 0;
  let textSizeNo = 25
  let textSizeYes = 25

  changeButton.addEventListener("click", function() {
    buttonTextIndex = (buttonTextIndex + 1) % buttonTexts.length;
    changeButton.textContent = buttonTexts[buttonTextIndex];
    changingText.textContent = phrases[phraseIndex];
    phraseIndex = (phraseIndex + 1) % phrases.length;
    changingText.style.fontSize = `${textSizeNo -= 2}px`;
    changeSize.style.fontSize = `${textSizeYes += 8}px`;
  });
});
