/**
 * 2018/04/10 @mochase
 */

//  Set对象是值的集合, 集合的特性: 元素无序,唯一

/**
 * methods:
 * add(), clear(), delete(), entries(), forEach(), has(), keys(),values(),
 * properties:
 * size
 */

var set = new Set()
set.add(1)
set.add(1)
set.add('text')
set.add({a: 1, b: 2})
var o = {a: 1, b: 2}
set.add(o)
set.has(o)
console.log(set.size)
console.log(set)
set.delete({a: 1, b: 2})
console.log(set)
// iterating
for (let item of set) {
    console.log(item)
}

for (let item of set.keys()) console.log(item)

for (let item of set.values()) console.log(item)

for (let [key, value] of set.entries()) {
    console.log(key, value)
}
// Set迭代器返回的 key, value 相等

// 简单数组去重
var arr = ['value1', 'value2', 'value3', 'value4']
var newArr = [...new Set(arr)]
// var newArr = Array.from(new Set(arr))

// 字符串去重
var str = 'adsfdsfasdasasasfdrtyrtyasdasdsdsf'
var newStr = [...new Set(str)].reduce((a, b) => a + b)

console.log(newStr)
