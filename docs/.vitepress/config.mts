import { nl } from './../../constants/locale/nl'
import { THEME_CONFIG } from './../../constants/config'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './src',
  title: "Manoah's Portfolio",
  description:
    'My developer portfolio, showcasing some of my work and projects.',
  lang: 'en',
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
