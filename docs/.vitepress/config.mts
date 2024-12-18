import { nl } from './../../constants/locale/nl'
import { THEME_CONFIG } from './../../constants/config'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './src',
  rewrites: { 'en/:rest*': ':rest*' },
  title: "Manoah's Portfolio",
  description:
    'My developer portfolio, showcasing some of my work and projects.',
  lang: 'en',
  head: [
    ['meta', { content: 'light dark', name: 'color-scheme' }],
    ['meta', { content: '#3075F2', name: 'theme-color' }],
    ['meta', { content: 'yes', name: 'mobile-web-app-capable' }],
    ['meta', { content: 'yes', name: 'apple-mobile-web-app-capable' }]
  ],
  locales: {
    root: { label: 'English', lang: 'en' },
    nl: {
      label: 'Nederlands',
      lang: 'nl',
      description:
        'Mijn ontwikkelaar portfolio met mijn werk en een aantal projecten',
      themeConfig: nl
    }
  },
  cleanUrls: true,
  lastUpdated: true,
  markdown: { image: { lazyLoading: true } },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    ...THEME_CONFIG
  }
})
