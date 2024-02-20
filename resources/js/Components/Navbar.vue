<template>
    <nav class="mx-auto flex justify-center gap-4">

        <!-- Link -->
        <!-- <Link href="/" class="hover:text-violet-500">Welcome</Link>
        <Link href="/contacts" class="hover:text-violet-500">Contacts</Link>
        <Link href="/about" class="hover:text-violet-500">About</Link> -->

        <!-- Altre Request -->
        <!-- <Link href="/send-post-request" method="POST" as="button"
        class="hover:text-violet-500 bg-slate-300 rounded-md px-2 border border-gray-400">
            POST</Link>
        <Link href="/send-patch-request" method="PATCH" as="button"
            :data="{ user: 'Ruma' }"
        class="hover:text-violet-500 bg-slate-300 rounded-md px-2 border border-gray-400">
            PATCH</Link> -->

        <!-- Preservare il scroll position -->
        <Link href="/" class="hover:text-violet-500">Welcome</Link>
        <Link href="/contacts" class="hover:text-violet-500">Contacts</Link>
        <Link href="/about" class="hover:text-violet-500">About</Link> 

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


        <!-- <Link href="/" preserve-scroll class="hover:text-sky-700"
        :class="{'font-bold': $page.url === '/'}">Welcome</Link>

        <Link href="/?q=abcdefghi" preserve-scroll class="hover:text-sky-700"
        :class="{'font-bold': $page.component === 'Welcome'}">Welcome</Link>

        <Link href="/contacts?s=4&e=2" preserve-scroll class="hover:text-sky-700"
        :class="{'font-bold': $page.url.startsWith('/contacts')}">Contacts</Link>

        <Link href="/about" preserve-scroll class="hover:text-sky-700"
        :class="{'font-bold': $page.url === '/about'}">About</Link> -->

        <!-- <NavLink href="/" :active="$page.component === 'Welcome'">Welcome</NavLink>
        <NavLink href="/contacts" :active="$page.component === 'Contacts'">Contacts</NavLink>
        <NavLink href="/about" :active="$page.component === 'About'">About</NavLink> -->
