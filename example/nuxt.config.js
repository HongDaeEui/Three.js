export default {
    generate: {
        fallback: true
    },
    /*
    ** Headers of the page
    */
    head: {
        title: 'enterBlock',
        titleTemplate: 'enterBlock || %s',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
        ]
    },
    /*
    ** Global CSS
    */
    css: [
        'assets/scss/style.scss',
    ],
    router: {
        middleware: 'router-auth'
    },
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '~/mixins/mixin-global.js',
    ],
    components: true,
    /*
    ** Nuxt.js modules
    */
    modules: [
        'nuxt-i18n',
        '@nuxtjs/device',
        'vue-toastification/nuxt'
    ],
    toast: {
    },
    i18n: {
        locales: ['ko', 'en'],
        defaultLocale: 'ko',
        vueI18n: {
            fallbackLocale: 'ko',
            messages: {
                ko: require('./locales/ko.json'),
                en: require('./locales/en.json')
            }
        }
    },
    styleResources: {
        scss: [
            'assets/scss/default/_variables.scss'
        ]
    },
    /*
    ** Build configuration
    */
    build: {
        extractCSS: true,
        babel: {
            compact: true,
        },
    },
    server: {
        port: 50000
    },
    mode: 'universal',
    telemetry: false,
}
