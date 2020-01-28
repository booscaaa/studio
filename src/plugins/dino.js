import Vue from 'vue'
import Intro from '@/components/widgets/Intro.vue'
import Opensource from '@/components/widgets/Opensource.vue'

class Dino {
  constructor () {
    Vue.component('dino-intro', Intro)
    Vue.component('dino-opensource', Opensource)
  }
}

const dino = new Dino()

export default dino
