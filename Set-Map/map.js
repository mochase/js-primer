/**
 *  2018/04/10 @mochase
 */

// Map 对象保存键值对,任何值(对象或者原始值)都可以作为 key 或者 value
/**
 * methods:
 * clear(), delete(key), entries(), forEach(), get(), has(), keys(), values(), set(key, value)
 * properties:
 * size
 */

var map = new Map()
var keyObj = {}
var keyFunc = function () {}
map.set(keyObj, '和键 keyObj 关联的值')
map.set(keyFunc, '和键 keyFunc 关联的值')

map.size

// 迭代器
for (let [key, value] of map) {
    console.log(key + '=' + value)
}

map.forEach(function (value, key) {
    console.log(key + '=' + value)
})

// 映射与二维数组的关系
var karr = [['key1', 'value1'], ['key2', 'value2']]
var map = new Map(karr)
console.log(map.get('key1'))
console.log([...map])
console.log([...map.values()]) // ['value1', 'value2']

var newArr = [['key1', 'value1'], ['key2', 'value2'], ['key1', 'value3']]
var newMap = new Map(newArr)
console.log(newMap.size)
console.log(newMap.get('key1')) // 结果为"value3", value1被覆盖了
