---
title: About me
description: Some information about me.
languages: [HTML, CSS, SASS, JavaScript, TypeScript, Python, Java, C#, Kotlin, Swift, SQL]
frameworks: [Node.js, Vue.js, Nuxt, Svelte(Kit), Flask, Electron]
tools: [Git, GitHub, VS Code, Figma]
---

# About me

Hi! I'm an enthusiastic software developer who loves to learn new things. I'm passionate about web development and technology in general and I'm always looking for new challenges.

## Languages

<span v-for="(name, i) in $frontmatter.languages">{{name}}{{i < $frontmatter.languages.length - 1 ? ' &bull; ' : ''}}</span>

## Frameworks

<span v-for="(name, i) in $frontmatter.frameworks">{{name}}{{i < $frontmatter.frameworks.length - 1 ? ' &bull; ' : ''}}</span>

## Tools

<span v-for="(name, i) in $frontmatter.tools">{{name}}{{i < $frontmatter.tools.length - 1 ? ' &bull; ' : ''}}</span>
