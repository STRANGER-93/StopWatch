
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

let displayTime = document.getElementById('displaytime');
let timer = null;

function updateTime() {
    milliseconds++;

    if(milliseconds == 100) //100 milliseconds *10 = 1 second
    {
        seconds = seconds + 1;
        milliseconds = 0;
        if(seconds == 60)
        {
            minutes = minutes + 1;
            seconds = 0;
        }   
    }
    displayTime.innerHTML =
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds) + ":" +
        (milliseconds < 10 ? "0" + milliseconds : milliseconds);
}

//starting watch
function startWATCH()
{
    if(timer !== null){
        clearInterval(timer);
    }   
    timer = setInterval(updateTime, 10);

}
let startButton = document.getElementById('startBtn');
startButton.addEventListener('click', startWATCH);

//stopping watch
function stopWATCH()
{
    clearInterval(timer);
}
let stopButton = document.getElementById('stopBtn');
stopButton.addEventListener('click', stopWATCH);

//resetting watch
function resetWATCH()
{   
    clearInterval(timer);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    displayTime.innerHTML = "00:00:00";
}   
let resetButton = document.getElementById('resetBtn');
resetButton.addEventListener('click', resetWATCH);
