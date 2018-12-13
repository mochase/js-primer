// this 即执行上下文

/**
 * 全局上下文
 */
console.log(this === window) //true

/**
 * 函数上下文
 */

// 在函数内部,this的值取决于函数执行时的上下文
function f1() {
    return this
} 

f1() === window  //true


/**
 * 对象方法中的this
 */
var o = {
    prop: 37,
    func: function () {
        return this.prop
    }
}
console.log(o.func()) //37


/**
 * 原型链中的this
 */
var o = {
    f: function() {
        return this.a + this.b
    }
}
var p = Object.create(o) //创建原型为o的对象p
p.a = 1
p.b = 4
console.log(p.f()) // 5

/**
 * getter与setter中的this
 */

function getModule () {
    return Math.sqrt(this.re * this.re + this.im * this.im)
}

var o = {
    re: 1,
    im: -1,
    get phase () {
        return Math.atan2(this.im, this.re)
    }
}

Object.defineProperty(o, 'module', {
    get: getModule, enumerable: true, configurable: true
})
console.log(o.phase, o.module)  //-0.78, 1.414

/**
 * 构造函数中的this
 */
function C() {
    this.a = 37
}

var o = new C()
console.log(o.a) //37

// 如果返回值不是一个对象,则返回this
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

function C4(){
    this.a = 37
    return true
}

o = new C4()
console.log(o) //{a: 37}




