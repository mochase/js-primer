const chunks = []
let length = 0
const chunkCache = (res) => {
    const reader = res.body.getReader()
    const stream = new ReadableStream({
        start (controller) {
            const push = () => {
                reader.read().then(({ value, done }) => {
                    if (done) {
                        let chunk
                        while (chunk = chunks.shift()) {
                            controller.enqueue(chunk)
                        }
                        controller.close()
                        return
                    }
                    chunks.push(value)
                    length += value.length
                })
            }
            push()
        }
    })
    return new Response(stream, { headers: res.headers })
}

const controller = new AbortController()
fetch('./demo.jpg', {
    headers: {
        'Range': `bytes=${length}-`
    },
    signal: controller.signal
}).then(chunkCache).then(rsp => {
    
})