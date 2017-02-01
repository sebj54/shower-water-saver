Vue.component('shower-counter', app.resolveTemplate('counter', {
    data: function()
    {
        return {
            time: tracker.time,
            flowRate: 0.13167
        }
    },
    computed: {
        consumption: function()
        {
            return {
                actual: this.getConsumption(this.time.actual),
                objective: this.getConsumption(this.time.objective)
            }
        },
        actualProgress: function()
        {
            return tracker.actualProgress
        },
        actualTime: function()
        {
            return this.formatTime(this.time.actual)
        },
        objectiveTime: function()
        {
            return this.formatTime(this.time.objective)
        },
        actualConsumption: function()
        {
            return this.formatConsumption(this.consumption.actual)
        },
        objectiveConsumption: function()
        {
            return this.formatConsumption(this.consumption.objective)
        }
    },
    methods: {
        getConsumption: function(time)
        {
            return time * this.flowRate
        },

        formatTime: function(time)
        {
            var seconds = time % 60
            var minutes = (time - seconds) / 60
            return minutes + "' " + this.formatSeconds(seconds) + '"'
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
        }
    }
}))
