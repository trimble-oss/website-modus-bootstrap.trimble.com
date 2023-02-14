---
title: "Badges"
layout: "single"
description: "Badges are labels which hold small amounts of information."
components: true
loadFontAwesome: true
images:
  - "/img/components/headers/badges.png"
styleguideURL: "components/badges/"
---

## Overview

Badges scale so that their height matches the font-size of their immediate
parent element by using relative font sizing and em units.

### Regular Badges

Use `.badge` class along with a `.badge-{theme-color}` class to create badges base on our
<a href="/colors/">Theme Colors.</a>

{{< example id="example-badge-1" >}}
<span class="badge badge-primary">Primary</span>
<span class="badge badge-secondary">Secondary</span>
<span class="badge badge-tertiary">Tertiary</span>
<span class="badge badge-dark">Dark</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-danger">Danger</span>
{{</ example >}}

### Text Badges

Add a `.badge-text-{theme-color}` class to your badge for a text
variant that maintains the same spacing, just without the background color.

{{< example id="example-badge-text" >}}
<span class="badge badge-text-primary">Primary</span>
<span class="badge badge-text-secondary">Secondary</span>
<span class="badge badge-text-dark">Dark</span>
<span class="badge badge-text-success">Success</span>
<span class="badge badge-text-danger">Danger</span>
{{</ example >}}

### Counter Badges

Use the `.badge-pill` modifier class to make badges more rounded

{{< example id="example-badge-pills">}}
<div>
  <span class="badge badge-pill badge-primary">1</span>
  <span class="badge badge-pill badge-secondary">2</span>
  <span class="badge badge-pill badge-tertiary">3</span>
  <span class="badge badge-pill badge-dark">4</span>
  <span class="badge badge-pill badge-success">5</span>
  <span class="badge badge-pill badge-danger">6</span>
  <span class="badge badge-pill badge-warning">7</span>
</div>
{{</ example >}}

### Badges in other elements

Badges can be inserted into other elements. Just be sure to utilize our
utility classes to position your badges appropriately.

{{< example id="example-badge-other" >}}
<button type="button" class="btn btn-outline-primary">
Button <span class="badge badge-primary">9</span>
<span class="sr-only">unread messages</span>
</button>
<button type="button" class="btn btn-primary">
Button <span class="badge badge-text-tertiary">9</span>
<span class="sr-only">unread messages</span>
</button>

<ul class="mt-3 list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    List with Badge
    <span class="badge badge-primary badge-pill">14</span>
  </li>
</ul>
<ul class="mt-3 list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    List with Text Badge
    <span class="badge badge-text-primary badge-pill">14</span>
  </li>
</ul>
{{</ example >}}

## Badge Sizes

By default Badges scale according to their immediate parent element but there are also large and small options available.

{{< example id="example-badge-sizes" >}}
  <span class="badge badge-sm badge-primary">Small</span>
  <span class="badge badge-primary">Default</span>
  <span class="badge badge-lg badge-primary">Large</span>
{{</ example >}}
