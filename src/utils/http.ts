import Axios from 'axios'

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

    let responsePromise = this.responseObj(requestConfig)

    responsePromise.then((response) => {
      return Promise.reject(data)
    })
    // 服务器响应错误
    .catch((error) => {
      resolvePromise.rejectHandle(error)

      const errorHandlers = this.config.errorHandlers
      // 遍历errorHandlers
      for (let key in errorHandlers) {
        errorHandlers[key](requestConfig, error, options)
      }
    })

    return resolvePromise

  }
}