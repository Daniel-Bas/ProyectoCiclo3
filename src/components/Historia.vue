<template>
  <section id="historia">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            
            <v-col cols="12" sm="8" class="black--text text-left">
              <h1 class="font-weight-light display-2 mb-2">Historia</h1>
              <h1 class="font-weight-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ex
                animi quod laboriosam vel blanditiis labore alias, aliquid,
                tempora repellendus non.
              </h1>
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
            </v-col>
            <v-col sm="4" class="hidden-xs-only">
              <v-img src="@/assets/img/helado 3.png" class="d-block ml-auto mr-auto" max-width="350px" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      
    </v-container>
  </section>
  
</template>

<style scoped>
#historia {
  background-color: #FFEBD9;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 500px;
}

#historia .container,
#historia .row {
  height: 100%;
}
</style>