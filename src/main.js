import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useUserData } from '@/stores/UserStore';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const userStore = useUserData();
userStore.loadAllDataFromLocalStorage();

app.mount('#app')
