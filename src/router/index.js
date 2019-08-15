import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'
import Second from '../components/Second'
import Third from '../components/Third'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/second',
      name: 'Second',
      component: Second  
    },
    {
      path:'/third',
      name: 'Third',
      component: Third 
    }
  ]
})
