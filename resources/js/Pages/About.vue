<template>
    <div class="flex flex-col gap-2 mx-auto mt-2 px-4">
        <Navbar />
        <h1 class="text-4xl text-center mb-2">About page</h1>
        <p class="font-semibold">Dati dal backend Laravel: </p>
        <article>{{ someData ? someData.join(' ') : 'No data' }}</article>
    </div>
</template>

<script setup>
import Navbar from '../Components/Navbar.vue';
const props = defineProps({
    someData: Array
});
</script>

<style scoped></style>
