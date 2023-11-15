// main.js

import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App);
app.config.globalProperties.$axios = axios; // Menggunakan Axios di proyek Vue
app.config.globalProperties.$env = import.meta.env; // Menggunakan variabel lingkungan Vue
app.mount('#app');

