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
        idusuario: ''
      };
    },
  methods: {
    async crearlibro() {
        const respuesta = await API.addlibro(
            {
            "titulo": this.titulo,
            "sinopsis": this.sinopsis,
            "autor": this.$store.state.usuario.usuario,
            "imagen": this.imagen,
            "idusuario": this.$store.state.usuario._id
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
            <v-text-field label="Titulo" variant="outlined" v-model="titulo" class="titulos"></v-text-field>
        </div>
        <br>
        <div class="contenedor">
            <!-- <div class="imagen">
                <div class="imagePreviewWrapper" :style="{ 'background-image': `url(${previewImage})` }" @click="selectImage"> </div>
                <input ref="fileInput" type="file" @input="pickFile">
            </div> -->
            <v-text-field label="Linkimagen" variant="outlined" v-model="imagen" class="titulos"></v-text-field>
            <div class="sinopsis">
                <v-textarea label="Sinopsis" variant="outlined" class="textsinopsis" v-model="sinopsis" ></v-textarea>
            </div>
        </div>
        <div class="botones">
            <v-btn class="botonepagina">
                Páginas
            </v-btn>
            <v-btn class="botonecrear"  @click="crearlibro"> 
                Guardar
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

