# MacLeOD — project website

Static website for the **MacLeOD** project (*Machine Learning on Geometries and
Distributions*), a project of the **PEPR IA**. Built with
[Jekyll](https://jekyllrb.com/) and deployable on GitHub Pages.

Institutional page: <https://www.pepr-ia.fr/projet/macleod-2/>

## Structure

```
_config.yml          Site settings, navigation, leads, partners
_layouts/            default.html, page.html
_includes/           head, header, footer
_data/               axes.yml, team.yml (+ add publications.yml, software.yml)
assets/css/style.css Theme (academic, single accent color)
index.html           Home page
project.md           The project (summary + 5 axes)
team.md              Team / consortium
publications.md      Publications (data-driven)
software.md          Open-source software
news.md              News / events
contact.md           Contact
```

## Edit content

- **Text & sections**: edit the `.md` / `.html` pages.
- **Research axes**: `_data/axes.yml`.
- **People**: `_data/team.yml`.
- **Publications / software**: create `_data/publications.yml` and
  `_data/software.yml` (templates are shown in `publications.md` / `software.md`).
- **Colors & fonts**: CSS variables at the top of `assets/css/style.css`.
- **Navigation**: the `nav:` list in `_config.yml`.

## Run locally

```bash
bundle install          # first time
bundle exec jekyll serve # http://localhost:4000
```

If you don't use Bundler, `jekyll serve` works too once Jekyll is installed.

## Deploy on GitHub Pages

1. Push this folder to a GitHub repository.
2. In **Settings → Pages**, set the source to **GitHub Actions** (the included
   `.github/workflows/pages.yml`) — or to the branch if you prefer the classic
   build.
3. If serving from `https://<user>.github.io/<repo>/`, set `baseurl: "/<repo>"`
   in `_config.yml`. For a custom domain (e.g. `macleod.pepr-ia.fr`), add a
   `CNAME` file and leave `baseurl` empty.
