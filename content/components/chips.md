---
title: "Chips"
layout: "single"
description: "Chips are compact elements that represent an input, attribute, or action. Chips should appear dynamically as a
  group of multiple interactive elements. Unlike buttons, which should be a consistent and familiar call to action,
  one that a user expects to appear as the same action in the same general area."
keywords: filter
components: true
styleguideURL: "components/chips/"
---

## Overview

Chips are used to add information, make selections or filter content. Chips should appear dynamically as a group of multiple interactive elements.

To use chips, add classes `.chip`

To specify the style, use one of these classes:

- `.chip-solid`
- `.chip-outline`

### Input Chips

For Input Chips, use the class `.chip-input`

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@trimble-oss/modus-icons@1/dist/modus-solid/fonts/modus-icons.css">

{{< example id="example-chips" >}}
<div class="chip chip-solid chip-input">
  <div class="chip-thumbnail">
    <img src="/img/headshot.png" alt="">
  </div>
  <div class="chip-text">Solid</div>
  <div class="chip-delete-right">
    <i class="modus-icons notranslate" aria-hidden="true">cancel_circle</i>
  </div>
</div>

<div class="chip chip-outline chip-input">
  <div class="chip-thumbnail">
    <img src="/img/headshot.png" alt="">
  </div>
  <div class="chip-text">Outline</div>
  <div class="chip-delete-right">
    <i class="modus-icons notranslate" aria-hidden="true">cancel_circle</i>
  </div>
</div>
{{</ example >}}

### Filter Chips

For Filter Chips, use the class `.chip-filter`

{{< example id="example-chips-filter" >}}
<div class="chip chip-solid chip-filter">
  <div class="chip-icon-left"><i class="modus-icons notranslate" aria-hidden="true">check</i></div>
  <div class="chip-text">Red fish</div>
</div>

<div class="chip chip-outline chip-filter">
  <div class="chip-text">Blue fish</div>
</div>
{{</ example >}}

### Small Chips

To use a small chip, just add the class `.chip-sm`

{{< example id="example-chips-small" >}}
<div class="chip chip-sm chip-solid chip-input">
  <div class="chip-thumbnail">
    <img src="/img/headshot.png" alt="">
  </div>
  <div class="chip-text">Jane</div>
  <div class="chip-delete-right"><i class="modus-icons notranslate" aria-hidden="true">cancel_circle</i></div>
</div>

<div class="chip chip-sm chip-outline chip-input">
  <div class="chip-thumbnail">
    <img src="/img/headshot.png" alt="">
  </div>
  <div class="chip-text">Jane</div>
  <div class="chip-delete-right"><i class="modus-icons notranslate" aria-hidden="true">cancel_circle</i></div>
</div>

<div class="chip chip-sm chip-solid chip-filter active">
  <div class="chip-icon-left"><i class="modus-icons notranslate" aria-hidden="true">check</i></div>
  <div class="chip-text">Taxi</div>
</div>

<div class="chip chip-sm chip-outline chip-filter">
  <div class="chip-text">Car</div>
</div>
{{</ example >}}
