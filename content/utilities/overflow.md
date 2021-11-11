---
title: "Overflow"
layout: "single"
description: "Use these shorthand utilities for quickly configuring how content overflows an element"
utilities: true
---

Barebones `overflow` functionality is provided for two values by default, and they are not
responsive.

<div class="bd-example bg-white d-md-flex">
  <div class="overflow-auto p-3 mb-3 mb-md-0 mr-md-3 bg-light" style="max-width: 260px; max-height: 100px;">
    This is an example of using `.overflow-auto` on an element with set width and height dimensions. By design, this content will vertically scroll.
  </div>
  <div class="overflow-hidden p-3 bg-light" style="max-width: 260px; max-height: 100px;">
    This is an example of using `.overflow-hidden` on an element with set width and height dimensions.
  </div>
</div>

{{< highlight html >}}
<div class="overflow-auto">...</div>
<div class="overflow-hidden">...</div>
{{< /highlight >}}
