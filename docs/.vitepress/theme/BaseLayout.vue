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
    const systemLocale = systemLocales.find(
      (locale) =>
        enabled.includes(locale as LanguageValue) ||
        enabled.includes(locale.split('-')[0] as LanguageValue),
    )
    const locale =
      ('localStorage' in window
        ? window.localStorage.getItem('locale')
        : null) || systemLocale

    if (locale !== lang.value) {
      const path = useRouter().route.path
      if (locale !== 'en' && lang.value !== 'en') {
        useRouter().go(path.replace(`/${lang.value}/`, `/${locale}/`))
      } else if (locale === 'en') {
        useRouter().go(path.replace(`/${lang.value}/`, '/'))
      } else {
        useRouter().go(path.replace('/', `/${locale}/`))
      }
    }
  }
})
</script>

<template>
  <DefaultTheme.Layout />
</template>
