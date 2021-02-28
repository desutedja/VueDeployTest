import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import personal1 from '@/pages/personal1'
import personal2 from '@/pages/personal2'
import personal3 from '@/pages/personal3'
import job from '@/pages/job'
import asset from '@/pages/asset'
import emergency from '@/pages/emergency'
import bank from '@/pages/bank'
import document from '@/pages/document'
import agreement from '@/pages/agreement'
import market from '@/pages/market'
import trade from '@/pages/trade'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Hello', component: Hello},
    {path: '/register/1', name: 'personal1', component: personal1},
    {path: '/register/2', name: 'personal2', component: personal2},
    {path: '/register/3', name: 'personal3', component: personal3},
    {path: '/register/4', name: 'job', component: job},
    {path: '/register/5', name: 'asset', component: asset},
    {path: '/register/6', name: 'emergency', component: emergency},
    {path: '/register/7', name: 'bank', component: bank},
    {path: '/register/8', name: 'document', component: document},
    {path: '/register/9', name: 'agreement', component: agreement},
    {path: '/market', name: 'market', component: market},
    {path: '/trade', name: 'trade', component: trade}
  ]
})
