<template>
    <div class="welcome flex flex-col gap-4 mx-auto mt-2 px-4">

        <h1 class="text-4xl text-center">About page</h1>

        <p>Dati dal backend Laravel: </p>
        <article>{{ someData.join(' ') }}</article>
    </div>
</template>

<script setup>
const props = defineProps({
    someData: Array
});
</script>

<style scoped>
</style>
