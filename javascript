const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const milisecondsEl = document.querySelector("#milliseconds");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const resetBtn = document.querySelector("#resetBtn");

let interval;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let ispaused = false;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
   
    interval = setInterval(() => {
        if (!ispaused) {
            miliseconds += 10;

            if (miliseconds === 1000) {
                seconds++;
                miliseconds = 0;
            }

            if (seconds === 60) {
                minutes++;
                seconds = 0
            }

            minutesEl.textContent = minutes;
            secondsEl.textContent = seconds;
            milisecondsEl.textcontent = miliseconds;
        }
    }, 10);

    startBtn.Style.display = "none";
    pauseBtn.Style.display = "block";
}

function pauseTimer(time) {
    ispaused = true;
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "block";
}

function resumeTimer() {
    ispaused = false;
    pauseBtn.style.display = "block";
    resumeBtn.style.display = "none";
}

function resetTimer() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    miliseconds = 0;

    minutesEl.textContent = "00"
    secondsEl.textContent = "00"
    milisecondsEl.textContent = "000"

    startBtn.style.display = "block"
    pauseBtn.style.display = "none"
    resumeBtn.style.display = "none"
}

function formatTime(time) {
    return time < 10 ? `0$(time)` : time;
}

function formatMiliseconds(time) {
    return time < 100 ? `$(time)`.padStart(3, "0") : time;
}
