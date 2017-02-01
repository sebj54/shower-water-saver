var tracker = new Vue({
    data: {
        time: {
            actual: 0,
            objective: 492
        },
        multiplicator: 1,
        isStarted: false,
        interval: null
    },
    computed: {
        actualProgress: function()
        {
            return this.time.actual / this.time.objective
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
            this.isStarted = true
            this.interval = setInterval(this.update, 10)
        },

        restart: function()
        {
            this.reset()
            this.start()
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
    }
})
