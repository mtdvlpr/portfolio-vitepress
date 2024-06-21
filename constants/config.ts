import { GH_REPO } from './links'
import {
  editLink,
  lastUpdated,
  nav,
  outline,
  searchOptions,
  sidebar
} from './locale/base'

import type { DefaultTheme } from 'vitepress'

export const THEME_CONFIG: DefaultTheme.Config = {
  externalLinkIcon: true,
  logo: '/logo.png',
  footer: {
    message: `Released under the <a href="${GH_REPO}/blob/main/LICENSE">MIT License</a>.`,
    copyright:
      'Copyright © 2024-present <a href="https://github.com/mtdvlpr">Manoah Tervoort</a>'
  },
  socialLinks: [{ icon: 'github', link: GH_REPO, ariaLabel: 'GitHub' }],
  outline: outline(),
  editLink: editLink(),
  lastUpdated: lastUpdated(),
  search: searchOptions(),
  nav: nav(),
  sidebar: sidebar()
}
