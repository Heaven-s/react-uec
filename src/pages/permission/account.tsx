import React from 'react'
import { useState, useKeepAliveEffect } from 'hooks'
import Uec from 'uec'
import { useStore } from 'hooks'

// state的类型,action的类型
type StateData = []
type CountAction = { type: string, text: string }

type CountReducer = React.Reducer<StateData, CountAction>

function Page() {
  const [num, setNum] = useState(2)
  console.log('account-page')

  const { $store, dispatch } = useStore()
  const { user, browser } = $store

  useKeepAliveEffect(() => {
    console.log('mounted')
    return () => {
      console.log('unmounted')
    }
  })

  return (
    <div className="account-page">
      员工管理 account - {num}
      <h2>
        {browser.width}
      </h2>
      <p>{ JSON.stringify(user) }</p>
      <Uec.Button
        onClick={() => {
          setNum(num + 1)
        }}
        size="small"
      >
        {' '}
        +{' '}
      </Uec.Button>
    </div>
  )
}

export default Page
