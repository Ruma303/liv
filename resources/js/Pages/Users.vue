<template>
    <Head>
        <title>Liv - Security</title>
    </Head>
    <h1 class="text-4xl text-center">All users</h1>
    <ul v-if="users">
        <li v-for="user in users" :key="user.id" v-text="user.name"/>
    </ul>
    <p v-else>Non ci sono utenti</p>

</template>

<script setup>
import { Head } from '@inertiajs/vue3';
const props = defineProps({ users: Array });
</script>
