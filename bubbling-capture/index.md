EventTarget是一个由可以接受事件的对象实现的接口.并且可以为它们创建监听器.
element, document, window是常见的事件目标,但是其他对象也可以是事件对象(比如XMLHttpRequest).
需要事件目标还支持通过on...属性设置事件处理函数.

`EventTarget.addEventListener`
`EventTarget.removeEventListener`
`EventTarget.dispatchEvent`

***事件阶段***
当一个DOM事件触发时,它不是在触发的对象上只触发一次的, 而是经历三个阶段.分别为"
1. 一开始从文档的根节点流向目标对象(捕获阶段).
2. 然后在目标对象上被触发(目标阶段)
3. 之后再回溯到文档的根节点(冒泡阶段)

![demo.png](./demo.png)

***addEventListener 与事件的冒泡与捕获***
`addEventListener`的最后一个参数,为true则代表使用事件捕获模式,false则表示事件冒泡模式.(默认为false: 冒泡模式)

***阻止事件继续冒泡***
事件冒泡过程,是可以被阻止的.通过`e.stopPropagation()`.

***为什么会有事件冒泡与捕获两种模式?***
事件流: 流本身含有方向的意思.
可以将dom节点看做许多个同心圆, 那么结构: `window -> document -> html -> body -> div -> p`可以看做半径由大到小的一组同心圆,现在假如我们手指向圆心,那么是先执行小圆所代表的事件呢,还是大圆所代表的事件呢?
由此衍生出两种事件模式: ###事件冒泡###与###事件捕获###

***`EventTarget.removeEventListener`***
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
div.remoceEventListener('click', fn, false)
```

