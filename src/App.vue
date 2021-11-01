<template>
  <Timer />
  <router-view />
</template>

    
<script>
  import  Timer  from '@/components/Timer.vue'; 
  export default {
    name: "App",
    components: {
      Timer,
    },
    data() {
      return {
        timerId: 0,
      }
    },
    mounted() { 
      const data = JSON.parse(localStorage.getItem('state'));
      if(data) {
        this.$store.replaceState(data);
      }
      this.timerId = setInterval(() => {
        this.$store.commit('decreaseTimer');
        localStorage.setItem('state', JSON.stringify(this.$store.state));
      }, 1000)
    },
  };
</script>

<style>

body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-color:rgb(214, 132, 10);
}

.lights {
  border: 2px solid black;
  padding: 10px;
  position: relative;
}

.lights::after {
  content: '';
  display: block;
  position: absolute;
  bottom: -102px;
  left: 67px;
  height: 100px;
  width: 40px;
  background: #777;
}
</style>
