Vue.component('shower-progress', app.resolveTemplate('progress', {
    data: function()
    {
        return {
            time: tracker.time,
            isStarted: false,
            multiplicator: 1,
            progressLength: 0
        }
    },
    computed: {
        dashOffset: function()
        {
            return this.progressLength - this.progressLength * (this.actualProgress - Math.trunc(this.actualProgress))
        },
        actualProgress: function()
        {
            return tracker.actualProgress
        }
    },
    methods: {
        reset: function()
        {
            this.time.actual = 0
        },

        update: function()
        {
            this.time.actual += this.multiplicator / 100
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
