/**
 * call, apply, bind 用来改变函数的执行上下文(改变函数体内this的指向)
 * call, apply 立即调用, bind 只绑定 this
 * f.call(_this, arg1, arg2)
 * f.apply(_this, [arg1, arg2])
 * f.bind(_this, [, arg1[, arg2...]])
 */

var foo = { x: 3 }
function bar () {
    console.log(this.x)
}
var ff = bar.bind(foo)
ff()
//3

// 一些应用
var arr = [1, 2, 3]
var args= ['a', 'b', 'c']
var output_1 = Array.prototype.push.call(arr, 'a', 'b', 'c')
var output_2 = Array.prototype.push.apply(arr, args)
[1, 2, 3, 'a', 'b', 'c']

var numbers = [1, 2, 100, -100]
var maxNumber = Math.max.apply(Math, numbers)
