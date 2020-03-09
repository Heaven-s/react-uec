import React from 'react';
import { useState, useKeepAliveEffect } from 'hooks';
import Uec from 'uec'

function Page() {
  
  const [num, setNum] = useState(1)
  console.log('role-page')

  useKeepAliveEffect(() => {
    console.log("mounted");
    return () => {
      console.log("unmounted");
    };
  });
  
  return (
    <div className="role-page">
      角色管理 role - { num }<Uec.Button onClick={ () => { setNum(num + 1) } } size='small'> + </Uec.Button>
    </div>
  );
}

export default Page;
