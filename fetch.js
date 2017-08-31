// fetch api 使用例子
var body = JSON.stringify({
  type: 'tony',
  from: 'xx@qq.com',
  subject: 'offical email'
})

var headers = new Headers()
headers.set('Content-Type', 'application/json')
var url = '/some/path'
var request = new Request(url, {
  method: 'POST',
  headers: headers,
  body: body
})

fetch(request).then(res => {
  alert('success')
  res.json().then(data => {
    console.log(data)
  }).catch(e => {
    console.error('返回数据不是json格式')
  })
})