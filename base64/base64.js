var base64url = require('base64url')
var header = {
    'userId': '1234',
    'sex': 'male'
}
console.log(base64url(JSON.stringify(header)))
// 'eyJ1c2VySWQiOiIxMjM0Iiwic2V4IjoibWFsZSJ9'