<template>
   <body>
    <header>
    
        <div id="equipo" align="center" class="logo">

            <img src="~@/assets/img/naranja2.jpg" alt="" width="1535" height="150" class="imgs">
          
        </div>
    </header>

<section class="tt">
    <p  >
        <FONT SIZE=3><br>Equipo propuesto MINTIC 2022, 
            <br> Universidad Tecnológica de Pereira <br> para la realización de una página web <br> empleando la metodología SCRUM.
            <br>
            <br>
          
        </FONT>
    </p>
</section>


<v-card
    elevation="0"
    class="mx-auto"
    max-width="660"
    color= "#FFEBD9"
    tile
  >

<v-carousel
    cycle
    height="450"
    hide-delimiter-background
    show-arrows-on-hover
    delimiter-icon="mdi-circle"
    light
  >
    <template v-slot:prev="{ on, attrs }">
      <v-btn
        color="orange"
        v-bind="attrs"
        v-on="on"
      >Previous</v-btn>
    </template>
    <template v-slot:next="{ on, attrs }">
      <v-btn
        color="orange"
        v-bind="attrs"
        v-on="on"
      >Next</v-btn>
    </template>
    <v-carousel-item  >


     <div class="row">
<article class="col-12 col-sm-6 col-lg-6 servicio-info" >

<v-card
    class="mx-auto"
    max-width="280"
    
  >
  <v-card-title >
    <v-img
      src="../assets/img/F2.jpeg"
      height="270px"
      align-content="center"
      class='imgRedonda'
    ></v-img>
  </v-card-title>
    <v-card-title>
      Luis Felipe Paredes
    </v-card-title>
    <v-card-subtitle>
      Product Owner y Desarrollador <br>
      lufe.pord@gmail.com
    </v-card-subtitle>  
  </v-card>
</article>
<article class="col-12 col-sm-6 col-lg-6 servicio-info">
  <v-card
    class="mx-auto"
    max-width="280"
  >
  <v-card-title>
    <v-img
      src="../assets/img/f1.jpg"
      height="250px"
      align-content="center"
      class='imgRedonda'
    ></v-img>
  </v-card-title>
    <v-card-title>
      Oscar Fernando Rojas
    </v-card-title>
    <v-card-subtitle>
      Aseguramiento de calidad y Desarrollador <br>
      oscar.rojas86@hotmail.com
    </v-card-subtitle>  
  </v-card>
</article>
     </div>
     
    </v-carousel-item>
<v-carousel-item>




<div class="row">

<article class="col-12 col-sm-6 col-lg-6 servicio-info">
   <v-card
    class="mx-auto"
    max-width="280"
  >
  <v-card-title>
    <v-img
      src="../assets/img/COLOR_POP-1.jpg"
      height="270px"
      align-content="center"
      class='imgRedonda'
    ></v-img>
  </v-card-title>
    <v-card-title>
      Jaime Arley Valcarcel
    </v-card-title>
    <v-card-subtitle>
      Scrum Master y Desarrollador <br>
      jamesval10@gmail.com
    </v-card-subtitle>  
  </v-card>
</article>


<article class="col-12 col-sm-6 col-lg-6 servicio-info">
<v-card
    class="mx-auto"
    max-width="280"
  >
  <v-card-title>
    <v-img
      src="../assets/img/D.jpeg"
      height="270px"
      align-content="center"
      class='imgRedonda'
    ></v-img>
  </v-card-title>
    <v-card-title>
      Daniel Esteban Bastidas
    </v-card-title>
    <v-card-subtitle>
      Diseñador y Desarrollador <br>
      dani.bastidasr@gmail.com
    </v-card-subtitle>  
  </v-card>
</article>

</div>


</v-carousel-item>

<v-carousel-item>
  <v-card
    class="mx-auto"
    max-width="280"
  >
  <v-card-title>
    <v-img
      src="../assets/img/jd3.jpeg"
      height="250px"
      align-content="center"
      class='imgRedonda'
    ></v-img>
  </v-card-title>
    <v-card-title>
      Juan David Alvarado
    </v-card-title>
    <v-card-subtitle>
      Analista, Aseguramiento de calidad y Desarrollador <br>
      juandavidalvarado1@gmail.com
    </v-card-subtitle>  
  </v-card>
</v-carousel-item>



    
  </v-carousel>

</v-card>




    </body>
</template>

 




        
          

<style scoped>
.imgs{
    margin-top: 0px;
}
.tt{
    text-align: center;
    align-content:"center";
     margin-top:'500px';
}
.logo{
  margin-top: 100px;
}
.imgRedonda2 {
  /* position:absolute; */
  /*
    margin-top: 0px;
    left:700px;
    width:150px;
    height:150px;
    border-radius:150px;*/
    align-content: center;
    text-align: center;
    margin-left: 30px;
}
.imgRedonda3 {
  /* position:absolute; */
    top: 0px;
    left:1100px;
    width:250px;
    height:150px;
}
.imgRedonda {   
    width:210px;
    height:210px;
    border-radius:150px;
}
.imgRedonda4 {
  /* position:absolute; */
    top: 30px;
    left:300px;
    width:150px;
    height:100px;
}





</style>