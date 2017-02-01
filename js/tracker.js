var tracker = new Vue({
    data: {
        time: {
            actual: 0,
            objective: 492
        }
    },
    computed: {
        actualProgress: function()
        {
            return this.time.actual / this.time.objective
        }
    }
})
