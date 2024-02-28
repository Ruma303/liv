<template v-for="(link, index) in links" :key="index">
    <Link v-if="link && link.url" :href="link.url" v-html="link.label"
        class="px-1 hover:font-bold"
        :class="{'font-bold text-violet-500' : link.active }"
    />
    <span v-else-if="link" v-html="link.label"
        class="px-1"
        :class="{'font-bold text-violet-500' : link.active }"
    />
</template>
<script setup>
import { Link } from '@inertiajs/vue3';
const props = defineProps({
    links: {
        type: Array,
        required: true
    }
});
</script>
