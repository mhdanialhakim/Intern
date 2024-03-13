  import { createRouter, createWebHistory } from 'vue-router'
  import LoginView from '@/views/LoginView.vue'
  import LandingView from '@/views/LandingView.vue'
  import LocationView from '@/views/LocationView.vue'
  import axios from 'axios'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/landing',
      name: 'landing',
      component: () => import('../views/LandingView.vue'),
    },
    {
      path: '/location',
      name: 'location',
      component: () => import('../views/LocationView.vue'),
    }
  ]
})

router.beforeEach((to, from) => {
  if (to.name == 'login'){
    return true
  }
  if (!localStorage.getItem('token')) {
    return {
      name: 'login'
    }
  }

  checkTokenAuthenticity()
})

const checkTokenAuthenticity = () => {
  axios.get('http://127.0.0.1:8000/api/user', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
    .then((response)=> {})
    .catch((error) =>{
      localStorage.removeItem('token')
      router.push({
        name: 'login'
      })
    })
}

export default router
