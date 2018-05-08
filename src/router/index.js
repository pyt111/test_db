import Vue from 'vue'
import Router from 'vue-router'
import freightage from '@/components/freightage'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: freightage
    }
  ]
})
