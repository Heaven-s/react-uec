import { lazy } from 'react';

const Account = lazy(() => import('../pages/permission/account'));
const Role = lazy(() => import('../pages/permission/role'));

const routes = [
  {
    path: '/permission/account',
    component: Account,
    meta: {
      tag: '/permission/account',
      title: '员工管理'
    }
  },
  {
    path: '/permission/role',
    component: Role,
    meta: {
      tag: '/permission/role',
      title: '角色管理'
    }
  }
]

export default routes