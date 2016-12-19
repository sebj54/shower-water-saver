// codepen.io/sebj54/pen/oYJWRX
// @author: sebj54

const showerSaver = {
    time: {
        actual: 0,
        average: 492,
    },
    consumption: {
        actual: 0,
        average: 65.1,
    },
    flowRate: 0.13167,
    interval: null,
    progressLength: 0,
    multiplicator: 1,
    init() {
        document.querySelector('.js-average-time').innerHTML = showerSaver.formatTime(showerSaver.time.average);
        document.querySelector('.js-average-consumption').innerHTML = showerSaver.formatConsumption(showerSaver.consumption.average);
        showerSaver.progressLength = document.querySelector('.js-progress').getTotalLength();
        document.querySelector('.js-multiplicator').addEventListener('click', showerSaver.multiplicatorClicked);

        showerSaver.start();
        setTimeout(() => {
            showerSaver.stop();
        }, showerSaver.time.average * 1000 + 1000);
    },
    reset() {
        showerSaver.time.actual = 0;
        showerSaver.consumption.actual = 0;
    },
    start() {
        showerSaver.reset();
        showerSaver.isStarted = true;

        showerSaver.interval = setInterval(() => {
            showerSaver.time.actual += showerSaver.multiplicator;
            showerSaver.consumption.actual += showerSaver.flowRate * showerSaver.multiplicator;
            showerSaver.updateDisplay();
        }, 1000);
    },
    stop() {
        clearInterval(showerSaver.interval);
        showerSaver.interval = null;
    },
    updateDisplay() {
        document.querySelector('.js-actual-time').innerHTML = showerSaver.formatTime(showerSaver.time.actual);
        document.querySelector('.js-actual-consumption').innerHTML = showerSaver.formatConsumption(showerSaver.consumption.actual);
        document.querySelector('.js-progress').style.strokeDashoffset = showerSaver.progressLength - showerSaver.progressLength * showerSaver.consumption.actual / showerSaver.consumption.average;
    },
    formatTime(time) {
        const seconds = time % 60;
        const minutes = (time - seconds) / 60;
        return `${minutes}' ${showerSaver.formatSeconds(seconds)}"`;
    },
    formatSeconds(seconds) {
        seconds += '';

        if (seconds.length === 1) {
            seconds = `0${seconds}`;
        }

        return seconds;
    },
    formatConsumption(liters) {
        return `${liters.toFixed(2)} L`;
    },
    upMultiplicator() {
        return showerSaver.multiplicator *= (showerSaver.multiplicator === 32) ? 1 / showerSaver.multiplicator : 2;
    },
    multiplicatorClicked() {
        document.querySelector('.js-multiplicator').innerHTML = `&times${showerSaver.upMultiplicator()}`;
    },
};

showerSaver.init();

