<template>
    <div class="encabezado">
        <h1 class="Titulo"  >
            Crea historias maravillosas    
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
                    <td>{{ item.fecha }}</td>
                    <td>{{ item.autor }}</td>
                </tr>
            </tbody>
        </v-table>







        <div class="botones">
            <v-btn class="botoneditar">
                Editar Historia
            </v-btn>
            <v-btn class="botonecrear">
                Crear Historia
            </v-btn>
        </div>
    </body>
    
    
    
    
</template>
        

<style setup>
    .botones{
        margin:1%;
        color: white;
        justify-content: space-between
    }
    
    .botoneditar{
        margin-left: 1rem;
    }
    .botoncrear{
        margin-left: 1rem;
    }


    .encabezado{   
        display: flex;
        background-color: black;
    }
</style>