
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/practice', component: () => import('pages/Index.vue') },
      { path: '/exam', component: () => import('pages/Index.vue') },
      { path: '/results', component: () => import('pages/results.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes