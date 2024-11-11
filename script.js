/*let secondsElapsed = 0;
let interval = null;
const time = document.getElementById("time")

function padStart(value) {
    return String(value).padStart(2, "0")
}

function setTime() {
    const minutes = Math.floor(secondsElapsed / 60)
    const seconds = secondsElapsed % 60
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}` ;
}

function timer() {
    secondsElapsed++;
    setTime()
}

function startClock() {
    if (interval) stopClock()
    interval = setInterval(timer, 1000)
}

function stopClock() {
    clearInterval(interval)
}

function resetClock() {
    stopClock()
    secondsElapsed = 0;
    setTime()
}*/

let secondsElapsed = 0;
let millisecondsElapsed = 0;
let interval = null;
const time = document.getElementById("time");

function padStart(value) {
    return String(value).padStart(2, "0");
}

function setTime() {
    const minutes = Math.floor(secondsElapsed / 60);
    const seconds = secondsElapsed % 60;
    const milliseconds = millisecondsElapsed;
    
    // Format the time display to include minutes, seconds, and milliseconds
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}.${padStart(milliseconds)}`;
}

function timer() {
    millisecondsElapsed++;
    if (millisecondsElapsed >= 100) {
        millisecondsElapsed = 0;
        secondsElapsed++;
    }
    setTime();
}

function startClock() {
    if (interval) stopClock();
    interval = setInterval(timer, 10); // Update every 10 milliseconds
}

function stopClock() {
    clearInterval(interval);
}

function resetClock() {
    stopClock();
    secondsElapsed = 0;
    millisecondsElapsed = 0;
    setTime();
}
