import { createApp } from 'vue'
import About from './pages/About.vue'
import './input.css'
// import router from './routes/routes' ;

const app = createApp(About)
// app.use(router);
app.mount('#app')