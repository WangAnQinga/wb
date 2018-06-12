import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home/home'
import reward from '@/components/reward/reward'
import treasure from '@/components/winTreasure/allList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/reward',
      name: 'reward',
      component: reward
    },
    {
      path: '/treasure',
      name: 'treasure',
      component: treasure
    }
  ]
})
