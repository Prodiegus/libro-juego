<script>
  export default {
    data() {
      return {
        desserts: [
          {
            name: 'Frozen Yogurt',
            fechaedit: '10/09/2023',
            estado: 'Publicado'

          },
        ],
      }
    },
  methods: {
    onButtonClick(item) {
      // Aquí puedes agregar la lógica que desees al hacer clic en el botón
      console.log(`Botón clickeado en la fila: ${item.name}`);
    },
  },
};


</script>

<template>
    <div class="encabezado">
        <div>
          <v-btn to="/autorhome">atras</v-btn>
        </div>
        <div>
            <router-link to="/">Logout</router-link>
            <v-btn class="avatarbutton" icon="mdi-account" size="small">
                <v-avatar>
                    <img src="https://i.pinimg.com/564x/5d/69/42/5d6942c6dff12bd3f960eb30c5fdd0f9.jpg" >
                </v-avatar>
            </v-btn>    
        </div>
    </div>

    <body>
        <div>
            <v-table>
              <thead>
                <tr>
                  <th class="text-left">
                    Título
                  </th>
                  <th class="text-left">
                    Fecha de edicion
                  </th>
                  <th class="text-left">
                    Estado
                  </th>
                  <th class="Text-left">
                  </th>
                  <th>   
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in desserts" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>{{ item.fechaedit }}</td>
                  <td>{{ item.estado }}</td>
                  <td>
                    <v-btn>Paginas</v-btn>
                  </td>
                  <td>
                    <v-btn @click="onButtonClick(item)">Eliminar</v-btn>
                  </td>
                </tr>
              </tbody>
            </v-table>
        </div>
    </body>
</template>
   
<style>
    body{
        background-color:#fff8dd ;
    }
</style>


