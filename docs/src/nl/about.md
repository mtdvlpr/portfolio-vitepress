---
title: About me
description: Some information about me.
---

<script setup>
  import { data } from './../../data/about.data.mts'
</script>

# About me

Hi! I'm an enthusiastic software developer who loves to learn new things. I'm passionate about web development and technology in general and I'm always looking for new challenges.

## Languages

<span v-for="(name, i) in data.languages">{{name}}{{i < data.languages.length - 1 ? ' &bull; ' : ''}}</span>

## Frameworks

<span v-for="(name, i) in data.frameworks">{{name}}{{i < data.frameworks.length - 1 ? ' &bull; ' : ''}}</span>

## Tools

<span v-for="(name, i) in data.tools">{{name}}{{i < data.tools.length - 1 ? ' &bull; ' : ''}}</span>
