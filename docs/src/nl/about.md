---
title: Over mij
description: Wat informatie over mij.
---

<script setup>
  import { data } from './../../data/about.data.mts'
</script>

# Over mij

Hi! I’m a full‑stack developer with a passion for crafting dynamic, user‐focused web experiences. Ever since I wrote my first “Hello, World” script, I’ve been driven to solve complex problems and build intuitive solutions that make a real impact.

I thrive on the challenge of learning new technologies and refining my skills, whether I’m debugging a tricky issue or exploring the latest web frameworks, I’m constantly evolving to stay ahead of the curve.

I believe that every project is an opportunity to create something innovative and meaningful. If you’re looking for a developer who loves to dive into challenges, learn on the fly, and deliver solutions that truly work, let’s connect and explore how we can build something exceptional together.

## Talen

<span v-for="(name, i) in data.languages">{{name}}{{i < data.languages.length - 1 ? ' &bull; ' : ''}}</span>

## Frameworks

<span v-for="(name, i) in data.frameworks">{{name}}{{i < data.frameworks.length - 1 ? ' &bull; ' : ''}}</span>

## Tools

<span v-for="(name, i) in data.tools">{{name}}{{i < data.tools.length - 1 ? ' &bull; ' : ''}}</span>
