# Cronometro-gamer
cronometro para usar em jogos
<!DOCTYPE html>
<html lang="ptbr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cronometro Gamer</title>
    <script src="script.js"></script>
    <link rel="stylesheet" type="text/css" href="estilos.css">
</head>


<body>
    <h1>Cronometro Gamer</h1>
    <button>Start</button>
    <div> class= "container">
        <div> class="timer">
            <div> class="time" id="minutes">00</div>
            <div> class="separator">:</div>
            <div> class="time" id="seconds">00</div>
            <div> class="separator">:</div>
            <div> class="time" id="miliseconds">000</div>
        </div>
    </div>
    <div> class="buttons">
        <button> class="btn" id="startbtn">iniciar</button>
        <button> class="btn" id="pausebtn">pausar</button>
        <button> class="btn" id="resumebtn">continuar</button>
        <button> class="btn" id="resetbtn">resetar</button>

    </div>
</body>


</html>

h1 {
        text-align: center;
        color: rgb(220, 223, 49);
    }
    
    .time {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        color: rgb(1, 1, 7);
        min-width: 90px;
    }
    
    .separator {
        padding: 0 10px;
        color: rgb(226, 185, 102);
    }
    
    #miliseconds {
        font-size: 30px;
        color: rgb(0, 0, 0);
    }
    
    .buttons {
        display: flex;
        gap: irem;
    }
    
    .btn {
        padding: 10px 20px;
        font-size: 18px;
        font-weight: bold;
        border-radius: 30px;
        cursor: pointer;
        border: 1px solid #ccc;
        transition: all 0.2s ease-in-out;
    }
    
    .btn:hover {
        transform: scale(1.1);
    }
    
    #startbtn {
        background-color: #175cff;
        color: #fff;
    }
    
    #pausebtn,
    #resumebtn {
        display: none;
    }

    const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const resetBtn = document.querySelector("#resetBtn");

let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let ispaused = false;

startBtn.addEventListener("click", startTimer)
pauseBtn.addEventListener("click", pauseTimer)
resumeBtn.addEventListener("click", resumeTimer)
resetBtn.addEventListener("click", resetTimer)

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

    startBtn.Style.display = "none"
    pauseBtn.Style.display = "block"
}

function pauseTimer(time) {
    ispaused = true
    pauseBtn.style.display = "none"
    resumeBtn.style.display = "block"
}

function resumeTimer() {
    ispaused = false
    pauseBtn.style.display = "block"
    resumeBtn.style.display = "none"
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

    
