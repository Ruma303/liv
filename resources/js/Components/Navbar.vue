<template>
    <nav class="mx-auto flex justify-center gap-4 text-black">
        <!-- <Link href="/" preserve-scroll class="hover:text-sky-700"
        :class="{'font-bold': $page.url === '/'}">Welcome</Link>

        <Link href="/?q=abcdefghi" preserve-scroll class="hover:text-sky-700"
        :class="{'font-bold': $page.component === 'Welcome'}">Welcome</Link>

        <Link href="/contacts?s=4&e=2" preserve-scroll class="hover:text-sky-700"
        :class="{'font-bold': $page.url.startsWith('/contacts')}">Contacts</Link>

        <Link href="/about" preserve-scroll class="hover:text-sky-700"
        :class="{'font-bold': $page.url === '/about'}">About</Link> -->

        <NavLink href="/" :active="$page.component === 'Welcome'">Welcome</NavLink>
        <NavLink href="/contacts" :active="$page.component === 'Contacts'">Contacts</NavLink>
        <NavLink href="/about" :active="$page.component === 'About'">About</NavLink>
    </nav>
</template>
<script setup>
import { Link } from '@inertiajs/vue3';
import NavLink from './NavLink.vue';
</script>

<style scoped>
/* .active {
    color: red;
} */
</style>

