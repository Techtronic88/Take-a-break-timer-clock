// LIST OF PROBLEMS YOU WILL FACE
// 1ST: Display on the screen will be 2:4 which is no good, we want 2:04

// 2ND: CLICKING Multiple button will cause the stack to jump wildy and display will screw up

let countdown;
const timerDisplay = document.querySelector('.display__time-left');

// This function does not run immediately, it has to wait for a second to lapse 
function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);

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


function displayTimeLeft(seconds) {
const minutes = Math.floor(seconds / 60);
const remainderSeconds = seconds % 60;
const display = `${minutes}: ${remainderSeconds < 10 ? '0': ''}${remainderSeconds + 's'}`;
document.title =  display;
timerDisplay.textContent = display;
}

