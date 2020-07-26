import types from './types'
import { InterfaceState } from './state'

export default (state: InterfaceState, action: any) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        user: { ...action.user },
      }
    case types.SET_BROWSER:
      return {
        ...state,
        browser: { ...action.browser },
      }
    default:
      return state
  }
}
