Vue.component('shower-stop', app.resolveTemplate('stop', {
    computed: {
        shown: function()
        {
            return tracker.time.actual !== 0
        }
    },
    methods: {
        stop: function()
        {
            tracker.stop()
            tracker.reset()
        }
    }
}))
