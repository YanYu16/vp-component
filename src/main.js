import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import { filterEmoji } from './directives/filterEmoji';
const app = createApp(App)
app.use(ElementPlus)
app.directive('filter-emoji', filterEmoji)
app.mount('#app')
