// 去除除em标签以外的所有html标签(实际上是e开头)
const g1 = /<[^/e].*?>|<\/[^e].*?>/gi

// 去除所有html标签
const g2 = /<[^>]+>/gi

// 格式化网页,抽取文本友好展示
function prettyFormatText (str) {
    const regex = /<script.*?<\/script>|<style.*?<\/style>|<noscript.*?<\/noscript>|<code.*?<\/code>|<textarea.*?<\/textarea>|<link.*?>|<[^>]+>|&lt;|&gt;/gsi;
    let tmp = str.replace(regex, '')
    return tmp.replace(/( |\t|\v|\f)*\n( |\t|\v|\f)*/gs, '\n').replace(/\n{2,}/gs, '\n')
}