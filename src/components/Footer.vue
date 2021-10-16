<template>
  <v-footer dark padless>
    <v-card flat tile class="white--text text-center">
      <v-card-text>
        <v-btn
          v-for="(icon, i) in icons"
          :key="i"
          class="mx-4 white--text"
          :href="icon.link"
          target="_blank"
          icon
        >
          <v-icon size="24px">{{ icon.text }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        <p><FONT SIZE=1><br> <br>Aquel creador de una obra intelectual por el hecho de ser el autor posee inicialmente los derechos de Copyright de esa obra, aun así es muy recomendable mostrar el aviso de Copyright.
      © 2021 Equipo 4 grupo 40 Universidad Tecnológica de Pereira - MINTIC 2022.<br>Esta página web esta licenciada para ser publica bajo la licencia de <STYLE>A {text-decoration: none;} </STYLE><A HREF="https://creativecommons.org/licenses/by/4.0/">Creative Commons Atribution 4.0. </A>  Al usar este sitio, usted acepta nuestros términos de uso y nuestra política de privacidad. </FONT> </p>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Helados de Paila</strong>
      </v-card-text>
    </v-card>


     <section class="f">
  
      </section>

  </v-footer>
</template>

<style scoped>
.f{
  text-align: center;
}
.v-card {
  background-color: #97064C  !important;
  width: 100%;
}
</style>

<script>
export default {
  data: () => ({
    icons: [
      {
        text: "mdi-facebook",
        link: "",
      },
      {
        text: "mdi-twitter",
        link: "",
      },
      {
        text: "mdi-linkedin",
        link: "",
      },
      {
        text: "mdi-instagram",
        link: "",
      },
    ],
  }),
};
</script>
