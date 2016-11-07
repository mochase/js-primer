/**
 * 全局上下文
 */

// 在全局运行上下文中（任何函数体外部），this指代全局对象
console.log(this.document === document) //true

//在浏览器中，全局对象为window对象
console.log(this === window) //true

this.a = 37
console.log(window.a) //37

/**
 * 函数上下文
 */

//在函数内部,this的值取决于函数时如何调用的
function f1() {
    return this
} 

f1() === window  //true

function f2(){
    'use strict'
    return this
}

f2() === undefined //true;这里有些浏览器会返回错误的结果:window

/**
 * 对象方法中的this
 */

//当以对象中的方法的方式调用函数时,this指代调用该函数的对象
var o = {
    prop: 37,
    func: function () {
        return this.prop
    }
}
console.log(o.func()) //37

//运行时决定this
var o = {prop: 37}
function independent(){
    return this.prop
}
o.f = independent
console.log(o.f()) //37

o.b = {
    g: independent,
    prop: 42
}
console.log(o.b.g()) //42

/**
 * 原型链中的this
 */
// 如果该方法存在于一个对象的原型链上,那么this指向调用这个方法的对象
var o = {
    f: function() {
        return this.a + this.b
    }
}
//创建原型为o的对象p
var p = Object.create(o)
p.a = 1
p.b = 4
console.log(p.f()) //5

/**
 * getter与setter中的this
 */

function modules(){
    return Math.sqrt(this.re * this.re + this.im * this.im)
}

var o = {
    re: 1,
    im: -1,
    get phase(){
        return Math.atan2(this.im, this.re)
    }
}

Object.defineProperty(o, 'modules', {
    get: modules, enumerable: true, configurable: true
})
console.log(o.phase, o.modules)  //-0.78, 1.414

/**
 * 构造函数中的this
 */
// 当构造器返回的默认值是一个this引用的对象时,可以手动设置返回其他的对象,如果返回值不是一个对象,返回this
function C() {
    this.a = 37
}

var o = new C()
console.log(o.a) //37

function C2() {
    this.a = 37
    return {a: 38}
}

o = new C2()
console.log(o.a) //38

function C3(){
    this.a = 37
    return {b: 40, c: 49}
}
o = new C3()
console.log(o.a) //undefined
// 这里手动的设置了返回对象,与this绑定的默认对象被取消

function C4(){
    this.a = 37
    return true
}

o = new C4()
console.log(o) //{a: 37}
//如果返回值不是一个对象,则返回this

/**
 * call和apply,将函数存储为对象的临时方法(传递了this),如果传递的this值不是一个对象,js将尝试自动转换为对象
 */
function add(c, d){
    return this.a + this.b + c + d
}
var o = {a: 1, b: 3}
// The first parameter is the object to use as 'this', subsequent parameters are passed as 
// arguments in the function call
add.call(o, 5, 7) //1 + 3 + 5 + 7 = 16
// The first parameter is the object to use as 'this', the second is an array whose
// members are used as the arguments in the function call
add.apply(o, [10, 20]) //1 + 3 + 10 + 20 = 34

function bar(){
    console.log(Object.prototype.toString.call(this))
}
bar.call(7) //[object, Number]

/**
 * bind方法,会创建一个与f具有相同函数体和作用域的函数
 */
function f(){
    return this.a
}

var g = f.bind({a: 'atzeey'})
console.log(g()) //atzeey

var o = {a: 37, f: f, g: g}
console.log(o.f(), o.g()) //37, atzeey
