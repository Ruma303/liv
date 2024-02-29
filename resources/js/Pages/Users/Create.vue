<template>
    <Head>
        <title>Create user</title>
    </Head>
    <h1 class="text-4xl text-center">Create new user</h1>

    <form @submit.prevent="submit" class="max-w-lg mx-auto mt-8">
        <div class="mb-6">
            <label class="block mb-2 uppercase font-bold text-xs text-gray-700" for="name">Name: </label>
            <input type="text" placeholder="Il tuo nome..." name="name" v-model="form.name" required
                class="border-2 border-gray-400 px-2 rounded-md focus:outline-purple-400 w-full placeholder:italic">
             <p v-if="errors.name" v-text="errors.name" class="text-red-500 text-xs mt-1" />
        </div>
        <div class="mb-6">
            <label class="block mb-2 uppercase font-bold text-xs text-gray-700" for="email">Email: </label>
            <input type="email" placeholder="La tua email..." name="email" v-model="form.email" required
                class="border-2 border-gray-400 px-2 rounded-md focus:outline-purple-400 w-full placeholder:italic">
            <p v-if="errors.email" v-text="errors.email" class="text-red-500 text-xs mt-1" />
        </div>
        <div class="mb-6">
            <label class="block mb-2 uppercase font-bold text-xs text-gray-700" for="password">Password: </label>
            <input type="password" placeholder="La tua password..." name="password" v-model="form.password" required
                class="border-2 border-gray-400 px-2 rounded-md focus:outline-purple-400 w-full placeholder:italic">
            <p v-if="errors.password" v-text="errors.password" class="text-red-500 text-xs mt-1" />

        </div>
        <div class="mb-6">
            <button type="submit"
                class="border border-emerald-300 px-2 rounded-md bg-emerald-400 w-full hover:text-white hover:scale-105">Crea
                utente</button>
        </div>
    </form>
</template>
<!-- :disabled="form.processing" -->
<!-- <p v-if="form.errors.password" v-text="form.errors.password" class="text-red-500 text-xs mt-1" /> -->
<script setup>
const props = defineProps({
    users: Object,
    filters: Object,
    errors: Object
});
import { Head, router } from '@inertiajs/vue3';
import { reactive, ref } from 'vue';
const form = reactive({
    name: '',
    email: '',
    password: ''
});

let processing = ref(false);
console.log(props.errors)

const submit = () => {
    router.post('/users', form);
}

//processing.value = ref(true);
//console.log(form);
/* router.post('/users', form, {
    onStart: () => processing.value = true,
    onFinish: () => processing.value = false,
}); */


/* import { useForm } from '@inertiajs/vue3';
const form = useForm({
    name: '',
    email: '',
    password: ''
});
const submit = () => {
    form.post('/users', form);
} */
</script>
