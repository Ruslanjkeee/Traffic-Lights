<template>
  <div class="lights">
    <TrafficLight 
      v-for="light in $store.state.lights"
      :key="light.id"
      :style="{ backgroundColor: light.color }"
      :isActive="light.isActive"
      :isBlinking="light.color === 'yellow' && $store.getters.isTimerBelow"
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
    }
  },

  methods: {
    changeActive() {
      this.$store.commit('changeActive', 2);
    },

    setTimer() {
      this.$store.commit('setTimer', this.actionTime);
    },

    changeCurrPath() {
      this.$store.commit('changeCurrPath', this.$router.currentRoute.value.path);
    },

    nextLight() {
      if(this.$store.state.prevPath === '/red') {
        this.$router.push('/green');
      } else if (this.$store.state.prevPath === '/green') {
        this.$router.push('/red');
      } else {
        this.$router.push('/green');
      }
      this.$store.commit('changePrevPath', this.$router.currentRoute.value.path);
    }
  },

  mounted() {
    const curPath = this.$router.currentRoute.value.path;
    const curPathFromStore = this.$store.state.currPath;
    if(this.$store.state.timer > 0 && curPath === curPathFromStore) {
      this.actionTime = this.$store.state.timer;
    }
    this.changeCurrPath();
    this.changeActive();
    this.setTimer();
  },

  computed: {
    isTimeout() {
      return this.$store.getters.isTimerZero;
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
