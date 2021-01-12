import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import firstStep from '@/pages/firstStep'
import secondStep from '@/pages/secondStep'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Hello', component: Hello},
    {path: '/register/1', name: 'firstStep', component: firstStep},
    {path: '/register/2', name: 'secondStep', component: secondStep}
  ]
})
