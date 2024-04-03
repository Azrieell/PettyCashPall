import { createApp } from 'vue'
import './style.css';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import axios from 'axios';
import ElementPlus from 'element-plus';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:5000'

const app = createApp(App);     
app.use(store); 
app.use(router).mount('#app');
app.use(ElementPlus);