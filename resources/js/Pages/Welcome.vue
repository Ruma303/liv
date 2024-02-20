<template>
    <div class="welcome flex flex-col gap-4 mx-auto mt-2 px-4">
        <Navbar />

        <h1 class="text-4xl text-center">Welcome page</h1>
        <p>Il tuo nome: <b>{{ nick }}</b></p>
        <article>
            <p>Cosa impareremo in questo corso:</p>
            <ul class="list-decimal list-inside mb-4">
                <li v-for="tech in Liv" :key="tech">
                    {{ tech }}</li>
            </ul>
            <p>Usando anche le seguenti tecnologie:</p>
            <ul class="list-disc list-inside">
                <li v-for="other in others" :key="other">
                    {{ other }}</li>
            </ul>
        </article>
    </div>
</template>

<script setup>
import Navbar from '../Components/Navbar.vue';

const props = defineProps({
    nick: String,
    job: String,
    Liv: Array,
    others: Array
});
</script>

<style scoped></style>
