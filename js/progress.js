Vue.component('shower-progress', app.resolveTemplate('progress', {
    data: function()
    {
        return {
            time: {
                actual: 0,
                objective: 492
            },
            isStarted: false,
            multiplicator: 1,
            actualProgress: 0,
            progressLength: 0
        }
    },
    computed: {
        dashOffset: function()
        {
            return this.progressLength - this.progressLength * (this.actualProgress - Math.trunc(this.actualProgress))
        }
    },
    methods: {
        reset: function()
        {
            this.time.actual = 0
            this.actualProgress = 0
            // TODO: Call event update time & progress
        },

        update: function()
        {
            this.time.actual += this.multiplicator / 100
            this.actualProgress = this.time.actual / this.time.objective
            // TODO: Call event update time & progress
        },

        start: function()
        {
            this.reset()
            this.isStarted = true

            this.interval = setInterval(this.update, 10)
        },

        stop: function()
        {
            this.isStarted = false
            clearInterval(this.interval)
            this.interval = null
        },

        toggle: function()
        {
            if (this.isStarted)
            {
                this.stop()
            }
            else
            {
                this.start()
            }
        }
    },
    mounted: function()
    {
        this.progressLength = this.$el.querySelector('.js-progress').getTotalLength()
    }
}))
