function $(selector) { return document.querySelector(selector) }
function $$(selector) { return document.querySelectorAll(selector) }

var showerSaver = {
    time: {
        actual: 0,
        average: 492
    },
    consumption: {
        actual: 0,
        average: 65.1
    },
    flowRate: 0.13167,
    interval: null,
    progressLength: 0,
    multiplicator: 1,

    init: function()
    {
        $('.js-progress').classList.remove('-is-over')
        $('.js-actual-time').classList.remove('-is-over')
        $('.js-actual-consumption').classList.remove('-is-over')
        $('.js-average-time').innerHTML = showerSaver.formatTime(showerSaver.time.average)
        $('.js-average-consumption').innerHTML = showerSaver.formatConsumption(showerSaver.consumption.average)
        showerSaver.progressLength = $('.js-progress').getTotalLength()
        $('.js-multiplicator').addEventListener('click', showerSaver.multiplicatorClicked)

        showerSaver.start()
        setTimeout(function()
        {
            showerSaver.stop()
        }, showerSaver.time.average * 1000 + 1000)
    },

    reset: function()
    {
        showerSaver.time.actual = 0
        showerSaver.consumption.actual = 0
    },

    start: function()
    {
        showerSaver.reset()
        showerSaver.isStarted = true

        showerSaver.interval = setInterval(function()
        {
            showerSaver.time.actual += showerSaver.multiplicator / 100
            showerSaver.consumption.actual += showerSaver.flowRate * showerSaver.multiplicator / 100
            showerSaver.updateDisplay()
        }, 10)
    },

    stop: function()
    {
        clearInterval(showerSaver.interval)
        showerSaver.interval = null
    },

    updateDisplay: function()
    {
        $('.js-actual-time').innerHTML = showerSaver.formatTime(showerSaver.time.actual)
        $('.js-actual-consumption').innerHTML = showerSaver.formatConsumption(showerSaver.consumption.actual)

        var actualProgress = showerSaver.consumption.actual / showerSaver.consumption.average

        if (actualProgress > 1)
        {
            $('.js-progress').classList.add('-is-over')
            $('.js-actual-time').classList.add('-is-over')
            $('.js-actual-consumption').classList.add('-is-over')
            actualProgress = actualProgress - Math.trunc(actualProgress)
        }

        $('.js-progress').style.strokeDashoffset = showerSaver.progressLength - showerSaver.progressLength * actualProgress
    },

    formatTime: function(time)
    {
        var seconds = time % 60
        var minutes = (time - seconds) / 60
        return minutes + "' " + showerSaver.formatSeconds(seconds) + '"'
    },

    formatSeconds: function(seconds)
    {
        seconds = parseInt(seconds)
        seconds += ''

        if (seconds.length === 1)
        {
            seconds = '0' + seconds
        }

        return seconds
    },

    formatConsumption: function(liters)
    {
        return liters.toFixed(2) + ' L'
    },

    upMultiplicator: function()
    {
        return showerSaver.multiplicator *= (showerSaver.multiplicator === 64) ? 1 / showerSaver.multiplicator : 2
    },

    multiplicatorClicked: function(e)
    {
        $('.js-multiplicator').innerHTML = '&times' + showerSaver.upMultiplicator()
    }
}

document.addEventListener('DOMContentLoaded', showerSaver.init)
