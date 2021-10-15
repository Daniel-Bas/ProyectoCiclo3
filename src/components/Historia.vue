<template>
  <section id="historia" class="tm">
   <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row >
            <v-col cols="12" md="8" xl="8">
              <h1 class="display-2 font-weight-bold mb-4">Historia</h1>
              <h2><small class="text-muted"> De la mejor heladería de Pasto</small></h2>
          <div class="container">
                  <div class="row">
                  <p>Benjamín e Isabel decidieron emprender esta labor hace 63 años en compañía de su familia. Su heladería está ubicada en el barrio Santiago, en Pasto.<br>
                  <br> Edgar Rosero, el hijo de don Benjamín, continuó con este legado familiar, que trajeron sus padres desde Ibarra, Ecuador. Benjamín e Isabel consiguieron una paila de cobre, una espátula de madera, una batea de madera redonda y honda para colocar el hielo que lo traían del volcán Cumbal. Este hielo lo trasladaban en costales de paja a lomo de mula hacia Pasto. <br>
                  <br>Edgar aprendió de su padre esta labor, que realiza junto a su esposa, sus hijos, su cuñado y sus tres 
                  hermanos. En la temporada de diciembre y de carnavales, es cuando más necesita apoyo, pues los turistas son grandes consumidores de estos postres típicos. Vainilla y mora, son los sabores preferidos por propios y turistas, aunque el gusto por los helados de lulo y maracuyá está en aumento.<br>

                  <br>“Recuerdo un día que llegó al Club del Comercio el presidente Turbay Ayala e invitaron a mi papá a preparar el helado. Parece que alguien tenía mal ojo, porque mi papá le daba muchas vueltas y nada que pegaba (congelaba), cuando se retiró la gente empezó a pegar. ¡No sé quién sería el que tenía mal ojo, allí estaba mirando Turbay Ayala y creo que fue él!”, relata Edgar. <br>

                  <br><small>Texto: Carlos Guillermo López, coordinador del Museo del Oro Nariño. Fotografías: Jhon Rosero. Fuente: <a href="https://www.banrepcultural.org/noticias/ el-helado-de-paila-una-tradicion-gastronomica-de-narino">BanRepCultural</a> (Co)</small></p>
                  <div class="video d-flex align-center py-4">
                <a @click.stop="dialog = true" class="playBut">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
                    x="0px"
                    y="0px"
                    width="60px"
                    height="60px"
                    viewBox="0 0 213.7 213.7"
                    enable-background="new 0 0 213.7 213.7"
                    xml:space="preserve"
                  >
                    <polygon
                      class="triangle"
                      id="XMLID_18_"
                      fill="none"
                      stroke-width="7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      points="73.5,62.5 148.5,105.8 73.5,149.1 "
                    />
                    <circle
                      class="circle"
                      id="XMLID_17_"
                      fill="none"
                      stroke-width="7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      cx="106.8"
                      cy="106.8"
                      r="103.3"
                    />
                  </svg>
                </a>
                <p class="subheading ml-2 mb-0">Ver vídeo</p>
              </div>










                  </div>
          </div>
              
              
            </v-col>
            
             <v-col sm="4" class="hidden-xs-only">
              <v-img src="@/assets/img/helado 3.png" class="d-block ml-auto mr-auto" max-width="350px" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      
    
    
    <v-dialog v-model="dialog" max-width="640px">
      <v-card>
        <youtube
          :video-id="videoId"
          @ready="ready"
          @playing="playing"
        ></youtube>
      </v-card>
    </v-dialog>
    </v-container>

   <div class="svg-border-waves text-white">
        <v-img src="@/assets/img/wave3.svg" />
      </div> 



  </section>
  
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      videoId: "o4m6Ppz8Exg",
      features: [
        {
          img: require("@/assets/img/icon2.png"),
          title: "Design Limpo",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          img: require("@/assets/img/icon1.png"),
          title: "Dados Seguros",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          img: require("@/assets/img/icon3.png"),
          title: "Código Aberto",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
    };
  },
  watch: {
    dialog(value) {
      if (!value) {
        this.pause();
      }
    },
  },
  methods: {
    ready(event) {
      this.player = event.target;
    },
    playing(event) {
      // The player is playing a video.
    },
    change() {
      // when you change the value, the player will also change.
      // If you would like to change `playerVars`, please change it before you change `videoId`.
      // If `playerVars.autoplay` is 1, `loadVideoById` will be called.
      // If `playerVars.autoplay` is 0, `cueVideoById` will be called.
      this.videoId = "another video id";
    },
    stop() {
      this.player.stopVideo();
    },
    pause() {
      this.player.pauseVideo();
    },
  },
};
</script>

<style lang="scss">
.circle {
  stroke: white;
  stroke-dasharray: 650;
  stroke-dashoffset: 650;
  -webkit-transition: all 0.5s ease-in-out;
  opacity: 0.3;
}

.playBut {
  /*  border: 1px solid red;*/
  display: inline-block;
  -webkit-transition: all 0.5s ease;

  .triangle {
    -webkit-transition: all 0.7s ease-in-out;
    stroke-dasharray: 240;
    stroke-dashoffset: 480;
    stroke: white;
    transform: translateY(0);
  }

  &:hover {
    .triangle {
      stroke-dashoffset: 0;
      opacity: 1;
      stroke: white;
      animation: nudge 0.7s ease-in-out;

      @keyframes nudge {
        0% {
          transform: translateX(0);
        }
        30% {
          transform: translateX(-5px);
        }
        50% {
          transform: translateX(5px);
        }
        70% {
          transform: translateX(-2px);
        }
        100% {
          transform: translateX(0);
        }
      }
    }

    .circle {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }
}
</style>

<style>
.btn-play {
  transition: 0.2s;
}

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 6rem;
  width: 100%;
  overflow: hidden;
}

#hero {
  z-index: 0;
}
.svg-border-waves img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: -2px;
  z-index: -1;
}

.card {
  min-height: 300px;
  padding: 10px;
  transition: 0.5s ease-out;
}

.card .v-image {
  margin-bottom: 15px;
  transition: 0.75s;
}

.card h1 {
  margin-bottom: 10px;
}

.zoom-efect {
  transform: scale(1.1);
}

.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}
.tm{
  margin-top: 50px;
}
.video{
  margin-top: -80px;
}

</style>

<style>
section {
  position: relative;
}

#historia {
  background-color: #F7DDB7;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 800px;
}

#historia .container,
#historia .row {
  height: 100%;
}
</style>