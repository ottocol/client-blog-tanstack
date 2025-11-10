import CacheDemo from '@/components/demos/CacheDemo.vue'
import PostsInfinite from '@/components/PostsInfinite.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name: 'PostsInfinite',
      component: PostsInfinite
    },
    {
      path:'/demo-cache',
      name:'DemoCache',
      component: CacheDemo
    }

  ],
})

export default router
