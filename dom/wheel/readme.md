# wheel 事件

1. 用`wheel`事件代替待废弃的`mousewheel/DOMMouseScroll`事件
2. 不要将`wheel`事件和`scroll`事件混淆,wheel事件是鼠标事件,而scroll事件是针对document的,鼠标滚动不一定会触发文档的滚动.(譬如`overflow: hidden`时滚动鼠标)
3. 不要依赖wheel event的`delta`属性来确定文档滚动的方向,方向和系统/浏览器设置都有关系,文档甚至不滚动.
4. 目前的支持情况: 仅Opera浏览器完全不支持, IE部分支持

