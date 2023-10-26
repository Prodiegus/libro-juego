<template>
    <div class="encabezado">
          <div>
            <v-btn to="/lectorhome">Volver</v-btn>
          </div>
          <div>
            <h1 style="color: white;"> Una Aventura Maravillosa </h1>
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
       <v-toolbar>
    <template v-slot:prepend>
        <v-btn class="ma-2" color="orange-darken-2">
        Back
      </v-btn>
    </template>
    <template v-if="$vuetify.display.smAndUp">
      <v-btn class="ma-2" color="orange-darken-2">
        Next
      </v-btn>
    </template>
  </v-toolbar>
        
   

       <div class="container">
        
        <div>
            <div>
                <img class="grande" src="https://mangasnoelu.cl/wp-content/uploads/2023/04/ONE-PIECE-01-EDICION-3-EN-1.jpg" hspace="5" vspace="5" />
                
                <p id="texto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt feugiat orci eget semper. Curabitur et consequat turpis. 
                    Maecenas non nunc tellus. Vivamus laoreet diam quis urna imperdiet pharetra. Vestibulum non ligula nec nisl vulputate volutpat non vel ex. 
                    Nullam elementum semper est, et accumsan risus tempus id. Mauris nec nulla lacus. Aliquam suscipit leo bibendum nulla egestas porttitor.
                    Quisque euismod lacus a purus pretium finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                    egestas. Quisque <br><br>sed pretium quam. Aliquam vel lorem facilisis, fermentum velit sit amet, laoreet mi. Mauris eleifend cursus pharetra. Donec condimentum vestibulum leo ac imperdiet. Aenean aliquam sapien tempus, bibendum metus ac, accumsan nisi. Vivamus nec ligula lacinia, lacinia nisi sit amet, tempus turpis.
                    Aenean a lectus in nibh viverra pretium vel ac lectus. Pellentesque aliquam finibus urna, at sodales nunc iaculis id. Ut sem dui, bibendum at ultricies
                    sed, luctus eget ante. Nullam in iaculis arcu, ac volutpat lectus. Vestibulum sollicitudin sem eget venenatis egestas. Nunc sed velit sed purus interdum ullamcorper. Sed tempor, ante at ultricies mattis, nulla justo dapibus leo, vel mattis quam urna a metus. Curabitur iaculis ex ante, quis tincidunt sem vulputate vel.
                    Etiam libero ipsum, ultricies vitae facilisis eu.<br><br> commodo ultrices turpis. Maecenas lorem erat, euismod quis massa id, pharetra cursus tellus.
                    Etiam convallis, purus in venenatis malesuada, leo nunc suscipit augue, ut eleifend ante lorem eget est. In hac habitasse platea dictumst. 
                    Donec bibendum faucibus fringilla. Duis urna nunc, ullamcorper sed massa sit amet, semper aliquam tortor.

                    Nam ultrices placerat finibus. Phasellus mollis risus auctor, sodales mi a, elementum erat. Proin ipsum sem, bibendum vitae massa in, 
                    tempor dignissim orc i. Vestibulum ante.<br><br> ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse in aliquet leo. 
                    Sed fringilla mauri s justo, lobortis imperdiet elit dapibus non. Morbi aliquam sapien et purus porttitor euismod. Cras id ante convallis, 
                    sodales lectus nec, pharetra enim. Suspendisse vitae dolor eleifend, porttitor dui in, auctor est. Praesent commodo dui id nisl mattis
                    tincidunt. Etiam vitae mi vestibulum, bibendum enim vel, condimentum nisl. Maecenas odio lectus, semper bibendum massa vel, sodales sollicitudin
                    nunc. Etiam venenatis consequat neque, sit amet fermentum lacus molestie sed. Maecenas posuere dignissim commodo.<br><br>
                    Praesent malesuada rutrum ipsum, ut rhoncus urna feugiat id. Vestibulum fringilla posuere tincidunt. Vestibulum lobortis euismod magna,
                    vel suscipit est ultrices vitae. Praesent vehicula bibendum dolor, et aliquam dolor ultricies ut. Aliquam vel molestie tortor. Suspendisse 
                    laoreet odio et massa facilisis tincidunt. Mauris non ligula mi. Phasellus a massa est. Fusce lacus sem, fringilla at viverra sed, fermentum
                    a est. Integer aliquam eget nisi sit amet tempor. Nunc felis neque, pellentesque eu mattis eget, aliquam eu tortor. Nam convallis justo orci,
                    a euismod ligula tristique quis. Nullam egestas dolor in sem molestie, vitae fringilla purus pellentesque.<br><br>
                    Praesent malesuada rutrum ipsum, ut rhoncus urna feugiat id. Vestibulum fringilla posuere tincidunt. Vestibulum lobortis euismod magna,
                    vel suscipit est ultrices vitae. Praesent vehicula bibendum dolor, et aliquam dolor ultricies ut. Aliquam vel molestie tortor. Suspendisse 
                    laoreet odio et massa facilisis tincidunt. Mauris non ligula mi. Phasellus a massa est. Fusce lacus sem, fringilla at viverra sed, fermentum
                    a est. Integer aliquam eget nisi sit amet tempor. Nunc felis neque, pellentesque eu mattis eget, aliquam eu tortor. Nam convallis justo orci,
                    a euismod ligula tristique quis. Nullam egestas dolor in sem molestie, vitae fringilla purus pellentesque.</p>
 </div>
        </div>

</div>
</template>

<style>

#texto{
  color:palevioletred;
}

.container {
    max-width: 1200px; /* Establece el ancho máximo deseado, como 1200px */
    margin: 0 auto; /* Centra el contenedor horizontalmente */
    background-color:peachpuff;
  }

img.grande{
  width: 500px;
  height: 500px;
  float:left;
}
    
    .Titulo{
        font-size: 2rem;
        color: white;
        text-align: center;
    }
    .avatarbutton{
        border-color: aqua;
        border-width: 0.25rem;
        

    }
    body{
      background-color:#fff8dd ;
    }
    .encabezado{
      
        display: flex;
        background-color: black;
    }
    </style>
