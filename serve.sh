#!/usr/bin/env bash
# Local build + preview for the MacLeOD site.
# Builds with the locally-installed Jekyll 3.9.5 (system Ruby 2.6), bypassing the
# deploy Gemfile (which targets the github-pages gem / newer Ruby used by CI),
# then serves the generated _site/ at http://localhost:8117
set -e
cd "$(dirname "$0")"
export PATH="$HOME/.gem/ruby/2.6.0/bin:$PATH"

# Temporarily hide the deploy Gemfile so Jekyll doesn't invoke Bundler.
if [ -f Gemfile ]; then mv Gemfile .Gemfile.deploy; fi
restore() { [ -f .Gemfile.deploy ] && mv .Gemfile.deploy Gemfile; }
trap restore EXIT

jekyll build
restore
trap - EXIT

echo "Serving http://localhost:8117  (Ctrl-C to stop)"
cd _site && exec python3 -m http.server 8117
