  var o = {
    f: function () {
      return this.a + this.b
    }
  }
  
  function P () {
    this.a = 1
    this.b = 2
  }
  var p = new P()
  // P.prototype = o
  
  console.log(p[__proto__])