<template>
    <div class="flex flex-col gap-2 mx-auto mt-2 px-4">
        <h1 class="text-4xl text-center mb-2">Dashboard</h1>
        <p>Amministratore: <b>{{ auth }}</b></p>
        <article class="text-xs text-justify mt-3">
            Contenuto visibile soltanto agli amministratori
        </article>
    </div>
</template>

<script setup>
const props = defineProps({
    auth: String
});
</script>
