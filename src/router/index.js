import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from "@/views/MainPage";
import PersonalArea from "@/views/PersonalArea";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '',
    component: PersonalArea,
    children: [
      {
        path: '/profile',
        component: () => import("../components/PersonalArea/Profile")
      },
      {
        path: '/text-1',
        component: () => import("../components/PersonalArea/Text-1")
      },
      {
        path: '/text-2',
        component: () => import("../components/PersonalArea/Text-2")
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
