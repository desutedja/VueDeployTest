import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import firstStep from '@/pages/firstStep'
import secondStep from '@/pages/secondStep'
import thirdStep from '@/pages/thirdStep'
import fourthStep from '@/pages/fourthStep'
import fifthStep from '@/pages/fifthStep'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Hello', component: Hello},
    {path: '/register/1', name: 'firstStep', component: firstStep},
    {path: '/register/2', name: 'secondStep', component: secondStep},
    {path: '/register/3', name: 'thirdStep', component: thirdStep},
    {path: '/register/4', name: 'fourthStep', component: fourthStep},
    {path: '/register/5', name: 'fifthStep', component: fifthStep}
  ]
})
