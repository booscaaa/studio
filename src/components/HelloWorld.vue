<template>
  <v-app style="background-image: radial-gradient(at 42% top, #3D3E43, #191A1F); border-radius: 0;">
    <v-app-bar style="background-color: transparent; position: fixed" flat dark>B</v-app-bar>
    <v-window v-model="window" class="elevation-1" vertical>
      <v-window-item v-for="n in length" :key="n">
        <v-card elevation="0" flat height="100vh" color="transparent" v-if="n === 1">
          <v-app style="background-color: transparent">
            <v-container fill-height>
              <v-layout justify-center align-center>
                <v-card flat color="transparent">
                  <v-card-text>
                    <span style="font-size: 16px" class="white--text ml-5">Eu sou</span>
                  </v-card-text>
                  <v-card-text class="mt-10 pt-1">
                    <span style="font-size: 140px" class="font-weight-bold white--text">BOSCA</span>
                  </v-card-text>
                  <v-card-text class="text-right">
                    <span
                      style="font-size: 16px"
                      class="text-right white--text ml-5 mb-0 pb-0"
                    >Fullstack developer</span>
                  </v-card-text>
                </v-card>
              </v-layout>
            </v-container>
          </v-app>
        </v-card>
        <v-card elevation="0" flat color="transparent" v-if="n === 2">
          <v-app style="background-color: transparent">
            <v-container grid-list-md fill-height>
              <v-layout row wrap justify-center align-center>
                <v-flex xs4 class="pb-0 mb-0">
                  <v-card
                    style="filter: blur(3px); border-radius: 20px;"
                    height="50vh"
                    elevation="10"
                    color="transparent"
                  >
                    <v-img height="50vh" src="img/medicine1.jpg"></v-img>
                  </v-card>
                </v-flex>
                <v-flex xs4 class="pb-0 mb-0">
                  <v-card
                    height="60vh"
                    elevation="10"
                    color="transparent"
                    style="border-radius: 20px;"
                  >
                    <v-img style="filter: blur(1px);" height="60vh" src="img/medicine2.jpg"></v-img>
                    <v-sheet
                      class="v-sheet--offset mx-auto text-center pa-0"
                      color="transparent"
                      elevation="0"
                      max-width="calc(100% - 32px)"
                    >
                      <span
                        style="font-size: 140px; text-shadow: 5px 5px 10px black;"
                        class="font-weight-bold white--text"
                      >MIDOW</span>
                    </v-sheet>
                  </v-card>
                </v-flex>
                <v-flex xs4 class="pb-0 mb-0">
                  <v-card
                    height="50vh"
                    style="filter: blur(3px); border-radius: 20px;"
                    elevation="10"
                    color="transparent"
                  >
                    <v-img height="50vh" src="img/medicine3.jpg"></v-img>
                  </v-card>
                </v-flex>
                <v-btn outlined dark large>
                  <v-icon left>mdi-github-circle</v-icon>Veja o github do projeto
                </v-btn>
              </v-layout>
            </v-container>
          </v-app>
        </v-card>
      </v-window-item>
    </v-window>
    <v-item-group
      style="position: fixed; left: 40px; bottom: 90px"
      v-model="window"
      class="shrink"
      mandatory
      tag="v-flex"
    >
      <v-item v-for="n in length" :key="n" v-slot:default="{ active, toggle }">
        <div>
          <v-btn :input-value="active" dark icon @click="toggle">
            <v-icon v-if="n === 1">mdi-account</v-icon>
            <v-icon v-else>mdi-github-circle</v-icon>
          </v-btn>
        </div>
      </v-item>
    </v-item-group>
  </v-app>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: () => ({
    length: 2,
    window: 0,
    marker: true,
    delta: null,
    direction: null,
    interval: 100,
    counter1: 0,
    counter2: null,
    counter3: null,
    counter4: null,
    show1: false
  }),
  methods: {
    handleScroll (event) {
      console.log(event)
    },
    wheel (e) {
      this.counter1 += 1
      this.delta = e.deltaY
      if (this.delta > 0) {
        this.direction = 'up'
      } else {
        this.direction = 'down'
      }
      if (this.marker) {
        this.wheelStart()
      }
      return false
    },
    wheelStart () {
      this.marker = false
      this.wheelAct()
      this.counter3 = new Date()
    },
    wheelEnd () {
      if (this.window === 3 || this.window === -1) {
        this.window = 0
      } else {
        if (this.delta < 0) {
          this.window--
        } else {
          this.window++
        }
      }

      switch (this.window) {
        case 0:
          setTimeout(() => {
            console.log(this.show1)

            this.show1 = true
          }, 100)
          break
        default:
          this.show1 = false
          break
      }

      this.marker = true
      this.counter1 = 0
      this.counter2 = false
      this.counter3 = false
      this.counter4 = false
    },
    wheelAct () {
      this.counter2 = this.counter1
      setTimeout(() => {
        if (this.counter2 === this.counter1) {
          this.wheelEnd()
        } else {
          //   info.innerHTML = info.innerHTML + '<br>...'
          this.wheelAct()
        }
      }, this.interval)
    }
  },
  created () {
    window.addEventListener('wheel', this.wheel)
  },
  mounted () {
    setTimeout(() => {
      this.show1 = !this.show1
    }, 100)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.v-sheet--offset {
  bottom: 90px;
  position: relative;
}
</style>
