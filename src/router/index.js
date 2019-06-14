import Vue from 'vue'
import Router from 'vue-router'
import BlogIndex from '@/components/BlogIndex'
import SearchPage from '@/components/SearchPage'
import AboutMe from '@/components/AboutMe'
import BlogText from '@/components/BlogText'
import TimeStamp from '@/components/TimeStamp'
import Animation from '@/components/Animation'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BlogIndex',
      component: resolve => require(['@/components/BlogIndex'], resolve)
    },
    {
      path: '/AboutMe',
      name: 'AboutMe',
      component: resolve => require(['@/components/AboutMe'], resolve)
    },
    {
      path: '/SearchPage',
      name: 'SearchPage',
      component: resolve => require(['@/components/SearchPage'], resolve)
    },
    {
      path: '/BlogText',
      name: 'BlogText',
      component: resolve => require(['@/components/BlogText'], resolve)
    },
    {
      path: '/TimeStamp',
      name: 'TimeStamp',
      component: resolve => require(['@/components/TimeStamp'], resolve)
    },
    {
      path: '/Animation',
      name: 'Animation',
      component: resolve => require(['@/components/Animation'], resolve)
    }
  ]
})
