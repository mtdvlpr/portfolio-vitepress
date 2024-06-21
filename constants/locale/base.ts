import { GH_REPO } from '../links'
import type { DefaultTheme } from 'vitepress'
import type { LocalSearchTranslations } from 'vitepress/types/local-search'

export const searchOptions = (
  translations?: Required<LocalSearchTranslations>
): { provider: 'local'; options?: DefaultTheme.LocalSearchOptions } => ({
  provider: 'local',
  options: {
    translations,
    detailedView: true,
    _render: (src, env, md) => {
      const html = md.render(src, env)
      if (env.frontmatter?.search === false) return ''
      let parsed = html
      if (env.frontmatter?.title) {
        parsed = parsed.replaceAll(
          '{{ $frontmatter.title }}',
          `${env.frontmatter.title}`
        )
      }

      if (env.frontmatter?.byline) {
        parsed = parsed.replaceAll(
          '{{ $frontmatter.byline }}',
          `${env.frontmatter.byline}`
        )
      }

      return parsed
    }
  }
})

export const outline = (label?: string): DefaultTheme.Outline => ({
  label,
  level: 'deep'
})

export const editLink = (text?: string): DefaultTheme.EditLink => ({
  text,
  pattern: GH_REPO + '/edit/main/src/:path'
})

export const lastUpdated = (
  text?: string
): DefaultTheme.LastUpdatedOptions => ({
  text: text,
  // @ts-expect-error: timeago is not a valid option for dateStyle
  formatOptions: { dateStyle: 'timeago', forceLocale: true }
})

const url = (locale: string, path: string): string => {
  return `${locale ? '/' + locale : ''}/${path}`
}

export const nav = (
  locale = '',
  about = 'About',
  portfolio = 'Portfolio'
): DefaultTheme.NavItem[] => [
  {
    text: about,
    link: url(locale, 'about'),
    activeMatch: url(locale, 'about')
  },
  {
    text: portfolio,
    link: url(locale, 'portfolio'),
    activeMatch: url(locale, 'portfolio')
  }
]

export const sidebar = (
  locale = '',
  about = 'About',
  portfolio = 'Portfolio',
  projects = 'Projects'
): DefaultTheme.Sidebar => [
  { text: about, link: url(locale, 'about') },
  { text: portfolio, link: url(locale, 'portfolio') },
  {
    text: projects,
    collapsed: false,
    base: url(locale, 'projects/'),
    items: [
      { text: 'Mag Ik Dit Delen?', link: 'mag-ik-dit-delen' },
      {
        text: 'Web Design & Development minor',
        base: url(locale, 'projects/hva/'),
        items: [
          { text: 'Web App From Scratch', link: 'wafs' },
          { text: 'CSS to the Rescue', link: 'css-to-the-rescue' },
          { text: 'Browser Technology', link: 'browser-technology' }
        ]
      }
    ]
  }
]

type LocaleOptions = Required<
  Pick<
    DefaultTheme.Config,
    | 'darkModeSwitchLabel'
    | 'lightModeSwitchTitle'
    | 'darkModeSwitchTitle'
    | 'returnToTopLabel'
  >
> & {
  outline: string
  prev: string
  next: string
  editLink: string
  lastUpdated: string
  search: Required<LocalSearchTranslations>
  about: string
  portfolio: string
  projects: string
}

export const localeOptions = (
  locale: string,
  options: LocaleOptions
): DefaultTheme.Config => ({
  darkModeSwitchLabel: options.darkModeSwitchLabel,
  darkModeSwitchTitle: options.darkModeSwitchTitle,
  lightModeSwitchTitle: options.lightModeSwitchTitle,
  returnToTopLabel: options.returnToTopLabel,
  docFooter: { prev: options.prev, next: options.next },
  outline: outline(options.outline),
  editLink: editLink(options.editLink),
  lastUpdated: lastUpdated(options.lastUpdated),
  search: searchOptions(options.search),
  sidebar: sidebar(locale, options.about, options.portfolio, options.projects),
  nav: nav(locale, options.about, options.portfolio)
})
