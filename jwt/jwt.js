const jwt = require('jwt-simple')
const base64url = require('base64url')
const data = {
    clusterId: 'localtest.Db4xtQ.J4dBkw1tYkkRMpwiEQXH3XD8kQc',
    email: 'test_tony@linktimecloud.com',
    isAdmin: true,
    exp: 1553224907
}

const token = jwt.encode(data, 'secret', 'HS512')
console.log(token)
const arr = token.split('.')
console.log(base64url.decode(arr[0]), 'header')
console.log(base64url.decode(arr[1]), 'payload')

const decode_data = jwt.decode(token, 'secret', false, 'HS512')
console.log(decode_data)