# Streamlines Hero — Implementation Report

**For:** nathanhouck.com landing page
**Concept selected:** 01 — Streamlines
**Date:** 11 May 2026

---

## 1. What this is

An animated hero band for the landing page. A NACA 4-digit cambered airfoil sits right of frame at a 6° angle of attack. Continuous flow lines pass around it, dashed-stroke pattern animates left-to-right to indicate flow direction. One streamline — the one passing the suction side of the foil — is rendered in the warm clay accent (`#b8763d`); all others are paper-white at low opacity. The headline reads against the empty left half of the frame.

The visual reads as a calm, classical aerodynamics diagram — recognizable to a reader regardless of background, technically correct to an aerospace engineer.

---

## 2. Files to add

| File | Purpose |
|---|---|
| `aerodynamics.js` | Canvas sketch class. Contains the NACA airfoil generator, streamline math, and the StreamlinesSketch class. Drop-in. |
| `index.html` (existing) | Add the hero markup + a `<canvas>` element + an init script. |
| `styles.css` (existing) | Add the hero layout rules. |

`aerodynamics.js` exports `window.FlowSketches.streamlines`. For the production site you can prune the other four sketches from that file — keep only the streamlines class plus the airfoil + streamline helpers it depends on.

---

## 3. Markup

```html
<section class="hero">
  <canvas class="hero__canvas" data-kind="streamlines"></canvas>
  <div class="hero__content">
    <div class="hero__eyebrow">Nathan Houck — Portfolio · 2026</div>
    <h1 class="hero__headline">
      Aerospace student building <em>thermal &amp; propulsion</em> systems.
    </h1>
    <div class="hero__meta">
      <span class="hero__dot"></span>
      <span>Daytona Beach, FL</span>
      <span class="hero__sep">/</span>
      <span>West Chester, PA</span>
      <span class="hero__sep">/</span>
      <span>ERAU '27</span>
    </div>
  </div>
</section>
```

The headline and the eyebrow live on top of the canvas via absolute positioning. The canvas does not need an `aria-label` — the meaningful content lives in the markup. Add `aria-hidden="true"` to the canvas so screen readers skip it entirely.

```html
<canvas class="hero__canvas" data-kind="streamlines" aria-hidden="true"></canvas>
```

---

## 4. CSS

```css
.hero {
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  height: 600px;            /* desktop default; tune to taste */
  overflow: hidden;
  background: #1a1a1a;
}
.hero__canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
}
.hero__content {
  position: absolute;
  inset: 0;
  padding: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  pointer-events: none;     /* clicks pass through to nothing — no interactive layer */
  max-width: 56%;
}
.hero__eyebrow {
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #5e5a55;
}
.hero__headline {
  font-family: 'Source Serif 4', Georgia, serif;
  font-weight: 400;
  font-size: 56px;
  line-height: 1.02;
  letter-spacing: -0.02em;
  color: #f2efe9;
  margin: 18px 0 0;
}
.hero__headline em {
  color: #b8763d;
  font-style: italic;
}
.hero__meta {
  margin-top: 24px;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 11px;
  letter-spacing: 0.1em;
  color: #9a9590;
  display: flex;
  gap: 12px;
  align-items: center;
}
.hero__dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: #b8763d; display: inline-block;
}
.hero__sep { color: #5e5a55; }

@media (max-width: 900px) {
  .hero { height: 480px; }
  .hero__content { padding: 32px; max-width: 100%; }
  .hero__headline { font-size: 36px; }
}
@media (max-width: 600px) {
  .hero { height: 420px; }
  .hero__headline { font-size: 28px; }
}
```

The `max-width: 56%` on `.hero__content` keeps the headline clear of the airfoil at all desktop widths. On mobile (≤900px) it relaxes to full width — the airfoil and text overlap, which is fine because the foil sketch fades streamlines near the edges.

---

## 5. Init script

```html
<script src="/aerodynamics.js"></script>
<script>
  document.querySelectorAll('canvas[data-kind]').forEach(c => {
    const Klass = window.FlowSketches[c.dataset.kind];
    if (Klass) new Klass(c);
  });
</script>
```

Place at end of `<body>`. Defer the script tag if you load it in `<head>`.

---

## 6. Tunable parameters

All of these live in `aerodynamics.js` inside the `StreamlinesSketch.setup()` and `draw()` methods. Edit one variable at a time and reload to see the change.

