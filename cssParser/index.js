const data = require('./data.js')

function cssParser (data) {
    let linkArr = []
    let link
    const re = /<link.*?>/gsi
    const re2 = /(?<=href\=").*"/i
    while ((link = re.exec(data)) !== null) {
        const str = link[0]
        if (str.indexOf('stylesheet') > -1 || str.indexOf('text/css') > -1) {
            let url = (re2.exec(str))[0]
            url = url.slice(0, url.length - 1)
            linkArr.push(url)
        }
    }
    linkArr.forEach(v => {
        const img = new Image()
        img.src = v
        img.onload = (e) => {
            console.log(e)
        }
    })

    const promise = new Promise(function (resolve, reject) {

        
    })
}

cssParser(data)