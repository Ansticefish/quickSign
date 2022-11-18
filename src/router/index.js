import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/uploadFile',
    component: () => import('../views/UploadFile.vue'),
    redirect: { name: 'uploadNew'},
    children: [
      {
        path: 'new',
        name: 'uploadNew',
        component: () => import('../components/UploadFileNew.vue'),
      },
      {
        path: 'old',
        name: 'uploadOld',
        component: () => import('../components/UploadFileOld.vue'),
      }
    ]
  },
  {
    path: '/signFile',
    name: 'signFile',
    component: () => import('../views/SignFile.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
