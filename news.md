---
layout: page
title: News
eyebrow: Updates
lead: Announcements, talks, events and milestones from the MacLeOD project.
---

<ul class="news-list">
  <li>
    <span class="muted small">NeurIPS 2026 · Paris</span>
    <p><strong><a href="https://neurips.cc/virtual/2026/workshop/137622">Geometric
    Distributional Deep Learning (GDDL) workshop</a></strong> — a NeurIPS 2026
    workshop co-organised by members of the project (Kimia Nadjahi and Clément
    Bonet), bringing together geometric deep learning, optimal transport,
    generative modelling and representation learning.</p>
  </li>
</ul>

{% if site.posts and site.posts.size > 0 %}
<h2>Posts</h2>
<ul class="plain">
{% for post in site.posts %}
  <li style="margin-bottom:1rem;">
    <span class="muted small">{{ post.date | date: "%B %-d, %Y" }}</span><br>
    <a href="{{ post.url | relative_url }}"><strong>{{ post.title }}</strong></a>
  </li>
{% endfor %}
</ul>
{% endif %}
