---
layout: page
title: Contact
eyebrow: Get in touch
lead: For questions about MacLeOD, reach out to the scientific leads.
---

## Scientific leads

<div class="people">
{% for p in site.data.team.leads %}
  <div class="person">
    <div class="name">{{ p.name }}</div>
    <div class="role">{{ p.role }}</div>
    <div class="aff">{{ p.affiliation }}</div>
    <!-- TODO: add email / personal page -->
  </div>
{% endfor %}
</div>

## Links

- Institutional page: [pepr-ia.fr/projet/macleod-2]({{ site.institutional_page }})

