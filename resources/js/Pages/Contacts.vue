<template>
    <div class="flex flex-col gap-2 mx-auto mt-2 px-4">
        <h1 class="text-4xl text-center mb-2">Contacts page</h1>
        <Text />
    </div>
</template>

<script>
import Base from '@/Layouts/Base.vue'
export default {
layout: Base,
}
</script>

<script setup>
import Text from '../Components/Text.vue';
</script>
