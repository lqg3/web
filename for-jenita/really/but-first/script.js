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
        "One of God's greatest gift.",
        "My motivation.",
        "The sweetest girl.",
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
    setTimeout(() => questionElement.textContent = texts[10], 13000);
    setTimeout(() => questionElement.textContent = texts[11], 14000);
    setTimeout(() => questionElement.textContent = texts[12], 15000);
    setTimeout(() => fadeText(texts[13]), 17000);
    setTimeout(() => fadeText(texts[14]), 19000);
    setTimeout(() => fadeText(texts[15]), 21000);
    
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
function playAudio(){
    const buttonElement = document.getElementById('playAudio');
    const song = document.getElementById('goldenHour');

    buttonElement.addEventListener('click', () => {
        song.play();
        buttonElement.style.display = 'none';
        changeText();
    });

}


playAudio();

function fireworks(){
        // Create and style the canvas
    const canvas = document.createElement("canvas");
    canvas.id = "fireworksCanvas";
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none";

    // Create and style the button
    const button = document.getElementById("playAudio")

    // Firework class
    class Firework {
        constructor(x, y, color) {
            this.x = x;
            this.y = y;
            this.color = color;
            this.particles = [];
            this.createParticles();
        }

        createParticles() {
            for (let i = 0; i < 50; i++) {
                this.particles.push(new Particle(this.x, this.y, this.color));
            }
        }

        update() {
            this.particles.forEach((particle, index) => {
                particle.update();
                if (particle.alpha <= 0) this.particles.splice(index, 1);
            });
        }

        draw() {
            this.particles.forEach((particle) => particle.draw());
        }
    }

    // Particle class
    class Particle {
        constructor(x, y, color) {
            this.x = x;
            this.y = y;
            this.color = color;
            this.radius = Math.random() * 3 + 1;
            this.velocity = {
                x: (Math.random() - 0.5) * 4,
                y: (Math.random() - 0.5) * 4,
            };
            this.alpha = 1;
            this.friction = 0.98;
        }

        update() {
            this.velocity.x *= this.friction;
            this.velocity.y *= this.friction;
            this.x += this.velocity.x;
            this.y += this.velocity.y;
            this.alpha -= 0.02;  // Control fade speed
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = this.alpha;  // Apply fading effect
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.restore();
        }
    }


    let fireworks = [];

    // Function to trigger fireworks
    function triggerFireworks() {
        for (let i = 0; i < 5; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * (canvas.height / 2);
            let colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"];
            fireworks.push(new Firework(x, y, colors[Math.floor(Math.random() * colors.length)]));
        }
    }

    // Animation loop
    function animate() {
        // Clear the canvas with transparency, not a solid color
        ctx.clearRect(0, 0, canvas.width, canvas.height);  // This removes the need for black layer

        // Update and draw all fireworks
        fireworks.forEach((firework, index) => {
            firework.update();
            firework.draw();

            // Remove firework if it has no remaining particles
            if (firework.particles.length === 0) {
                fireworks.splice(index, 1);
            }
        });

        requestAnimationFrame(animate);
    }

    triggerFireworks();
    animate();

}

const yesFireworks = document.getElementById("yesValentine");
const questionZoom = document.getElementById("questionZoom");

