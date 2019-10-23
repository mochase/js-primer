var isArray = function (o) {
    return typeof o === 'object' &&
    Object.prototype.toString.call(o) === '[object Array]'
}

const arr = [1,2,3]
console.log(isArray(arr))