// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/HomePage.vue'),
      },
      {
        path: 'start',
        name: 'Start',
        component: () => import('@/views/StartPage.vue'),
      },
      {
        path: 'generate-key',
        name: 'GenerateKey',
        component: () => import('@/views/GenerateKeyPage.vue'),
      },
      {
        path: 'crypto-message',
        name: 'CryptoMessage',
        component: () => import('@/views/CryptoMessagePage.vue'),
      },
      {
        path: 'decrypt-message',
        name: 'DecryptMessage',
        component: () => import('@/views/DecryptMessagePage.vue'),
      },
      {
        path: 'docs',
        name: 'Docs',
        component: () => import('@/views/DocsPage.vue'),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
