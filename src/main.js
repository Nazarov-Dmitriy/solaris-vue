import './assets/styles/style.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import UserService from './plugins/UserService';
import TeacherService from './plugins/TeacherService';
import PupilService from './plugins/PupilService';
import FeedbackService from './plugins/FeedbackService';
import ProductService from './plugins/ProductService';
import NapramService from './plugins/NapramService';
import CompetitionService from './plugins/CompetitionService';
import ShopService from './plugins/ShopService';

const app = createApp(App);

app.use(createPinia());
app.use(UserService);
app.use(TeacherService);
app.use(PupilService);
app.use(FeedbackService);
app.use(ProductService);
app.use(NapramService);
app.use(CompetitionService);
app.use(ShopService);
app.use(router);

app.mount('#app');
