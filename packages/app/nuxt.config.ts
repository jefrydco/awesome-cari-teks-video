import type { NuxtOptions } from '@nuxt/types'

const hostname = 'https://awesome-cari-teks-video.netlify.app'

export default {
  head: {
    title: 'Awesome Cari Teks Video',

    meta: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, minimum-scale=1'
      }
    ]
  },

  target: 'static',

  components: true,

  generate: {
    fallback: true
  },

  loading: {
    color: 'var(--text-normal)',
    failedColor: '#f56565'
  },

  modules: ['@nuxtjs/google-fonts', '@nuxtjs/pwa', 'nuxt-i18n'],

  buildModules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '~/buildModules/nuxt-responsive-loader'
  ],

  css: ['~/assets/styles/app'],

  googleFonts: {
    download: true,
    display: 'swap',
    families: {
      Bitter: true,
      'Merriweather Sans': true
    }
  },

  pwa: {
    meta: {
      name: 'Awesome Cari Teks Video',
      description: 'Cool application that use Cari Teks Video API',
      lang: 'id',
      ogHost: hostname,
      twitterCard: 'summary_large_image',
      twitterSite: '@jefrydco',
      twitterCreator: '@jefrydco'
    },

    manifest: {
      name: 'Awesome Cari Teks Video',
      short_name: 'Awesome Cari Teks Video',
      description: 'Cool application that use Cari Teks Video API',
      lang: 'id',
      background_color: '#00acaf',
      theme_color: '#00acaf'
    },

    workbox: {
      offlineAnalytics: true,
      runtimeCaching: [
        {
          urlPattern: 'https://ajax.cloudflare.com/.*',
          handler: 'staleWhileRevalidate'
        },
        {
          urlPattern: 'https://fonts.gstatic.com/.*',
          handler: 'staleWhileRevalidate'
        },
        {
          urlPattern: 'https://www.google.com/.*',
          handler: 'staleWhileRevalidate'
        },
        {
          urlPattern: 'https://www.gstatic.com/.*',
          handler: 'staleWhileRevalidate'
        }
      ]
    }
  },

  i18n: {
    vueI18n: {
      silentTranslationWarn: true
    },
    baseUrl: hostname,
    seo: false,
    defaultLocale: 'id',
    detectBrowserLanguage: false,
    lazy: true,
    langDir: 'locales/',
    vueI18nLoader: true,
    locales: [
      {
        code: 'id',
        iso: 'id-ID',
        name: 'Bahasa Indonesia',
        file: 'id.ts'
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.ts'
      }
    ]
  },

  colorMode: {
    fallback: 'dark'
  },

  tailwindcss: {
    viewer: false,
    config: {
      future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true
      }
    }
  },

  responsiveLoader: {
    size: 1920,
    placeholder: true,
    quality: 70,
    progressive: true,
    adapter: require('responsive-loader/sharp')
  },

  build: {
    postcss: {
      plugins: {
        'postcss-nested': {}
      }
    },
    extend(_config, { isDev, isClient }) {
      if (isDev && isClient) {
        _config.module?.rules.push({
          enforce: 'pre',
          test: /\.(ts|vue)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
          options: {
            fix: true
          }
        })
      }
    }
  }
} as Partial<NuxtOptions>
