import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import NProgress from 'nprogress'
import { router } from '@inertiajs/vue3'
import NavLink from './Components/NavLink.vue';
import Navbar from './Components/Navbar.vue';
import Footer from './Components/Footer.vue';
import Base from './Layouts/Base.vue';
import Admin from './Layouts/Admin.vue';

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
        let page = pages[`./Pages/${name}.vue`]
        // page.default.layout = page.default.layout || Base
        page.default.layout = name.startsWith('Admin') ? Admin : Base
        return page
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .component('NavLink', NavLink)
            .component('Navbar', Navbar)
            .component('Footer', Footer)
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

