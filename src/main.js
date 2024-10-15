import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import './assets/style.css';

const app = createApp(App);
app.use(router);
app.component("VSelect", vSelect);
app.mount('#app')