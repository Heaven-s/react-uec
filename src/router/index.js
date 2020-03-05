const contexts = require.context('./', false, /\.router\.ts$/)

const routes = []

contexts.keys().forEach(key => {
  try {
    let arr = contexts(key).default
    if (arr && arr.length) {
      routes.push(...arr)
    }
  } catch (e) {
    console.error(e)
  }
})

export default routes
