/**
 * 单例模式
 */

var singleTon = (function() {
    var instance;
    function init() {
        var privateV1 = 'a';
        var privateV2 = 'b';
        function privateMethod () {
            console.log(privateV1)
        }
        return {
            publicMethod: function () {
                console.log('hello')
            },
            publicV: 'public',
            someMethod: privateMethod
        }
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = init()
            }
            return instance
        }
    }
})()