import { genPromise } from 'utils'
import { optionsInterface, Method, requestPromiseFunc } from './interface'

export interface sendFunc{
  (any: any): Promise<any>
}

export default class Http {
  defaultOptions: optionsInterface;
  requestPromise: requestPromiseFunc;
  constructor (options: optionsInterface, requestPromise: requestPromiseFunc) {
    this.defaultOptions = options
    this.requestPromise = requestPromise
  }

  send (method: Method, url: string, data: object = {}, options: optionsInterface = {}): Promise<any> {
    const requestConfig = {
      header: {},
      method,
      url,
      data
    }

    options = Object.assign({}, this.defaultOptions, options)
    
    let promise = genPromise()

    // 中断请求
    if (options.isCancel) {
      return promise.reject('isCancel')
    }

    let responsePromise = this.requestPromise(requestConfig)

    responsePromise.then((response) => {
      let res = response.data || {}
      if (res.code === 0) {
        promise.resolve(res.data)
      } else {
        promise.reject(res.data)
      }
    })
    // 服务器响应错误
    .catch((error) => {
      promise.reject(error)
    })

    return promise

  }

  get (url: string, params: object = {}, options: optionsInterface = {}) {
    return this.send('get', url, params, options)
  }

  post (url: string, params: object = {}, options: optionsInterface = {}) {
    return this.send('post', url, params, options)
  }

  put (url: string, params: object = {}, options: optionsInterface = {}) {
    return this.send('put', url, params, options)
  }

  patch (url: string, params: object = {}, options: optionsInterface = {}) {
    return this.send('patch', url, params, options)
  }

  delete (url: string, params: object = {}, options: optionsInterface = {}) {
    return this.send('delete', url, params, options)
  }
}
