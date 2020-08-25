// 手动构造stream
fetch('https://developer.mozilla.org/zh-CN/docs/Web/API/ReadableStream').then((response) => {
    const total = response.headers.get('content-length')
    console.log(total)
    let loaded = 0
    const reader = response.body.getReader()
    // const decoder = new TextDecoder('utf-8')
    const stream = new ReadableStream({
        start(controller) {
            // console.log(controller.desiredSize)
            const push = () => {
                reader.read().then(({ done, value }) => {
                    if (done) {
                        controller.close()
                        return
                    }
                    loaded += value.length
                    // if (total !== null) {
                       console.log(`当前下载${loaded}/${total}`)
                    // }
                    // text += decoder.decode(value, { stream: true })
                    // console.log(text)
                    controller.enqueue(value)
                    push()
                })
            }
            push()
        }
    })
    return new Response(stream, { headers: response.headers })
}).then((rsp) => {
    rsp.text().then(data => {
        console.log(data)
    })
})