let countdown;
const timerDisplay = document.querySelector('.display_timer');
const endTime = document.querySelector('.display_end');
const end = new Date('01/25/2018 7:0 PM');

function timer(seconds){

    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        if (secondsLeft <= 0) {
            clearInterval(countdown);
            return;
        }

        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    // const display = `${days}:${hours}:${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;

    console.log(days, hours, minutes, remainderSeconds);

    //timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
    console.log(timestamp)
    const end = new Date(timestamp);
    const hour = end.getHours();
    const adjustedHour = hour > 12 ? hour - 12 : hour;
    const minutes = end.getMinutes();

    endTime.textContent = `Come back at ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}