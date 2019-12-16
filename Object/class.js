function Range () {
    this.a = 1
}
Range.prototype = {
    constructor: Range,
    toString: function () {
        return 'some thing'
    },
    includes: function () {
        return '...'
    }
}
// 显式给原型添加构造函数

const range = new Range()
console.log(range.constructor === Range.prototype.constructor) // true