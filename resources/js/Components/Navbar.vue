<script setup>
import { Link } from '@inertiajs/vue3';
import NavLink from './NavLink.vue';
</script>

<template>
    <nav class="mx-auto flex justify-center gap-4">

        <!--, Link -->
        <!-- <Link href="/" class="hover:text-violet-500">Welcome</Link>
        <Link href="/contacts" class="hover:text-violet-500">Contacts</Link>
        <Link href="/about" class="hover:text-violet-500">About</Link> -->

        <!--, Altre Request -->
        <!-- <Link href="/send-post-request" method="POST" as="button"
        class="hover:text-violet-500 bg-slate-300 rounded-md px-2 border border-gray-400">
            POST</Link>
        <Link href="/send-patch-request" method="PATCH" as="button"
            :data="{ user: 'Ruma' }"
        class="hover:text-violet-500 bg-slate-300 rounded-md px-2 border border-gray-400">
            PATCH</Link> -->

        <!--, Preservare il scroll position -->
        <!-- <Link href="/" class="hover:text-violet-500" preserve-scroll>Welcome</Link>
        <Link href="/contacts" class="hover:text-violet-500" preserve-scroll>Contacts</Link>
        <Link href="/about" class="hover:text-violet-500" preserve-scroll>About</Link> -->

        <!--,  Stile dei link attivi -->
        <!-- <Link href="/" class="hover:text-violet-500"
            :class="{'font-bold': $page.url === '/'}">Welcome</Link>
        <Link href="/about" class="hover:text-violet-500"
            :class="{'font-bold': $page.url === '/about'}">About</Link>
        <Link href="/contacts" class="hover:text-violet-500"
            :class="{'font-bold': $page.url === '/contacts'}">Contacts</Link> -->

        <!--, Stile dei link attivi con query -->
        <!-- <Link href="/contacts?foo=bar" class="hover:text-violet-500"
            :class="{'font-bold': $page.url === '/contacts'}">Foo</Link> -->

            <!--# Soluzione 1 -->
            <!-- <Link href="/contacts?foo=bar" class="hover:text-violet-500"
            :class="{'font-bold': $page.url.startsWith('/contacts')}">Foo</Link> -->

            <!--# Soluzione 2 -->
            <!-- <Link href="/contacts?foo=bar" class="hover:text-violet-500"
                :class="{'font-bold': $page.component === 'Contacts'}">Foo</Link> -->

        <!--, Componente NavLink -->
        <NavLink href="/" :active="$page.component === 'Welcome'">Welcome</NavLink>
        <NavLink href="/contacts" :active="$page.component === 'Contacts'">Contacts</NavLink>
        <NavLink href="/about" :active="$page.component === 'About'">About</NavLink>

    </nav>
</template>



