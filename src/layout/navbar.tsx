import React, { useEffect } from 'react';
import {
  CloseOutlined
} from '@ant-design/icons';

function Page() {

  useEffect(() => {
  })

  return (
    <div className="navbar">
      <span className="navbar-tag">
        <span>首页</span>
        <CloseOutlined />
      </span>
      <span className="navbar-tag">
        <span>组件</span>
        <CloseOutlined />
      </span>
      <span className="navbar-tag active">
        <span>文档</span>
        <CloseOutlined />
      </span>
    </div>
  );
}

export default Page;
