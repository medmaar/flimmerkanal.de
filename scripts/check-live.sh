#!/usr/bin/env bash
# Live SEO health check: redirects, status codes, robots headers, canonicals.
# Usage: scripts/check-live.sh [base_url]
BASE="${1:-https://flimmerkanal.de}"
fail=0

hop() { # print one line per hop until a non-redirect
  local url="$1" n=0
  while :; do
    read -r code loc robots < <(curl -s -o /dev/null -w '%{http_code} %{redirect_url} ' -D /tmp/h "$url"; grep -i '^x-robots-tag' /tmp/h | tr -d '\r' | cut -d' ' -f2- | tr ' ' '_')
    echo "    $code $url ${robots:+[x-robots:$robots]}"
    case "$code" in 301|302|307|308) url="$loc"; n=$((n+1)); [ $n -gt 5 ] && { echo "    LOOP"; return 2; } ;; *) echo "$n $code"> /tmp/last; return 0;; esac
  done
}

echo "== Spot checks"
for p in / /index.html /index /seo/iptv-deutschland.html /seo/iptv-deutschland/ /plan/iptv-6-monate-8-verbindungen.html \
  /iptv-anbieter /seo/iptv-anbieter /plan/iptv-3-monate-5-verbindungen /plan/iptv-1-monat-4-verbindungen \
  /seo/wm-2026-iptv /seo/iptv-weltmeisterschaft /seo/iptv-kostenlos /seo/iptv-lg-tv /legal/agb /legal/agb.html \
  /kontakt /kontakt.html /preise /preise/ /seo /seo/ /plan/ /legal/ "/seo/iptv-kaufen?q=test" /sitemap.xml /robots.txt; do
  echo "  $p"; hop "$BASE$p"
done
for h in http://flimmerkanal.de/ https://www.flimmerkanal.de/ http://www.flimmerkanal.de/seo/iptv-4k; do echo "  $h"; hop "$h"; done

echo "== Sitemap URLs (must be 200, no redirect, no noindex, self canonical)"
curl -s "$BASE/sitemap.xml" | grep -o '<loc>[^<]*</loc>' | sed 's/<[^>]*>//g' > /tmp/locs
echo "  $(wc -l < /tmp/locs) URLs"
while read -r u; do
  body=$(curl -s -D /tmp/h -w '\n%{http_code}' "$u"); code=$(tail -n1 <<<"$body")
  canon=$(grep -o '<link rel="canonical" href="[^"]*"' <<<"$body" | head -1 | sed 's/.*href="//;s/"$//')
  robots=$(grep -io '<meta name="robots" content="[^"]*"' <<<"$body" | head -1)
  xr=$(grep -i '^x-robots-tag' /tmp/h | tr -d '\r')
  bad=""
  [ "$code" != 200 ] && bad="$bad status=$code"
  [ "$canon" != "$u" ] && bad="$bad canonical=$canon"
  grep -qi noindex <<<"$robots $xr" && bad="$bad noindex"
  [ -n "$bad" ] && { echo "  BAD $u:$bad"; fail=1; }
done < /tmp/locs
echo "== _redirects rules (each static rule must 301 straight to its target)"
grep -vE '^\s*(#|$)' _redirects | awk '$1 !~ /[:*]/ {print NR, $1, $2}' > /tmp/rules
applied=0; missed=0
while read -r n src dst; do
  read -r code loc < <(curl -s -o /dev/null -w '%{http_code} %{redirect_url}' "$BASE$src")
  if [ "$code" = 301 ] && [ "$loc" = "$BASE$dst" ]; then applied=$((applied+1)); else missed=$((missed+1)); echo "  NOT APPLIED $src -> $dst (got $code $loc)"; fail=1; fi
done < /tmp/rules
echo "  applied=$applied missed=$missed"

echo "== Unknown URL must return 404 (no soft-404 homepage fallback)"
code=$(curl -s -o /dev/null -w '%{http_code}' "$BASE/this-page-does-not-exist-xyz")
echo "  $code"; [ "$code" = 404 ] || fail=1
echo "== done (fail=$fail)"
exit $fail
