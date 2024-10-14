import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import router from './router.js';
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

const app = createApp(App);
app.use(router);
app.component("VSelect", vSelect);
app.mount('#app')