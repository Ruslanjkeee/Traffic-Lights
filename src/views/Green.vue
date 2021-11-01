<template>
  <div class="lights">
    <TrafficLight 
        v-for="light in $store.state.lights"
        :key="light.id"
        :style="{ backgroundColor: light.color }"
        :isActive="light.isActive"
        :isBlinking="light.color === 'green' && $store.getters.isTimerBelow"
    />
  </div>
</template>

<script>
import  TrafficLight  from '@/components/TrafficLight.vue';

export default ({
    name: "Green",
    components: {
        TrafficLight,
    },

    data() {
        return {
            actionTime: 15,
        }
    },

    methods: {
        changeActive() {
            this.$store.commit('changeActive', 3);
        },

        setTimer() {
        this.$store.commit('setTimer', this.actionTime);
        },

        changeCurrPath() {
            this.$store.commit('changeCurrPath', this.$router.currentRoute.value.path);
        },

        nextLight() {
            this.$store.commit('changePrevPath', this.$router.currentRoute.value.path);
            this.$router.push('/yellow');
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
})
</script>