function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = `<svg id='Heart_Outline_24' width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><rect width='24' height='24' stroke='none' fill='#000000' opacity='0'/>
                    <g transform="matrix(0.77 0 0 0.77 12 12)" >
                    <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" translate(-15, -15)" d="M 9.5449219 3 C 5.3895807 3 2 6.3895806 2 10.544922 C 2 14.283156 4.9005496 18.084723 7.6601562 21.119141 C 10.419763 24.153558 13.171875 26.369141 13.171875 26.369141 C 13.180233852345026 26.375786472563394 13.18869860457135 26.382297640919596 13.197266 26.388672 C 13.642797 26.725148 14.201794 26.943857 14.808594 26.984375 C 14.871747063627714 26.995711198862345 14.935844498473607 27.000943649357453 15 27 C 15.063503867633871 27.00081887862369 15.126941363566605 26.995586916744234 15.189453 26.984375 C 15.192711554625776 26.98374021304213 15.195966928313181 26.98308920497214 15.199219 26.982422 C 15.802918 26.940449 16.359155 26.723674 16.802734 26.388672 C 16.81130139542865 26.382297640919596 16.819766147654974 26.375786472563394 16.828125 26.369141 C 16.828125 26.369141 19.580237 24.153558 22.339844 21.119141 C 25.099451 18.084722 28 14.283156 28 10.544922 C 28 6.3895806 24.610419 3 20.455078 3 C 17.841043 3 15.989939 4.4385487 15 5.4570312 C 14.010061 4.4385487 12.158957 3 9.5449219 3 z M 9.5449219 5 C 12.276127 5 13.937826 7.2424468 14.103516 7.4746094 C 14.27609627184144 7.806829463472595 14.619771197828175 8.014843234464566 14.994141 8.0136719 C 15.001953065164821 8.013763442816417 15.00976593483518 8.013763442816419 15.017578 8.0136719 C 15.025398052003588 8.013112757134447 15.03321125880098 8.012461678791757 15.041016 8.0117188 C 15.066472026268825 8.010736522239325 15.09188122685043 8.008781963216485 15.117188 8.0058594 C 15.44715036367289 7.969650654667006 15.737646279359888 7.772083984910029 15.892578 7.4785156 C 16.049938 7.2575052 17.716133 5 20.455078 5 C 23.529737 5 26 7.4702629 26 10.544922 C 26 13.147688 23.499768 16.870104 20.859375 19.773438 C 18.227966 22.666891 15.607768 24.780451 15.589844 24.794922 C 15.414236 24.925626 15.219097 25 15 25 C 14.780903 25 14.585764 24.92563 14.410156 24.794922 C 14.392236 24.780452 11.772034 22.666891 9.140625 19.773438 C 6.5002316 16.870105 4 13.147688 4 10.544922 C 4 7.4702629 6.470263 5 9.5449219 5 z" stroke-linecap="round" />
                    </g>
                    </svg>`;
    
    heart.style.position = "absolute";
    heart.style.left = "50%";
    heart.style.top = "50%";
    heart.style.transform = "translate(-50%, -50%) scale(0)";
    heart.style.opacity = ".1";
    heart.style.transition = "transform 12s linear, opacity 12s linear";
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.style.transform = "translate(-50%, -50%) scale(300)";
        heart.style.opacity = "0";
    }, 10);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

function seeYou() {
    const messageDiv = document.createElement('div');
    messageDiv.style.position = 'absolute';
    messageDiv.style.top = '50%';
    messageDiv.style.left = '50%';
    messageDiv.style.transform = 'translate(-50%, -50%)';
    messageDiv.style.color = 'white';
    messageDiv.style.padding = '20px';
    messageDiv.style.borderRadius = '10px';
    messageDiv.style.textAlign = 'center';
    messageDiv.style.fontFamily = '"Open Sans", sans-serif';
    messageDiv.style.opacity = '0';
    messageDiv.style.transition = "opacity 2s ease-in-out";

    const messageText = document.createElement('h1');
    messageText.textContent = 'See you on February 14th';

    messageDiv.appendChild(messageText);
    document.body.appendChild(messageDiv);

    setTimeout(() => {
        messageDiv.style.opacity = '1';
    }, 8000);
    setTimeout(() => {
        messageText.textContent = 'See you on February 14th :D';
    }, 15000);}

yesFireworks.addEventListener('click', () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(fireworks, Math.random() * 1000 + 1000 * i);
    }
    questionZoom.classList.add('zoomed');
    setInterval(createHeart, 700);
    setTimeout(seeYou, 100);
})

