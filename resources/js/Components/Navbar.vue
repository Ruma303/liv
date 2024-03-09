<template>
    <nav class="flex justify-center gap-4">
        <NavLink href="/" :active="$page.component === 'Welcome'">Welcome</NavLink>
        <NavLink href="/contacts" :active="$page.component === 'Contacts'">Contacts</NavLink>
        <NavLink href="/about" :active="$page.component === 'About'">About</NavLink>
        <NavLink href="/users" :active="$page.component === 'Users/Index'">Users</NavLink>
    </nav>
</template>

<script setup>
const props = defineProps({
    users: Object,
});
</script>
