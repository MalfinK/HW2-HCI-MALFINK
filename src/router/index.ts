import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import MenuBawah from '../views/MenuBawah.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/HomePage'
  },
  {
    path: '/tabs/',
    component: MenuBawah,
    children: [
      {
        path: '',
        redirect: '/tabs/HomePage'
      },
      {
        path: 'HomePage',
        component: () => import('@/views/HomePage.vue')
      },
      {
        path: 'KolamPage',
        component: () => import('@/views/KolamPage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
