---
title: "Float"
layout: "single"
description: "Toggle floats on any element, across any breakpoint, using these responsive float utilities."
utilities: true
---

### Overview

These utility classes float an element to the left or right, or disable floating, based on the current viewport size
using the CSS float property. `!important` is included to avoid specificity issues. These use the
same viewport breakpoints as our grid system. Please be aware float utilities have no affect on flex items.

### Classes

Toggle a float with a class:

{{< example id="example-float" >}}
<div class="float-left">Float left on all viewport sizes</div><br>
<div class="float-right">Float right on all viewport sizes</div><br>
<div class="float-none">Don't float on all viewport sizes</div>
{{</ example >}}

### Responsive

Responsive variations also exist for each `float` value.

{{< example id="example-responsive" >}}
<div class="float-sm-left">Float left on viewports sized SM (small) or wider</div><br>
<div class="float-md-left">Float left on viewports sized MD (medium) or wider</div><br>
<div class="float-lg-left">Float left on viewports sized LG (large) or wider</div><br>
<div class="float-xl-left">Float left on viewports sized XL (extra-large) or wider</div><br>
{{</ example >}}

Here are all the support classes:

- `.float-left`
- `.float-right`
- `.float-none`
- `.float-sm-left`
- `.float-sm-right`
- `.float-sm-none`
- `.float-md-left`
- `.float-md-right`
- `.float-md-none`
- `.float-lg-left`
- `.float-lg-right`
- `.float-lg-none`
- `.float-xl-left`
- `.float-xl-right`
- `.float-xl-none`
