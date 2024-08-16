import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import DashboardView from '@/views/DashboardView.vue'
import IncommingsView from '@/views/IncommingsView.vue'
import OutgoingsView from '@/views/OutgoingsView.vue'
import TrucksView from '@/views/TrucksView.vue'
import DriversView from '@/views/DriversView.vue'
import PlanningView from '@/views/PlanningView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/planning',
      children: [
        {
          path:'dashboard',
          component: PlanningView

        },
        {
          path:'incommings',
          component: IncommingsView

        },
        {
          path:'outgoings',
          component: OutgoingsView

        },

      ]
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
   
    {
      path: '/trucks',
      name: 'trucks',
      component: TrucksView
    },
    {
      path: '/drivers',
      name: 'drivers',
      component: DriversView
    }
    
  ]
})

export default router
