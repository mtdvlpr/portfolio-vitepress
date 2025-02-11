---
title: Over mij
description: Wat informatie over mij.
---

<script setup>
  import { data } from './../../data/about.data.mts'
</script>

# Over mij

Hi! Ik ben een enthousiaste softwareontwikkelaar die graag nieuwe dingen leert. Ik ben gepassioneerd over webontwikkeling en technologie in het algemeen en ik ben altijd op zoek naar nieuwe uitdagingen.

## Talen

<span v-for="(name, i) in data.languages">{{name}}{{i < data.languages.length - 1 ? ' &bull; ' : ''}}</span>

## Frameworks

<span v-for="(name, i) in data.frameworks">{{name}}{{i < data.frameworks.length - 1 ? ' &bull; ' : ''}}</span>

## Tools

<span v-for="(name, i) in data.tools">{{name}}{{i < data.tools.length - 1 ? ' &bull; ' : ''}}</span>
