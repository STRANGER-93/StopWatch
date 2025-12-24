let milliseconds = 0;
let seconds = 0;
let minutes = 0;

let displayTime = document.getElementById('displaytime');
let timer = null;

// Function to update the time display
function updateTime() {
    milliseconds++;

    if (milliseconds === 100) { // 100 * 10ms = 1 second
        seconds++;
        milliseconds = 0;
    }

    if (seconds === 60) {
        minutes++;
        seconds = 0;
    }

    displayTime.innerHTML =
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds) + ":" +
        (milliseconds < 10 ? "0" + milliseconds : milliseconds);
}

// Start the stopwatch
function startWATCH() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(updateTime, 10);
}

// Stop the stopwatch
function stopWATCH() {
    clearInterval(timer);
}

// Reset the stopwatch
function resetWATCH() {
    clearInterval(timer);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    displayTime.innerHTML = "00:00:00";
}

// Mouse click events
document.getElementById('startBtn').addEventListener('click', startWATCH);
document.getElementById('stopBtn').addEventListener('click', stopWATCH);
document.getElementById('resetBtn').addEventListener('click', resetWATCH);

// Keyboard events
document.addEventListener('keydown', function(event) {
    switch(event.code) {
        case 'Enter': // Enter key → Start
            startWATCH();
            break;
        case 'Space': // Spacebar → Stop
            stopWATCH();
            event.preventDefault(); // Prevent page scrolling
            break;
        case 'Escape': // Esc → Reset
            resetWATCH();
            break;
    }
});

//instruction ko lagi
document.getElementById('instruction').addEventListener('click', function() {
    alert(
        "Instructions:\n\n" +
        "- Click 'Start' or press 'Enter' to start the stopwatch.\n" +
        "- Click 'Stop' or press 'Spacebar' to stop the stopwatch.\n" +
        "- Click 'Reset' or press 'Esc' to reset the stopwatch to 00:00:00.\n"
    );
});

