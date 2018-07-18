let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        if (Date.now() % 2 === 0) {
            resolve('偶')
        } else {
            reject('奇')
        }
    }, 500)
})

Promise.resolve(Date.now()).then(data => {
    console.log("1:" + data)
    return promise
}).then(data => {
    console.log("2:" + data)
}, error => {
    console.error('2:' + error)
}).then(data => {
    console.log("3:" + data)
}).catch(err => {
    console.error(err)
})

/**
 * 未被捕获的 reject 会一直沿着 then() 链向下传递.一旦被捕获,下一级会收到 resolve (除非显式的 return reject).
 * 如果链的底部未捕获 reject, 则会抛错.
 */