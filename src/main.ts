import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import empleados from './pages/empleados.vue'
import login from './pages/login.vue'


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

createApp(App).use(router).mount("#app");
