import type {
  DefaultTheme,
  LocaleConfig,
  LocaleSpecificConfig,
} from 'vitepress'
import type { LocalSearchTranslations } from 'vitepress/types/local-search'

import messages, { enabled, locales as localeOptions } from './../locales'
import { AUTHOR, GH_REPO_URL } from './constants'
import { camelToKebabCase } from './general'

export type MessageSchema = (typeof messages)['en']

const mapLocale = (
  lang: string,
  label: string,
  msg: MessageSchema,
): LocaleSpecificConfig<DefaultTheme.Config> & {
  label: string
  link?: string
} => ({
  description: msg.description,
  head: [
    // Site description
    ['meta', { content: msg.description, property: 'og:description' }],
    ['meta', { content: msg.description, name: 'twitter:description' }],

    // Current locale and alternate locales
    ['meta', { content: lang, property: 'og:locale' }],
    ...localeOptions
      .filter(
        (l) =>
          l.label !== label && (l.value === 'en' || enabled.includes(l.value)),
      )
      .map((l): [string, Record<string, string>] => [
        'meta',
        {
          content: camelToKebabCase(l.value),
          property: 'og:locale:alternate',
        },
      ]),

    // Translate the "Copied" message in code blocks
    [
      'style',
      {},
      `:lang(${lang}) {--vp-code-copy-copied-text-content: '${msg.copied}'}`,
    ],
  ],
  label,
  lang,
  themeConfig: mapThemeConfig(lang, msg),
  title: msg.title,
})

export const mapLocales = (): LocaleConfig<DefaultTheme.Config> => {
  const locales: LocaleConfig<DefaultTheme.Config> = {
    root: mapLocale('en', 'English', messages.en),
  }

  localeOptions
    .filter((l) => enabled.includes(l.value))
    .forEach((locale) => {
      const lang = camelToKebabCase(locale.value)
      const msg = messages[locale.value]
      locales[lang] = mapLocale(lang, locale.label, msg)
    })

  return locales
}

const mapSearchTranslations = (
  msg: MessageSchema,
): LocalSearchTranslations => ({
  button: { buttonAriaLabel: msg.search, buttonText: msg.search },
  modal: {
    backButtonTitle: msg.backButtonTitle,
    displayDetails: msg.displayDetails,
    footer: {
      closeKeyAriaLabel: msg.esc,
      closeText: msg.closeText,
      navigateDownKeyAriaLabel: msg.arrowDown,
      navigateText: msg.navigateText,
      navigateUpKeyAriaLabel: msg.arrowUp,
      selectKeyAriaLabel: msg.enter,
      selectText: msg.selectText,
    },
    noResultsText: msg.noResultsText,
    resetButtonTitle: msg.resetButtonTitle,
  },
})

export const mapSearch = (): {
  options: DefaultTheme.LocalSearchOptions
  provider: 'local'
} => {
  const locales: Record<
    string,
    Partial<Omit<DefaultTheme.LocalSearchOptions, 'locales'>>
  > = {}

  localeOptions
    .filter((l) => enabled.includes(l.value))
    .forEach((locale) => {
      const lang = camelToKebabCase(locale.value)
      const msg = messages[locale.value]
      locales[lang] = { translations: mapSearchTranslations(msg) }
    })

  return {
    options: {
      detailedView: true,
      locales,
      translations: mapSearchTranslations(messages.en),
    },
    provider: 'local',
  }
}

const link = (locale: string, url: string) =>
  `${locale === 'en' ? '' : `/${locale}`}/${url}`

export const mapThemeConfig = (
  locale: string,
  msg: MessageSchema,
): DefaultTheme.Config => ({
  darkModeSwitchLabel: msg.darkModeSwitchLabel,
  darkModeSwitchTitle: msg.darkModeSwitchTitle,
  docFooter: { next: msg.docFooterNext, prev: msg.docFooterPrev },
  editLink: {
    pattern: `${GH_REPO_URL}/edit/main/src/:path`,
    text: msg.editLink,
  },
  footer: {
    copyright: `${msg.copyright} © ${new Date().getFullYear()} ${AUTHOR}`,
    message: msg.footerMessage?.replace(
      '{linkToLicense}',
      `<a href="${GH_REPO_URL}/blob/master/LICENSE.md">AGPL-3.0 License</a>`,
    ),
  },
  langMenuLabel: msg.langMenuLabel,
  lastUpdated: {
    formatOptions: { dateStyle: 'long', forceLocale: true },
    text: msg.lastUpdated,
  },
  lightModeSwitchTitle: msg.lightModeSwitchTitle,
  nav: [
    { link: link(locale, 'about'), text: msg.about },
    { link: link(locale, 'portfolio'), text: msg.portfolio },
  ],
  notFound: {
    linkLabel: msg.notFoundLink,
    linkText: msg.notFoundLink,
    quote: msg.notFoundQuote,
    title: msg.notFoundTitle,
  },
  outline: { label: msg.outline, level: 'deep' },
  returnToTopLabel: msg.returnToTopLabel,
  sidebar: [
    {
      link: link(locale, 'about'),
      text: msg.about,
    },
    { link: link(locale, 'portfolio'), text: msg.portfolio },
    {
      base: link(locale, 'projects'),
      collapsed: false,
      items: [
        { link: '/mag-ik-dit-delen', text: 'Mag Ik Dit Delen?' },
        {
          base: link(locale, 'projects/hva/'),
          items: [
            { link: '/wafs', text: 'Web App From Scratch' },
            { link: '/css-to-the-rescue', text: 'CSS to the Rescue' },
            { link: '/browser-technology', text: 'Browser Technology' },
            { link: '/hva-hackathon', text: 'HvA Hackathon' },
          ],
          text: 'Web Design & Development minor',
        },
      ],
      text: msg.projects,
    },
  ],
  sidebarMenuLabel: msg.sidebarMenuLabel,
  siteTitle: msg.title,
  skipToContentLabel: msg.skipToContentLabel,
})
