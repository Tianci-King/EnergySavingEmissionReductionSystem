import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import pinia from "@/stores";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import "@arco-themes/vue-onebrand/css/arco.css";

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
app.use(router);
app.use(pinia);
app.use(ArcoVue);
app.use(ArcoVueIcon);
app.use(ElementPlus);

app.mount("#app");
