import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import main from '@/views/main.vue'
import detail from '@/views/detail'
import jurisdiction from '@/views/jurisdiction'
import board from '@/views/board'
import parameter from '@/views/parameter'
import mobile from '@/views/mobile'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main,
      redirect:'/detail',
      children: [
          {path: '/detail',name: 'detail',component: detail },
          {path: '/jurisdiction',name: 'jurisdiction',component: jurisdiction },
          {path: '/board',name: 'board',component: board},
          {path: '/parameter',name: 'parameter',component: parameter},
          {path: '/mobile',name: 'mobile',component: mobile}
      ]
    }
  ]
})
