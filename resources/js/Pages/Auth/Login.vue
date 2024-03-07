<template>
    <Head>
        <title>Login</title>
    </Head>
    <h1 class="text-4xl text-center mt-4">Login</h1>

    <form @submit.prevent="submit" class="max-w-lg mx-auto mt-4">
        <div class="mb-6">
            <label class="block mb-2 uppercase font-bold text-xs text-gray-700" for="email">Email: </label>
            <input type="email" placeholder="La tua email..." name="email" v-model="form.email" required
                class="border-2 border-gray-400 px-2 rounded-md focus:outline-purple-400 w-full placeholder:italic">
            <p v-if="form.errors.email" v-text="form.errors.email" class="text-red-500 text-xs mt-1" />
        </div>
        <div class="mb-6">
            <label class="block mb-2 uppercase font-bold text-xs text-gray-700" for="password">Password: </label>
            <input type="password" placeholder="La tua password..." name="password" v-model="form.password" required
                class="border-2 border-gray-400 px-2 rounded-md focus:outline-purple-400 w-full placeholder:italic">
                <p v-if="form.errors.password" v-text="form.errors.password" class="text-red-500 text-xs mt-1" />
        </div>
        <div class="mb-6">
            <button type="submit"
                class="border border-emerald-300 px-2 rounded-md bg-emerald-400 w-full hover:text-white hover:scale-105" :disabled="form.processing">Login</button>
        </div>
    </form>
</template>

    <script setup>
    import { Head } from '@inertiajs/vue3';
    import { useForm } from '@inertiajs/vue3';
    const props = defineProps({
        errors: Object
    });
    const form = useForm({
        email: '',
        password: ''
    });
    const submit = () => {
        form.post('/login');
    }
    </script>
