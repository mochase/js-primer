// 去除除em标签以外的所有html标签(实际上是e开头)
const g1 = /<[^/e].*?>|<\/[^e].*?>/gi

// 去除所有html标签
const g2 = /<[^>]+>/gi