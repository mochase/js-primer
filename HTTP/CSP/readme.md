# CSP(内容安全策略)

CSP 是浏览器充当了拦截者, 对命中特定规则的文档(js/css/html/img...)进行拦截, 以防止xss攻击.

这些规则包含但不局限于跨域.

> 我们知道img/css 文件都可以用来执行xss攻击, css里可以注入可执行代码. 

## 实际例子
在response header 里添加`Content-Security-Policy`头.

一个例子: 
```
Content-Security-Policy: default-src 'self'; img-src *; media-src media1.com media2.com; script-src userscripts.example.com
```


## 报告(report-only)模式
使用`Content-Security-Policy-Report-Only`头, 不会发生实际拦截, 但是会发送报告给指定服务器记录.

一个例子:
```
Content-Security-Policy: default-src 'self'; report-uri http://reportcollector.example.com/collector.cgi
```
