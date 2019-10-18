// 遍历


/**
 * for...in 
 * 所有可枚举属性(自有属性+继承属性)
 */
let o = Object.create({ p: 1})
o.x = 2
for (let i in o) {
    console.log(i)
}

/**
 * Object.keys
 * 可枚举属性(自有属性)
 */
console.log(Object.keys(o))
// 模拟实现
function keys (o) {
    if (typeof o !== 'object') throw TypeError()
    let result = []
    for (let i in o) {
        if (o.hasOwnProperty(i)) {
            result.push(i)
        }
    }
    return result
}

/**
 * Object.getOwnPropertyNames()
 * 所有自有属性(包括不可枚举属性))
 */
const arr = ['a', 'b', 'c']
console.log(Object.getOwnPropertyNames(arr)) // ["0", "1", "2", "length"]