<template>
  <v-app style="background-color: transparent">
    <v-card-text class="mt-10 pt-10 text-center">
      <span style="font-size: 40px" class="font-weight-bold white--text">Projetos Opensource</span>
    </v-card-text>
    <v-carousel height="90vh" class="px-8" hide-delimiters>
      <v-carousel-item reverse-transition="fade-transition" transition="fade-transition">
        <v-container grid-list-md fill-height fluid class="pa-10">
          <v-layout row wrap align-center>
            <v-flex offset-xl1 xl3 offset-lg1 lg3 md4 xs4 class="pb-0 mb-0">
              <v-card
                style="filter: blur(3px); border-radius: 20px;"
                height="40vh"
                elevation="10"
                color="transparent"
              >
                <v-img height="40vh" src="img/medicine1.jpg"></v-img>
              </v-card>
            </v-flex>
            <v-flex xl4 lg4 md4 xs4 class="pb-0 mb-0">
              <v-card height="50vh" elevation="10" color="transparent" style="border-radius: 20px;">
                <v-img style="filter: blur(1px);" height="50vh" src="img/medicine2.jpg"></v-img>
                <v-sheet
                  class="v-sheet--offset mx-auto text-center pa-0"
                  color="transparent"
                  elevation="0"
                  max-width="calc(100% - 32px)"
                >
                  <span
                    style="font-size: 50px; text-shadow: 5px 5px 10px black;"
                    class="font-weight-bold white--text"
                  >MIDOW</span>
                </v-sheet>
              </v-card>
            </v-flex>
            <v-flex xl3 lg3 md4 xs4 class="pb-0 mb-0">
              <v-card
                height="40vh"
                style="filter: blur(3px); border-radius: 20px;"
                elevation="10"
                color="transparent"
              >
                <v-img height="40vh" src="img/medicine3.jpg"></v-img>
              </v-card>
            </v-flex>
            <v-flex xs12 class="text-center">
              <v-btn outlined dark large @click="goToLInk">
                <v-icon left>mdi-github-circle</v-icon>Veja o github do projeto
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-carousel-item>
      <v-carousel-item reverse-transition="fade-transition" transition="fade-transition">
        <v-container grid-list-md fill-height fluid>
          <v-layout row wrap justify-center align-center>
            <v-flex xs3 class="pb-0 mb-0">
              <v-card
                style="filter: blur(3px); border-radius: 20px;"
                height="40vh"
                elevation="10"
                color="transparent"
              >
                <v-img height="40vh" src="img/nubank3.jpeg"></v-img>
              </v-card>
            </v-flex>
            <v-flex xs3 class="pb-0 mb-0">
              <v-card height="50vh" elevation="10" color="transparent" style="border-radius: 20px;">
                <v-img style="filter: blur(0px);" height="50vh" src="img/nubank1.jpg"></v-img>
                <v-sheet
                  class="v-sheet--offset mx-auto text-center pa-0"
                  color="transparent"
                  elevation="0"
                  max-width="calc(100% - 32px)"
                >
                  <span
                    style="font-size: 50px; text-shadow: 5px 5px 10px black;"
                    class="font-weight-bold white--text"
                  >NUBANK</span>
                </v-sheet>
              </v-card>
            </v-flex>
            <v-flex xs3 class="pb-0 mb-0">
              <v-card
                height="40vh"
                style="filter: blur(3px); border-radius: 20px;"
                elevation="10"
                color="transparent"
              >
                <v-img height="40vh" src="img/nubank3.jpeg"></v-img>
              </v-card>
            </v-flex>
            <v-flex offset-xs5>
              <v-btn outlined dark large @click="goToLInk">
                <v-icon left>mdi-github-circle</v-icon>Veja o github do projeto
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-carousel-item>
      <v-carousel-item reverse-transition="fade-transition" transition="fade-transition">
        <v-container grid-list-md fill-height fluid>
          <v-layout row wrap justify-center align-center>
            <v-flex xs3 class="pb-0 mb-0">
              <v-card
                style="filter: blur(3px); border-radius: 20px;"
                height="40vh"
                elevation="10"
                color="transparent"
              >
                <v-img height="40vh" src="img/medicine1.jpg"></v-img>
              </v-card>
            </v-flex>
            <v-flex xs3 class="pb-0 mb-0">
              <v-card height="50vh" elevation="10" color="transparent" style="border-radius: 20px;">
                <v-img style="filter: blur(1px);" height="50vh" src="img/medicine2.jpg"></v-img>
                <v-sheet
                  class="v-sheet--offset mx-auto text-center pa-0"
                  color="transparent"
                  elevation="0"
                  max-width="calc(100% - 32px)"
                >
                  <span
                    style="font-size: 50px; text-shadow: 5px 5px 10px black;"
                    class="font-weight-bold white--text"
                  >SPOTIFY</span>
                </v-sheet>
              </v-card>
            </v-flex>
            <v-flex xs3 class="pb-0 mb-0">
              <v-card
                height="40vh"
                style="filter: blur(3px); border-radius: 20px;"
                elevation="10"
                color="transparent"
              >
                <v-img height="40vh" src="img/medicine3.jpg"></v-img>
              </v-card>
            </v-flex>
            <v-flex offset-xs5>
              <v-btn outlined dark large @click="goToLInk">
                <v-icon left>mdi-github-circle</v-icon>Veja o github do projeto
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-carousel-item>
      <v-carousel-item reverse-transition="fade-transition" transition="fade-transition">
        <v-container grid-list-md fill-height>
          <v-layout row wrap justify-center align-center>
            <v-flex xs3 class="pb-0 mb-0">
              <v-card
                style="filter: blur(3px); border-radius: 20px;"
                height="40vh"
                elevation="10"
                color="transparent"
              >
                <v-img height="40vh" src="img/medicine1.jpg"></v-img>
              </v-card>
            </v-flex>
            <v-flex xs3 class="pb-0 mb-0">
              <v-card height="50vh" elevation="10" color="transparent" style="border-radius: 20px;">
                <v-img style="filter: blur(1px);" height="50vh" src="img/medicine2.jpg"></v-img>
                <v-sheet
                  class="v-sheet--offset mx-auto text-center pa-0"
                  color="transparent"
                  elevation="0"
                  max-width="calc(100% - 32px)"
                >
                  <span
                    style="font-size: 50px; text-shadow: 5px 5px 10px black;"
                    class="font-weight-bold white--text"
                  >VERDE CARD</span>
                </v-sheet>
              </v-card>
            </v-flex>
            <v-flex xs3 class="pb-0 mb-0">
              <v-card
                height="40vh"
                style="filter: blur(3px); border-radius: 20px;"
                elevation="10"
                color="transparent"
              >
                <v-img height="40vh" src="img/medicine3.jpg"></v-img>
              </v-card>
            </v-flex>
            <v-flex offset-xs4>
              <v-btn outlined dark large @click="goToLInk">
                <v-icon left>mdi-github-circle</v-icon>Veja o github do projeto
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-carousel-item>
    </v-carousel>
  </v-app>
</template>

<script>
export default {
  methods: {
    goToLInk () {
      window.open('https://github.com/booscaaa/midow', '_blank')
    }
  }
}
</script>

<style scoped>
.v-sheet--offset {
  bottom: 40px;
  position: relative;
}
</style>
