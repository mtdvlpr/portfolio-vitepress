import en from './en.json'
import nl from './nl.json'

export type LanguageValue = 'en' | 'nl'

export const enabled: LanguageValue[] = ['nl']

export const locales: {
  englishName: string
  label: string
  value: LanguageValue
}[] = [
  {
    englishName: 'English',
    label: 'English',
    value: 'en',
  },
  {
    englishName: 'Dutch',
    label: 'Nederlands',
    value: 'nl',
  },
]

const messages: Record<LanguageValue, typeof en> = {
  en,
  nl,
}

export default messages
