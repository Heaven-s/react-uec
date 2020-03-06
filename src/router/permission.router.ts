import { lazy } from 'react';

const Account = lazy(() => import('../pages/permission/account'));
const Role = lazy(() => import('../pages/permission/role'));

interface routerInterface {
  path: string,
  component: object,
  meta: {
    tag: string,
    title: string
  }
}

const routes: routerInterface[] = [
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