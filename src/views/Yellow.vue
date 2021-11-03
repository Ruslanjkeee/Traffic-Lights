<template>
  <div class="lights">
    <TrafficLights 
        :actionTime="actionTime"
        :id="id"
        :actualCurrPath='actualCurrPath'
        :nextPath="nextPath"
    />
    
  </div>
</template>

<script>
import  TrafficLights  from '@/components/TrafficLights.vue';

export default ({
    name: "Yellow",
    components: {
        TrafficLights,
    },

    data() {
        return {
            actionTime: 3,
            id: 2,
            actualCurrPath: this.$router.currentRoute.value.path,
            nextPath: "/green"
        }
    },

    computed: {
        prevPath() {
            return this.$store.state.prevPath;
        }
    },

    methods: {
        chooseNextPath() {
          if(this.prevPath === '/red') {
            this.nextPath = '/green';
          } else if (this.prevPath === '/green') {
            this.nextPath = '/red';
          } else {
            this.nextPath = '/green';
          }
        }
    },

    mounted() {
        this.chooseNextPath();
    }
})
</script>
