import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import empleados from './pages/empleados.vue'
import login from './pages/login.vue'

const pinia = createPinia()
const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/",
        name: "login",
        component: login,
      },
      {
        path: "/empleados",
        name: "empleados",
        component: empleados,
      },
    ],
  });

const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')

