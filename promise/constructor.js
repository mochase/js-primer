// 构造函数声明

let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        if (Date.now() % 2 === 0) {
            resolve('偶')
        } else {
            reject('奇')
        }
    }, 500)
})