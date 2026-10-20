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
  {% include person.html p=p %}
{% endfor %}
</div>

## Members by institution

{% for g in site.data.team.groups %}
<h3>{{ g.institution }}</h3>
<div class="people">
{% for p in g.members %}
  {% include person.html p=p %}
{% endfor %}
</div>
{% endfor %}

## Planned recruitments

<ul>
{% for r in site.data.team.recruitments %}<li>{{ r }}</li>{% endfor %}
</ul>

<p class="muted small"><em>Add a personal-page link (<code>link:</code>) and a
photo (<code>photo:</code>, a file in <code>assets/img/team/</code>) for each
member in <code>_data/team.yml</code>. Without a photo, a monogram is shown.</em></p>
