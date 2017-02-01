Vue.component('shower-progress', app.resolveTemplate('progress', {
    data: function()
    {
        return {
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
        toggle: tracker.toggle
    },
    mounted: function()
    {
        this.progressLength = this.$el.querySelector('.js-progress').getTotalLength()
    }
}))
