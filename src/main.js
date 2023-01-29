import { createApp } from 'vue';
import router from './router'
import store from './store'
import { appAxios } from './utils/appAxios.js'
import App from './App';

import "@/assets/font-awesome/css/all.css"
import '@/assets/css/style.scss'
import appHeader from "./components/share/appHeader.vue";
import appFooter from "./components/share/appFooter.vue";
import scrollTop from "./components/share/scrollTop.vue";
import fixedBar from "./components/share/fixedBar.vue";
import vueClickOutsideElement from 'vue-click-outside-element'

import { Icon } from '@iconify/vue';
const app = createApp(App)
app.component("AppHeader", appHeader);
app.component("appFooter", appFooter);
app.component("scrollTop", scrollTop);
app.component("fixedBar", fixedBar);
app.component("Icon", Icon);
app.use(vueClickOutsideElement)
app.use(store)
app.use(router);
app.config.globalProperties.$appAxios = appAxios;
app.mount('#app')

