## 删除属性

`delete` 运算符只能删除自有属性,不能删除继承属性

## 检测属性

`in` 运算符,如果对象的自有属性或者继承属性中包含,则返回true
```js
var o = { x: 1 }
if ('x' in o) return 0
```

`hasOwnProperty`用来检测是否是自有属性
```js
var o = { x: 1 }
if (o.hasOwnProperty('x')) return 0
```

`propertyIsEnumerable`用来检测: 自有属性 且 可枚举

```js
var o = Object.create({x: 1})
o.y = 2
if (o.propertyIsEnumerable('x')) return 0

```

## 枚举属性

`for..in`,`for..of`循环: 遍历对象的所有可枚举属性(包括继承属性)
