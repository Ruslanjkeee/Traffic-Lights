<template>
  <div >
    <TrafficLight 
      v-for="light in lights"
      :key="light.id"
      :style="{ backgroundColor: light.color }"
      :isActive="light.isActive"
      :isBlinking="light.id === id && isTimerBelow"
    />
  </div>
</template>

<script>
import TrafficLight from "@/components/TrafficLight.vue";

export default {
  name: "TrafficLights",
  components: {
    TrafficLight,
  },

  props: {
      actionTime: Number,
      id: Number,
      actualCurrPath: String,
      nextPath: String,
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
      this.$router.push(this.nextPath);
    }
  },

  mounted() {
    if(this.timer > 0 && this.actualCurrPath === this.currPathFromStore) {
        this.initState(this.id, this.timer, this.actualCurrPath);
    } else {
        this.initState(this.id, this.actionTime, this.actualCurrPath);
    }
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
