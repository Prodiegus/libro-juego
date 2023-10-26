<script>
import API from '@/api';
import { onMounted } from 'vue';
export default {
  data() {
    return {
      dialog: false,
      desserts: [

      ],dialogarray:[]
    }
  }, mounted() {

    console.log("mounted")
    this.getLibros()
  },
  methods: {
    async getLibros() {
      await API.getlibros()
        .then((result) => {
          console.log(result)
          this.desserts = result
          this.dialogarray= new Array(this.desserts.length).fill(false);
          console.log(this.dialogarray)
        })
        .catch((err) => {
          console.log(err)

        });
    }
  }
}
</script>

<template>
  <div class="encabezado">
    <div>
      <v-btn to="/autorhome">Ser autor</v-btn>
    </div>
    <div>
      <h1 style="color: white;"> Hay una increible historia esperando por ti </h1>
    </div>
    <div>
      <router-link to="/">Logout</router-link>
      <v-btn class="avatarbutton" icon="mdi-account" size="small">
        <v-avatar>
          <img src="https://i.pinimg.com/564x/5d/69/42/5d6942c6dff12bd3f960eb30c5fdd0f9.jpg">
        </v-avatar>
      </v-btn>
    </div>
  </div>

  <body>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">
            Título
          </th>
          <th class="text-left">
            Fecha
          </th>
          <th class="text-left">
            Autor
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in desserts" :key="item.titulo">
          <v-btn variant="text" @click="dialogarray[index] = true">
            <td>{{ item.titulo }}</td>
          </v-btn>
          <v-dialog v-model="dialogarray[index]" width="auto">
            <v-card class="mx-auto" width="400">        
              <v-img class="align-end text-white" height="500"
                src="https://mangasnoelu.cl/wp-content/uploads/2023/04/ONE-PIECE-01-EDICION-3-EN-1.jpg" cover>
              </v-img>
              <v-card-title>{{ item.titulo }}
                </v-card-title>
              <v-card-subtitle class="pt-4"> Descripción: </v-card-subtitle>
              <v-card-text>
                <div>
                  {{item.sinopsis}}
                </div>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red-lighten-2" variant="text" to="mostrarlibro" @click="dialogarray[index] = false">
                  Iniciar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <td>{{ item.fecha }}</td>
          <td>{{ item.autor }}</td>
        </tr>
      </tbody>
    </v-table>
  </body>
</template>

<style>   
  .Titulo {
    font-size: 2rem;
    color: white;
    text-align: center;
  }
  body{
    background-color:#fff8dd ;
  }
  .avatarbutton {
    border-color: aqua;
    border-width: 0.25rem;
  }

  .encabezado {
    display: flex;
    background-color: black;
  }
</style>
