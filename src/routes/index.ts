export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/pages/Index/index.vue')
  },
  {
    path: '/dashboard',
    component: () => import('@/pages/Dashboard/index.vue'),
  },
  {
    path: '/about',
    component: () => import('@/pages/About.vue'),
    children: [
      {
        path: 'resetPwd',
        component: () => import('@/pages/ResetPwd.vue'),
      },
      {
        path: 'info',
        component: () => import('@/pages/PersonInfo.vue'),
      }
    ]
  },
]