import React from 'react';
import { useState, useKeepAliveEffect, useEffect } from 'hooks';
import Uec from 'uec'
import { http } from 'utils'

function Page() {
  
  const [num, setNum] = useState(1)
  const [items, setItems] = useState([])
  console.log('role-page')

  useEffect(() => {
    console.log('useEffect')
    http.post('/list2', { id: 0 }).then((res) => {
      console.log(res)
    })
    console.log('++++')
    return () => {
      console.log('unuseEffect')
    };
  })

  useKeepAliveEffect(() => {
    if (!items.length) {
      http.get('/user', { id: 2 }).then((res) => {
        console.log('suc')
        setItems(res.rows)
      }).catch((error) => {
        console.log('error')
        console.log(error)
      })
    }
    return () => {
    };
  });
  
  return (
    <div className="role-page">
      角色管理 role - { num }<Uec.Button onClick={ () => { setNum(num + 1) } } size='small'> + </Uec.Button>
      <ul>
      {
        items.map((v: any) => (
          <li key={v.id}>{v.name}</li>
        ))
      }
      </ul>
    </div>
  );
}

export default Page;
