import Axios from 'axios'
import Http from './http'
import { requestPromiseFunc, requestConfigInterface} from './interface'

const requestPromise: requestPromiseFunc = (requestConfig: requestConfigInterface) => {
  let { header, method, url, data } = requestConfig
  return Axios({
    method,
    url,
    data,
    headers: header
  })
}

export default new Http({
  isCancel: false
}, requestPromise)