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
    name: "Green",
    components: {
        TrafficLights,
    },

    data() {
        return {
            actionTime: 15,
            id: 3,
            actualCurrPath: this.$router.currentRoute.value.path,
            nextPath: "/yellow"
        }
    },
})
</script>
