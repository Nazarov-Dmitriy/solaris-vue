import './assets/styles/style.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import UserService from './plugins/UserService';

const app = createApp(App);

app.use(createPinia());
app.use(UserService);
app.use(router);

app.mount('#app');
