// 检测 UA 是否是移动端

function checkUAIsMobile () {
    var ua = navigator.userAgent.toLowerCase();
    var someAction = function () {
        // window.location.href = 'http://m.some.com'
    }
    
    if ((contains(ua, "android") && contains(ua, "mobile")) || 
        (contains(ua, "android") && contains(ua, "mozilla")) || 
        (contains(ua, "android") && contains(ua, "opera")) ||
        contains(ua, "ucweb") || 
        contains(ua, "iphone")) {
        someAction();
    }
    
    function contains (a, b) {
        if (a.indexOf(b) > -1) {
            return true;
        }
    }
}

