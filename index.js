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
            document.querySelector('[data-value="days"]').textContent = timeComponents.days;
            document.querySelector('[data-value="hours"]').textContent = timeComponents.hours;
            document.querySelector('[data-value="mins"]').textContent = timeComponents.mins;
            document.querySelector('[data-value="secs"]').textContent = timeComponents.secs;
             if (deltaTime<0) {
            clearInterval(id);
            } 
      }, 1000); 
    };
};

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 22 2021'),
});

timer.start();

