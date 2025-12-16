import { createApp } from "vue"; //importage de vue
import App from "./App.vue"; //importage de l'app vue
import router from "./routes/index.js"; //importage de router
import "./style.css"; //importage du css

const app = createApp(App);
app.use(router); //utilisation du router
app.mount("#app");
