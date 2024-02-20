<script setup>
import NavLink from './NavLink.vue';
</script>

<template>
    <nav class="mx-auto flex justify-center gap-4">
        <NavLink href="/" :active="$page.component === 'Welcome'">Welcome</NavLink>
        <NavLink href="/contacts" :active="$page.component === 'Contacts'">Contacts</NavLink>
        <NavLink href="/about" :active="$page.component === 'About'">About</NavLink>
    </nav>
</template>



