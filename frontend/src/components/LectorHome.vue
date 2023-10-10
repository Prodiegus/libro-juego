<template>
<div class="encabezado">
        <h1 class="Titulo"  >
            Hay una increíble historia esperando por tí
        
            
        
        
        </h1>
        <div>
            <router-link to="">Logout</router-link>
            
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
        <td>{{ item.name }}</td>
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
        desserts: [
          {
            name: 'Frozen Yogurt',
            fecha: '10/09/2023',
            autor: 'Autor 1'

          },
          {
            name: 'Frozen Yogurt',
            fecha: '10/09/2023',
            autor: 'Autor 1'
          },
          {
            name: 'Frozen Yogurt',
            fecha: '10/09/2023',
            autor: 'Autor 1'
          },
          {
            name: 'Frozen Yogurt',
            fecha: '10/09/2023',
            autor: 'Autor 1'
          },
          {
            name: 'Frozen Yogurt',
            fecha: '10/09/2023',
            autor: 'Autor 1'
          },
          {
            name: 'Frozen Yogurt',
            fecha: '10/09/2023',
            autor: 'Autor 1'
          },
          {
            name: 'Frozen Yogurt',
            fecha: '10/09/2023',
            autor: 'Autor 1'
          },
          {
            name: 'Frozen Yogurt',
            fecha: '10/09/2023',
            autor: 'Autor 1'
          },
          {
            name: 'Frozen Yogurt',
            fecha: '10/09/2023',
            autor: 'Autor 1'
          },
          {
            name: 'Frozen Yogurt',
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
