//call apply bind函数的区别

/**
 * call apply 用来改变函数的执行上下文(改变函数体内this的指向)
 * 两者接受参数的形式不一样.
 * call(_this, arg1, arg2)
 * apply(_this, [arg1, arg2])
 */

// 一些应用
var arg1 = [1, 2, 3]
var arg2 = ['a', 'b', 'c']
var output_1 = Array.prototype.push.call(arg1, arg2)
// output_1 === [1, 2, 3, ['a', 'b', 'c']]
var output_2 = Array.prototype.push.apply(arg1, arg2)
// output_2 === [1, 2, 3, 'a', 'b', 'c']

var numbers = [1, 2, 100, -100]
var maxNumber = Math.max.apply(Math, numbers)
maxNumber = Math.max.call(Math, 1, 2, 100, -100)

//使类数组对象(nodeList, arguments)能够调用Array下的所有方法(push, pop)
function test() {
    var a = Array.prototype.slice.call(arguments)
    console.log(a)
}
test(1, 2, 4)
// [1, 2, 4]

function log() {
    var args = Array.prototype.slice.call(arguments)
    args.unshift('app,')
    console.log.apply(console, args)
}
log('hello', 'world')

/**
 * bind是返回绑定执行上下文后的函数,便于稍后调用;
 * call, apply则是立即调用
 */
var foo = {x: 3}
function bar () {
    console.log(this.x)
}
bar() 
//undefined
var ff = bar.bind(foo)
ff()
//3

/**
 * func.bind(thisArg[, arg1[, arg2...]])
 * arg参数将置于实参之前被调用
 * 多次使用bind函数无效!
 * 当用 new 来构造新实例时,thisArg参数被忽略, arg参数依然有效
 * 
 */

var a = function() {
    console.log(this.x)
}

var b = {x: 3}
var c = {x: 4}
var d = {x: 5}
var func = a.bind(b).bind(c)
func();
//3
(a.bind(b).bind(c).bind(d))()
//3

//一个应用:给函数传递预设的初始参数.
function list() {
    return Array.prototype.slice.call(arguments)
}
var list2 = list.bind(undefined, 37)
var list3 = list2(1, 2, 3)
// [37, 1, 2, 3]

//另一个应用: 配合setTimeout
function SetTime() {
    this.time = 'now'
}
SetTime.prototype.show = function() {
    setTimeout(this.add.bind(this), 1000)
}
SetTime.prototype.add = function () {
    this.time += 'is beijing ..'
}

var t = new SetTime()
t.show()