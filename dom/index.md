***align***
废弃: 设置table元素的align

***title***
设置元素的title.通常表现为当鼠标hover元素时以tooltip的形式展示

***lang***
设置元素属性值或文本内容的base language, 'en'表示英语, 'zh-cn'表示简体中文等.可以应用在单独的元素上,但是通常在文档的根元素(html)上指定.

***translate***
缺省

***dir***
设置元素文本的书写方向, `ltr` | `rtl`(不同语言书写方向不同)

***dataset***
设置元素的自定义属性集,它是一个`DOMStringMap`(现代框架中双向绑定可能会用到).本身可以被读取但不能直接写入,需要作为属性写入.
例如:
```
HTMLelement.dataset.name = 'mochase'
```
html中的结构类似于:
```
<div data-user="mochase" data-id="0" data-group="admin">
    hello
</div>
```
注意: html中data-attribute及其对应的DOM中dataset.property不共享相同的名称, 有一套转换规则:(大致为去掉data-, 中划线转小驼峰)
eg: data-my-sex  ---> mySex
(支持ie11)

***hidden***
缺省.(设置元素是否隐藏)

***tabIndex***
设置当前元素的tab键激活顺序.
支持的元素有: `a`, `area`, `button`, `input`, `object`, `select`, `textarea`, 取值不需要连续.有效值为0 ~ 32767.对于不支持的元素,以他们出现在字符流中的顺序来遍历.(包括tabIndex值相同)

***accessKey***
缺省.

***draggable***
缺省. 设置元素是否可以拖动.

***spellcheck***
缺省. 

***contentEditable***
设置元素是否可编辑.`true` | `false` | `inherit`(测试可用)
ie支持但是有各种奇怪的bug

***isContentEditable***
只读属性,boolean类型,返回当前元素的可编辑状态.
与`contentEditable`对应,例如`input`元素的初始值为`false`

***offsetParent***
只读属性,返回一个指向最近的包含该元素的定位元素,如果没有定位元素,则指向最近的table元素或者根元素.
当元素的style.display 为"none"时, offsetParent返回 null.

***offsetTop***
只读属性, 返回当前元素相对于其offsetParent元素的顶部距离.

***offsetLeft***
只读属性,返回当前元素的左上角相对于其offsetParent元素的左边的距离.
对于块级元素, `offsetTop`, `offsetLeft`, `offsetWidth`, `offsetHeight`描述了元素的border-box与其offsetParent的关系.
对于行内元素, `offsetTop`和`offsetLeft`描述的是第一个边界框的位置.
(only chrome支持)

***offsetWidth***
返回元素的布局宽度.(即元素的border-box宽度, 会被四舍五入取整)

***offsetHeight***
返回元素的布局高度.(即元素的border-box高度, 会被四舍五入取整)

> 盒模型由内到外依次是 content -> padding -> 滚动条(如果有, 被包含在padding内) -> border -> margin

***style***
返回元素的内联样式集合

***innerText***
返回元素以及它的后代节点的文本内容. 可读可写.(写时不删除当前节点)

***outerText***
非标准!作为getter, 返回值同`innerText`;作为setter, 它将删除当前节点并将其替换为给定的文本

***onabort***
缺省. 发送到window中断事件的事件处理.

***onblur***
元素失去焦点时的事件处理函数.
在IE中,几乎所有类型的元素都可以触发blur事件,但在基于gecko的浏览器中,大部分元素都不能触发blur事件.

***oncancel***
缺省.

***oncanplay***
缺省.

***oncanplaythrough***
缺省.

***onchange***
当前元素onChange时的事件处理函数
能使用onChange事件的元素大概有这些: `form`, `select`, `input`, `textarea`
(待深入研究).

***onClick***
当前元素触发click事件时的处理函数.
click 事件发生在 mousedown 和 mouseup 事件之后。

***onclose***
缺省. 当在window对象上触发close事件时的处理函数.

***oncontextmenu***
设置当前窗口contextmenu事件的事件处理函数.
此事件会发生在没有阻止右键事件的情况下,而且这不取决于此元素是否拥有了contextmenu属性.
一个例子: (取消页面右键)
```
window.oncontextmenu = function () {
    return false
}
```

***oncuechange***
缺省.

***ondblclick***
在当前元素上双击鼠标左键时的处理函数.

***ondrag***
缺省

***ondragend***
缺省

***ondragenter***

***ondragleave***

***ondragover***

***ondragstart***

***ondrop***

