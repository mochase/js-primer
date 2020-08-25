fetch('https://developer.mozilla.org/zh-CN/docs/Web/API/ReadableStream').then((response) => {
    // 直接克隆response
    const res2 = response.clone()
    const reader = response.body.getReader()
    const log = () => {
        reader.read().then(({ value, done}) => {
            if (done) {
                return
            }
            console.log(value)
            log()
        })
    }
    log()
   return res2
}).then((rsp) => {
    rsp.text().then(data => {
        console.log(data)
    })
})