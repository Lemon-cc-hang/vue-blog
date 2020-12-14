import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index'
import Contact from '../views/Contact'
import About from '../views/About'
import Archive from "../views/Archive";
import AdminLogin from "../views/admin/AdminLogin";
import BlogDetail from "../views/BlogDetail";
import BlogEdit from "../views/admin/BlogEdit";

Vue.use(VueRouter)

const routes = [
  {
    path: ['/', '/index'],
    name: 'Index',
    component: Index
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/archive',
    name: 'Archive',
    component: Archive
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/adminLogin',
    name: 'AdminLogin',
    component: AdminLogin
  },
  {
    path: '/blog/:blogId',
    name: 'BlogDetail',
    component: BlogDetail
  },
  {
    path: '/blog/:blogId/edit',
    name: 'BlogEdit',
    component: BlogEdit,
    meta: {
      requireAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
