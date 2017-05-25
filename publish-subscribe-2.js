//订阅者模式实现二
function Observer() {
    this.fns = []
}

Observer.prototype = {
    subscribe: function (fn) {
        this.fns.push(fn)
    },
    unsubscribe: function (fn) {
        this.fns = this.fns.filter(function(item) {
            return item !== fn
        })
    },
    publish: function (data, thisObj) {
        var _this = thisObj || this
        this.fns.forEach(function(item) {
            item.call(_this, data)
        })
    }
}

//测试
var o = new Observer
var f1 = function (data) {
    console.log('这是第一个观察者:' + data)
}

var f2 = function (data) {
    console.log('这是第二个观察者:' + data)
}

o.subscribe(f1)
o.subscribe(f2)

o.publish('更新了')

//退订f1
o.unsubscribe(f1)
//再来验证
o.publish('又更新了')