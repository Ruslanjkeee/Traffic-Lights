<template>
  <div class="lights">
    <TrafficLight 
      v-for="light in lights"
      :key="light.id"
      :style="{ backgroundColor: light.color }"
      :isActive="light.isActive"
      :isBlinking="light.color === 'red' && isTimerBelow"
    />
  </div>
</template>

<script>
import TrafficLight from "@/components/TrafficLight.vue";

export default {
  name: "Red",
  components: {
    TrafficLight,
  },

  data() {
    return {
      actionTime: 10,
      id: 1,
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
    }
  },

  methods: {
    initState(id, actionTime, actualCurrPath) {
      return this.$store.dispatch('initState', {id, actionTime, actualCurrPath});
    },

    nextLight() {
      this.$store.commit('changePrevPath', this.actualCurrPath);
      this.$router.push('/yellow');
    }
  },

  mounted() {
    
    if(this.timer > 0 && this.actualCurrPath === this.currPathFromStore) {
      this.actionTime = this.timer;
    }
    
    this.initState(this.id, this.actionTime, this.actualCurrPath);
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
