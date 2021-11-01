<template>
  <div
    :class="{active: isActive, blink: isBlinking}"
  >
    
  </div>
</template>

<script>
export default {
  name: "TrafficLight",
  props: {
    isActive: Boolean,
    isBlinking: Boolean,
  },
};
</script>


<style scoped>

div {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px solid #555;
  opacity: 0.3;
}

.active {
  opacity: 1;
  background: #000;
}

.blink {
  animation: blink 0.7s linear infinite;
}

@keyframes blink {
  from {
    opacity: 0.8;
    box-shadow: inset 0px 0px 50px 20px #222;
  }
  to {
    opacity: 1;   
  }
}
</style>
