Vue.component('shower-counter', app.resolveTemplate('counter', {
    data: function()
    {
        return {
            time: {
                actual: 0,
                objective: 492
            },
            consumption: {
                actual: 0,
                objective: 65.1
            },
            flowRate: 0.13167,
            actualProgress: 0
        }
    },
    computed: {
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
