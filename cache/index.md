# 浏览器缓存

## 强缓存
`response header`: `Cache-Control`, `Expires`,如果服务器返回了这两个字段,则在未过期的这段时间,再次访问浏览器不会发送请求,直接读取缓存

## 协商缓存

如果缓存时间过期,再次请求时,浏览器会向服务器发送请求,`request header`会带上`If-None-Match: Etag`, `If-Modified-Since: Last-Modified`(Etag, Last-Modified 由第一次请求时服务器返回,浏览器会记载)
, 服务端比较两个字段,如果不需要更新,则返回状态码`304`,浏览器收到返回后继续读取本地缓存;如果需要更新,则返回新内容,浏览器读取.

## 前端能干的事
添加meta信息,`<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate"/>`,不使用缓存

> 字段优先级: `Cache-Control > Expires`; `Etag >  Last-Modified`