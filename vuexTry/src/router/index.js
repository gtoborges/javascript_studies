import Vue from 'vue'
import Router from 'vue-router'
import Pai from '@/components/Pai'
import Filho1 from '@/components/Filho1'
import Filho2 from '@/components/Filho2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pai',
      component: Pai
    },
    {
      path: '/',
      name: 'Filho1',
      component: Filho1
    },
    {
      path: '/',
      name: 'Filho2',
      component: Filho2
    }
  ]
})