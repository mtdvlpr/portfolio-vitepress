import { defineLoader } from 'vitepress'

export interface Data {
  frameworks: string[]
  languages: string[]
  tools: string[]
}

declare const data: Data
export { data }

export default defineLoader({
  async load(): Promise<Data> {
    return {
      frameworks: [
        'Node.js',
        'Vue.js',
        'Nuxt',
        'Quasar',
        'Electron',
        'Svelte(Kit)',
        'Flask',
        'FastAPI',
        'Laravel',
      ],
      languages: [
        'HTML',
        'CSS',
        'Sass',
        'JavaScript',
        'TypeScript',
        'Python',
        'Java',
        'C#',
        'Kotlin',
        'Swift',
        'SQL',
      ],
      tools: ['Git', 'GitHub', 'GitLab', 'VS Code', 'Vite', 'Docker', 'Figma'],
    }
  },
})
