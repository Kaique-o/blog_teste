---
title: "checklist de performance web que eu uso sempre"
description: "um checklist pratico pra nao esquecer o basico que da resultado"
tags: [performance, seo, frontend]
read_time: 6
---

## 1 imagens

- usa formatos modernos quando der (webp avif)
- define width height pra evitar layout shift
- lazy load quando fizer sentido

## 2 css

- evita frameworks pesados se nao precisa
- remove css morto
- usa variaveis e tokens

## 3 js

- carrega defer por padrao
- separa feature por pagina
- mede com lighthouse e web vitals

## 4 seo tecnico

- title e description decentes
- sitemap e rss ativos
- link interno entre posts

dica: esse tema ja vem com `jekyll-seo-tag`, `sitemap` e `feed`