***oondurationchange***

***onemptied***

***onended***

***onerror***
error事件的处理函数.针对各种目标的不同类型的错误出发了Error事件:
当js运行时错误(包括语法错误)发生时,触发window.onerror().
当一项资源(如`img`和`script`)加载失败,加载资源的元素会触发该元素上的onerror()处理函数.这些error事件不会向上冒泡.

***onfocus***
设置元素获得焦点时的事件处理函数.
在IE中,几乎所有类型的元素都会触发focus事件,但在Gecko中,只有少数几种元素会触发focus事件.

***oninput***
当input元素的value属性值由输入设备改变时,就会触发input事件.

***oninvalid***

***onkeydown***
当用户按下键盘上的按键时会触发keydown事件.
非标准

***onkeyup***
在当前元素上释放键盘按键时会触发keyup事件.
非标准

***onkeypress***
当用户在键盘上按下某个键(不是所有的键都会,比如ctrl)以后会触发keypress事件.
非标准

***onload***
当资源加载时触发,适用于`window`, `XMLHttpRequest`, `<img>`等元素的加载事件.

***onloadeddata***
缺省.

***onloadedmetadata***
缺省.

***onloadstart***
缺省.

***onmousedown***
在当前元素上点击鼠标按键时会触发mousedown事件.
非标准

***onmouseup***
在当前元素上放开鼠标某个按键时会触发mouseup事件.
非标准

***onmouseenter***
缺省.

***onmouseleave***
缺省.

***onmousemove***
当用户在当前元素上移动鼠标时会触发mousemove事件.

***onmouseout***
当鼠标离开一个元素时,会在这个元素上触发mouseout事件.

***onmouseover***
当鼠标移动到一个元素上时,会在这个元素上触发mouseover事件.
onmouseover <---> onmouseout

***onmousewheel***
缺省.

***onpause***
缺省.

***onplay***
缺省.

***onplaying***

***onprogress***

***onratechange***

***onreset***
reset 事件只有在用户点击表单中的reset按钮时才会被触发 (`<input type="reset"/>`).

***onresize***
在窗口大小开边之后,就会触发resize事件.

***onscroll***
当滚动某个元素的内容时scroll事件将会被触发.

***onseeked***

***onseeking***

***onselect***
只有在文本框和文本域内选择文本才会触发select事件.

***onshow***

***onstalled***

***onsubmit***
当用户点击提交按钮(`<input type="submit"/>`)提交表单时,会触发submit事件.

***onsuspend***

***ontimeupdate***

***ontimeupdate***

***ontoggle***

***onvolumechange***

***onwaiting***

***click***
触发元素的点击事件.
从`Element`对象继承的方法

***focus***
元素获得焦点
从`Element`对象继承的方法

***blur***
元素失去焦点
从`Element`对象继承的方法

***onauxclick***

***ongotpointercapture***

***onlostpointercapture***

***onpointercancel***

***onpointerdown***

***onpointerenter***

***onpointerleave***

***onpointermove***

***onpointerout***

***onpointerover***

***onpointerup***

***namespaceURI***

***prefix***

***localName***

***tagName***
返回当前元素的标签名
在HTML中返回大写形式.对于元素节点,tagName的值和nodeName的值相同.

***id***
返回元素的id.
唯一.

***className***
返回元素的class属性的值.
用空格分隔开的多个class属性值的字符串.

***classList***
用来取代className,操作更灵活.
```
element.classList.add()
element.classList.remove()
element.classList.item()
element.classList.toggle()
element.classList.contains()
```
兼容性: IE10+,其他主流浏览器均支持.

***slot***
返回当前元素所绑定的shadow DOM 的slot.slot相当于一个占位符,用户可以用自定义标签填充.

***attributes***
返回当前元素的属性集合,它不是数组类型,所以不能直接使用Array上的方法.
```
    Array.prototype.forEach.call(attributes, function (item) {
        console.info(item.name)
        console.info(item.value)
    })
```

***shadowRoot***

***assignedSlot***

***innerHTML***
返回元素后代的序列化HTML代码(特殊字符会转义, 如 '&', '<')
不属于W3C DOM规范, 便捷但是没有统一的标准.
IE下将input的value视作innerHTML,其它浏览器则没有这个问题.

***outerHTML***
返回元素后代(包括元素本身)的序列化HTML代码

***scrollTop***
设置或返回一个元素滚动条距离元素顶部的距离.
如果元素的容器没有产生垂直方向的滚动条,则scrollTop默认为0

