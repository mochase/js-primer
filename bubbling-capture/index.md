# EventTarget

element, document, window是常见的事件目标,但是其他对象也可以是事件对象(比如XMLHttpRequest).

`EventTarget.addEventListener`

`EventTarget.removeEventListener`

`EventTarget.dispatchEvent`

## 什么是事件流

window -> event.target -> window 

事件流经历了两个阶段:

1. 从 window 对象到 target (捕获阶段).
2. 再从 target 回溯到 window 对象(冒泡阶段)

![图示](./capture-bubbling.png)


## 如何监听事件

`addEventListener`的最后一个参数,为`true`则表示在捕获阶段监听;`false`则表示在冒泡阶段监听.(默认为false: 冒泡模式)


## 阻止当前事件的进一步传播。

`stopPropagation()`, 后续的监听事件函数不会被触发.

### `stopPropagation`与`stopImmediatePropagation`的区别
如果有多个相同类型事件的事件监听函数绑定到同一个元素，当该类型的事件触发时，它们会按照被添加的顺序执行。如果其中某个监听函数执行了event.stopImmediatePropagation() 方法，则当前元素剩下的监听函数将不会被执行(即会阻止同级的其他监听函数, 区别于event.stopPropagation)

## 为什么会有事件冒泡与捕获两种模式?

解决事件触发的顺序问题. 流本身含有方向的意思.
可以将dom节点看做许多个同心圆, 那么结构: `window -> document -> html -> body -> div -> p`可以看做半径由大到小的一组同心圆,现在假如我们手指向圆心,那么是先执行小圆所代表的事件呢,还是大圆所代表的事件呢?
由此衍生出两种事件模式: **事件冒泡** 与 **事件捕获**

## 如何移除监听事件函数

`removeEventListener`
```
target.removeEventListener(type, listener[, useCapture])
```
type: 表示需要移除的事件类型.
listener: 需要移除的处理函数.
userCapture: 指定需要移除的事件处理函数的类型(冒泡或捕获), 默认为`false`.
> 如果同一监听事件分别在冒泡阶段和捕获阶段分别注册了一次,则这两次事件需要分别移除.两者间互不干扰.

> 一个EventListener被移除以后,如果此事件正在执行,则会立即停止.移除以后可以重新绑定.移除未绑定的EventListener不会起任何作用.

一个例子:
```
var div = document.querySelector('div')
var fn = function (e) {
  /* do something */
}
div.addEventListener('click', fn , false)
div.removeEventListener('click', fn, false)
```

## event.preventDefault()

1. 阻止浏览器的默认行为,比如超链接跳转, input框输入等..
2. 在事件流的任何阶段调用都有效.
3. 并不会阻止事件流的继续传播.


