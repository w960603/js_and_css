import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '../pages/index.vue'
import detail from '../components/detail.vue'
import analysis from '../pages/basic/analysis.vue'
import count from '../pages/basic/count.vue'
import publish from '../pages/basic/publish.vue'
import forecast from '../pages/basic/forecast.vue'

Vue.use(Router);

export default new Router({
  routes : [
    {
      path: '/',
      component: indexPage,
    },
    {
      path: '/detail',
      component: detail,
      redirect: '/detail/count',
      children: [
        {
          path: '/detail/analysis',
          component: analysis,
        },
        {
          path: 'count',
          component: count,
        },
        {
          path: 'publish',
          component: publish,
        },
        {
          path: 'forecast',
          component: forecast,
        },
      ]
    },
  ]
})
