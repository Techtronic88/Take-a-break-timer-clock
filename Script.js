// LIST OF PROBLEMS YOU WILL FACE
// 1ST: Display on the screen will be 2:4 which is no good, we want 2:04

// 2ND: CLICKING Multiple button will cause the stack to jump wildy and display will screw up

let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const timeEnd = document.querySelector('.display__end-time');
const timeButtons = document.querySelectorAll('[data-time]');


// This function does not run immediately, it has to wait for a second to lapse 
function timer(seconds) {
    clearInterval(countdown) // Clear out existing timer in queue. countdown still a variable therefore it will not give us error
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    showSessionRestartTime(then);

    // We need to figure out how much time still left on the clock
countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
    // We now need to check if we should stop it
    // NOTE: if secondLeft <= 0 will result in clock stop at 0:01 = no good
    // 
    if (secondsLeft < 0 ) {
        clearInterval(countdown);
        return
    }    

    displayTimeLeft(secondsLeft);
     }, 1000 )
}


// RENDER the amount of time we have left to the DOM
function displayTimeLeft(seconds) {
const minutes = Math.floor(seconds / 60);
const remainderSeconds = seconds % 60;
const display = `${minutes}: ${remainderSeconds < 10 ? '0': ''}${remainderSeconds + 's'}`;
document.title =  display;
timerDisplay.textContent = display;
}


// CALCULATE the actual time when the quick breaks finishes eg..
// EG..20 Mins from now the time will be, and then we display that to the DOM

function showSessionRestartTime(timestamp) {
const end = new Date(timestamp);
const hour = end.getHours();
const hourConvert = `${hour > 12 ? hour - 12: hour}`
const minute = end.getMinutes();
timeEnd.textContent = `Be Back At ${hour}: ${minute < 10? '0': ''} ${minute}`;
}

function startTimer(){
    const seconds = parseInt(this.dataset.time); // Turning our timer seconds into a real number
    timer(seconds);
}


//
timeButtons.forEach(button => button.addEventListener('click', startTimer))
    document.customForm.addEventListener('submit', function(e){
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset();
    })



