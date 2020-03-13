export interface optionsInterface {
  isCancel?: boolean
}

export type Method =
  | 'get' | 'GET'
  | 'delete' | 'DELETE'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'
  | 'link' | 'LINK'
  | 'unlink' | 'UNLINK'

export interface requestConfigInterface {
  method: Method,
  url: string,
  data: object,
  header: object
}

export interface requestPromiseFunc{
  (requestConfig: requestConfigInterface): Promise<any>
}
