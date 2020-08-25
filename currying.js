/**
 * 柯里化函数
 * 用闭包把参数保存起来，当参数的数量足够执行函数了，就开始执行函数
 */

function currying(fn, args) {
    const length = fn.length
    args = args || []
    return function () {
        args = args.concat(Array.from(arguments))
        if (args.length < length) {
            console.log(args.length)
            return currying.call(this, fn, args)
        } else {
            return fn.apply(this, args)
        }
    }
}

const foo = function (a, b, c, d) {
    return a + b + c + d
} 

const foo_ = currying(foo, [1])

console.log(foo_(2)(3)(4))
