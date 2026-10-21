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
<section class="team-group">
  <h3>{{ g.institution }}</h3>
  <div class="people">
  {% for p in g.members %}
    {% include person.html p=p %}
  {% endfor %}
  </div>
</section>
{% endfor %}

