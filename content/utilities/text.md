---
title: "Text"
layout: "single"
description: "Documentation and examples for common text utilities to control alignment, wrapping, weight, and more."
utilities: true
toc: true
---

### Text Alignment

Easily realign text to components with text alignment classes.

{{< example id="example-text-alignment" >}}
<p class="text-left">Left aligned text on all viewport sizes.</p>
<p class="text-center">Center aligned text on all viewport sizes.</p>
<p class="text-right">Right aligned text on all viewport sizes.</p>

<p class="text-sm-left">Left aligned text on viewports sized SM (small) or wider.</p>
<p class="text-md-left">Left aligned text on viewports sized MD (medium) or wider.</p>
<p class="text-lg-left">Left aligned text on viewports sized LG (large) or wider.</p>
<p class="text-xl-left">Left aligned text on viewports sized XL (extra-large) or wider.</p>
{{< /example >}}

### Text Wrapping and Overflow

Wrap text with a `.text-wrap` class.

{{< example id="example-text-wrap" >}}
<div class="badge badge-primary text-wrap" style="width: 6rem;">
  This text should wrap.
</div>
{{< /example >}}

Prevent text from wrapping with a `.text-nowrap` class.

### Text Transform

Transform text in components with text capitalization classes.

{{< example id="example-text-transform" >}}
<p class="text-lowercase">Lowercased text.</p>
<p class="text-uppercase">Uppercased text.</p>
<p class="text-capitalize">CapiTaliZed text.</p>
{{</ example >}}

### Font Weight and Italics

Quickly change the weight (boldness) of text or italicize text.

{{< example id="example-font-weight" >}}
<p class="font-weight-bold">Bold text.</p>
<p class="font-weight-bolder">Bolder weight text (relative to the parent element).</p>
<p class="font-weight-normal">Normal weight text.</p>
<p class="font-weight-light">Light weight text.</p>
<p class="font-weight-lighter">Lighter weight text (relative to the parent element).</p>
<p class="font-italic">Italic text.</p>
{{</ example >}}

### Monospace

Change a selection to our monospace font stack with `.text-monospace`.

{{< example id="example-monospace" >}}
<p class="text-monospace">This is in monospace</p>
{{</ example >}}

### Reset Color

Reset a text or link’s color with `.text-reset`, so that it inherits the color from its parent.

{{< example id="example-muted" >}}
<p class="text-muted">
  Muted text with a <a href="#" class="text-reset">reset link</a>.
</p>
{{</ example >}}

### Text Decoration

Remove a text decoration with a `.text-decoration-none` class.

{{< example id="example-text-decoration" >}}
<a href="#" class="text-decoration-none">Non-underlined link</a>
{{</ example >}}
