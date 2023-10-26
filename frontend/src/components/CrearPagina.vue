<script>
import API from '@/api';

export default {
  data() {
      return {
        previewImage: null,
        titulopagina: '',
        descripcion: '',
        autor:'',
        imagen: '',
        idusuario: '',
        contenido:''
      };
    },
  methods: {
    async crearpagina() {
        const respuesta = await API.addpagina(
            {
            "titulo de pagina": this.titulopagina,
            "sinopsis": this.descripcion,
            "autor": this.$store.state.usuario.usuario,
            "imagen": "URL imagen",
            "idusuario": this.$store.state.usuario._id,
            "contenido": this.contenido
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
  }
  
};
</script>

<template>
    <div class="encabezado">
        <div>
        <v-btn to="/autorhome">atras</v-btn>
        </div>
        <div>
            <H1 class="Titulo">"" Nombre historia ""</H1>
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
        <br>
        <div class="titulo">
            <v-text-field label="Titulo de pagina" variant="outlined" v-model="titulopagina" class="titulos" :maxlength="10" :counter="10"></v-text-field>
        </div>
        <br>
        <div class="contenedor">
            <div class="imagen">
                <div class="imagePreviewWrapper" :style="{ 'background-image': `url(${previewImage})` }" @click="selectImage"> </div>
                <input ref="fileInput" type="file" @input="pickFile">
            </div>

            <div class="sinopsis">
                <v-textarea label="Describir pagina" variant="outlined" class="textsinopsis" v-model="descripcion" :maxlength="100" :counter="100"></v-textarea>
            </div>
        </div>
        <br>
        <div class="contenedor">
            <v-textarea label="Contenido" variant="outlined" class="contenido" v-model="contenido" :maxlength="500" :counter="500"></v-textarea>
        </div>
        <div class="botones">
            <v-btn class="botonepagina" @click="crearpagina">
                Añadir Pagina
            </v-btn>
        </div>
        
    </body>

</template>







<style>
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
        width: 25%;
        margin: 0 auto;
    }
    .contenedor{
        display: flex;
        width: 75%;
        margin: 0 auto;
    }
    .imagen{
        flex: 1;
    }
    .sinopsis{
        flex: 1;
    }
    .textsinopsis{
        width: 100%;
        height: 100%;
    }
    .botones{
        margin: 0 auto;
        color: white;
    }
</style>

