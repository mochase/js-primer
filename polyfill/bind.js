function bind (f, o) {
    if (f.bind) return f.bind(o)
    else return function () {
        return f.apply(o, arguments)
    }
}

function f(y) {
    return this.x + y
}

var o = {
     x: 1
}
var g = bind(f, o)
console.log(g(2))

// prototype
Function.prototype.bind = function (o) {
    var self = this, boundArgs = arguments
    return function () {
        var args = [], i
        for (i = 1; i < boundArgs.length; i++) args.push(boundArgs[i])
        for (i = 0; i < arguments.length; i++) args.push(arguments[i])
        return self.apply(o, args)
    }
}