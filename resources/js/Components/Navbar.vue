<template>
    <nav class="flex justify-center gap-4">
        <NavLink href="/" :active="$page.component === 'Front/Welcome'">Welcome</NavLink>
        <NavLink href="/contacts" :active="$page.component === 'Front/Contacts'">Contacts</NavLink>
        <NavLink href="/about" :active="$page.component === 'Front/About'">About</NavLink>
        <NavLink href="/dashboard" :active="$page.component === 'Back/Dashboard'">Dashboard</NavLink>
    </nav>
</template>

<script setup>
import NavLink from './NavLink.vue';
</script>
