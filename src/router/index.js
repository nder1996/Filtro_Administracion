import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Options from '../views/Options.vue'
import Filter from '../views/Filter.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/options',
        name: 'Options',
        component: Options
    },
    {
        path: '/filter',
        name: 'Filter',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Filter
    },
    {
        path: '/cruds',
        name: 'Cruds',
        component: () => import( /* webpackChunkName: "about" */ '../views/Cruds.vue')
    },
    {
        path: '/cargaarchivo',
        name: 'CargaArchivo',
        component: () => import( /* webpackChunkName: "about" */ '../views/CargaArchivo.vue')
    },
      {
        path: '/argregararchivo',
        name: 'AgregarArchivo',
        component: () => import( /* webpackChunkName: "about" */ '../views/AgregarArchivo.vue')
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router