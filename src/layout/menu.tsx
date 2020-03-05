import React, { useState, useEffect } from 'react';
import { Menu, Button } from 'antd';
import { useHistory } from "react-router-dom";

import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  InboxOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

function Page() {

  const [collapsed, setCollapsed] = useState(false)

  let history = useHistory();

  useEffect(() => {
  })

  return (
    <div className={ `menu${collapsed ? ' menu-collapsed' : ''}` }>
      <div className="menu-content">
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="light"
          inlineCollapsed={collapsed}
        >
          <Menu.Item key="1" onClick={() => history.push("/permission/account")}>
            <PieChartOutlined />
            <span>员工管理</span>
          </Menu.Item>
          <Menu.Item key="2" onClick={() => history.push("/permission/role")}>
            <DesktopOutlined />
            <span>角色管理</span>
          </Menu.Item>
          <Menu.Item key="3">
            <InboxOutlined />
            <span>Option 3</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <MailOutlined />
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <AppstoreOutlined />
                <span>Navigation Two</span>
              </span>
            }
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>
      <div className="menu-collapse">
        <Button type="primary" size="small" onClick={() => setCollapsed(!collapsed)}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
      </div>
    </div>
  );
}

export default Page;
