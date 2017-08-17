  // (() => {
  //   /**
  //     *
  //     * @param {*} t: current time
  //     * @param {*} b: beginning value
  //     * @param {*} c: change in value
  //     * @param {*} d: duration
  //     */
  //   function easeIn(t, b, c, d) {
  //     return c * (t /= d) * t + b
  //   }

  //   // requestAnimationFrame polyfill
  //   let requestAnimation = window.requestAnimationFrame || function (fn) {
  //     setTimeout(fn, 17)
  //   }
  //   let node = document.querySelector('.footer-return-top-composer')
  //   if (!node) {
  //     return
  //   }
  //   node.addEventListener('click', () => {
  //     let t = 0
  //     let b = 0
  //     let c = window.pageYOffset
  //     let d = 50
  //     let step = function () {
  //       document.documentElement.scrollTop = document.body.scrollTop = window.pageYOffset - easeIn(t, b, c, d)
  //       t++
  //       if (t <= d) {
  //         requestAnimation(step)
  //       }
  //     }
  //     step()
  //   })
  // })();