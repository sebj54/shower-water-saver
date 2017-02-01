Vue.component('shower-multiplicator', app.resolveTemplate('multiplicator', {
    data: function()
    {
        return {
            max: 64
        }
    },
    computed: {
        multiplicator: function()
        {
            return tracker.multiplicator
        }
    },
    methods: {
        upMultiplicator: function()
        {
            tracker.multiplicator *= (tracker.multiplicator === this.max) ? 1 / tracker.multiplicator : 2
        }
    }
}))
