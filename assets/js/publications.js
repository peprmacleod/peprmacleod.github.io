/* Fetch MacLeOD publications from HAL and render them, grouped by year.
 *
 * Filters on the ANR project reference (HAL field `anrProjectReference_s`),
 * read from the container's data-anr attribute. HAL's API allows CORS, so this
 * runs entirely in the browser — no build step, always up to date.
 * API docs: https://api.archives-ouvertes.fr/docs/search
 */
(function () {
  "use strict";

  var root = document.getElementById("hal-pubs");
  if (!root) return;

  var anr = root.getAttribute("data-anr");
  if (!anr) {
    root.innerHTML = '<p class="muted">No ANR code configured.</p>';
    return;
  }

  var FIELDS = [
    "docid", "uri_s", "title_s", "authFullName_s",
    "producedDateY_i", "producedDate_s", "docType_s",
    "journalTitle_s", "conferenceTitle_s", "bookTitle_s", "doiId_s"
  ].join(",");

  var API = "https://api.archives-ouvertes.fr/search/";
  var url = API + "?q=" + encodeURIComponent("anrProjectReference_s:" + anr) +
    "&rows=1000&sort=" + encodeURIComponent("producedDate_s desc") +
    "&fl=" + FIELDS + "&wt=json";

  // Human-readable labels for the HAL document types we are likely to see.
  var TYPE_LABELS = {
    ART: "Journal article",
    COMM: "Conference paper",
    POSTER: "Poster",
    OUV: "Book",
    COUV: "Book chapter",
    DOUV: "Edited book",
    THESE: "PhD thesis",
    HDR: "Habilitation",
    REPORT: "Report",
    UNDEFINED: "Preprint",
    PREPRINT: "Preprint",
    OTHER: "Other"
  };

  function first(v) { return Array.isArray(v) ? v[0] : v; }

  function escapeHTML(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function venueOf(doc) {
    return first(doc.journalTitle_s) || first(doc.conferenceTitle_s) ||
           first(doc.bookTitle_s) || "";
  }

  function render(docs) {
    if (!docs.length) {
      root.innerHTML = '<p class="muted">No publications are linked to this ' +
        'project on HAL yet. They will appear here automatically once ' +
        'referenced with the ANR code <code>' + escapeHTML(anr) + '</code>.</p>';
      return;
    }

    // Group by year (descending).
    var byYear = {};
    docs.forEach(function (doc) {
      var y = doc.producedDateY_i || "Undated";
      (byYear[y] = byYear[y] || []).push(doc);
    });
    var years = Object.keys(byYear).sort(function (a, b) { return b - a; });

    var html = "";
    years.forEach(function (year) {
      html += '<h2 class="pub-year">' + escapeHTML(year) + "</h2>";
      html += '<ul class="pub-list">';
      byYear[year].forEach(function (doc) {
        var title = escapeHTML(first(doc.title_s) || "Untitled");
        var uri = doc.uri_s ? escapeHTML(doc.uri_s) : null;
        var authors = (doc.authFullName_s || []).map(escapeHTML).join(", ");
        var venue = venueOf(doc);
        var type = TYPE_LABELS[doc.docType_s] || doc.docType_s || "";
        var doi = first(doc.doiId_s);

        html += "<li class='pub'>";
        html += "<div class='pub-title'>" +
          (uri ? "<a href='" + uri + "'>" + title + "</a>" : title) + "</div>";
        if (authors) html += "<div class='pub-authors'>" + authors + "</div>";
        html += "<div class='pub-meta'>";
        if (type) html += "<span class='pub-type'>" + escapeHTML(type) + "</span>";
        if (venue) html += "<span class='pub-venue'>" + escapeHTML(venue) + "</span>";
        html += "</div>";
        html += "<div class='pub-links'>";
        if (uri) html += "<a href='" + uri + "'>HAL</a>";
        if (doi) html += " · <a href='https://doi.org/" + escapeHTML(doi) + "'>DOI</a>";
        html += "</div>";
        html += "</li>";
      });
      html += "</ul>";
    });

    root.innerHTML = html;
  }

  fetch(url, { headers: { Accept: "application/json" } })
    .then(function (r) {
      if (!r.ok) throw new Error("HAL API HTTP " + r.status);
      return r.json();
    })
    .then(function (data) { render(data.response.docs || []); })
    .catch(function (err) {
      root.innerHTML = '<p class="muted">Could not load publications from HAL ' +
        "right now. You can browse them directly on " +
        '<a href="https://hal.science/search/index/?q=anrProjectReference_s:' +
        encodeURIComponent(anr) + '">HAL</a>.</p>';
      if (window.console) console.error("HAL fetch failed:", err);
    });
})();
