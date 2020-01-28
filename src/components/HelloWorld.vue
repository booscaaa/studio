<template>
  <v-app style="background-image: radial-gradient(at 42% top, #3D3E43, #191A1F); border-radius: 0;">
    <v-app-bar style="background-color: transparent; position: fixed" flat dark>D</v-app-bar>
    <v-window v-model="window" class="elevation-1" vertical>
      <v-window-item v-for="n in length" :key="n">
        <v-card elevation="0" flat height="100vh" color="transparent" v-if="n === 1">
          <dino-intro />
        </v-card>
        <v-card elevation="0" flat color="transparent" v-if="n === 2">
          <dino-opensource/>
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
    interval: 50,
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
</style>
