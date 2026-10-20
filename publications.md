---
layout: page
title: Publications
eyebrow: Outputs
lead: >-
  Publications of the project, pulled automatically from HAL via the project's
  ANR reference. The list updates itself as new work is deposited.
---

<div id="hal-pubs" data-anr="{{ site.hal_anr_code }}">
  <p class="muted">Loading publications from HAL…</p>
</div>

<p class="muted small" style="margin-top:2rem;">
  Source: <a href="https://hal.science/search/index/?q=anrProjectReference_s:{{ site.hal_anr_code }}">HAL</a>,
  filtered on ANR reference <code>{{ site.hal_anr_code }}</code>. To appear here,
  a deposit must list this project's ANR funding.
</p>

<script src="{{ '/assets/js/publications.js' | relative_url }}" defer></script>
