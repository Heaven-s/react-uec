import React, { useReducer, useMemo } from 'react'
import { defaultState } from './state'
import reducer from './reducer'

import { bindActionCreators } from './utils'

import * as actionCreators from './action'

export const Context = React.createContext({})

export const StoreProvider = ({ children }) => {
  const [$store, dispatch] = useReducer(reducer, defaultState)

  const actions = useMemo(() => bindActionCreators(actionCreators, dispatch), [
    dispatch,
  ])

  React.useEffect(() => {
    function handleWindowResize() {
      actions.setBrowser({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [actions])

  return (
    <Context.Provider value={{ dispatch, actions, $store }}>
      {children}
    </Context.Provider>
  )
}
