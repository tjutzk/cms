import Vue from 'vue'
import App from '@/app.vue'
import router from '@/router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/style/initStyle.css'

Vue.use(ElementUI);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
 