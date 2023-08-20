import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthorView from '../views/edit/AuthorView.vue'
import { HeaderType, useHeaderStore } from '@/stores/headers'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/edit/author',
    name: 'edit_author',
    component: AuthorView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

//Global navigation guard to select the header based on route
router.beforeResolve(async (to, from, next) => {
  const headerStore = useHeaderStore()
  switch (to.name) {
    case 'home':
      await headerStore.setCurrentHeader(HeaderType.MAIN)
      next()
      break
    case 'edit_author':
      await headerStore.setCurrentHeader(HeaderType.ADD_AUTHOR)
      next()
      break
    default:
      await headerStore.setCurrentHeader(HeaderType.MAIN)
      next({ name: 'home' })
      break
  }
})

export default router
