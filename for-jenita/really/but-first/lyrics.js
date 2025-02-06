async function fetchLRC(url) {
    const response = await fetch(url);
    const text = await response.text();
    return parseLRC(text);
}
function getRandomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function parseLRC(lrcText) {
    const lines = lrcText.split("\n");
    return lines.map(line => {
        const match = line.match(/\[(\d+):(\d+\.\d+)\](.*)/);
        if (match) {
            return {
                time: parseInt(match[1]) * 60 + parseFloat(match[2]) + 2, // Add 2 seconds delay
                text: match[3].trim()
            };
        }
    }).filter(Boolean);
}

function syncLyrics(audio, lyrics) {
    const lyricsElement = document.getElementById("lyrics");
    if(!audio){
        console.error('Audio element not found.');
        return;
    }
    setInterval(() => {
        if (audio.readyState >= 2) {
            const currentTime = audio.currentTime;
            const currentLine = lyrics.find((line, index) => {
                const nextLine = lyrics[index + 1];
                return currentTime >= line.time && (!nextLine || currentTime < nextLine.time);
            });

            if (currentLine) {
                lyricsElement.innerText = currentLine.text.toUpperCase();
            }
        }
    }, 500);
}

async function shiningBackground() {
    console.log("background active");

    const lyricsElement = document.getElementById("lyrics");
    const shiningColors = ["#FFD700", "#FF4500", "#32CD32", "#1E90FF", "#FF1493", "#00CED1", "#9400D3"];
    let interval = null;

    function updateShining() {
        const currentLine = lyricsElement.innerText;
        console.log(currentLine)
        if (currentLine.includes("SHINE")) {
            console.log("shining");
            if (!interval) {
                interval = setInterval(() => {
                    document.body.style.backgroundColor = getRandomChoice(shiningColors);
                }, 200);
            }
        } else if (currentLine.includes("WE WERE JUST TWO LOVERS")){
            if (interval) {
                clearInterval(interval);
                interval = null;
                document.body.style.backgroundColor = ""; // Reset background
            }
        }
    }

    // Observer to detect changes in #lyrics
    const observer = new MutationObserver(updateShining);
    observer.observe(lyricsElement, { childList: true, subtree: true });

    // Initial check
    updateShining();
}

shiningBackground();

shiningBackground();
function showLyrics() {
    const lyrics = document.getElementById("lyrics");
    lyrics.style.position = "absolute";
    lyrics.style.fontFamily = "Open Sans";
    lyrics.style.color = "#fff";
    lyrics.style.margin = "0";
    lyrics.style.padding = "0";
    lyrics.style.fontSize = "2.5em";
    lyrics.style.textAlign = "justified";
    lyrics.style.maxWidth = "100vw";
    lyrics.style.fontWeight = 800;
    lyrics.style.opacity = .25;
    lyrics.style.display = "flex";
    lyrics.style.height = "95%";
    lyrics.style.width = "95%";
    lyrics.style.alignItems = "center";
    lyrics.style.zIndex = "-100";
}

showLyrics();

document.getElementById("playAudio").addEventListener("click", async () => {
    const audio = document.getElementById("goldenHour");
    const lyrics = await fetchLRC("goldenhour.lrc");
    syncLyrics(audio, lyrics);
});
