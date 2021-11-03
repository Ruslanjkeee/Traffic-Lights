<template>
    <div class="timer">
        {{ timer }}
    </div>
</template>

<script>
export default {
    name: 'Timer',  
    computed: {
        timer() {
            return this.$store.state.timer;
        }
    }
}
</script>

<style>
    .timer {
        color: black;
        font-size: 36px;
        font-weight: bold;
    }
</style>