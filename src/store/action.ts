import types from './types'

export const setBrowser = (browser: object) => ({
  type: types.SET_BROWSER,
  browser,
})

export const setUser = (user: object) => ({
  type: types.SET_USER,
  user,
})
