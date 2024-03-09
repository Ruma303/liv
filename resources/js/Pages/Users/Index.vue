<template>

    <Head>
        <title>Liv - Security</title>
    </Head>
    <h1 class="text-4xl text-center">All users</h1>

    <nav class="flex items-center justify-center gap-4">
    <Link v-if="can.createUser" href="/users/create" :active="$page.component === 'Users/Create'"
        class="bg-emerald-400 w-fit min-w-28 px-2 py-1 rounded-lg hover:text-white text-center">
    Create user</Link>
        <input type="text" placeholder="Search..." v-model="search"
            class="w-full border-2 border-gray-400 px-2 rounded-md focus:outline-purple-400">
    </nav>
    <ul v-if="users">
        <!-- <li v-for="user in users.data" :key="user.id" v-text="user.name"/> -->
        <li v-for="user in users.data" :key="user.id">{{ user.id }}. {{ user.name }} </li>
    </ul>
    <p v-else>Non ci sono utenti</p>

    <div class="self-center">
        <template v-for="link in users.links" :key="link.url">
            <Link v-if="link.url" :href="link.url" v-html="link.label" class="px-1 hover:font-bold"
                :class="{ 'font-bold text-violet-500': link.active }" />
            <span v-else v-html="link.label" class="px-1" :class="{ 'font-bold text-violet-500': link.active }" />
        </template>

    </div>
</template>

<script setup>
const props = defineProps({
    users: Object,
    filters: Object,
    can: Object
});
import { Head, Link, router } from '@inertiajs/vue3';
import { ref, watch } from 'vue';
const search = ref(props.filters.search);
watch(search, (newVal, oldVal) => {
    router.get('/users', { search: newVal }, { preserveState: true, replace: true });
})
</script>
