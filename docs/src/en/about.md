---
title: About Manoah
description: Some information about Manoah, his skills and his passion for web development.
---

<script setup>
  import { data } from './../../data/about.data.mts'
</script>

# About Manoah

Manoah is a full‑stack software engineer with a passion for crafting dynamic, user‐focused web experiences. Ever since he wrote his first “Hello, World” script, he has been driven to solve complex problems and build intuitive solutions that make a real impact.

He thrives on the challenge of learning new technologies and refining his skills, whether he is debugging a tricky issue or exploring the latest web frameworks, he is constantly evolving to stay ahead of the curve.

He believes that every project is an opportunity to create something innovative and meaningful. If you’re looking for a developer who loves to dive into challenges, learn on the fly, and deliver solutions that truly work, Manoah would be a perfect fit.

## Languages

<span v-for="(name, i) in data.languages">{{name}}{{i < data.languages.length - 1 ? ' &bull; ' : ''}}</span>

## Frameworks

<span v-for="(name, i) in data.frameworks">{{name}}{{i < data.frameworks.length - 1 ? ' &bull; ' : ''}}</span>

## Tools

<span v-for="(name, i) in data.tools">{{name}}{{i < data.tools.length - 1 ? ' &bull; ' : ''}}</span>
