import { createApp } from 'vue';
import { Quasar } from 'quasar';
import '@quasar/extras/material-icons/material-icons.css';
import quasarLang from 'quasar/lang/ru';
import 'quasar/dist/quasar.css';
import './style.css';
import App from './App.vue';
import router from './router/routes.js';
import pinia from './store/Pinia.js';

const myApp = createApp(App);

myApp.use(Quasar, {
    plugins: {},
    lang: quasarLang,
});

myApp.use(pinia);
myApp.use(router);

myApp.mount('#app');