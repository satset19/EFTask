import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// declare module '@vue/runtime-core' {
//   export interface ComponentCustomProperties {
//     $goto: any
//   }
// }

const app = createApp(App)

app.use(router)

app.mount('#app')
