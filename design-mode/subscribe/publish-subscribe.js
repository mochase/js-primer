// 订阅者模式

var pubsub = {};
(function(q) {
    //话题组
    /**
     * {
     *  topic_1: [{token: '', func: ''}],
     * 
     *  
     * }
     */
    var topics = {}
    //订阅者id
    var uid = 0

    //发布方法
    q.publish = function (topic, args) {
        if (!topics[topic]) {
            //无人订阅
            return false
        }
        var subscribers = topics[topic]
        var len = subscribers ? subscribers.length : 0

        while (len--) {
            subscribers[len].func(topic, args)
        }
        return true
    }
    //订阅方法
    q.subscribe = function(topic, func) {
        if (!topics[topic]) {
            topics[topic] = []
        }
        var token = (uid ++).toString()
        topics[topic].push({
            token: token,
            func: func
        })
        return token
    }
    //退订方法
    q.unsubscribe = function (token) {
        for (var i in topics) {
            if (topics[i]) {
                for (var j = 0; j < topics[i].length; j++) {
                    if (topics[i][j].token === token) {
                        topics[i].splice(j, 1)
                        return token
                    }
                }
            }
        }
    }
})(pubsub);

var token = pubsub.subscribe('example1', function (topic, data) {
    console.log("这是第一个订阅者", topic + ":" + data)
})
pubsub.subscribe('example1', function (topic, data) {
    console.log("这是第二个订阅者", topic + ":" + data)
})
//发布通知
pubsub.publish('example1', 'hello world')
pubsub.publish('example1', ['test', 'a', 'b', 'c'])

pubsub.unsubscribe(token)

//再次发布
pubsub.publish('example1', 'hello again, see what will happen')
