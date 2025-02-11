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

const d = new Date();
const timeNow = d.toLocaleString();


document.getElementById("hideAfterButton").addEventListener("click", function() {
    let inputValue = document.getElementById("input-field").value + " - " + timeNow;

    // Replace with your Google Form URL and correct "entry.XXXXX" ID
    let googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSc-W3oOVRr7Icpyv-3mUGlbqRCMG1lF0DocAEO3x9HcER4N8Q/formResponse";
    let formData = new URLSearchParams();
    formData.append("entry.794428274", inputValue); // Replace with your form's entry ID

    fetch(googleFormURL, {
        method: "POST",
        body: formData,
        mode: "no-cors" // Prevents CORS issues
    }).then(() => {
        console.log("Data sent successfully to Google Form!");
        document.getElementById("hideAfter").style.display = "none";
    }).catch(error => console.error("Error:", error));
});