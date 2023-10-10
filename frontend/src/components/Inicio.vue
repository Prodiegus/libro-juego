
<!-- se implementa el inicio que va antes del login -->
<script>
    import API from '@/api';
    export default {
    data() {
        return {
            usuario:'',
            contraseña:''
        };
    },

    mounted() {
    },

    methods: {
    },
};
</script>

<template setup>
    <div class="fondo">
        <div class="encabezado">
            <h1 class="Titulo">
                Bienvenido a Libro-Juegos
            </h1>
            <div class="botones"> <!-- en este div van los botones de la interfaz -->
                
                <v-btn class="botonLogin" @click="login" variant="tonal" to="/login">
                    Iniciar sesión              
                </v-btn>
                
                <v-btn class="botonSingUp" variant="tonal" to="/signup">
                    Registrarse
                </v-btn>
            </div>
        </div>
        
        <!-- se implementa la descripcion de la pagina de inicio -->
        <div class="descripcion">
            <h2>Espacio para explorar tu creatividad</h2>
            <p>
                Los libro-juegos son libros donde el lector es el protagonista. Estos libros están escritos por un autor donde a estos deberán ingresar su nombre, título de la aventura, una imagen opcional y acompañado de una breve sinopsis. Para crear la historia debe ir agregando las páginas de la aventura una por una, indicando las opciones que puede tomar el lector. El lector puede elegir una acción que permitirá ser redirigido a la página correspondiente. Al elegir ciertas acciones afectara en los finales de la historia, dando así un final malo, buenos y regulares. Si es un final malo, el lector tendrá la opción de volver al inicio y se descartaran las opciones elegidas anteriormente para no repetir el mismo final.<br>Por otro lado, los lectores podrán visualizar las aventuras en una lista, y podrán elegir una historia basándose en sus características, como sinopsis o imagen. 
            </p>
        </div>
    </div>
    </template>

<style setup>   
    .Titulo{
        font-size: 2rem;
        color: white;
    }

    .encabezado{
        display: flex;
        justify-content: space-between;
        padding-left: 2rem;
        background-color: black;
    }

    .descripcion{
        color: white;
        font-size: 1.25rem;
        width:2rem;
        background-color:gray;
        width:40%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        padding:3rem;
        border-radius:15px;
        margin-left:2%;
        margin-top:3%;
    }

    .botones{
        margin:1%;
        color: white;
        
    }

    .botonSingUp{
        margin-left:1rem;
    }

    .fondo{
        background:url(../../imagenes/fondo.jpg);
        background-repeat: no-repeat;
        background-image: fixed;
        background-image: center;
        background-size: cover;
        background-position: center;
        height: 100%;
    }
</style>