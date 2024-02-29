<template>
    <Head>
        <title>Create user</title>
    </Head>
    <h1 class="text-4xl text-center">Create new user</h1>
    <input type="text" placeholder="" v-model="user"
        class="border-2 border-gray-400 px-2 rounded-md focus:outline-purple-400">



</template>

<script setup>
const props = defineProps({
    users: Object,
    filters: Object
});
//const props = defineProps({ users: Array });

import { Head, Link, router } from '@inertiajs/vue3';
import { ref, watch } from 'vue';
const user = ref('');

</script>
