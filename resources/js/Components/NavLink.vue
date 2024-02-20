<template>
    <Link
        preserve-scroll
        class="hover:text-sky-700"
        :class="{ 'font-bold': active }"
    >
        <slot />
    </Link>
</template>
<script setup>
import { Link } from '@inertiajs/vue3';
const props = defineProps({
    active: Boolean
});
</script>
