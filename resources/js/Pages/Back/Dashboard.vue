<template>
    <Admin>
        <div class="flex flex-col gap-2 mx-auto mt-2 px-4">
            <h1 class="text-4xl text-center mb-2">Dashboard</h1>
            <p>Amministratore: <b>{{ admin }}</b></p>
            <article class="text-xs text-justify mt-3">
                Contenuto visibile soltanto agli amministratori
            </article>
        </div>
    </Admin>
</template>

<script setup>
import Admin from '@/Layouts/Admin.vue';
const props = defineProps({
    admin: String
});
</script>