| Knob | Where | Default | Effect |
|---|---|---|---|
| Angle of attack | `this.aoa = 6` in `setup()` | 6° | Raise to 8–10 for more visible lift; lower to 2–4 for a calmer cruise look. |
| Streamline count | `const N = 22` in `setup()` | 22 | Density. 14 = sparse, 30 = busy. |
| Foil shape (camber) | `generateAirfoil(chord, m, p, t)` arg `m` | 0.04 | Camber. Drop to 0.02 for sleeker / less curved foil. |
| Foil shape (thickness) | same call, arg `t` | 0.14 | Thickness/chord. 0.12 is classic; 0.18 is thicker / lifting body. |
| Foil position | `geom()` method | `cx = w * 0.52`, `cy = h * 0.55` | Shift the foil left/right/up/down. |
| Foil chord | `geom()` method | `min(w * 0.36, 460)` | Size relative to width. Cap at 460px. |
| Dash speed | `ctx.lineDashOffset = -t * 90` | 90 | Pixels per second the dashes "flow." 60 = slower / meditative, 120 = quick. |
| Dash length | `[14, 10]` line-dash array | 14/10 | Dash/gap. Try `[6, 4]` for finer ticks, `[24, 16]` for elongated. |
| Accent streamline | `Math.abs(ln.y0 - (cy - chord * 0.1))` | 0.1 of chord above foil | Which streamline gets the clay color. Move it to find the lifting line. |
| Line opacity | `0.22 * ln.dim` | 0.22 | Baseline streamline opacity. Lower for more atmospheric / fade-into-bg. |
| Accent color | `"#b8763d"` | Clay | The site's warm accent. Don't introduce a second color here. |
| Background | First `fillRect` in `draw()` (via `clear()`) | `#1a1a1a` | Match the site bg. |

---

## 7. Performance notes

- The sketch uses `IntersectionObserver` to pause animation when the hero is out of view. No CPU cost when the user scrolls past.
- DPR is capped at 2 (`Math.min(window.devicePixelRatio || 1, 2)`) — retina-clean without melting 4K displays.
- 22 streamlines × 80 segments × ~60fps = ~106k path operations/sec. Light. Tested clean on a 2018 MacBook Air.
- The script attaches one `resize` listener per canvas. If you hot-reload sketches, dispose them properly (not needed for static markup).

---

## 8. Accessibility

- Canvas marked `aria-hidden="true"` — screen readers ignore the decoration.
- Headline, eyebrow, and meta row are real text in real markup, indexed by search engines.
- Add `prefers-reduced-motion` handling. In `aerodynamics.js`, near the top of the `StreamlinesSketch.draw()` method:

  ```js
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Use a static dash offset based on a frozen time instead of t
    ctx.lineDashOffset = 0;
  } else {
    ctx.lineDashOffset = -t * 90;
  }
  ```

  This freezes the dash animation for users who request reduced motion. The streamlines themselves still render — they're informational, not decorative — but they don't move.

- Contrast: the headline (`#f2efe9` on `#1a1a1a`) passes WCAG AAA at the size used. The eyebrow (`#5e5a55` on `#1a1a1a`) is below AA at its small size — that's intentional (it's metadata, not primary content) but worth noting if you're auditing.

---

## 9. Production checklist

- [ ] Copy `aerodynamics.js` into `/public` or your static asset directory
- [ ] Prune the other 4 sketch classes from `aerodynamics.js` to keep payload small (~6 KB minified after pruning)
- [ ] Add the markup to your landing page template
- [ ] Add the CSS to your stylesheet
- [ ] Add the init script (or wire it into your existing JS entry point)
- [ ] Verify on mobile — Safari iOS in particular
- [ ] Verify `prefers-reduced-motion` actually pauses the dashes
- [ ] Confirm the canvas isn't being announced by screen readers (`aria-hidden` set)
- [ ] Check Largest Contentful Paint — should still be the headline text, not the canvas
- [ ] Test with JS disabled — canvas will be a blank dark band, headline still readable. Acceptable degradation.

---

## 10. Variants you can try without rewriting anything

- **Cruise mode:** AoA = 2°, dash speed = 60, no accent line. The calmest possible version.
- **Hard climb:** AoA = 10°, dash speed = 110, accent line emphasized. Reads as "lift."
- **Stall study:** AoA = 16°, plus add a small separated-flow region behind the foil (this would need a code change — happy to ship if you want it).
- **Inverted (foil left, text right):** flip `cx = w * 0.48` and remove `max-width: 56%` from `.hero__content`, flip text alignment. Some hero compositions like this; depends on adjacent layout.

---

## 11. What ships in the repo

```
/public
  aerodynamics.js       ← drop-in canvas sketch
/styles
  hero.css              ← scoped hero styles (or merge into your global)
/templates
  hero.html             ← the markup block
```

Reference §3 (markup), §4 (CSS), §5 (init) for exact code to paste. The tunable parameters in §6 let you customize without touching the sketch internals.

---

*End of report.*
