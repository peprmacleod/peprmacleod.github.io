---
layout: page
title: Software
eyebrow: Open source
lead: >-
  MacLeOD commits to releasing open-source software so that its methods are
  reproducible and reusable.
---

## Reproducibility first

A core goal of the project is to produce and contribute to **open-source
software** accompanying our research, from optimal-transport solvers to
geometric deep learning architectures.

{% if site.data.software %}
<div class="sw-grid">
{% for s in site.data.software %}
  <article class="sw-card">
    {% if s.logo %}
    <div class="sw-logo">
      <img src="{{ s.logo | relative_url }}" alt="{{ s.name }} logo" loading="lazy">
    </div>
    {% endif %}
    <div class="sw-body">
      <h3>{% if s.url %}<a href="{{ s.url }}">{{ s.name }}</a>{% else %}{{ s.name }}{% endif %}</h3>
      <p>{{ s.description }}</p>
      <p class="sw-links">
        {% if s.url %}<a href="{{ s.url }}">Website →</a>{% endif %}
        {% if s.repo %} · <a href="{{ s.repo }}">GitHub →</a>{% endif %}
      </p>
    </div>
  </article>
{% endfor %}
</div>
{% endif %}

<div class="callout" markdown="1">
More libraries and reproducibility code from the project will be listed here.
Add entries to <code>_data/software.yml</code> (name, description, url, repo,
and an optional logo under <code>assets/img/software/</code>).
</div>
