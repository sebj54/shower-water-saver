/**
 * App - Provide useful methods across components
 * @type {Object}
 */
var app = {
    vue: null,

    init: function()
    {
        app.vue = new Vue({
            el: '#app'
        })
    },

    /**
     * Perform a GET request
     * @param  {string} url URL of the resource to get
     * @param  {function|null} successCallback Success callback
     * @param  {function|null} errorCallback Error callback
     */
    get: function(url, successCallback, errorCallback)
    {
        var wrappedErrorCallback = function()
        {
            if (app.isCallback(errorCallback))
            {
                errorCallback(data, xhr)
            }
        }

        var xhr = new XMLHttpRequest()
        xhr.open('GET', url, true)

        xhr.onload = function()
        {
            if (xhr.status >= 200 && xhr.status < 400)
            {
                var data

                try
                {
                    data = JSON.parse(xhr.responseText)
                }
                finally
                {
                    data = xhr.responseText
                }

                if (app.isCallback(successCallback))
                {
                    successCallback(data, xhr)
                }
            }
            else
            {
                wrappedErrorCallback
            }
        }

        xhr.onerror = wrappedErrorCallback

        xhr.send()
    },

    /**
     * Get a template from a path
     * @param  {string} path Template path
     */
    resolveTemplate: function(path, component)
    {
        if (!component)
        {
            component = {}
        }

        return function(resolve, reject)
        {
            app.get(path, function(template)
            {
                component.template = template
                resolve(component)
            })
        }
    },

    /**
     * Test if a variable is a valid callback (a function)
     * @param  {*} callback Anything
     * @return {Boolean} true if callback is a function
     */
    isCallback: function(callback)
    {
        return typeof callback === 'function'
    }
}

document.addEventListener('DOMContentLoaded', app.init)
