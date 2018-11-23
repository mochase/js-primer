1. then 方法的参数应该是一个函数;在函数内部,我们可以做三件事:
    1. return 一个 promise 对象
    2. return 一个同步的值或是 undefined.
    3. 同步的 throw 一个错误
2.  未被捕获的 reject 会一直沿着 then() 链向下传递.一旦被捕获,下一级会收到 resolve (除非显式的 return reject). 如果链的底部未捕获 reject, 则会抛错.
3.  Promise 链中的 try / catch: 未被捕获的异常同 reject; 已被捕获的异常同 resolve;
   