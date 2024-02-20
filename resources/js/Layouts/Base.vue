<template>
    <div class="max-w-3xl mx-auto shadow-xl shadow-slate-300">

        <header class="flex justify-between items-center bg-gray-300 py-2 px-5">
            <h1 class="text-xl text-violet-500 font-bold">LIV App</h1>
            <Navbar />
        </header>

        <main class="flex flex-col gap-4 mx-auto mt-2 px-4">
            <slot />
        </main>

        <Footer />
    </div>
</template>

<script setup>
import Navbar from '../Components/Navbar.vue';
import Footer from '../Components/Footer.vue';
</script>
