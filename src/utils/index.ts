export * from './history'

export const formatRoutePath = function(path: string): string { 
  if (path === '/') return 'home'
  return path.substring(1).replace(/\/:/g, '/').replace(/\//g, '-')
}

interface genPromiseInterface {
  resolve?: any,
  reject?: any
}

export const genPromise = () => {
  let resolveHandle
  let rejectHandle
  let promise: Promise<any> & genPromiseInterface = new Promise((resolve, reject) => {
    resolveHandle = (response: any) => {
      resolve(response)
    }
    rejectHandle = (response: any) => {
      reject(response)
    }
  })
  promise.resolve = resolveHandle
  promise.reject = rejectHandle
  return promise
}
