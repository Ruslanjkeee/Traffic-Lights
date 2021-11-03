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
    name: "Red",
    components: {
        TrafficLights,
    },

    data() {
        return {
            actionTime: 10,
            id: 1,
            actualCurrPath: this.$router.currentRoute.value.path,
            nextPath: "/yellow"
        }
    },
})
</script>
