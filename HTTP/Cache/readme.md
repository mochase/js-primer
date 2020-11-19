# 浏览器的缓存策略

`Cache-Control: no-store | no-cache | max-age=<seconds>` 

no-store: 没有缓存.

no-cache: 缓存但重新验证. 每次都会发送请求到服务器进行**validate**, 如果返回304(缓存有效), 则使用本地缓存.

max-age=<seconds>: 设置缓存过期时间.

## 强缓存阶段
如果通过`Cache-Control:max-age=<seconds>` 或者`Expires`设置了缓存过期时间, 则在未过期的这段时间称为**强缓存阶段**, 这时请求会直接读取缓存

> 字段优先级: `Cache-Control > Expires`

## 协商缓存阶段
如果超过了缓存过期时间, 浏览器会先发送请求到服务器进行**validate**, 请求头上会带上`If-None-Match`, `If-Modified-Since`, 服务器比较这两个字段, 如果不需要更新, 返回`304`(缓存有效);否则返回新内容.

`If-None-Match`的值为`Etag`, `If-Modified-Since`的值为`Last-Modified`, `Etag`和`Last-Modified`从之前服务器返回的`response header`中读取, 浏览器会记录.

> 字段优先级: `Etag >  Last-Modified`

## 前端能干的事
通过`meta`标签设置缓存策略. 如使用
```html
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate"/>
```
不使用缓存.