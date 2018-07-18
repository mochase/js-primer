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
}).catch(err => {
    console.error("3:" + err)
})


  /**
   * then 方法的参数应该是一个函数;
   * 在函数内部,我们可以做三件事:
   * 1. return 一个 promise 对象
   * 2. return 一个同步的值或是 undefined.
   * 3. 同步的 throw 一个错误
   */