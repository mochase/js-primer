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