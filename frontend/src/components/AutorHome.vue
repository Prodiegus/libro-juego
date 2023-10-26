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
            <v-btn class=botonencabezado to="/lectorhome">Ser lector</v-btn>
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
                <tr v-for="item in desserts" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.fechaedit }}</td>
                    <td>{{ item.estado }}</td>
                </tr>
            </tbody>
        </v-table>

        <div class="botones">
            <v-btn class="botons" to="/editarlibro">
                Editar Historia
            </v-btn>
            <v-btn class="boton" to="/crearlibro">
                Crear Historia
            </v-btn>
        </div>
    </body>
</template>
        

<style setup>
    body{
        background-color:#fff8dd ;
    }
    .botones{
        display: flex;
        justify-content: right;
        align-items: right;
        margin-bottom: 20px;
    }
    .boton{
        margin: 0 10px;
        
        margin-bottom: 20px;
    }
    .encabezado{   
        display: flex;
        background-color: black;
    }
</style>