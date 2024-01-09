// var occupations = [
//     "Software Engineer",
//     "UI/UX Designer",
//     "Fullstack Dev",
//     "Video Editor",
//   ];
  
//   var counter = 0;
//   var elem = document.getElementById("occupations"); // Corrected selector
//   setInterval(change, 3000);
  
//   function change() {
//       elem.fadeOut(function() {
//           elem.innerHTML = occupations[counter];
//           counter++;
//           if (counter >= occupations.length) { counter = 0; }
//           elem.fadeIn();
//       });
//   }
  

  const textArray = ["Text 1", "Text 2", "Text 3"];
  let currentIndex = 0;
  const cyclingTextElement = document.getElementById("cyclingText");

  function cycleText(){
      cyclingTextElement.textContent = textArray[currentIndex];
      currentIndex = (currentIndex + 1) % textArray.length;
  }

  setInterval(cycleText, 2000);