---
title: Over mij
description: Wat informatie over mij.
---

<script setup>
  import { data } from './../../data/about.data.mts'
</script>

# Over mij

Hi! Ik ben een full-stack ontwikkelaar met een passie voor het creëren van dynamische, gebruikersgerichte webervaringen. Sinds ik mijn eerste "Hello, World"-script schreef, ben ik gedreven om complexe problemen op te lossen en intuïtieve oplossingen te bouwen die een echte impact hebben.

Ik houd van de uitdaging om nieuwe technologieën te leren en mijn vaardigheden aan te scherpen, of ik nu een lastig probleem aan het debuggen ben of de nieuwste webframeworks aan het verkennen ben, ik evolueer constant om voorop te blijven lopen.

Ik geloof dat elk project een kans is om iets innovatiefs en betekenisvols te creëren. Als je op zoek bent naar een ontwikkelaar die graag uitdagingen aangaat, snel leert en oplossingen levert die echt werken, laten we dan in contact komen en ontdekken hoe we samen iets uitzonderlijks kunnen bouwen.

## Talen

<span v-for="(name, i) in data.languages">{{name}}{{i < data.languages.length - 1 ? ' &bull; ' : ''}}</span>

## Frameworks

<span v-for="(name, i) in data.frameworks">{{name}}{{i < data.frameworks.length - 1 ? ' &bull; ' : ''}}</span>

## Tools

<span v-for="(name, i) in data.tools">{{name}}{{i < data.tools.length - 1 ? ' &bull; ' : ''}}</span>
