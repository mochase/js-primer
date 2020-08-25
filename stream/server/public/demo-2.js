fetch('https://developer.mozilla.org/zh-CN/docs/Web/API/ReadableStream').then((response) => {
    const total = response.headers.get('content-length')
    console.log(total)
    let loaded = 0
    // 分流
    const [stream1, stream2] = response.body.tee()

    const reader = stream1.getReader()
    const log = () => {
        reader.read().then(({ value, done}) => {
            if (done) {
                return
            }
            log()
        })
    }
    log()
   return new Response(stream2, { headers: response.headers })
}).then((rsp) => {
    rsp.text().then(data => {
        console.log(data)
    })
})