    <template>
        <h1>Welcome page</h1>
        <p>Il mio nick: <b>{{ nick }}</b></p>
        <p>Cosa impareremo in questo corso:
            <ul>
                <li v-for="techs in Liv" :key="techs">
                    {{ techs }}</li>
            </ul>
        </p>
    </template>
    <script setup>
    const props = defineProps({
        nick: String,
        job: String,
        Liv: Array
    });
    </script>
<style scoped>

</style>
