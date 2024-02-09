document.addEventListener("DOMContentLoaded", function() {
    const changingText = document.getElementById("changing-text");
    const changeButton = document.getElementById("change-button");
    const buttonTexts = ["Change Text", "New Text", "Click Me", "Update Text"];
  
    let buttonTextIndex = 0;
  
    changeButton.addEventListener("click", function() {
      buttonTextIndex = (buttonTextIndex + 1) % buttonTexts.length;
      changeButton.textContent = buttonTexts[buttonTextIndex];
      changingText.textContent = "Text changed!";
    });
  });
  