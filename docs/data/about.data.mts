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
        'HTML5',
        'CSS 3',
        'Sass',
        'SCSS',
        'JavaScript',
        'TypeScript',
        'Python',
        'Java',
        'C#',
        'Kotlin',
        'Swift',
        'SQL',
        'NoSQL',
      ],
      tools: [
        'Git',
        'GitHub',
        'GitLab',
        'VS Code',
        'Vite',
        'Docker',
        'Adobe XD',
        'Figma',
        'MySQL',
        'MongoDB',
      ],
    }
  },
})
