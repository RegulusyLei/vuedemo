import Vue from 'vue'
import Router from 'vue-router'
import YYScompute from '@/pages/yyscompute'
import TestFunction from '@/pages/testfunction'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/yys',
      name: 'YYScompute',
      component: YYScompute
    },
    {
      path: '/testfn',
      name: 'TestFunction',
      component: TestFunction
    }
  ]
})
