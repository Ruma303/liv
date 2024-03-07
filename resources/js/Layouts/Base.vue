<template>

    <Head title="Base Layout">
        <meta head-key="description" name="description" content="Base Layout">
    </Head>
    <div class="max-w-3xl mx-auto shadow-xl shadow-slate-300 ">
        <header class="flex justify-between items-center bg-gray-300 py-2 px-5">
            <div class="flex gap-2 items-center">
                <Link href="/">
                <h1 class="text-xl text-violet-500 font-bold">LIV App</h1>
                </Link>
                <p class="text-sm text-black" v-if="authUser">
                    Bentornato, <b>{{ authUser }}</b> !</p>
                <Link href="/login" v-else
                    class="text-sm text-white bg-violet-500 rounded-md px-3 py-1 hover:scale-105">
                Login</Link>
                <Link href="/logout" method="POST"
                    class="text-sm text-white bg-red-500 rounded-md px-3 py-1 hover:scale-105">Logout
                </Link>
            </div>
            <Navbar />
        </header>

        <main class="flex flex-col gap-4 mx-auto mt-2 px-4">
            <slot />
        </main>

        <Footer />
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { usePage, Head, Link } from '@inertiajs/vue3';
const { props } = usePage();
const authUser = computed(() => props.auth);
</script>
