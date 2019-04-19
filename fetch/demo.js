// fetch api 使用例子

fetch('/data.json').then((res) => {
  if (res.ok) {
    res.json().then((data) => {
      console.log(data)
    })
  }
})

fetch('http://www.example.com/submit.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: 'firstName=Nikhil&favColor=blue&password=easytoguess'
}).then(res => {
  if (res.ok) {
    console.log('it\'s ok')
  }
})

// fetch 函数的参数和Request()构造函数的参数完全一致
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
  body: body,
  mode: 'cors',  // cors | no-cors | same-origin, 跨域设置
  credentials: 'omit'  // omit | same-origin | include,  cookies设置
})

fetch(request).then(res => {
  res.json().then(data => {
    console.log(data)
  }).catch(e => {
    console.error('返回数据不是json格式')
  })
})

// 可以手动构造 Response 对象,通常在 ServiceWorkers 中使用

/**
 * [这个API很“迷人”]https://www.w3ctech.com/topic/854
 */