const buffer = new ArrayBuffer(16)
let int32View = new Int32Array(buffer)
console.log(buffer)
console.log(int32View.length)

for (let i = 0; i < int32View.length; i++) {
    int32View[i] = i * 10
}

console.log(int32View)
let int8 = new Int8Array(buffer)
int8[0] = -127
console.log(int8)