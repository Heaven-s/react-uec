import React, { useState, useEffect } from 'react';

import { history } from '../utils'
import Uec from '../uec'

const {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined
} = Uec

function Page() {
  
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
  })

  return (
    <div className={ `menu${collapsed ? ' menu-collapsed' : ''}` }>
      <div className="menu-content">
        <Uec.Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="light"
          inlineCollapsed={collapsed}
        >
          <Uec.Menu.Item key="1" onClick={() => history.push("/permission/account")}>
            <PieChartOutlined />
            <span>员工管理</span>
          </Uec.Menu.Item>
          <Uec.Menu.Item key="2" onClick={() => history.push("/permission/role")}>
            <DesktopOutlined />
            <span>角色管理</span>
          </Uec.Menu.Item>
        </Uec.Menu>
      </div>
      <div className="menu-collapse">
        <Uec.Button type="primary" size="small" onClick={() => setCollapsed(!collapsed)}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Uec.Button>
      </div>
    </div>
  );
}

export default Page;
