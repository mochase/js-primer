const eventProxy = {
    onObj: {},
    oneObj: {},
    // 注册
    on: function (key, fn) {
      if (this.onObj[key] === undefined) {
        this.onObj[key] = [];
      }
      this.onObj[key].push(fn);
    },
    one: function (key, fn) {
      if (this.oneObj[key] === undefined) {
        this.oneObj[key] = [];
      }
      this.oneObj[key].push(fn);
    },
    // 取消注册
    off: function (key, fn) {
      if (!fn) {
        this.onObj[key] = [];
        this.oneObj[key] = [];
      } else {
        const events = this.onObj[key];
        const index = events.indexOf(fn);
        if (index > -1) {
          this.onObj[key].splice(index, 1);
        } else {
          console.warn('你传递了一个没有注册的方法');
        }
      }
    },
    /**
     * 触发器
     * eventType,
     * rest params
     */
    trigger: function () {
      let key; let
        args;
      if (arguments.length == 0) {
        return false;
      }
      key = arguments[0];
      args = [].concat(Array.prototype.slice.call(arguments, 1));
  
      if (this.onObj[key] !== undefined
        && this.onObj[key].length > 0) {
        for (const i in this.onObj[key]) {
          this.onObj[key][i].apply(null, args);
        }
      }
      if (this.oneObj[key] !== undefined
        && this.oneObj[key].length > 0) {
        for (const i in this.oneObj[key]) {
          this.oneObj[key][i].apply(null, args);
          this.oneObj[key][i] = undefined;
        }
        this.oneObj[key] = [];
      }
    },
  };
  
  export default eventProxy;

  /**
   * how to use
   * 订阅:
   * eventProxy.on('action', fn)
   * 派发:
   * eventProxy.trigger('action', ...restParams)
   */