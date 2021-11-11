---
title: "Position"
layout: "single"
description: "Use these shorthand utilities for quickly configuring the position of an element."
utilities: true
---

### Common Values

Quick positioning classes are available, though they are not responsive.

```htm
<div class="position-static">...</div>
<div class="position-relative">...</div>
<div class="position-absolute">...</div>
<div class="position-fixed">...</div>
<div class="position-sticky">...</div>
```

### Fixed Top

Position an element at the top of the viewport, from edge to edge. Be sure you understand the ramifications of fixed position in your project; you may need to add additional CSS.

```htm
<div class="fixed-top">...</div>
```

### Fixed Bottom

Position an element at the bottom of the viewport, from edge to edge. Be sure you understand the ramifications of fixed position in your project; you may need to add additional CSS.

```htm
<div class="fixed-bottom">...</div>
```

### Sticky Top

Position an element at the top of the viewport, from edge to edge, but only after you scroll past it. The `.sticky-top` utility uses CSS’s `position: sticky`, which isn’t fully [supported in all browsers](https://caniuse.com/css-sticky).

```htm
<div class="sticky-top">...</div>
```
