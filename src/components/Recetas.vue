<template>
  <section id="recetas" class="pb-8">
    
      <v-row align="center" justify="center">
      <h1 class="text-center pt-6 font-weight-light display-2 mb-8">
        Noticias
      </h1>
    </v-row>
    <v-row justify="center">
      <v-card class="cards col-12 col-sm-6 col-md-5 mx-auto me-0">
        <div>
          <v-img
            class="image mx-auto"
            src="../assets/img/N1_Helado_Paila.jpg"
          ></v-img>
        </div>
        <v-divider class="my-2 mt-6" />
        <div>
          <v-card-title
            class="
              flex-center
              text-uppercase
              pt-6
              font-weight
              display-2
              text-h5
            "
          >
            En el 'top' 5
          </v-card-title>
          <v-divider class="my-2" />
          <p class="text-justify mt-5">
            Hay recetas que van echando raíces en un lugar. Quienes visitan
            Pasto, por ejemplo, encontrarán allí los helados de paila que poco a
            poco han ido generando identificación a lo largo de las décadas.
            Otros, han creado recetas exitosas que han perdurado y se han vuelto
            insignias de una ciudad, como el frozomalt de la Heladería Americana
            en Barranquilla.
          </p>
          <v-divider class="my-2" />
          <v-row justify="end" class="my-auto mx-auto">
            <v-btn v-bind="size" rounded outlined color="blue" class="mt-6">
              Ver más
            </v-btn>
          </v-row>
        </div>
      </v-card>

      <v-card class="cards col-12 col-sm-6 col-md-5 mx-auto">
        <div>
          <v-img class="image" src="../assets/img/N2_Helado_Paila.jpg"></v-img>
        </div>
        <v-divider class="my-2 mt-6" />
        <div>
          <v-card-title
            class="
              flex-center
              text-uppercase
              pt-6
              font-weight
              display-2
              text-h5
            "
          >
            Pasto: ecos de tradición
          </v-card-title>
          <v-divider class="my-2" />
          <p class="text-justify mt-5">
            Con una sonrisa y su particular y cantado acento, ellos invitan a
            disfrutar del famoso hervido para soportar las bajas temperaturas
            que caracterizan a la Ciudad sorpresa de Colombia. El hervido es una
            bebida para entrar en calor, que se prepara de manera tradicional
            con chapil (un licor que se produce en Ricaurte, Nariño), se le
            agrega pulpa de frutas y se sirve caliente.
          </p>
          <v-divider class="my-2" />
          <v-row justify="end" class="my-auto mx-auto">
            <v-btn v-bind="size" rounded outlined color="blue" class="mt-6">
              Ver más
            </v-btn>
          </v-row>
        </div>
      </v-card>
    </v-row>

    <v-row align="center" justify="center" class="mt-7">
      <h1 class="text-center pt-6 font-weight-light display-2 mb-8">Recetas</h1>
    </v-row>
    <v-row justify="center">
      <v-card class="cards col-12 col-sm-6 col-md-5 mx-auto me-0">
        <div>
          <v-img class="image" src="../assets/img/mora.jpg"></v-img>
        </div>
        <v-divider class="my-2 mt-6" />
        <div>
          <v-card-title
            class="
              flex-center
              text-uppercase
              pt-6
              font-weight
              display-2
              text-h5
            "
          >
            Rico helado de mora
          </v-card-title>
          <v-divider class="my-2" />
          <ul class="text-left mt-6">
            <li>1 litro de leche</li>
            <li>1 kilo de mora</li>
            <li>Canela</li>
            <li>70 gramos de azúcar</li>
          </ul>
          <p class="text-justify font-weight mt-5">
            ¿Quieres aprender a hacerlo en casa?
          </p>
          <v-divider class="my-2" />
          <v-row justify="end" class="my-auto mx-auto">
            <v-btn v-bind="size" rounded outlined color="blue" class="mt-6">
              Ver más
            </v-btn>
          </v-row>
        </div>
      </v-card>

      <v-card class="cards col-12 col-sm-6 col-md-5 mx-auto">
        <div>
          <v-img class="image" src="../assets/img/maracuyá.jpg"></v-img>
        </div>
        <v-divider class="my-2 mt-6" />
        <div>
          <v-card-title
            class="
              flex-center
              text-uppercase
              pt-6
              font-weight
              display-2
              text-h5
            "
          >
            Una refrescante preparación
          </v-card-title>
          <v-divider class="my-2" />
          <ul class="text-left mt-6">
            <li>250 mililitros de agua</li>
            <li>6 Maracuyá</li>
            <li>Hielo</li>
            <li>40 gramos de azúcar</li>
          </ul>
          <p class="text-justify font-weight mt-5">
            ¿Quieres saber como se prepara?
          </p>
          <v-divider class="my-2" />
          <v-row justify="end" class="my-auto mx-auto">
            <v-btn v-bind="size" rounded outlined color="blue" class="mt-6">
              Ver más
            </v-btn>
          </v-row>
        </div>
      </v-card>
    </v-row>

    <div class="svg-border-rounded text-light">
      <!-- <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 144.54 17.34"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path
          d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"
        />
      </svg> -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path
          d="M0,64L80,90.7C160,117,320,171,480,181.3C640,192,800,160,960,138.7C1120,117,1280,107,1360,101.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>


        
  </section>
