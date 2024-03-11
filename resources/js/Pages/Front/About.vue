<template>
    <div class="flex flex-col gap-2 mx-auto mt-2 px-4">
        <h1 class="text-4xl text-center mb-2">About page</h1>
        <p class="font-semibold">Dati dal backend Laravel: </p>
        <article>{{ someData ? someData.join(' ') : 'No data' }}</article>
        <pre>{{ $page }}</pre>
    </div>
</template>

<script>
import Base from '@/Layouts/Base.vue'
export default {
layout: Base,
}
</script>

<script setup>
const props = defineProps({
    someData: Array
});
</script>
