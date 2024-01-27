import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

// Import normalize
import 'normalize.css';
import "@/assets/style.scss";
import "@/assets/responsive.scss";

// Sidebar Modal
// import SidebarModal from 'vue-sidebar-modal';

// Disqus
import VueDisqus from 'vue-disqus';

// Helper
import interceptorsSetup from '@/helpers/interceptors';
interceptorsSetup();

const app = createApp(App);

app.use(router);
app.use(store);
// app.use(SidebarModal);
// app.use(VueDisqus, {
//   shortname: 'onde-assistir'
// });

app.mount('#app');
