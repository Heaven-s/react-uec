import React from 'react';
import { useState, useKeepAliveEffect } from 'hooks';
import Uec from 'uec'

function Page() {
  const [num, setNum] = useState(2)
  console.log('account-page')

  useKeepAliveEffect(() => {
    console.log("mounted");
    return () => {
      console.log("unmounted");
    };
  });

  return (
    <div className="account-page">
      员工管理 account - { num }<Uec.Button onClick={ () => { setNum(num + 1) } } size='small'> + </Uec.Button>
    </div>
  );
}

export default Page;
