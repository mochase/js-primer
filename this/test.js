var a = 1
function t () {
    var a = 2
    return function () {
        console.log(a)
    }
}

var f = t()
f()