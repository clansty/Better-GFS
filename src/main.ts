import { createApp } from 'vue';
import App from './App';
import router from '@/router';
import '@unocss/reset/tailwind-compat.css';
import 'virtual:uno.css';

createApp(App)
  .use(router)
  .mount('#app');
