<template>
  <section id="contacto3" class="anc">
     

      
<v-row align="center" justify="center">
          <v-col cols="10">
          <v-row justify="center">
              <v-col cols="12" sm="5">
              <!-- <h2 class="font-weight-light display-1">Conoce nuestros patrocinadores</h2> -->
                <h1 class="font-weight-light display-1" >Conoce nuestros patrocinadores</h1>
                <div align=center>
                <a href="https://www.mintic.gov.co/portal/inicio/">
                    <img src="~@/assets/img/mintic-logo.png" class="ima" >
                  </a>
                  
                  <a href="https://www.utp.edu.co/">
                    <img src="~@/assets/img/Logo_U.T.P.png" class="ima2">
                  </a>
                  </div>
                </v-col>
          </v-row>
          </v-col>
</v-row>

                    
                
           
           
            
           
       
      
 

      <div class="svg-border-waves text-white">
      <v-img src="~@/assets/img/wave4.svg"/>
    </div>  

    <v-snackbar
        v-model="snackbar.enabled"
        timeout="3000"
        right
        top
        :color="snackbar.color"
    >
      {{ snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
            text
            v-bind="attrs"
            @click="snackbar.enabled = false"
        >
          Fecha
        </v-btn>
      </template>
    </v-snackbar>
    <footer class="f">
  <p><FONT SIZE=1><br> <br>Aquel creador de una obra intelectual por el hecho de ser el autor posee inicialmente los derechos de Copyright de esa obra, aun así es muy recomendable mostrar el aviso de Copyright.
      © 2021 Equipo 4 grupo 40 Universidad Tecnológica de Pereira - MINTIC 2022.<br>Esta página web esta licenciada para ser publica bajo la licencia de <STYLE>A {text-decoration: none;} </STYLE><A HREF="https://creativecommons.org/licenses/by/4.0/">Creative Commons Atribution 4.0. </A>  Al usar este sitio, usted acepta nuestros términos de uso y nuestra política de privacidad. </FONT> </p>
      
</footer>
  </section>
</template>

<style scoped>

#contact {
  background-color: #f4f7f5;
}
.anc{
  height: 400px;
  margin-top: 90px;
}
.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}
.f{
  text-align: center;
}

.serv{
    width: 100%;
    /* display: flex; */
    padding: 6px;
    
}
.servicio-info{
    color:#8F6F6F;
    text-align: center;
    align-content: center;

}

.ima{
    width: 250px; height: 150px
}
.ima2{
  margin-left: 50px;
    width: 150px; height: 100px
}
.imgRedonda {   
    margin-left: 190px;
    width:100px;
    height:100px;
    border-radius:150px;
}


</style>

<script>
// import {db} from '@/main'



export default {
  name : 'Contacto3',
  data: () => ({
    icons: ["fa-facebook", "fa-twitter", "fa-linkedin", "fa-instagram"],
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "O campo nome é obrigatório",
      (v) => (v && v.length >= 6) || "O nome precisa ter mais de 6 caracteres",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "O campo email é obrigatório",
      (v) => /.+@.+\..+/.test(v) || "O E-mail precisa ser válido",
    ],
    textArea: "",
    textAreaRules: [
      (v) => !!v || "O campo de texto é obrigatório",
      (v) => (v && v.length >= 10) || "Mínimo de 10 caracteres",
    ],
    lazy: false,
    snackbar: {
      enabled: false,
      text: '',
      color: ''
    }
  }),
  methods: {
    submit() {
      /*db.collection("contactData").add({
        name: this.name,
        email: this.email,
        message: this.textArea
      }).then(() => {
        this.snackbar.text = "Mensagem enviada com sucesso"
        this.snackbar.color = "success"
        this.snackbar.enabled = true
      }).catch(() => {
        this.snackbar.text = "Erro ao enviar mensagem"
        this.snackbar.color = "danger"
        this.snackbar.enabled = true
      })*/
    }
  }
};
</script>
