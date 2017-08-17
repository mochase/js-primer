//  lodash debounce 源码阅读
/**
 * 将一段时间内连续触发的动作,过滤成一个动作最终输出
 * `wait`用来定义时间区间.
 * 函数有`cancel`方法来取消延迟的待执行的`func`
 * `flush`方法用来立即执行`func`
 * `options`参数用来配置`func`的执行点.区间的开始 and/or 结束.最大wait间隔
 * @param {Function} func
 * @param {number} [wait=0]
 * @param {Object} [options={}]
 * @param {boolean} [options.leading=false]
 * @param {number} [options.maxWait]
 * @param {boolean} [options.trailing=true]
 * @return {Function}
 */

function debounce(func, wait, options) {
    let lastArgs,         // ??
        lastThis,        // ??
        maxWait,
        result,         // func 的回调
        timerId,        // 记录时间区间的状态.(leading / trailing) 
        lastCallTime   // 上一次动作触发的时间(请求执行)

    let lastInvokeTime = 0     // 上一次实际执行的时间
    let leading = false
    let maxing = false
    let trailing = true

    if (typeof func != 'func') {
        throw new TypeError('expect a function!')
    }
    wait = +wait || 0
    if (isObject(options)) {
        leading = !!options.leading
        maxing = 'maxWait' in options
        maxWait = maxing ? Math.max(+options.maxWait || 0, wait) : maxWait  // time / undefined
        trailing = 'trailing' in options ? !!options.trailing : trailing
        // 默认为trailing执行
    }

    function invokeFunc(time) {
        const args = lastArgs
        const _this = lastThis

        lastArgs = lastThis = undefined
        lastInvokeTime = time
        result = func.apply(_this, args)
        return result
    }

    function shouldInvoke(time) {
        const timeSinceLastCall = time - lastCallTime
        const timeSinceLastInvoke = time - lastInvokeTime
        // 初次调用, 'wait'limit, 'maxWait'limit
        // timeSinceLastCall < 0 ??
        return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
            (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait))
    }

    function leadingEdge(time) {
        // update lastInvokeTime
        lastInvokeTime = time
        // start timer for the trailing edge
        timerId = setTimeout(timerExpired, wait)
        // invoke the leading edge
        return leading ? invokeFunc(time) : result
    }

    function timerExpired () {
        const time = Date.now()
        if (shouldInvoke(time)) {
            return trailingEdge(time)
        }
        //restart the timer
        timerId = setTimeout(timerExpired, remainingWait(time))
    }

    function trailingEdge(time) {
        timerId = undefined
        // only invoke if we have `lastArgs` which means `func` has been debounced at least once.
        if (trailing && lastArgs) {
            return invokeFunc(time)
        }
        lastArgs = lastThis = undefined
        return result
    }

    function remaingWait(time) {
        const timeSinceLastCall = time - lastCallTime
        const timeSinceLastInvoke = time - lastInvokeTime
        const timeWaiting = wait - timeSinceLastCall
        return maxing ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting
    }

    function cancel() {
        if (timerId !== undefined) {
            clearTimeout(timerId)
        }
        lastInvokeTime = 0
        astArgs = lastCallTime = lastThis = timerId = undefined
    }

    function flush() {
        return timerId === undefined ? result : trailingEdge(Date.now())
    }

    function debounced(...args) {
        const time = Date.now();
        const isInvoking = shouldInvoke(time);
        
        lastArgs = args
        lastThis = this
        lastCallTime = time

        if (isInvoking) {
            // 如果应该执行
            if (timerId === undefined) {
                return leadingEdge(lastCallTime)
            }
            if (maxing) {
                timerId = setTimeout(timerExpired, wait)
                return invokeFunc(lastCallTime)
            }
        }
        if (timerId === undefined) {
            timerId = setTimeout(timerExpired, wait)
        }
        return result
    }
    debounced.cancel = cancel
    debounced.flush = flush
    return debounced;
}
