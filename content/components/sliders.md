---
title: "Sliders"
layout: "single"
description: "Range Sliders select a numeric value, or range of values, by moving a
  handle, or set of handles, along a bar. The slider in its basic form
  should be accompanied by a label and a number input that doubles as a
  display for the slider’s current value."
components: true
keywords: forms, form, range
StyleGuide: "components/sliders/"
---

## Overview

Create custom `<input type="range">` controls with `.custom-range`.

Only IE and Firefox currently support "filling" in their track from the left
of the thumb so only those browsers show that styling.

### Basic range

<!-- prettier-ignore-start -->
{{< example id="example-range" >}}
<label for="customRange1">Example range</label>
<input type="range" class="custom-range" id="customRange1">

<label for="disabledRange">Disabled range</label>
<input type="range" class="custom-range" disabled="" id="disabledRange">
{{</ example >}}
<!-- prettier-ignore-end -->

### Defining min and max

Range inputs have implicit values for `min` and `max` -
`0` and `100`, respectfully. You may specify new values
for those using the `min` and `max` attributes.

<!-- prettier-ignore-start -->
{{< example id="example-range-max" >}}
<label for="customRange2">Example range</label>
<input type="range" class="custom-range" min="0" max="5" id="customRange2">
{{</ example >}}
<!-- prettier-ignore-end -->

### Defining steps

By default, range inputs “snap” to integer values. To change this, you can
specify a `step` value. In the example below, we double the number
of steps by using `step="0.5"`.

<!-- prettier-ignore-start -->
{{< example id="example-range-step" >}}
<label for="customRange3">Example range</label>
<input type="range" class="custom-range" min="0" max="5" step="0.5" id="customRange3">
{{</ example >}}
<!-- prettier-ignore-end -->
