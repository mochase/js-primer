// 属性描述符
/**
 * 数据属性:
 * value,writable,enumerable,configurable;
 * 存取器属性:
 * get,set,enumerable, configurable
 */

 /**
  * 获取自有属性描述符
  */
console.log(Object.getOwnPropertyDescriptor({x: 1}, 'x')) // {value: 1, writable: true, enumerable: true, configurable: true}

const random = {
    get octet () {
        return Math.floor(Math.random() * 256)
    }
}
console.log(Object.getOwnPropertyDescriptor(random, 'octet')) // {get: , set: undefined, enumerable: true, configurable: true}

/**
 * 设置自有属性
 */
const o = {}
Object.defineProperty(o, 'x', {
    value: 1,
    writable: true,
    enumerable: false,
    configurable: true
})
console.log(o.x, Object.keys(o)) // 1, []. 可读但是不可枚举
Object.defineProperty(o, 'x', {
    writable: false
})
o.x = 2
console.log(o) // { x: 1 }, 不可写, 但是此时依然可配置
Object.defineProperty(o, 'x', {
    value: 2
})
console.log(o) // { x: 2 }