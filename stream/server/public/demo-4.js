// 手动关闭流
let aborter = null
fetch('sintel.mp4').then((response) => {
    const total = response.headers.get('content-length')
    let loaded = 0
    const reader = response.body.getReader()
    const stream = new ReadableStream({
        start(controller) {
            let aborted = false
            aborter = () => {
                reader.cancel()
                controller.error(new Error('fetch aborted'))
                aborted = true
            }
            const push = () => {
                reader.read().then(({ done, value }) => {
                    if (done) {
                        !aborted && controller.close()
                        return
                    }
                    loaded += value.length
                    console.log(`当前下载${loaded}/${total}`)
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
setTimeout(() => {
    aborter()
}, 100)
