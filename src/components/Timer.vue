<template>
    <div class="timer">
        {{ $store.state.timer }}
    </div>
</template>

<script>
export default {
    name: 'Timer',
}
</script>

<style>
    .timer {
        color: black;
        font-size: 36px;
        font-weight: bold;
    }
</style>