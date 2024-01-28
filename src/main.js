import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 引入elementui
import { Container, Header, Main, Footer } from 'element-ui';
Vue.component(Container.name, Container)
Vue.component(Header.name, Header)
Vue.component(Main.name, Main)
Vue.component(Footer.name, Footer)

new Vue({
  render: h => h(App),
}).$mount('#app')
