Vue.component('counter', app.resolveTemplate('counter', {
    data: function()
    {
        return {
            time: {
                actual: 0,
                average: 492
            },
            consumption: {
                actual: 0,
                average: 65.1
            },
            flowRate: 0.13167
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
    },
    computed: {
        actualTime: function()
        {
            return this.formatTime(this.time.actual)
        },
        averageTime: function()
        {
            return this.formatTime(this.time.average)
        },
        actualConsumption: function()
        {
            return this.formatConsumption(this.consumption.actual)
        },
        averageConsumption: function()
        {
            return this.formatConsumption(this.consumption.average)
        }
    }
}))
