# HTTP之Cookie

## 创建Cookie
服务端通过`Set-Cookie: <key>=<value>`来添加Cookie, 客户端(浏览器)会保存Cookie信息, 再次访问该服务器时, request header上会通过请求头`Cookie`带上该cookie信息

## Cookie的生命周期

1. 会话期Cookie
2. 持久性Cookie

如果在创建Cookie时没有声明`Expires`(过期时间)或者`Max-Age`(有效期), 则是会话期Cookie: 在浏览器关闭后会被删除;

反之如果声明了`Expires`或`Max-Age`, 则是持久性Cookie: 未过期之前, Cookie 会一直保存有效


## Cookie访问限制

1. `Secure`标志: 限制只有在HTTPS上才发送.
2. `HttpOnly`标志: 客户端无法通过脚本(`document.cookie`)来获取Cookie.

> 通过document.cookie来添加cookie时, 无法添加`HttpOnly`限制


## Cookie 的作用域

1. `Domain`标志: 指定哪些域名能收到该Cookie, 如果不声明, 默认为`origin`, 此时`不包含子域名`; 如果指定了`Domain`, 则一般会包含子域名. 两种写法`.test.org`(加前导点)和`test.org`都会包含子域名(符合规范的大多数浏览器)
2. `Path`标志: 指定域名下的哪些路径能收到该Cookie. 如果指定了`Path=/docs`, 则`Path=/docs/a`, `Path=/docs/a/b`均会匹配到.
3. `SameSite`标志: 用来限制跨域请求时, 是否发送Cookie. 值 `None | Strict | Lax`, `None`的限制最弱, 同域/跨域请求都会带上cookie; `Strict`的限制最强, 只在同域请求时才会带上Cookie, `Lax`类似`Strict`, 但是**从外部站点导航到URL时才会发送,如 link 链接**

> 以前的SameSite字段如果没有设置, 默认值为`None`, 跨域请求时也会带上cookie; 现在浏览器的默认值逐渐改成`Lax`, 跨域请求时不会带上cookie; 如果希望携带需要明确指明`SameSite=None`

## 第三方Cookie

如果Cookie 声明的域与当前页面的域名相同, 则称为`第一方Cookie`, 如果域不同, 则称为`第三方Cookie`. 

如网页里嵌入了广告, 其他域中的图片等, 这些内容可以设置cookie(第三方Cookie)发送给第三方服务器, Cookie里可能记录了用户的浏览历史和一些隐私.