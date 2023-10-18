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
  }
</script>

<template>
    <div class="encabezado">
        <div>
          <v-btn to="/lectorhome">Ser lector</v-btn>
        </div>
        <div>
            <h1 class="Titulo" >
                Crea historias maravillosas    
            </h1>
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
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="item in desserts"
                    :key="item.name"
                >
                    <td>{{ item.name }}</td>
                    <td>{{ item.fechaedit }}</td>
                    <td>{{ item.estado }}</td>
                </tr>
            </tbody>
        </v-table>

        <div class="botones">
            <v-btn class="botoneditar" to="/editarlibro">
                Editar Historia
            </v-btn>
            <v-btn class="botonecrear" to="/crearlibro">
                Crear Historia
            </v-btn>
        </div>
    </body>
    
    
    
    
</template>
        

<style setup>
    .botones{
        margin:1%;
        color: white;
        justify-content: flex-end;
        float: left;
    }
    
    .botoneditar{
        margin-left: 1rem;
        
        justify-content: flex-end;
    }
    .botoncrear{
        margin-left: 1rem;
        justify-content: flex-end;
    }


    .encabezado{   
        display: flex;
        background-color: black;
    }
</style>