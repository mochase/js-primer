function f1() {
    return this
} 

f1() === window 
// true

var o = {
    prop: 37,
    func () {
        return this.prop
    }
}
o.func() 
// 37

var o = {
    fn () {
        return this.a + this.b
    }
}
var p = Object.create(o) 
p.a = 1
p.b = 4
p.fn()
// 5

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
console.log(o.phase, o.module)  
//-0.78, 1.414

/**
 * 构造函数中的this
 * 如果返回值不是一个对象,则返回this
 */
function C3(){
    this.a = 37
    return {b: 40, c: 49}
}
o = new C3()
// undefined

// 绑定this
const fn = document.querySelector
fn.call(document, 'div')





