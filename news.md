---
layout: page
title: News
eyebrow: Updates
lead: Announcements, talks, events and milestones from the MacLeOD project.
---

{% if site.posts and site.posts.size > 0 %}
<ul class="news-list">
{% for post in site.posts %}
  <li>
    <span class="muted small">{{ post.date | date: "%B %-d, %Y" }}{% if post.event %} · {{ post.event }}{% endif %}</span>
    <p><strong><a href="{% if post.link %}{{ post.link }}{% else %}{{ post.url | relative_url }}{% endif %}">{{ post.title }}</a></strong></p>
    {% if post.summary %}<p class="muted">{{ post.summary }}</p>{% endif %}
  </li>
{% endfor %}
</ul>
{% else %}
<p class="muted">No news yet.</p>
{% endif %}

