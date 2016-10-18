// 这个例子用promise实现了标准$http函数

'use strict'

function $http(url) {
    var core = {
        // method that performs the ajax request
        ajax: function (method, url, args){
            var promise = new Promise(function (resolve, reject){
                //xhr 实例
                var client = new XMLHttpRequest()
                var uri = url

                if (args && (method === 'POST' || method === 'PUT')){
                    uri += '?'
                    var argCount = 0
                    for (var key in args){
                        if (args.hasOwnProperty(key)){
                            if (argcount ++){
                                // argcount== 0 时不用加 '&'
                                uri += '&'
                            }
                            uri += encodeURIComponent(key) + '=' + encodeURIComponent(args[key])
                        }
                    }
                }

                client.open(method, uri)
                client.send()

                client.onload = function () {
                    if (this.status >= 200 && this.status < 300) {
                        //链接成功， perform the function 'resolve'
                        resolve(this.response)
                    }else {
                        reject(this.statusText)
                    }
                }
                
                client.onerror = function () {
                    reject(this.statusText)
                }
            })
            return promise
        }
    }

    //adapter pattern
    return {
        'get': function (args) {
            return core.ajax('GET', url, args)
        },
        'post': function (args) {
            return core.ajax('POST', url, args)
        },
        'put': function (args) {
            return core.ajax('PUT', url, args)
        },
        'delete': function (args) {
            return core.ajax('DELETE', url, args)
        }
    }
}

//调用实例
var mdnApi = 'https://developer.mozilla.org/en-US/search.json'
var payload = {
    'topic': 'js',
    'q': 'promise'
}

var callback = {
    success: function (data){
        console.log('success' + JSON.parse(data))
    },
    error: function (data){
        console.log('error', JSON.parse(data))
    }
}

$http(mdnApi)
    .get(payload)
    .then(callback.success)
    .catch(callback.error)

// 两种等价的调用方法
$http(mdnApi)
    .get(payload)
    .then(callback.success, callback.error)

$http(mdnApi)
    .get(payload)
    .then(callback.success)
    .then(undefined, callback.error)