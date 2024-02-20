import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routers'
import pinia from './stores'
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(ArcoVue)

app.mount('#app')
