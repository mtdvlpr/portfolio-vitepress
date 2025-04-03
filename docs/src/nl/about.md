---
title: Over Manoah
description: Enkele informatie over Manoah, zijn vaardigheden en zijn passie voor web development.
---

<script setup>
  import { data } from './../../data/about.data.mts'
</script>

# Over Manoah

Manoah is een full-stack ontwikkelaar met een passie voor het creëren van dynamische, gebruikersgerichte webervaringen. Sinds hij zijn eerste "Hello, World"-script schreef, is hij gedreven om complexe problemen op te lossen en intuïtieve oplossingen te bouwen die een echte impact hebben.

Hij houdt van de uitdaging om nieuwe technologieën te leren en zijn vaardigheden aan te scherpen, of hij nu een lastig probleem aan het debuggen ben of de nieuwste webframeworks aan het verkennen ben, hij evolueert constant om voorop te blijven lopen.

Hij gelooft dat elk project een kans is om iets innovatiefs en betekenisvols te creëren. Als je op zoek bent naar een ontwikkelaar die graag uitdagingen aangaat, snel leert en oplossingen levert die echt werken, Manoah zou perfect passen.

## Talen

<span v-for="(name, i) in data.languages">{{name}}{{i < data.languages.length - 1 ? ' &bull; ' : ''}}</span>

## Frameworks

<span v-for="(name, i) in data.frameworks">{{name}}{{i < data.frameworks.length - 1 ? ' &bull; ' : ''}}</span>

## Tools

<span v-for="(name, i) in data.tools">{{name}}{{i < data.tools.length - 1 ? ' &bull; ' : ''}}</span>
