<!-- se implementa el inicio que va antes del login -->
<template>
    <h1 class="Titulo">
        Bienvenido a Libro-Juegos
    </h1>
    <div> <!-- en este div van los botones de la interfaz -->
        <v-btn class="botonLogin" variant="tonal">
            Login
        </v-btn>
        <v-btn class="botonSingUp" variant="tonal">
            SingUp
        </v-btn>
    </div>

    <!-- se implementa la descripcion de la pagina de inicio -->
    <v-card clas= "descripcion" title="Espacio para explorar tu creatividad" text="Los libro-juegos son libros donde el lector es el protagonista. Estos libros están escritos por un autor donde a estos deberán ingresar su nombre, título de la aventura, una imagen opcional y acompañado de una breve sinopsis. Para crear la historia debe ir agregando las páginas de la aventura una por una, indicando las opciones que puede tomar el lector. El lector puede elegir una acción que permitirá ser redirigido a la página correspondiente. Al elegir ciertas acciones afectara en los finales de la historia, dando así un final malo, buenos y regulares. Si es un final malo, el lector tendrá la opción de volver al inicio y se descartaran las opciones elegidas anteriormente para no repetir el mismo final. Por otro lado, los lectores podrán visualizar las aventuras en una lista, y podrán elegir una historia basándose en sus características, como sinopsis o imagen." variant="tonal"></v-card>
</template>

<style>
    
    .Titulo{
        font-size: 2rem;
    }

    .descripcion{
        font-size: 1.25rem;
    }

</style>