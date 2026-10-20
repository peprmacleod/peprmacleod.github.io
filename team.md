---
layout: page
title: Team
eyebrow: Consortium
lead: >-
  MacLeOD gathers researchers, engineers and students across four French
  institutions.
---

## Scientific coordinators

<div class="people">
{% for p in site.data.team.leads %}
  <div class="person">
    <div class="name">{% if p.link != "" %}<a href="{{ p.link }}">{{ p.name }}</a>{% else %}{{ p.name }}{% endif %}</div>
    <div class="role">{{ p.role }}</div>
    <div class="aff">{{ p.affiliation }}</div>
  </div>
{% endfor %}
</div>

## Members by institution

{% for g in site.data.team.groups %}
<h3>{{ g.institution }}</h3>
<div class="people">
{% for p in g.members %}
  <div class="person">
    <div class="name">{% if p.link %}<a href="{{ p.link }}">{{ p.name }}</a>{% else %}{{ p.name }}{% endif %}</div>
    {% if p.role %}<div class="role">{{ p.role }}</div>{% endif %}
  </div>
{% endfor %}
</div>
{% endfor %}

## Planned recruitments

<ul>
{% for r in site.data.team.recruitments %}<li>{{ r }}</li>{% endfor %}
</ul>

<p class="muted small"><em>Names expanded from the consortium slide — please
verify spellings and add emails / personal pages in <code>_data/team.yml</code>.</em></p>
