import { createRouter, createWebHistory } from 'vue-router'

//add all the pages from the component folder
import Login from "../src/components/Login.vue"


//define the routes with the necedssary /xxx
const routes = [
    {
        path: '/login',
        name: 'Login', 
        component: Login ,
        meta: { showNavbar: true }
    }
]

//export the route
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router