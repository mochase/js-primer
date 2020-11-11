let isDone: boolean  = false
let num: number = 6
let str: string = 'name'
let arr1: number[] = [1,2,3]
let arr2: Array<number> = [1, 2, 3]
// 元组, 更强约束
let x: [string, number]
x = ['hello', 10]

enum Color { Red = 1, Green = 2, Blue }
let c: Color = Color.Blue
console.log(c)
let b: string = Color[2]
console.log(b)

// 类型断言
let anystr: any = 'test'
let len: number = (anystr as string).length
debugger