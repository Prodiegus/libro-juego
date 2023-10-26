<script>
    import API from '@/api';
    
    export default {
        data() {
            return {
                previewImage: null,
                titulo: '',
                sinopsis: '',
                autor:'',
                imagen: '',
                idusuario: '',
            };
        },
        computed: {
        },
        methods: {
            async crearlibro() {
                const respuesta = await API.addlibro(
                    {
                        "titulo": this.titulo,
                        "sinopsis": this.sinopsis,
                        "autor": this.$store.state.usuario.usuario,
                        "imagen": "URL imagen",
                        "idusuario": this.$store.state.usuario._id,
                        "fecha": Date.now()
                    }
                )
                // agregar la lógica para enviar los datos de inicio de sesión al servidor
                // En este ejemplo, simplemente mostraremos un mensaje en la consola.
                console.log(respuesta); /* ver tema de confirmacion de contraseña */
            },
            selectImage () {
                this.$refs.fileInput.click()
            },
            pickFile () {
                let input = this.$refs.fileInput
                let file = input.files
                if (file && file[0]) {
                    let reader = new FileReader
                    reader.onload = e => {
                        this.previewImage = e.target.result
                    }
                    reader.readAsDataURL(file[0])
                    this.$emit('input', file[0])
                }
            }
        },
    };
</script>

<template>
    <div class="encabezado">
        <div>
            <v-btn to="/autorhome">atras</v-btn>
        </div>
        <div>
            <H1 class="Titulo">Creador de historias</H1>
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
        <div class="maincontenedor">
            <div class="titulo">
                <v-text-field label="Titulo" variant="outlined" class="titulos" v-model="titulo" :maxlength="10" :counter="10"></v-text-field>
            </div>
            
            <div class="contenedor">
                <div class="imagen">
                    <div class="imagePreviewWrapper" :style="{ 'background-image': `url(${previewImage})` }" @click="selectImage"></div>
                    <input ref="fileInput" type="file" @input="pickFile">
                </div>
                <div class="sinopsis">
                    <v-textarea label="Sinopsis" variant="outlined" class="textsinopsis" v-model="sinopsis" :maxlength="100" :counter="100"></v-textarea>
                </div>
            </div>
            <div class="botones">
                <v-btn class="boton" to="/crearpagina">
                    Páginas
                </v-btn>
                <v-btn class="boton" to="/autorhome" @click="crearlibro"> 
                    Guardar
                </v-btn>
            </div>
        </div>
    </body>
</template>

<style>
    body{
        background-color:#fff8dd ;
    }
    .maincontenedor{
        width: 75%;
        margin: 0 auto;
        
    }
    .imagePreviewWrapper {
        width: 250px;
        height: 250px;
        display: block;
        cursor: pointer;
        margin: 0 auto 30px;
        background-size: cover;
        background-position: center center;
    }
    .titulo{
        width: 50%;
        margin: 0 auto;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .titulos{
        width: 100%;
        height: 100%;
        background-color: #ccf0ff;
        border: 2px solid #9988c4;
        
        padding: 10px; /* Relleno opcional */
    }
    .contenedor{
        display: flex;
        width: 95%;
        margin: 0;
        margin-bottom: 30px
    }
    .imagen{
        flex: 1;
        background-color: #ccf0ff;
        border: 2px solid #9988c4;
        margin: 0 30px;
    }
    .sinopsis{
        flex: 1;
    }
    .textsinopsis {
        width: 100%;
        height: 100%;
        background-color: #ccf0ff;
        border: 2px solid #9988c4;
        
        padding: 10px; /* Relleno opcional */
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
</style>

