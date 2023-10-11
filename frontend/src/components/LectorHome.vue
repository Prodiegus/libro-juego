<template>
<div class="encabezado">
        <h1 class="Titulo" width="auto">
            Hay una increíble historia esperando por tí
            
        </h1>
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
      <tr
        v-for="item in desserts"
        :key="item.name"


      >
      <v-btn variant="text" @click="dialog = true"> <td>{{ item.name }}</td></v-btn>
        <v-dialog v-model="dialog" width="auto">
          <v-card class="mx-auto" max-width="400">
    <v-img
      class="align-end text-white"
      height="500"
      src="https://mangasnoelu.cl/wp-content/uploads/2023/04/ONE-PIECE-01-EDICION-3-EN-1.jpg"
      cover
    >
      <v-card-title>One Piece
      </v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4"> Descripción: </v-card-subtitle>

    <v-card-text>
      <div>
        One Piece narra la historia de un joven llamado Monkey D. Luffy, 
        que inspirado por su amigo pirata Shanks, comienza un viaje para 
        alcanzar su sueño, ser el Rey de los piratas, para lo cual deberá 
        encontrar el tesoro One Piece dejado por el anterior rey de los piratas Gol D. Roger. 
        Descubre todos los manga de esta serie tan aclamada por los lectores.
      </div>
    </v-card-text>

    <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red-lighten-2" variant="text" to="/SeleccionLibro" @click="dialog = false">
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
<script>
  export default {
    data() {
      return {
        dialog: false,
        desserts: [
          {      
            name: 'Una Aventura Maravillosa 1',
            fecha: '10/09/2023',
            autor: 'Autor 1'

          },
          {
            name: 'Una Aventura Maravillosa 1',
            fecha: '10/09/2023',
            autor: 'Autor 1'
          },
          {
            name: 'Una Aventura Maravillosa 1',
            fecha: '10/09/2023',
            autor: 'Autor 1'
          },
          {
            name: 'Una Aventura Maravillosa 1',
            fecha: '10/09/2023',
            autor: 'Autor 1'
          },
          {
            name: 'Una Aventura Maravillosa 1',
            fecha: '10/09/2023',
            autor: 'Autor 1'
          },
          {
            name: 'Una Aventura Maravillosa 1',
            fecha: '10/09/2023',
            autor: 'Autor 1'
          },
          {
            name: 'Una Aventura Maravillosa 1',
            fecha: '10/09/2023',
            autor: 'Autor 1'
          },
          {
            name: 'Una Aventura Maravillosa 1',
            fecha: '10/09/2023',
            autor: 'Autor 1'
          },
          {
            name: 'Una Aventura Maravillosa 1',
            fecha: '10/09/2023',
            autor: 'Autor 1'
          },
          {
            name: 'Una Aventura Maravillosa 1',
            fecha: '10/09/2023',
            autor: 'Autor 1'
          },
        ],
      }
    },
  }
</script>
<style>   
    
    .Titulo{
        font-size: 2rem;
        color: white;
        text-align: center;
    }
    .avatarbutton{
        border-color: aqua;
        border-width: 0.25rem;
        

    }

    .encabezado{
      
        display: flex;
        background-color: black;
    }
    </style>
