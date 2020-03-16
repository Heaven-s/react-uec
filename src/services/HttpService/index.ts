import Axios from 'axios'
import Http from './http'
import { requestPromiseFunc, requestConfigInterface} from './interface'

const requestPromise: requestPromiseFunc = (requestConfig: requestConfigInterface) => {
  let { header, method, url, data } = requestConfig
  const config: any = {
    method,
    url,
    headers: header
  }
  if (method === 'get' || method === 'GET') {
    config.params = data
  } else {
    config.data = data
  }
  return Axios(config)
}

export default new Http({
  isCancel: false
}, requestPromise)