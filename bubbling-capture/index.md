EventTarget是一个由可以接受事件的对象实现的接口.并且可以为它们创建监听器.
element, document, window是常见的事件目标,但是其他对象也可以是事件对象(比如XMLHttpRequest).
需要事件目标还支持通过on...属性设置事件处理函数.

`EventTarget.addEventListener`
`EventTarget.removeEventListener`
`EventTarget.dispatchEvent`

***addEventListener 与事件的冒泡与捕获***

***事件阶段***
当一个DOM事件触发时,它不是在触发的对象上只触发一次的, 而是经历三个阶段.分别为"
1. 一开始从文档的根节点流向目标对象(捕获阶段).
2. 然后在目标对象上被触发(目标阶段)
3. 之后再回溯到文档的根节点(冒泡阶段)

![demo.png](./demo.png)
