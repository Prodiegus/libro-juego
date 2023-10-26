<script>
  import Swal from 'sweetalert2';
  import API from '@/api';
  export default {
  data() {
    return {
    usuario: '',
    contraseña: '',
    };
  },
  methods: {
    async logear() {
      await API.loginusuario(
        {
          "usuario": this.usuario,
          "contraseña": this.contraseña
        }
      )
      .then((respuesta) => 
        {
          console.log(respuesta)
          if (respuesta.Login == true){
            Swal.fire({
              icon: 'success',
              title: 'Logeo Exitoso',    
              })
            this.$store.state.usuario=respuesta.usuario
            console.log(this.$store.state.usuario)
            console.log("Logeo exitoso")
            this.$router.push({ path: '/lectorhome' })

          }else{
            Swal.fire({
              icon: 'error',
              title: 'Error de Logeo',
              text: 'Usuario o Contraseña incorrectos'    
              })
            console.log("Error de logeo")
          }
        }
          )
          .catch((err) => {
          console.log(err)
          
        });
      // agregar la lógica para enviar los datos de inicio de sesión al servidor
    
      // En este ejemplo, simplemente mostraremos un mensaje en la consola.
      /* console.log('logeando como:', this.username, this.password); /* ver tema de confirmacion de contraseña */
      
    },
},
};
</script>

<template>
    <div class="login-container">
      <div class="image-container">
        <img src="https://www.logoground.com/uploads11/dv11y20222136592022-06-123337375Gaming-book.webp" alt="Imagen de fondo" />
      </div>
      <div class="form-container">
        <h2>Iniciar Sesión</h2>
        <h3>No tienes cuenta <router-link to="signup">Registrate</router-link> <br><br></h3>
        <form @submit.prevent="login">
          <div class="input-container">
            <label for="username">Nombre de usuario:</label>
            <input type="text" id="username" v-model="usuario" required>
          </div>
          <div class="input-container">
            <label for="password">Contraseña:</label>
            <input type="password" id="password" v-model="contraseña" required>
          </div>
          <v-btn class="submit" @click="logear" type= "submit" >Iniciar sesión</v-btn>
        </form>
      </div>
    </div>
  </template>
  
  
  
  <style scoped>
  /* Estilos generales */
  .login-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  body{
    background-color:#fff8dd ;
  }
  .image-container {
    flex: 1;
    padding: 20px;
  }
  
  .image-container img {
    max-width: 100%;
    height: auto;
  }
  
  .form-container {
    flex: 1;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
  
  h2 {
    margin-top: 0;
  }
  
  /* Estilos para los campos de entrada */
  .input-container {
    margin-bottom: 15px;
    text-align: left;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  /* Estilo para el botón de inicio de sesión */
  button {
    background-color: #007BFF;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>