    import { defineConfig } from 'vite';
    import laravel from 'laravel-vite-plugin';
    import vue from '@vitejs/plugin-vue';
    import inertiaLayout from "momentum-layout";

    export default defineConfig({
        plugins: [
            laravel({
                input: ['resources/scss/app.scss', 'resources/js/app.js'],
                refresh: true,
            }),
            vue(3),
            inertiaLayout(),
        ],
        /* resolve: {
            alias: {
                '@': path.resolve(__dirname, './resources/js')
            },
        }, */
    });

