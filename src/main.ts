import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Importa FontAwesome y configura los iconos de redes sociales
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faFacebook, faTwitter, faInstagram, faLinkedin);

// Crea una instancia de la aplicación
const app = createApp(App);

// Usa el enrutador
app.use(router);

// Registra el componente FontAwesomeIcon globalmente
app.component('font-awesome-icon', FontAwesomeIcon);

// Monta la aplicación en el elemento con id 'app'
app.mount('#app');
