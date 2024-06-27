import { createApp } from 'vue'
import Index from './pages/Index.vue'
import './input.css'
// import router from './routes/routes' ;

const app = createApp(Index)
// app.use(router);
app.mount('#app')