<script>
export default {
    data() {
      return {
        desserts: [
          {
            name: 'Helado de freza',
            fechacreacion: '01/08/2023',
            numero: '1'
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
            <v-btn to="/editarlibro">atras</v-btn>
        </div>
        <div>
            <H1 class="Titulo">"Nombre del libro"</H1>
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
                    Fecha de creacion
                  </th>
                  <th class="text-left">
                    Numero
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
                  <td>{{ item.fechacreacion }}</td>
                  <td>{{ item.numero }}</td>
                  <td>
                    <v-btn>editar</v-btn>
                  </td>
                  <td>
                    <v-btn @click="onButtonClick(item)">Eliminar</v-btn>
                  </td>
                </tr>
              </tbody>
            </v-table>
        </div>
        <div class="botones">
            <v-btn class="botons" to="/crearpagina">
                Agregar Pagina
            </v-btn>
        </div>
    </body> 

</template>

<style>
    body{
        background-color:#fff8dd ;
    }
    .botones{
        display: flex;
        justify-content: right;
        align-items: right;
        margin-bottom: 20px;
    }
</style>