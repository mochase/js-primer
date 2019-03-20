function eventCompat(event) {
    var type = event.type
    if (type === 'DOMMouseScroll' || type === 'mousewheel') {
        event.delta = (event.wheelDelta) ? event.wheelDelta / 120 : (-event.detail || 0) / 3
    }
    if (event.srcElement && !event.target) {
        event.target = event.srcElement
    }
    if (!event.preventDefault && event.returnValue !== undefined) {
        event.preventDefault = function () {
            event.returnValue = false
        }
    }
    // ...
    return event
}


// canvas 文字居中展示
CanvasRenderingContext2D.prototype.wrapText = function (text, x, y, maxWidth, lineHeight) {
    /* eslint-disable */
    if (typeof text != 'string' || typeof x != 'number' || typeof y != 'number') {
        return;
    }
    
    var context = this;
    var canvas = context.canvas;
    
    if (typeof maxWidth == 'undefined') {
        maxWidth = (canvas && canvas.width) || 300;
    }
    if (typeof lineHeight == 'undefined') {
        lineHeight = (canvas && parseInt(window.getComputedStyle(canvas).lineHeight)) || parseInt(window.getComputedStyle(document.body).lineHeight);
    }
    
    // 字符分隔为数组
    var arrText = text.split('');
    var line = '';
    
    for (var n = 0; n < arrText.length; n++) {
        var testLine = line + arrText[n];
        var metrics = context.measureText(testLine);
        var testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            context.fillText(line, x, y);
            line = arrText[n];
            y += lineHeight;
        } else {
            line = testLine;
        }
    }
    context.fillText(line, x, y);
  }