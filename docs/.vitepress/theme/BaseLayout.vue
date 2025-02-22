<script setup lang="ts">
import { inBrowser, useData, useRouter } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { onMounted, watchEffect } from 'vue'

import { enabled, type LanguageValue } from './../../locales'

const { lang } = useData()

function getCookie(cname: string) {
  const name = cname + '='
  const decodedCookie = decodeURIComponent(document.cookie)
  const ca = decodedCookie.split(';')
  for (const c of ca) {
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

function setCookie(cname: string, val: string, exDays: number) {
  const d = new Date()
  d.setTime(d.getTime() + exDays * 24 * 60 * 60 * 1000)
  const expires = 'expires=' + d.toUTCString()
  document.cookie = cname + '=' + val + ';' + expires + ';path=/'
}

watchEffect(() => {
  if (inBrowser && enabled.includes(lang.value)) {
    setCookie('nf_lang', lang.value, 365)
  }
})

onMounted(() => {
  if (inBrowser && lang.value === 'root') {
    const systemLocales =
      'navigator' in window ? window.navigator.languages : []

    const systemMatch =
      systemLocales.find(
        (locale) =>
          enabled.includes(locale as LanguageValue) ||
          enabled.includes(locale.split('-')[0] as LanguageValue),
      ) ?? 'en'

    const systemLocale = enabled.includes(systemMatch as LanguageValue)
      ? systemMatch
      : (systemMatch.split('-')[0] as LanguageValue)

    const preferredLocale = getCookie('nf_lang') || systemLocale

    const path = useRouter().route.path
    if (enabled.includes(preferredLocale)) {
      useRouter().go(path.replace('/', `/${preferredLocale}/`))
    } else {
      useRouter().go(path.replace('/', '/en/'))
    }
  }
})
</script>

<template>
  <DefaultTheme.Layout />
</template>
