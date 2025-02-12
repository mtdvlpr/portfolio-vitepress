<script setup lang="ts">
import { inBrowser, useData, useRouter } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { onMounted, watch } from 'vue'

import { enabled, type LanguageValue } from './../../locales'

const { lang } = useData()
watch(lang, (val) => {
  if (inBrowser && 'localStorage' in window) {
    window.localStorage.setItem('locale', val)
  }
})

onMounted(() => {
  if (inBrowser) {
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

    const preferredLocale =
      ('localStorage' in window
        ? window.localStorage.getItem('locale')
        : null) || systemLocale

    if (preferredLocale !== lang.value) {
      const path = useRouter().route.path
      if (preferredLocale !== 'en' && lang.value !== 'en') {
        useRouter().go(path.replace(`/${lang.value}/`, `/${preferredLocale}/`))
      } else if (preferredLocale === 'en') {
        useRouter().go(path.replace(`/${lang.value}/`, '/'))
      } else {
        useRouter().go(path.replace('/', `/${preferredLocale}/`))
      }
    }
  }
})
</script>

<template>
  <DefaultTheme.Layout />
</template>
