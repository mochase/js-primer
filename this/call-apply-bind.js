/**
 * call, apply, bind 用来改变函数的执行上下文(改变函数体内this的指向)
 * call, apply 立即调用, bind 只绑定 this
 */

/**
 * call(_this, arg1, arg2)
 * apply(_this, [arg1, arg2])
 */

 /**
 * func.bind(thisArg[, arg1[, arg2...]])
 * 多次使用bind函数无效!
 * 当用 new 来构造新实例时,thisArg参数被忽略, arg参数依然有效
 * 
 */

var foo = { x: 3 }
function bar () {
    console.log(this.x)
}
bar() 
//undefined
var ff = bar.bind(foo)
ff()
//3



// 一些应用
var _this = [1, 2, 3]
var arg2 = ['a', 'b', 'c']
var output_1 = Array.prototype.push.call(_this, 'a', 'b', 'c')
var output_2 = Array.prototype.push.apply(_this, arg2)
[1, 2, 3, 'a', 'b', 'c']

var numbers = [1, 2, 100, -100]
var maxNumber = Math.max.apply(Math, numbers)
