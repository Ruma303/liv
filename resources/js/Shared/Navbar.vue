<template>
    <nav class="mx-auto flex justify-center">
        <Link href="/" preserve-scroll
        class="hover:text-sky-700">Welcome</Link>
        <Link href="/contacts" preserve-scroll
        class="hover:text-sky-700">Contacts</Link>
        <Link href="/about" preserve-scroll
        class="hover:text-sky-700">About</Link>
    </nav>
</template>
<script setup>
import { Link } from '@inertiajs/vue3';
</script>
<style scoped>
nav {
    display: flex;
    gap: 1em;
}
</style>

