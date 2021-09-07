import Vue from 'vue'
import App from './App.vue'
// import { Button, Switch } from 'xfl-ui'
import xflUi from 'xfl-ui'
import "xfl-ui/lib/style/index.css"
console.log(xflUi)
import {showText} from "xfl-ui/lib/utils"
console.log(showText('张三'))
Vue.config.productionTip = false
// Vue.use(Button).use(Switch)
Vue.use(xflUi)
new Vue({
  render: h => h(App),
}).$mount('#app')
