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

> 盒模型由内到外依次是 content -> padding -> 滚动条(如果有, 可能会与padding有重叠) -> border -> margin














































### 参见:
Element.getClientRects()
