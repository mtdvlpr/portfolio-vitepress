import { defineConfig } from 'vitepress'

import messages, { enabled, type LanguageValue, locales } from './../locales'
import { AUTHOR, CANONICAL_URL, GH_REPO_URL } from './../utils/constants'
import { camelToKebabCase, kebabToCamelCase } from './../utils/general'
import { mapLocales, mapSearch } from './../utils/locales'

const base = `/`
const srcExclude = locales
  .filter((l) => l.value !== 'en' && !enabled.includes(l.value))
  .map((l) => `**/${camelToKebabCase(l.value)}/*.md`)

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base,
  cleanUrls: true,
  head: [
    // Favicon variants
    [
      'link',
      {
        href: `${base}icons/icon-128x128.png`,
        rel: 'icon',
        sizes: '128x128',
        type: 'image/png',
      },
    ],
    [
      'link',
      {
        href: `${base}icons/icon-96x96.png`,
        rel: 'icon',
        sizes: '96x96',
        type: 'image/png',
      },
    ],
    [
      'link',
      {
        href: `${base}icons/icon-32x32.png`,
        rel: 'icon',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    [
      'link',
      {
        href: `${base}icons/icon-16x16.png`,
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    ['link', { href: `${base}favicon.ico`, rel: 'icon', type: 'image/ico' }],
    [
      'link',
      {
        href: `${base}logo.svg`,
        rel: 'icon',
        type: 'image/svg+xml',
      },
    ],

    // General link tags
    [
      'link',
      {
        href: '/sitemap.xml',
        rel: 'sitemap',
        title: 'Sitemap',
        type: 'application/xml',
      },
    ],

    // General meta tags
    ['meta', { content: AUTHOR, name: 'author' }],
    ['meta', { content: 'light dark', name: 'color-scheme' }],
    ['meta', { content: '#3075F2', name: 'theme-color' }],
    ['meta', { content: 'yes', name: 'mobile-web-app-capable' }],
    ['meta', { content: 'telephone=no', name: 'format-detection' }],
    [
      'meta',
      { content: `${base}browserconfig.xml`, name: 'msapplication-config' },
    ],

    // Apple meta tags
    ['meta', { content: 'yes', name: 'apple-mobile-web-app-capable' }],
    [
      'meta',
      { content: 'black', name: 'apple-mobile-web-app-status-bar-style' },
    ],

    // Twitter meta tags
    ['meta', { content: 'summary_large_image', name: 'twitter:card' }],
    [
      'meta',
      {
        content: `${CANONICAL_URL}portfolio-cover.png`,
        name: 'twitter:image',
      },
    ],
    ['meta', { content: 'Portfolio cover', name: 'twitter:image:alt' }],

    // Project cover og image
    [
      'meta',
      { content: `${CANONICAL_URL}portfolio-cover.png`, property: 'og:image' },
    ],
    ['meta', { content: 'image/png', property: 'og:image:type' }],
    ['meta', { content: '1910', property: 'og:image:width' }],
    ['meta', { content: '1000', property: 'og:image:height' }],
    ['meta', { content: 'Portfolio cover', property: 'og:image:alt' }],

    // Logo og image
    [
      'meta',
      {
        content: `${CANONICAL_URL}logo.jpg`,
        property: 'og:image',
      },
    ],
    ['meta', { content: 'image/jpeg', property: 'og:image:type' }],
    ['meta', { content: '460', property: 'og:image:width' }],
    ['meta', { content: '460', property: 'og:image:height' }],
    ['meta', { content: 'Portfolio logo', property: 'og:image:alt' }],
  ],
  lastUpdated: true,
  locales: mapLocales(),
  markdown: {
    config: (md) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const fence = md.renderer.rules.fence!
      md.renderer.rules.fence = function (tokens, idx, options, env, self) {
        const { localeIndex = 'root' } = env
        const locale: LanguageValue =
          localeIndex === 'root'
            ? 'en'
            : (kebabToCamelCase(localeIndex) as LanguageValue)
        const codeCopyButtonTitle = (() =>
          messages[locale]?.codeCopyButtonTitle ||
          messages.en.codeCopyButtonTitle)()
        return fence(tokens, idx, options, env, self).replace(
          '<button title="Copy Code" class="copy"></button>',
          `<button title="${codeCopyButtonTitle}" class="copy"></button>`,
        )
      }
    },
    image: { lazyLoading: true },
  },
  rewrites: { 'en/:rest*': ':rest*' },
  sitemap: {
    hostname: CANONICAL_URL,
  },
  srcDir: './src',
  srcExclude,
  themeConfig: {
    externalLinkIcon: true,
    logo: '/logo.svg',
    search: mapSearch(),
    socialLinks: [{ ariaLabel: 'GitHub', icon: 'github', link: GH_REPO_URL }],
  },
  transformPageData(pageData) {
    const canonicalUrl = `${CANONICAL_URL}${pageData.relativePath}`
      .replace(/index\.md$/, '')
      .replace(/\.md$/, '')

    const pageLang = pageData.relativePath.split('/')[0]
    const messageLocale = kebabToCamelCase(pageLang) as LanguageValue
    const isEnglish = !enabled.includes(
      pageData.relativePath.split('/')[0] as LanguageValue,
    )

    const lastUpdated = (
      pageData.lastUpdated ? new Date(pageData.lastUpdated) : new Date()
    ).toISOString()

    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push(
      // Site name
      [
        'meta',
        {
          content: messages[isEnglish ? 'en' : messageLocale].title,
          name: 'application-name',
        },
      ],
      [
        'meta',
        {
          content: messages[isEnglish ? 'en' : messageLocale].title,
          name: 'apple-mobile-web-app-title',
        },
      ],
      [
        'meta',
        {
          content: messages[isEnglish ? 'en' : messageLocale].title,
          property: 'og:site_name',
        },
      ],

      // Page url
      ['link', { href: canonicalUrl, rel: 'canonical' }],
      ['meta', { content: canonicalUrl, property: 'og:url' }],

      // Page type
      [
        'meta',
        {
          content:
            pageData.frontmatter.layout === 'home' ? 'website' : 'article',
          property: 'og:type',
        },
      ],

      // Page author
      ['meta', { content: AUTHOR, property: 'og:author' }],
      ['meta', { content: AUTHOR, property: 'article:author' }],

      // Page last updated
      ['meta', { content: lastUpdated, property: 'og:updated_time' }],
      ['meta', { content: lastUpdated, property: 'article:modified_time' }],

      // Page title
      [
        'meta',
        {
          content:
            pageData.frontmatter.layout === 'home'
              ? isEnglish
                ? messages['en'].title
                : messages[messageLocale].title
              : `${pageData.title} | M³ docs`,
          name: 'twitter:title',
        },
      ],
      [
        'meta',
        {
          content:
            pageData.frontmatter.layout === 'home'
              ? isEnglish
                ? messages['en'].title
                : messages[messageLocale].title
              : `${pageData.title} | M³ docs`,
          property: 'og:title',
        },
      ],

      // Page default locale
      [
        'link',
        {
          href: isEnglish
            ? canonicalUrl
            : canonicalUrl.replace(`/${pageLang}/`, '/'),
          hreflang: 'x-default',
          rel: 'alternate',
        },
      ],

      // Available page locales
      ...locales
        .filter((l) => l.value === 'en' || enabled.includes(l.value))
        .map((l): [string, Record<string, string>] => {
          const lang = camelToKebabCase(l.value)
          return [
            'link',
            {
              href: (!isEnglish
                ? canonicalUrl.replace(`/${pageLang}/`, `/${lang}/`)
                : `${CANONICAL_URL}${lang}/${pageData.relativePath.replace('index.md', '').replace('.md', '')}`
              ).replace('/en/', '/'),
              hreflang: lang,
              rel: 'alternate',
            },
          ]
        }),
    )
  },
})
