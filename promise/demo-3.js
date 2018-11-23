function unexpect () {
    throw new Error('some error')
}
Promise.resolve().then((data) => {
    console.log("1:" + 'here')
    unexpect()
}).then(data => {
    console.log("2:" + data)
}, error => {
    console.error("2:" + error)
})
