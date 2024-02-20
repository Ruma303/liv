import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import NProgress from 'nprogress'
import { router } from '@inertiajs/vue3'

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
        return pages[`./Pages/${name}.vue`]
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el)
    },
    progress: {
        delay: 2500,
        color: '#7c3aed',
        includeCSS: true,
        showSpinner: false,
    },
})

router
    .on('start', () => NProgress.start())
    .on('finish', () => NProgress.done())