***scrollHeight***
只读属性,返回元素的可滚动高度.(若父元素视口 < 子元素高度, scrollHeight = 父元素 padding * 2 + 子元素高度;
若父元素视口 > 子元素高度, scrollHeihgt = 父元素视口)
视口包含padding(不包括 margin, border)
属性将会对值四舍五入取整

***scrollLeft***
设置或返回一个元素滚动条距离元素左边的距离(和元素的排列方向有关,`rtl`, 那么滚动条在最右侧)

***scrollWidth***
只读属性,返回元素的可滚动宽度.
计算规则同`scrollHeight`, 但是padding只计算一遍.
实际测试过程中不同浏览器返回数值有差异.

***clientTop***
只读属性. 返回元素顶部边框的宽度(即border-top-width)
会对结果取整.

***clientHeight***
只读属性,返回元素内部的高度
clientHeight = content Height + padding - 水平滚动条高度(如果有)
会对结果取整.

***clientLeft***
只读属性,返回元素左边框的高度.(即border-left-width)

***clientWidth***
只读属性,返回元素内部的宽度
计算规则同 clientHeight

***onbeforecopy***
***onbeforecut***
***onbeforepaste***

***oncopy***
oncopy属性用来获取或设置当前元素的copy事件的事件处理函数.

***oncut***
oncut属性用来获取或设置当前元素的cut事件的事件处理函数.

***onpaste***
onpaste 属性用来获取或设置当前元素的paste事件的事件处理函数.

***onsearch***
***onselectstart***
通常是select下拉框来触发.

***onwheel***
通过在元素上移动鼠标滚轮来触发.

***onwebkitfullscreenchange***
***onwebkitfullscreenerror***

***previousElementSibling***
只读属性.返回当前元素前一个兄弟节点(元素节点).
如果该元素已经是第一个, 则返回null

***nextElementSibling***
只读属性, 返回当前元素下一个兄弟节点(元素节点).
如果该元素已经是最后一个,则返回null

***children***
只读属性. 返回当前元素所有子元素的动态集合的引用(对子元素的删改会改变该引用的值)
不包含文本节点.

***firstElementChild***
只读属性,返回元素的第一个元素节点.没有则返回null

***lastElementChild***
只读属性,返回元素的最后一个元素节点,没有则返回null

***childElementCount***
只读属性,返回元素所有子元素节点的数量.

***hasAttribute***
boolean类型, 返回元素是否包含指定属性.

***hasAttributeNS***

***hasAttributes***
待废弃! boolean类型, 返回元素是否至少包含一个属性.
```
if (node.hasAttributes()) {
    // do something
}
```
***getAttribute***
返回元素指定属性的值,如果没有则为`null`或空字符串.(视浏览器决定)

***getAttributeNS***
返回元素在指定命名空间中某属性的值,如果没有则为`null`或空字符串
命名空间只在`XML`中支持.故 `html5`无法使用该api

***setAttribute***
设置元素指定属性的值,如果该属性之前不存在则会新创建.
boolean类型的属性始终会被认为`true`, 无论它们的值是什么;对于这样的属性,作为规则,你应该使用空字符串给其赋值.

***setAttributeNS***

***removeAttribute***
删除指定属性.(删除不存在的属性不会报错)

***removeAttributeNS***

***getAttributeNode***
返回元素指定属性的属性节点(返回的是属性节点, nodeType为2, 区别于 `getAttribute`)

***getAttributeNodeNS***

***setAttributeNode***

***setAttributeNodeNS***

***removeAttributeNode***

***closet***
匹配特定选择器且离当前元素最近的祖先元素（也可以是当前元素本身）。如果匹配不到，则返回 null。
Only chrome, firefox 支持

***matches***
如果元素将被指定的选择器字符串选择，Element.matches()  方法返回true; 否则返回false。

***webkitMatchesSelector***
Element.matches()的非标准实现方式


***attachShadow***
给指定元素挂载一个shadow DOM,并且返回它的 ShadowRoot
有兼容性问题.


***getElementsByTagName***
返回包含指定tagName的所有子元素的动态集合的引用(不包括元素本身).
和`document.getElementsByTagName`类似,但是搜索范围被限制在元素的子元素.

***getElementsByTagNameNS***

***getElementsByClassName***
返回包含指定class的所有子元素的动态集合的引用(包括元素本身).
和`document.getElementsByTagName`类似,但是搜索范围被限制































### 参见:
Element.getClientRects()
