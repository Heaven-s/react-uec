import React from 'react'
import { useState, useKeepAliveEffect } from 'hooks'
import Uec from 'uec'
import { http } from 'utils'

import { useStore } from 'hooks'


// state的类型,action的类型
type StateData = []
type CountAction = { type: string, text: string }

type CountReducer = React.Reducer<StateData, CountAction>

function Page() {
  const [num, setNum] = useState(1)
  const [items, setItems] = useState([])
  console.log('role-page')

  const { $store, actions } = useStore()
  const { user, browser } = $store

  useKeepAliveEffect(() => {
    if (!items.length) {
      http
        .get('/user', { id: 2 })
        .then((res) => {
          console.log('suc')
          setItems(res.rows)
        })
        .catch((error) => {
          console.log('error')
          console.log(error)
        })
    }
    return () => {}
  })

  return (
    <div className="role-page">
      角色管理 role - {num}
      <Uec.Button
        onClick={() => {
          setNum(num + 1)
        }}
        size="small"
      >
        {' '}
        +{' '}
      </Uec.Button>
      <h2 onClick={() => {
          actions.setUser({ name: '刘德华', sex: '男', age: 60 })
        }}>{browser.width}</h2>
      <p>{ JSON.stringify(user) }</p>
      <ul>
        {items.map((v: any) => (
          <li key={v.id}>{v.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Page
