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
    setTimeout(() => fadeText(texts[14]), 18000);
    setTimeout(() => fadeText(texts[15]), 20000);
    
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

yesFireworks.addEventListener('click', () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(fireworks, Math.random() * 1000 + 1000 * i);
    }
    questionZoom.classList.add('zoomed');
    questionZoom.style.visibility('hidden');
})

