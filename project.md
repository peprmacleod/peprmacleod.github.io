---
layout: page
title: The project
eyebrow: PEPR IA · MacLeOD
lead: >-
  MacLeOD — "Machine Learning on Geometries and Distributions" — unifies
  geometric and distribution-based deep learning through optimal transport.
---

## Motivation

Modern machine learning increasingly works with **distributions of data**
rather than individual points, and with data that live on **complex geometric
spaces** — manifolds and graphs — rather than flat Euclidean space. MacLeOD
bridges these two worlds.

Our central tool is **optimal transport (OT)**, which gives a principled way to
compare and transform distributions. We develop new OT formulations suited to
complex geometries and objects, together with the efficient algorithms and
neural architectures needed to make them practical at scale.

> We aim to lay the foundations of distributional deep learning on geometries,
> and to release open-source software that makes the results reproducible.

## Research axes

{% for axis in site.data.axes %}
### {{ axis.id }}. {{ axis.title }}
{{ axis.summary }}
{% endfor %}

