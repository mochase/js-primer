
//  原型属性
/**
 * isPrototypeOf
 */
const p = {x: 1}
const o = Object.create(p)
console.log(p.isPrototypeOf(o), Object.prototype.isPrototypeOf(o))

// 类属性
/**
 * 形如[object class], 一般通过toString()访问
 */

function classof (o) {
    if (o === null) return 'Null';
    if (o === undefined) return 'Undefined';
    return Object.prototype.toString.call(o).slice(8, -1)
}

// 可扩展性
/**
 * 表示是否可以给对象添加新属性
 * 如果对象转换为不可扩展,则不可逆.
 */

 const m = { x: 1}
 console.log(Object.isExtensible(m))
 Object.preventExtensions(m)
 m.y = 2
 console.log(m)

// 对象的可扩展性配合属性的可配置性使用
// 一些工具函数
Object.seal(m)
console.log(Object.isSealed(m))
// 更严格,已有属性不可写
Object.freeze(m)
console.log(Object.isFrozen(m))