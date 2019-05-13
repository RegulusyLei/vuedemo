import Vue from 'vue'
import Router from 'vue-router'
import YYScompute from '@/pages/yyscompute'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/yys',
      name: 'YYScompute',
      component: YYScompute
    }
  ]
})
