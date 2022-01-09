import { createApp } from 'vue';
import App from './App.vue';
import './styles/index.scss';
import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'vue2 app', // app name registered
    entry: '//localhost:8099',
    container: '#subapp-container',
    activeRule: '/vue2',
  },
  {
    name: 'vue app',
    entry: '//localhost:9909',
    container: '#subapp-container',
    activeRule: '/vue3',
  },
]);

start();

createApp(App).mount('#app');
