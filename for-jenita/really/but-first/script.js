

function changeText(){
    const texts = [
        "WAIT!",
        "But first...",
        "Do you...",
        "JENITA!",
        "My one and only.",
        "The best girl.",
        "My oasis in a desert.",
        "The highlight of my day.",
        "The sunshine in my life.",
        "My source of happiness.",
        "Want to...",
        "Be my...",
        "Valentine?"
    ];
    
    let currentIndex = 0;
    const questionElement = document.getElementById('question');
    
    function switchText() {
        questionElement.textContent = texts[currentIndex];
        currentIndex = (currentIndex + 1) % texts.length;
    }
    
    // Change text every 2 seconds
    // Set initial text
    questionElement.textContent = texts[0];
    questionElement.style.transition = 'opacity 0.5s ease-in-out';
    
    // Schedule each text change with specific timing
    setTimeout(() => fadeText(texts[1]), 2000);
    setTimeout(() => fadeText(texts[2]), 4000);
    setTimeout(() => questionElement.textContent = texts[3], 6000);
    setTimeout(() => questionElement.textContent = texts[4], 7000);
    setTimeout(() => questionElement.textContent = texts[5], 8000);
    setTimeout(() => questionElement.textContent = texts[6], 9000);
    setTimeout(() => questionElement.textContent = texts[7], 10000);
    setTimeout(() => questionElement.textContent = texts[8], 11000);
    setTimeout(() => questionElement.textContent = texts[9], 12000);
    setTimeout(() => fadeText(texts[10]), 14000);
    setTimeout(() => fadeText(texts[11]), 16000);
    setTimeout(() => fadeText(texts[12]), 19000);
    
    function fadeText(newText) {
        questionElement.style.opacity = 0;
        setTimeout(() => {
            questionElement.textContent = newText;
            questionElement.style.opacity = 1;
        }, 500);
    }
    
    setTimeout(() => {
        const options = document.getElementById('options');
        options.style.opacity = '0';
        options.style.visibility = 'hidden';
        options.style.transition = 'opacity 3s ease-in-out';
    }, 0);
    
    setTimeout(() => {
        const options = document.getElementById('options');
        options.style.visibility = 'visible';
        options.style.opacity = '1';
    }, 21000);
}
playAudio();
function playAudio(){
    const buttonElement = document.getElementById('playAudio');
    const song = document.getElementById('goldenHour');

    buttonElement.addEventListener('click', () => {
        song.play();
        buttonElement.style.display = 'none';
        changeText();
    });

}