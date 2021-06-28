function getTimeComponents(time) {
    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
};
function pad(value) {
    return String(value).padStart(2, '0');
}
const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]'),
};
class CountdownTimer{
    constructor({ selector, targetDate }) {
        this.selector=selector;
        this.targetDate=targetDate;
    };
    start() {
            const id = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = this.targetDate - currentTime;
            const timeComponents = getTimeComponents(deltaTime);
            refs.days.textContent = timeComponents.days;
            refs.hours.textContent = timeComponents.hours;
            refs.mins.textContent = timeComponents.mins;
            refs.secs.textContent = timeComponents.secs;
                if (deltaTime < 0) {
                refs.days.textContent = "00";
                refs.hours.textContent = "00";
                refs.mins.textContent = "00";
                refs.secs.textContent = "00";
                clearInterval(id);
            } 
      }, 1000); 
    };
};

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 28 2021'),
});

timer.start();

