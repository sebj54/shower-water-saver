Vue.component('shower-multiplicator', app.resolveTemplate('multiplicator', {
    data: function()
    {
        return {
            multiplicator: 1,
            max: 64
        }
    },
    methods: {
        upMultiplicator: function()
        {
            this.multiplicator *= (this.multiplicator === this.max) ? 1 / this.multiplicator : 2
            // TODO: Trigger uppedMultiplicator event
        }
    }
}))
