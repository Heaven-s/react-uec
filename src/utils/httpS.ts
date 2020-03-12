import Axios from 'axios'
import { genPromise } from 'utils'

interface optionsInterface {
  isCancel: boolean
}

type Method =
  | 'get' | 'GET'
  | 'delete' | 'DELETE'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'
  | 'link' | 'LINK'
  | 'unlink' | 'UNLINK'

interface requestConfigInterface {
  method: Method,
  url: string,
  data: object,
  header: object
}


export default class Http {
  defaultOptions: optionsInterface;
  constructor (options: optionsInterface) {
    this.defaultOptions = options
  }

  responseObj (requestConfig: requestConfigInterface) {
    let { header, method, url, data } = requestConfig
    return Axios({
      method,
      url,
      data,
      headers: header
    })
  }

  send (method: Method, url: string, data: object, options: optionsInterface) {
    const requestConfig = {
      header: {},
      method,
      url,
      data
    }

    options = Object.assign({}, this.defaultOptions, options)

    // 中断请求
    if (options.isCancel) return

    let promise = genPromise()

    let responsePromise = this.responseObj(requestConfig)

    responsePromise.then((response) => {
      promise.resolve(response)
    })
    // 服务器响应错误
    .catch((error) => {
      promise.reject(error)
    })

    return promise

  }
}