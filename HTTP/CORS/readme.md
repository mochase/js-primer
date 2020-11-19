# HTTP 之CORS

## 具体的限制
浏览器限制脚本内发起的跨源HTTP请求, 如XHR和Fetch API.

> 对于css/img等静态资源的跨域请求, 由`CSP`策略来限制(不局限于跨域, 可能更严格)

## 哪些场景会触发CORS

1. 脚本内发起的跨域请求(XHR / Fetch)
2. canvas中的drawImage API
3. WebGL贴图.
4. Web字体: css中通过`@font-face`使用跨域字体资源

## 功能概述

当发起跨域请求时, 如果请求头没有带上合适的参数, 浏览器会直接拦截, 如果有, 则继续; 如果服务端没有正确返回response header(包括不支持CORS的历史项目), 浏览器会对response进行拦截, 前端依然拿不到返回结果.

## **简单请求**与**CORS预检请求**

### 哪些请求是简单请求, 不会触发CORS预检请求?
1. method 为下列之一: `GET | HEAD | POST`
2. 且, 少量的只能包含**对CORS安全的首部字段集合**的请求头. 注意对Content-Type的值有额外的限制:`text/plain | multipart/form-data
| application/x-www-form-urlencoded` 
3. 请求中没有使用`ReadableStream`流
4. 请求中XMLHttpRequestUpload对象没有注册任何事件监听器

> `Content-Type: application/json`格式会触发CORS预检

### 为什么需要CORS预检请求机制?
防止对服务器的数据恶意破坏. 因为只要请求头携带了正确的参数, 浏览器就不会拦截请求, 如果服务端没有正确处理, 即使浏览器拦截了response, 服务端的数据可能已经被恶意破坏了.

### 预检请求的细节
浏览器会先使用`OPTIONS`方法发起一个预检请求到服务器, 询问服务器是否允许该实际请求. 预检请求的request header上会带上`Access-Control-Request-Method`, `Access-Control-Request-Headers`, `Origin`. 如果请求设置了`withCredentials=true`, header上还会带上`Cookie`.

服务端预检请求的response header应该包含`Access-Control-Allow-Origin`, `Access-Control-Allow-Methods`, `Access-Control-Allow-Headers`, 如果请求头上携带了`Cookie`, 返回头上还要带上`Access-Control-Allow-Credentials: true`.

如果预检成功, 则继续发送实际请求. 预检请求由浏览器自动发送, 对开发者透明.

> 如果设置了`Access-Control-Allow-Credentials: true`, 那么`Access-Control-Allow-Origin`不能设置通配符`*`

> CORS预检请求有缓存机制. 即在有效期内, 浏览器无须为同一请求再次发起预检请求. 返回头上添加`Access-Control-Max-Age:<time>`, 来声明缓存有效期.

> Cookie的`SameSite`字段同样会限制跨域时是否携带, 不确定两者的相互关系.

## 其他
`Access-Control-Expose-Headers`: 在跨域请求时, xhr 的getResponseHeader()只能拿到一些基本的响应头, 如果需要访问更多字段, 需要服务器通过该字段设置.



