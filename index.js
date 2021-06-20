function getTimeComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    return { days, hours, mins, secs };
};


class CountdownTimer{
    constructor({ selector, targetDate }) {
        this.selector=selector;
        this.targetDate=targetDate;
    };
    start() {
        setInterval(() => {
            
            const currentTime = Date.now();
            const deltaTime = this.targetDate - currentTime;
            const timeComponents = getTimeComponents(deltaTime);
            document.querySelector('[data-value="days"]').textContent = timeComponents.days;
            document.querySelector('[data-value="hours"]').textContent = timeComponents.hours;
            document.querySelector('[data-value="mins"]').textContent = timeComponents.mins;
            document.querySelector('[data-value="secs"]').textContent = timeComponents.secs;
        }, 1000);
    };
    
};
const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});
timer.start()

