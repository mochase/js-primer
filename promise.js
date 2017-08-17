// promise 测试用例

/**
 * Promise.resolve(value)
 * Promise.reject(err)
 * 生成了一个固定状态的promise
 */

/**
 * 链式调用
 * 除非显示返回一个 Promise.reject(err)对象,否则会被下一层resolve回调函数捕获
 */
 function t() {
   return Promise.resolve(+Date.now())
 }

 t().then(data => {
   console.log("1:" + data)
   return Promise.reject(Date.now())
 }).catch(err => {
   console.error("2:" + err)
   return {}
  //  return Promise.reject(+Date.now())
 }).then(data => {
   console.log("3:" + data)
 }, err => {
   console.error("3:" + err)
 }).catch(err => {
   console.error("4:" + err)
 })

 /**
  * Promise 构造函数
  */
  let promise = new Promise(function(resolve, reject) {
    if ((+Date.now()) % 2 === 1) {
      resolve('double')
    } else {
      reject('odd')
    }
  })

  promise.then((data) => {
    console.log("1:" + data)
  }, error => {
    console.error("2:" + error)
  }).then(data => {
    console.log("3:" + data)
  }, error => {
    console.error("4:" + error)
  })
  
/**
 * Promise 链中的 try / catch
 * 未使用 try / catch 抛出的异常会被下一层的 reject 回调函数捕获;
 * 其他 则被 resolve 回调捕获
 */

  function unexpect () {
    // try {
      throw new Error('some error')
    // } catch (e) {
    //   console.error(e)
    // }
  }

  // unexpect()

  Promise.resolve('yes').then((data) => {
    console.log("1:" + data)
    unexpect()
  }).then(data => {
    console.log("2:" + data)
  }, error => {
    console.error("3:" + error)
  })