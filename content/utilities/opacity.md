---
title: "Opacity"
layout: "single"
description: "Control the opacity of elements."
utilities: true
toc: true
draft: true
private: true
hidden: true
---

The `opacity` property sets the opacity level for an element. The opacity level describes the transparency level, where 1 is not transparent at all, `.5` is 50% visible, and 0 is completely transparent.

Set the `opacity` of an element using `.opacity-{value}` utilities.

<div class="bd-example d-sm-flex">
  <div class="opacity-100 p-3 m-2 bg-primary text-white font-weight-bold rounded">100%</div>
  <div class="opacity-75 p-3 m-2 bg-primary text-white font-weight-bold rounded">75%</div>
  <div class="opacity-50 p-3 m-2 bg-primary text-white font-weight-bold rounded">50%</div>
  <div class="opacity-25 p-3 m-2 bg-primary text-white font-weight-bold rounded">25%</div>
</div>

{{< highlight html >}}
<div class="opacity-100">...</div>
<div class="opacity-75">...</div>
<div class="opacity-50">...</div>
<div class="opacity-25">...</div>
{{< /highlight >}}
