import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/index'
import artical from '@/components/artical'
import about from '@/components/about'
import self from '@/components/self'
import read from '@/components/reading'
import hole from '@/components/hole'
import holelist from '@/components/holelist'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/artical/:id',
      name: 'artical',
      component: artical
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/self',
      name: 'self',
      component: self
    },
    {
      path: '/read',
      name: 'read',
      component: read
    },
    {
      path: '/hole',
      name: 'hole',
      component: hole
    },
    {
      path: '/holelist',
      name: 'holelist',
      component: holelist
    }
  ]
})
