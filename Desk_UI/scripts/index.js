// Request properties, contact info show and hide on arrow click
const angleLeft = document.getElementById("angle-left");
angleLeft.addEventListener("click", function () {
    this.classList.toggle("rotate");
    const infoDiv = document.querySelector(".info-div")
    infoDiv.classList.toggle("hide");

});


// show and hide child elements on click 
const arrows = document.getElementsByClassName("arrows");

for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.parentNode.nextElementSibling;
        panel.classList.toggle("hide");
    });
}

// timer function
const startStopBtn = document.getElementById("startStop")
const resetBtn = document.getElementById("reset-time")

const caretIcon = document.querySelector(".fa-caret-right")
let hours = 0;
let minutes = 0;
let seconds = 0;
let isRunning = false;
let myInterval;

startStopBtn.addEventListener("click", startStop)
resetBtn.addEventListener("click", () => {
    pause()
    hours = 0;
    minutes = 0;
    seconds = 0;
    displayTime()
})

function startStop() {
    if (!isRunning) {
        isRunning = true;
        myInterval = setInterval(updateTime, 1000)
        caretIcon.classList.remove("fa-caret-right")
        caretIcon.classList.add("fa-pause")
    }
    else {
        pause()
    }
}

function updateTime() {
    seconds++

    if (seconds === 60) {
        seconds = 0;
        minutes++

        if (minutes === 60) {
            minutes = 0;
            hours++
            if (hours === 24) {
                hours = 0;
            }
        }
    }
    displayTime()
}


function displayTime() {
    const displayTime = document.getElementById("timer")
    const formatTime = `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
    displayTime.textContent = formatTime;
}

function pause() {
    clearInterval(myInterval)
    isRunning = false;
    caretIcon.classList.remove("fa-pause")
    caretIcon.classList.add("fa-caret-right")
}

