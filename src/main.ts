import { createApp } from 'vue';

import App from './App.vue';

import router from './router';
import store from './store';

import { initializeFirebaseApp } from '@/utils';

initializeFirebaseApp();

const app = createApp(App);

app.use(store);

app.use(router);

app.mount('#app');
