import Vue from 'vue'
import App from './App.vue'
import vueResource from 'vue-resource'
import router from './router/router.js'

import basicCss from './css/basic.css'

Vue.use(vueResource);



new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
