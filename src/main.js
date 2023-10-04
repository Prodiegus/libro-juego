// Vuetify se implementa para facilitar el desarrollo del programa

import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import Inicio from './components/Inicio.vue';
import Login from './components/Login.vue';
import Home from './components/Home.vue';

const vuetify = createVuetify({
  components,
  directives,
})

const routes = [
  {
    path:'/', components: Inicio

  },{
    path:'/login', components: Login
  }
]

createApp(App).use(vuetify).mount('#app')