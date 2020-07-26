import React from 'react'
import { Context } from 'store'

export const useStore = () => {
  let { dispatch, actions, $store } = React.useContext(Context)
  return { dispatch, actions, $store }
}
