---
layout: page
title: News
eyebrow: Updates
lead: Announcements, talks, events and milestones from the MacLeOD project.
---

<p class="muted"><em>No news yet. Add Markdown files to a <code>_posts/</code>
folder (named <code>YYYY-MM-DD-title.md</code>) to turn this into a blog, or
list items manually below.</em></p>

{% if site.posts and site.posts.size > 0 %}
<ul class="plain">
{% for post in site.posts %}
  <li style="margin-bottom:1rem;">
    <span class="muted small">{{ post.date | date: "%B %-d, %Y" }}</span><br>
    <a href="{{ post.url | relative_url }}"><strong>{{ post.title }}</strong></a>
  </li>
{% endfor %}
</ul>
{% endif %}