</template>

<style lang="scss">
$main_color: #283e79;

ul {
  font-size: 13px;
  line-height: 1.5em;
  margin: 5px 0 15px;
  padding: 0;

  li {
    list-style: none;
    position: relative;
    padding: 0 0 0 20px;
  }

  li {
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 5px;
      width: 10px;
      height: 10px;
      background-color: $main_color;
      border-radius: 50%;
      -moz-border-radius: 50%;
      -webkit-eeborder-radius: 50%;
    }
  }
}
</style>

<style scoped>
.header {
  background-color: #283e79;
  color: white;
}

.cards {
  border-top-left-radius: 30px;
  border-bottom-right-radius: 30px;
}

ul {
  font-size: 15px;
}

/* .circle1 {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  background-color: #f0f8ff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle2 {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: #e0effc;
  display: flex;
  align-items: center;
  justify-content: center;
} */
.image {
  border: #750849 solid 10px;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  margin-bottom: 30px;
  margin: auto;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.svg-border-rounded svg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: #f4f7f5;
  z-index: -1;
}

#pricing {
  z-index: 0;
}

.content {
  z-index: 1;
}

svg {
  overflow: hidden;
}

section {
  position: relative;
}
.pb-8{
 margin-top: 50px;
}
</style>

<script>
export default {
  data: () => ({
    planos: [
      {
        title: "Básico",
        price: "R$100,00",
        img: "f1.png",
        features: [
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 1",
          },
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 2",
          },
          {
            icon: {
              text: "mdi-cancel",
              color: "red",
            },
            text: "Feature 3",
          },
          {
            icon: {
              text: "mdi-cancel",
              color: "red",
            },
            text: "Feature 4",
          },
        ],
      },
      {
        title: "Padrão",
        price: "R$150,00",
        img: "f2.png",
        features: [
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 1",
            color: "success",
          },
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 2",
          },
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 3",
            color: "success",
          },
          {
            icon: {
              text: "mdi-cancel",
              color: "red",
            },
            text: "Feature 4",
          },
        ],
      },
      {
        title: "Premium",
        price: "R$250,00",
        img: "f3.png",
        features: [
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 1",
            color: "success",
          },
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 2",
          },
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 3",
            color: "success",
          },
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 4",
            color: "success",
          },
        ],
      },
    ],
  }),
  computed: {
    size() {
      const size = {md: "large", xl: "x-large"}[
          this.$vuetify.breakpoint.name
          ];
      return size ? {[size]: true} : {};
    }
  },
};
</script>