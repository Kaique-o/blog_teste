# Ka Blog (Jekyll + GitHub Pages)

## como publicar

1. cria um repo no github (public)
2. joga esses arquivos na raiz do repo
3. no github: settings -> pages -> build and deployment
   - source: deploy from a branch
   - branch: main / root
4. pronto

## rodar local (opcional)

> requer ruby + bundler

```bash
bundle install
bundle exec jekyll serve --livereload
```

## baseurl

- se o repo for `seuusuario.github.io` deixa `baseurl: ""`
- se o repo for `meu-blog` e o link virar `seuusuario.github.io/meu-blog` coloca `baseurl: "/meu-blog"`

## tags

- em cada post usa `tags: [tag1, tag2]`
- pagina `/tags/` mostra todas as tags
- pagina `/artigos/` tem filtro por tag e busca

## paginacao

- removi `paginate: 0` porque isso quebra o build do github pages (jekyll-paginate divide por zero e estoura `Infinity`)
- se quiser paginar depois, usa `paginate: 8` e eu te passo o ajuste de template
