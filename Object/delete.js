let a = { p: { x: 1 }}
let b = a.p
delete a.p
console.log(b.x)
// delete 只是断开连接
// 运算符只能删除自有属性,不能删除继承属性