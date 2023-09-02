import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthorSearchList from '../views/edit/AuthorSearchList.vue'
import AuthorEdit from '../views/edit/AuthorEdit.vue'
import { HeaderType, useHeaderStore } from '@/stores/headers'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: (to, from, next) => {
      console.log('beforeEnter', to, from)
      next()
    }
  },
  {
    path: '/edit/author/:id',
    name: 'edit_author_id',
    props: true,
    component: AuthorEdit,
    beforeEnter: (to, from, next) => {
      console.log('beforeEnter', to, from)
      next()
    }
  },
  {
    path: '/edit/author',
    name: 'edit_author',
    component: AuthorSearchList
  },
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
