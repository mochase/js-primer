function test(...args) {
  let t = args
  console.log(t)
}
// test(1, 2, 3)

async function t() {
  try {
    throw new Error('some error')
    await setTimeout(function() {
      console.log(+Date.now())
    }, 1000)
  } catch (e) {
    console.error(e)
  } 
}

t()