var isDone = false;
var num = 6;
var str = 'name';
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
// 元组, 更强约束
var x;
x = ['hello', 10];
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
console.log(c);
var b = Color[2];
console.log(b);
// 类型断言
var anystr = 'test';
var len = anystr.length;
debugger;
