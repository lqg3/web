const hideAfter = document.getElementById("hideAfter");
const hideAfterButton = document.getElementById("hideAfterButton");
const headerText = document.getElementById("headerText");

function fadeOut(element) {
    element.style.transition = "visibility 0s, opacity 0.5s linear";
    element.style.opacity = 0;
    setTimeout(() => {
        element.style.visibility = "hidden";
    }, 500);
}

function fadeIn(element) {
    element.style.transition = "visibility 0s, opacity 0.5s linear";
    element.style.visibility = "visible";
    element.style.opacity = 1;
}

hideAfterButton.addEventListener("click", () => {
    fadeOut(hideAfter);
    fadeOut(hideAfterButton);

    setTimeout(() => {
        fadeOut(headerText);
        setTimeout(() => {
            headerText.innerText = "Oh...";
            fadeIn(headerText);
        }, 500);
    }, 500);
    setTimeout(() => {
        fadeOut(headerText);
        setTimeout(() => {
            headerText.innerText = "ok... well....";
            fadeIn(headerText);
        }, 500);
    }, 3000);
    setTimeout(() => {
        fadeOut(headerText);
        setTimeout(() => {
            headerText.innerText = "in that case....";
            fadeIn(headerText);
        }, 500);
    }, 6000);

    setTimeout(() => {
        fadeOut(headerText);
        setTimeout(() => {
            headerText.innerHTML = "I'm going to ask you again...";
            fadeIn(headerText);
        }, 500);
    }, 8000);

    setTimeout(() => {
        window.location.replace("../really/but-first");
    }, 12000)
});