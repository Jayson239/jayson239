// app.js

let countdown;
let timeRemaining = 0;
let isPaused = true;

// Function to format time as mm:ss
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

// Function to update the timer display
function updateDisplay() {
    const timerDisplay = document.getElementById('timerDisplay');
    timerDisplay.textContent = formatTime(timeRemaining);
}

// Function to start the timer
function startTimer() {
    if (isPaused) {
        isPaused = false;
        countdown = setInterval(() => {
            if (timeRemaining > 0) {
                timeRemaining--;
                updateDisplay();
            } else {
                clearInterval(countdown);
                alert('Time is up!');
            }
        }, 1000);
    }
}

// Function to pause the timer
function pauseTimer() {
    clearInterval(countdown);
    isPaused = true;
}

// Function to reset the timer
function resetTimer() {
    clearInterval(countdown);
    isPaused = true;
    timeRemaining = 0;
    updateDisplay();
}

// Event listeners for buttons
document.getElementById('startBtn').addEventListener('click', () => {
    const timeInput = document.getElementById('timeInput').value;
    if (timeInput && isPaused) {
        timeRemaining = parseInt(timeInput);
        startTimer();
    }
});

document.getElementById('pauseBtn').addEventListener('click', pauseTimer);

document.getElementById('resetBtn').addEventListener('click', resetTimer);

// Initialize the display
updateDisplay();
