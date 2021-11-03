<template>
  <div class="lights">
    <TrafficLight 
      v-for="light in lights"
      :key="light.id"
      :style="{ backgroundColor: light.color }"
      :isActive="light.isActive"
      :isBlinking="light.color === 'yellow' && isTimerBelow"
    />
  </div>
</template>

<script>
import TrafficLight from "@/components/TrafficLight.vue";

export default {
  name: "Yellow",
  components: {
    TrafficLight,
  },

  data() {
    return {
      actionTime: 3,
      id: 2,
      actualCurrPath: this.$router.currentRoute.value.path,
    }
  },

  computed: {
    isTimeout() {
      return this.$store.getters.isTimerZero;
    },

    isTimerBelow() {
      return this.$store.getters.isTimerBelow;
    },
    
    lights() {
      return this.$store.state.lights;
    },

    currPathFromStore() {
      return this.$store.state.currPath;
    },

    timer() {
      return this.$store.state.timer;
    },

    prevPath() {
      return this.$store.state.prevPath;
    }
  },

  methods: {
    initState(id, actionTime, actualCurrPath) {
      return this.$store.dispatch('initState', {id, actionTime, actualCurrPath});
    },

    nextLight() {
      if(this.prevPath === '/red') {
        this.$router.push('/green');
      } else if (this.prevPath === '/green') {
        this.$router.push('/red');
      } else {
        this.$router.push('/green');
      }
      this.$store.commit('changePrevPath', this.actualCurrPath);
    }
  },

  mounted() {

    if(this.timer > 0 && this.actualCurrPath === this.currPathFromStore) {
      this.actionTime = this.timer;
    }

    this.initState(this.id, this.actionTime, this.actualCurrPath)
  },

  watch: {
    isTimeout(newVal) {
      if(newVal) {
        this.nextLight();
      }
    }
  }
};
</script>
