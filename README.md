# Ka Blog - Tutorial de Postagem

Este repositório agora foca totalmente em conteúdo e artigos. Abaixo, o guia de como criar um novo post.

## Como criar um novo post

1. **Crie o arquivo**:
   - Vá para a pasta `_posts/`.
   - Crie um arquivo com o nome no formato: `AAAA-MM-DD-titulo-do-post.md`.
   - Exemplo: `2024-03-24-meu-primeiro-tutorial.md`.

2. **Adicione o cabeçalho (Frontmatter)**:
   Todo post deve começar com esse bloco no início do arquivo:
   ```markdown
   ---
   layout: post
   title: "Título do seu Post"
   description: "Uma breve descrição que aparece nos cards"
   date: 2024-03-24 10:00:00 -0300
   tags: [tutorial, javascript, web]
   read_time: 5
   ---
   ```

3. **Escreva seu conteúdo**:
   - Abaixo do segundo `---`, escreva em Markdown.
   - Use `#` para títulos, `##` para subtítulos.
   - Use ` ```javascript ` para blocos de código com destaque de sintaxe.

4. **Publicação**:
   - Faça o commit e push para o GitHub.
   - O GitHub Pages fará o build automaticamente.

## Dicas de Blog
- **Tags**: As tags que você coloca no cabeçalho alimentam o filtro da página de artigos.
- **Imagens**: Coloque imagens em `assets/img/` e use `![descrição]({{ '/assets/img/foto.jpg' | relative_url }})` no markdown.
- **Link Relativo**: Sempre use o filtro `| relative_url` em links internos para garantir que funcionem em subpastas.

---
Para rodar localmente e testar antes de subir: `bundle exec jekyll serve --livereload`
